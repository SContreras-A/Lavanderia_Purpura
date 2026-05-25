import { waLink } from "@/lib/site-data";
import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] grid place-items-center shadow-2xl animate-pulse-glow hover:scale-110 transition"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  );
}
