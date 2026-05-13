import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TechMarquee } from "@/components/site/TechMarquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Team } from "@/components/site/Team";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora — Premium Freelance Studio & Portfolio" },
      { name: "description", content: "Premium freelance studio crafting modern websites, AI products and full-stack platforms." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TechMarquee />
      <About />
      <Services />
      <Projects compact />
      <Team />
      <Testimonials />
      <Contact />
    </SiteLayout>
  );
}
