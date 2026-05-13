import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexora Studio" },
      { name: "description", content: "Start a project with Nexora. Email, WhatsApp or contact form — replies within 24 hours." },
      { property: "og:title", content: "Contact — Nexora Studio" },
      { property: "og:description", content: "Get in touch — replies within 24 hours." },
    ],
  }),
  component: () => (<SiteLayout><div className="pt-16" /><Contact /></SiteLayout>),
});
