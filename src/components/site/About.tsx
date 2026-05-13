import { motion } from "framer-motion";
import { STATS, SKILLS } from "@/lib/data";
import { Counter } from "./Counter";

export function About() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">About</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            A studio obsessed with <span className="text-gradient">craft & speed</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We're a tight-knit team of senior engineers and designers shipping production-grade
            products for startups and enterprises worldwide. From MVP to scale, we own the entire
            product loop — strategy, design, engineering and growth.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Two years in, 10+ launches across SaaS, AI, fintech and e-commerce. We move fast,
            communicate clearly, and obsess over the details that make products feel premium.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span key={s} className="rounded-full glass px-3 py-1 text-xs font-medium hover:shadow-glow-sm transition">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center hover:shadow-glow-sm transition">
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
          <div className="col-span-2 glass rounded-2xl p-6 glow-border">
            <h3 className="font-display text-lg font-semibold">Currently working on</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI-driven analytics platforms, Web3 dashboards, and headless commerce experiences
              for clients in 4 continents.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
