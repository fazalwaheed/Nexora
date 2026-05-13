import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";

const TechMarquee = lazy(() => import("@/components/site/TechMarquee").then((m) => ({ default: m.TechMarquee })));
const About = lazy(() => import("@/components/site/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("@/components/site/Services").then((m) => ({ default: m.Services })));
const Projects = lazy(() => import("@/components/site/Projects").then((m) => ({ default: m.Projects })));
const Team = lazy(() => import("@/components/site/Team").then((m) => ({ default: m.Team })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then((m) => ({ default: m.Testimonials })));
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));

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
      <Suspense fallback={<SectionFallback />}>
        <TechMarquee />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects compact />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Team />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </SiteLayout>
  );
}

function SectionFallback() {
  return <div className="h-24" aria-hidden="true" />;
}
