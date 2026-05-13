import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { About } from "@/components/site/About";
import { TechMarquee } from "@/components/site/TechMarquee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nexora Studio" },
      { name: "description", content: "Meet the team behind Nexora — senior engineers and designers shipping premium products worldwide." },
      { property: "og:title", content: "About — Nexora Studio" },
      { property: "og:description", content: "Senior engineers and designers shipping premium products worldwide." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <div className="pt-20" />
      <About />
      <TechMarquee />
    </SiteLayout>
  );
}
