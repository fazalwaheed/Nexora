import { SKILLS } from "@/lib/data";

export function TechMarquee() {
  const items = [...SKILLS, ...SKILLS];
  return (
    <section className="py-12 border-y border-white/5 bg-white/1.5">
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
        Tech I work with daily
      </p>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((s, i) => (
            <span key={i} className="font-display text-2xl md:text-3xl font-semibold text-muted-foreground/60 hover:text-foreground transition whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
