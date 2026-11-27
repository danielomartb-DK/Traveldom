"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { buildWhatsAppUrl } from "@/config/site";
import { WhatsAppIcon } from "./SocialIcons";

export function WhatsAppFloat() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Volver arriba"
        title="Volver arriba"
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-[#102D52] shadow-[0_6px_18px_rgba(16,45,82,0.16)] backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0E9AA7] hover:text-[#0E9AA7] ${
          showBackToTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ArrowUp className="h-4.5 w-4.5" strokeWidth={2.2} aria-hidden="true" />
      </button>

      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Traveldom Soluciones por WhatsApp"
        title="Asesoría por WhatsApp"
        className="inline-flex h-13 w-13 items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-[0_10px_24px_rgba(16,45,82,0.28)] transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d] hover:shadow-[0_14px_28px_rgba(16,45,82,0.35)] active:scale-95"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

