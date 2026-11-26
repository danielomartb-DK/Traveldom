"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY >= 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver al inicio de la página"
      className="fixed bottom-6 left-5 z-40 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-[#102D52] shadow-[0_4px_12px_rgba(16,45,82,0.1)] backdrop-blur-xs transition-all hover:bg-[#EAF4FC] hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5B91]"
    >
      <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.2} aria-hidden="true" />
    </button>
  );
}

