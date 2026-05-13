import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MessageCircle, Send, Loader2, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { SOCIAL } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2, "Subject required").max(150),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});
type FormData = z.infer<typeof schema>;

export function Contact() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    toast.success("Message sent! I'll get back to you within 24h.");
    reset();
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Contact</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Let's build <span className="text-gradient">something great</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Have a project in mind, or just want to say hi? Drop a message and I'll respond within 24 hours.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${SOCIAL.email}`} className="flex items-center gap-4 glass rounded-2xl p-4 hover:shadow-glow-sm transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary"><Mail className="h-5 w-5 text-white" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium">{SOCIAL.email}</p>
              </div>
            </a>
            <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 glass rounded-2xl p-4 hover:shadow-glow-sm transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500"><MessageCircle className="h-5 w-5 text-white" /></div>
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp</p>
                <p className="font-medium">Quick chat — usually reply in minutes</p>
              </div>
            </a>
            <div className="flex items-center gap-4 glass rounded-2xl p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"><MapPin className="h-5 w-5" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium">Remote · Worldwide</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { href: SOCIAL.github, icon: GithubIcon, label: "GitHub" },
              { href: SOCIAL.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl glass hover:shadow-glow-sm transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-strong rounded-3xl p-6 md:p-8 space-y-4 glow-border"
        >
          <Field label="Name" error={errors.name?.message}>
            <input {...register("name")} placeholder="John Doe" className={inputCls} />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} type="email" placeholder="you@company.com" className={inputCls} />
          </Field>
          <Field label="Subject" error={errors.subject?.message}>
            <input {...register("subject")} placeholder="Project inquiry" className={inputCls} />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea {...register("message")} rows={5} placeholder="Tell me about your project..." className={inputCls} />
          </Field>
          <button
            type="submit"
            disabled={loading}
            className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-white shadow-glow-sm hover:shadow-glow disabled:opacity-60 transition"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 group-hover:translate-x-0.5 transition" />}
            {loading ? "Sending..." : "Send message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

const inputCls = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold mb-1.5 text-muted-foreground">{label}</span>
      {children}
      {error && <span className="block mt-1 text-xs text-destructive">{error}</span>}
    </label>
  );
}
