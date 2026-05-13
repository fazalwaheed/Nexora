import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { GithubIcon } from "./BrandIcons";

const CATEGORIES = ["All", "Web App", "AI/ML", "Mobile", "Design"] as const;

export function Projects({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<typeof PROJECTS[number] | null>(null);

  const list = useMemo(() => {
    const base = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    return compact ? base.slice(0, 3) : base;
  }, [filter, compact]);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Projects</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Selected <span className="text-gradient">work</span>
            </h2>
          </div>
          {!compact && (
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                    filter === c
                      ? "bg-gradient-primary text-white shadow-glow-sm"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl overflow-hidden cursor-pointer hover:shadow-glow-sm transition"
                onClick={() => setActive(p)}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full glass-strong px-3 py-1 text-xs font-medium">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold group-hover:text-gradient transition">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-strong rounded-3xl max-w-3xl w-full overflow-hidden shadow-glow"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full glass-strong hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <img src={active.image} alt={active.title} className="w-full aspect-video object-cover" />
              <div className="p-6 md:p-8">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">{active.category}</span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">{active.title}</h3>
                <p className="mt-3 text-muted-foreground">{active.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span key={t} className="rounded-md glass px-2.5 py-1 text-xs">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={active.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-glow-sm">
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                  <a href={active.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2 text-sm font-semibold hover:bg-white/10">
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
