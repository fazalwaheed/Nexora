import { SOCIAL } from "@/lib/data";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href={SOCIAL.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500/40 blur-xl group-hover:blur-2xl transition" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition">
        <MessageCircle className="h-5 w-5" />
      </span>
    </a>
  );
}
