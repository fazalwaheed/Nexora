import { readFile, stat } from "node:fs/promises";
import type { IncomingMessage, ServerResponse } from "node:http";
import path from "node:path";

type ServerEntry = {
  default?: {
    fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
  };
  fetch?: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const clientRoot = path.join(process.cwd(), "dist", "client");
const publicRoot = path.join(process.cwd(), "public");

const mimeTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function toSafePath(root: string, requestPath: string) {
  const normalized = requestPath === "/" ? "" : requestPath.replace(/^\/+/, "");
  const resolved = path.resolve(root, normalized);
  if (!resolved.startsWith(path.resolve(root))) return null;
  return resolved;
}

async function tryServeStaticFile(requestPath: string, res: ServerResponse) {
  const candidates = [
    toSafePath(clientRoot, requestPath),
    toSafePath(publicRoot, requestPath),
  ].filter((value): value is string => Boolean(value));

  for (const filePath of candidates) {
    try {
      const fileStat = await stat(filePath);
      if (!fileStat.isFile()) continue;

      const ext = path.extname(filePath).toLowerCase();
      res.setHeader("content-type", mimeTypes[ext] ?? "application/octet-stream");
      res.setHeader("cache-control", ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable");
      res.status(200).send(await readFile(filePath));
      return true;
    } catch {
      // Try the next candidate.
    }
  }

  return false;
}

async function readBody(req: IncomingMessage & { method?: string }) {
  if (req.method === "GET" || req.method === "HEAD") return undefined;

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return Buffer.concat(chunks);
}

async function getServerHandler() {
  const mod = (await import("../dist/server/index.js")) as ServerEntry;
  const handler = mod.default?.fetch ?? mod.fetch;
  if (!handler) {
    throw new Error("Server bundle does not export a fetch handler.");
  }
  return handler;
}

export default async function handler(
  req: IncomingMessage & { url?: string; method?: string; headers: IncomingMessage["headers"] },
  res: ServerResponse & { send: (body: Buffer) => void; status: (code: number) => typeof res },
) {
  const url = new URL(req.url ?? "/", `https://${req.headers.host ?? "localhost"}`);

  if (await tryServeStaticFile(url.pathname, res)) {
    return;
  }

  const request = new Request(url, {
    method: req.method,
    headers: req.headers as HeadersInit,
    body: await readBody(req),
    duplex: "half",
  } as RequestInit & { duplex: "half" });

  const fetchHandler = await getServerHandler();
  const response = await fetchHandler(request, {}, {});

  res.status(response.status);
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const buffer = Buffer.from(await response.arrayBuffer());
  res.send(buffer);
}
