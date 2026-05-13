import { motion } from "framer-motion";
import { User } from "lucide-react";
import fazalImg from "@/assets/team-fazal.png";

const TEAM = [
  {
    name: "Sana Abbassi",
    image: null,
    roles: ["CEO", "Account Manager", "Lead Generation"],
  },
  {
    name: "Fazal Waheed",
    image: fazalImg,
    roles: ["Software Engineer", "AI/ML Developer", "MERN Stack", "Project Manager"],
  },
];

export function Team() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Team</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Meet the <span className="text-gradient">people</span> behind the work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A small, senior team that owns strategy, delivery and growth — end to end.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-6 hover:shadow-glow-sm transition group"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 to-accent/20">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                      <User className="h-16 w-16 text-white" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <div className="mt-5">
                <h3 className="font-display text-2xl font-semibold">{m.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.roles.map((r) => (
                    <span
                      key={r}
                      className="rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
