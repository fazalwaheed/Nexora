import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse-glow" />
          Available for new projects · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
        >
          Crafting <span className="text-gradient animate-gradient">premium digital</span><br />
          experiences that convert
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground"
        >
          We design and build modern websites, AI products and full-stack platforms for
          ambitious founders and fast-moving teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-white shadow-glow hover:shadow-glow transition"
          >
            Start a project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold hover:bg-white/10 transition"
          >
            View my work
          </Link>
          <a
            href="/Fazal_Waheed_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold hover:bg-white/10 transition"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <div className="absolute -inset-8 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
          <div className="relative glass rounded-3xl p-2 shadow-card glow-border">
            <div className="aspect-video w-full rounded-2xl bg-[radial-gradient(ellipse_at_center,oklch(0.3_0.15_280),oklch(0.13_0.03_270))] flex items-center justify-center overflow-hidden">
              <div className="grid grid-cols-3 gap-3 p-6 w-full">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="glass rounded-xl h-24 md:h-32"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
