import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-xs uppercase tracking-widest text-primary font-semibold">Testimonials</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          What clients <span className="text-gradient">say</span>
        </h2>

        <div className="relative mt-12 min-h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-3xl p-8 md:p-12 glow-border"
            >
              <Quote className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-6 font-display text-xl md:text-2xl leading-relaxed">"{t.quote}"</p>
              <div className="mt-8">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-primary" : "w-2 bg-white/20"}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
