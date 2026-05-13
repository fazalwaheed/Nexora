import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Services } from "@/components/site/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nexora Studio" },
      { name: "description", content: "Web development, MERN, Next.js, AI/ML, chatbots and UI/UX design services." },
      { property: "og:title", content: "Services — Nexora Studio" },
      { property: "og:description", content: "Web, AI and design services for ambitious teams." },
    ],
  }),
  component: () => (<SiteLayout><div className="pt-16" /><Services /></SiteLayout>),
});
