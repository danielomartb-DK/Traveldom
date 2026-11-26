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
      className="fixed bottom-6 left-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#102D52] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#EAF4FC] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5B91]"
    >
      <ChevronUp className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </button>
  );
}

