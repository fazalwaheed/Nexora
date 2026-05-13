import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Projects } from "@/components/site/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nexora Studio" },
      { name: "description", content: "Selected case studies across SaaS, AI, e-commerce and design." },
      { property: "og:title", content: "Projects — Nexora Studio" },
      { property: "og:description", content: "Selected case studies and product launches." },
    ],
  }),
  component: () => (<SiteLayout><div className="pt-16" /><Projects /></SiteLayout>),
});
