import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a Traveldom Soluciones por WhatsApp"
      className="fixed bottom-6 right-4 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#102D52] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(16,45,82,0.35)] ring-2 ring-[#C9A66B] transition-all hover:-translate-y-0.5 hover:bg-[#1D5B91] min-h-[48px]"
    >
      {/* Pulsing ring for visibility */}
      <span className="relative flex h-7 w-7 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-50" aria-hidden="true" />
        <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-[#102D52]">
          <MessageCircle className="h-4 w-4 fill-current" strokeWidth={2} aria-hidden="true" />
        </span>
      </span>
      <span className="hidden sm:inline">Asesoría por WhatsApp</span>
    </a>
  );
}

