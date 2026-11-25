"use client";

import { useEffect, useState } from "react";
import {
  FileCheck2,
  Building2,
  Languages,
  ShieldCheck,
  Check,
  X,
  ArrowRight,
  Info,
} from "lucide-react";
import { SERVICES, type ServiceItem } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";
import { VisualPlaceholder } from "./VisualPlaceholder";

interface ServicesSectionProps {
  onSelectAdvisory: (prefill: { service: string; notes?: string }) => void;
}

const serviceIconMap = {
  FileCheck2,
  Building2,
  Languages,
  ShieldCheck,
};

export function ServicesSection({ onSelectAdvisory }: ServicesSectionProps) {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (!activeService) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeService]);

  const handleRequestFromModal = (service: ServiceItem) => {
    setActiveService(null);
    onSelectAdvisory({
      service: service.formServiceValue,
      notes: `Me gustaría recibir asesoría sobre: ${service.title}${
        service.subtitle ? ` (${service.subtitle})` : ""
      }.`,
    });
  };

  return (
    <section id="servicios" className="bg-white py-20 lg:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado centrado estilo Contixs */}
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1D5B91]">
            Asesoría y gestión
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-[#102D52] sm:text-4xl">
            Nuestros servicios
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#C9A66B]" />
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Soluciones integrales para tus planes de viaje
          </p>
        </RevealOnScroll>

        {/* Grid de 4 tarjetas */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = serviceIconMap[service.iconName];
            return (
              <RevealOnScroll key={service.id} delayMs={index * 70}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_6px_24px_rgba(16,45,82,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D5B91]/40 hover:shadow-[0_14px_34px_rgba(16,45,82,0.1)]">
                  <VisualPlaceholder
                    fileName={service.imagePlaceholderName}
                    caption={service.imageCaption}
                    icon={service.iconName}
                    variant={index % 2 === 0 ? "navy" : "corporate"}
                    className="h-40 w-full shrink-0"
                  />

                  <div className="flex flex-1 flex-col p-6">
                    {/* Ícono minimalista cuadrado estilo Contixs */}
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#1D5B91]/20 bg-[#EAF4FC] text-[#102D52]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>

                    <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
                      {service.title}
                    </h3>

                    {service.subtitle && (
                      <p className="mt-1 text-xs font-semibold text-[#1D5B91]">
                        {service.subtitle}
                      </p>
                    )}

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {service.shortDescription}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A66B]"
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-2">
                      <button
                        type="button"
                        onClick={() => setActiveService(service)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#102D52] bg-white px-4 py-2.5 text-sm font-semibold text-[#102D52] transition-colors hover:bg-[#102D52] hover:text-white"
                      >
                        <span>Más información</span>
                        <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      {/* Modal de detalle del servicio */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#102D52]/65 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setActiveService(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-100 bg-white px-6 py-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C9A66B]">
                  Detalle del servicio
                </span>
                <h3
                  id="service-modal-title"
                  className="mt-1 font-[family-name:var(--font-poppins)] text-xl font-bold text-[#102D52] sm:text-2xl"
                >
                  {activeService.title}
                </h3>
                {activeService.subtitle && (
                  <p className="mt-0.5 text-sm font-medium text-[#1D5B91]">
                    {activeService.subtitle}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setActiveService(null)}
                aria-label="Cerrar ventana de detalle"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-[#F4F6F8] hover:text-[#102D52]"
              >
                <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-6 px-6 py-6">
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                {activeService.extendedDescription}
              </p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-xl bg-[#F4F6F8] p-4">
                  <h4 className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#102D52]">
                    ¿Qué incluye la orientación?
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {activeService.features.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#1D5B91]"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-[#EAF4FC]/70 p-4">
                  <h4 className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#102D52]">
                    Etapas del acompañamiento
                  </h4>
                  <ol className="mt-3 space-y-2 text-sm text-slate-700">
                    {activeService.processSteps.map((step, idx) => (
                      <li key={step} className="flex items-start gap-2.5">
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#102D52] text-[11px] font-semibold text-white">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-[#C9A66B]/40 bg-[#C9A66B]/10 p-4 text-xs leading-relaxed text-[#102D52]">
                <Info
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#102D52]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p>{activeService.transparencyNote}</p>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-[#F4F6F8] px-6 py-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={() => handleRequestFromModal(activeService)}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#102D52] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D5B91]"
              >
                <span>Solicitar asesoría</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

