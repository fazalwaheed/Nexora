import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { NAV_LINKS, SOCIAL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold">Nexora<span className="text-gradient">.</span></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Premium freelance studio crafting modern web experiences, AI products and design systems.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-foreground transition">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Connect</h4>
          <div className="flex gap-3">
            {[
              { href: SOCIAL.github, icon: GithubIcon, label: "GitHub" },
              { href: SOCIAL.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: `mailto:${SOCIAL.email}`, icon: Mail, label: "Email" },
              { href: SOCIAL.whatsapp, icon: MessageCircle, label: "WhatsApp" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-lg glass hover:shadow-glow-sm transition"
              >
                <Icon className="h-4 w-4 group-hover:text-primary transition" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Nexora Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
