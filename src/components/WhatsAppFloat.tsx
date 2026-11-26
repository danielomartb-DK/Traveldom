import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Traveldom Soluciones por WhatsApp"
      className="fixed bottom-6 right-5 z-40 group inline-flex items-center gap-2 rounded-full bg-[#102D52] p-2 sm:px-4 sm:py-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(16,45,82,0.25)] border border-[#C9A66B]/60 transition-all duration-300 hover:bg-[#1D5B91] hover:scale-105 active:scale-95 hover:shadow-[0_12px_24px_rgba(16,45,82,0.35)]"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-[#102D52] shadow-xs">
        <MessageCircle className="h-4 w-4 fill-current" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="hidden sm:inline font-medium text-slate-100 group-hover:text-white transition-colors">
        Asesoría por WhatsApp
      </span>
    </a>
  );
}

