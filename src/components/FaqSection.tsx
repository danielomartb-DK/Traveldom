"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="preguntas-frecuentes" className="bg-[#F4F6F8] py-20 lg:py-24 scroll-mt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1D5B91]">
            <HelpCircle className="h-3.5 w-3.5 text-[#C9A66B]" strokeWidth={2} aria-hidden="true" />
            <span>Dudas habituales</span>
          </div>
          <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-[#102D52] sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#C9A66B]" />
          <p className="mt-4 text-base text-slate-600">
            Respuestas claras sobre nuestra asesoría de viaje, trámites,
            traducciones, seguros y destinos.
          </p>
        </RevealOnScroll>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            const panelId = `faq-panel-${faq.id}`;
            const buttonId = `faq-button-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_2px_10px_rgba(16,45,82,0.03)] transition-colors hover:border-[#1D5B91]/40"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left"
                  >
                    <span className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#102D52] sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#1D5B91] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#C9A66B]" : ""
                      }`}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="border-t border-slate-100 px-6 py-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

