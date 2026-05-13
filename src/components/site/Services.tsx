import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Layers,
  MessageSquare,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICONS = {
  Brain,
  Code2,
  Layers,
  MessageSquare,
  Palette,
  Sparkles,
  Zap,
} satisfies Record<string, React.ComponentType<{ className?: string }>>;

export function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Services</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Everything you need to <span className="text-gradient">launch & scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end product development with a focus on quality, performance and aesthetics.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative glass rounded-2xl p-6 hover:shadow-glow-sm transition"
              >
                <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-2/3 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow-sm">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
