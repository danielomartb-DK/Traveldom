"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="preguntas-frecuentes" className="w-full bg-[#F3ECE1] section-pad scroll-mt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="section-title text-[#102D52]">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-base text-slate-700 sm:text-[1.0625rem]">
            Respuestas claras sobre nuestra asesoría de viaje, trámites,
            traducciones, seguros y destinos.
          </p>
        </RevealOnScroll>

        <div className="mt-8 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const panelId = `faq-panel-${faq.id}`;
            const buttonId = `faq-button-${faq.id}`;

            return (
              <RevealOnScroll key={faq.id} delayMs={idx * 55}>
                <div
                  className={`overflow-hidden rounded-[var(--radius-md)] border border-t-[3px] border-t-[#C9A66B] bg-[#102D52] text-white shadow-[var(--shadow-elevated)] transition-colors ${
                    isOpen
                      ? "border-[#E3B963]/60"
                      : "border-[#102D52] hover:border-[#0E9AA7]/60"
                  }`}
                >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(faq.id)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-white/[0.04] sm:gap-4 sm:px-6 sm:py-5"
                  >
                    <span className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-white sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                        isOpen ? "rotate-180 text-[#E3B963]" : "rotate-0 text-[#4DD0DC]"
                      }`}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/15 px-4 py-3.5 text-sm leading-relaxed text-[#EAF4FC]/90 sm:px-6 sm:py-4 sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

