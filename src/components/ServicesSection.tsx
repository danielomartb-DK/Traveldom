"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FileCheck2,
  Building2,
  Languages,
  ShieldCheck,
  Check,
  X,
  ArrowRight,
  Info,
  ChevronDown,
} from "lucide-react";
import { SERVICES, type ServiceItem } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";
import { BtnAvion } from "./BtnAvion";

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
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "solicitud-visa": true,
  });

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
    <section
      id="servicios"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#EAF7F8] to-[#E5F6F8] section-pad scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#0E9AA7]/10 blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado centrado */}
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#0E9AA7]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B7D88]">
            Asesoría y gestión
          </span>
          <h2 className="section-title mt-3 text-[#102D52]">
            Nuestros servicios
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-[1.0625rem]">
            Soluciones integrales para tus planes de viaje
          </p>
        </RevealOnScroll>

        {/* Tarjeta principal destacada en azul marino + 3 servicios en fila equilibrada */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {SERVICES.map((service, index) => {
            const Icon = serviceIconMap[service.iconName];
            const isFeatured = service.id === "solicitud-visa";
            const isExpanded = Boolean(expandedIds[service.id]);
            const panelId = `service-includes-${service.id}`;

            const spanClass = isFeatured
              ? "md:col-span-2 lg:col-span-12"
              : "md:col-span-1 lg:col-span-4";

            return (
              <RevealOnScroll
                key={service.id}
                variant="scale"
                delayMs={index * 75}
                className={spanClass}
              >
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-[#102D52] bg-[#102D52] text-white shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-[5px] hover:border-[#0E9AA7]/60 ${
                    isFeatured ? "lg:flex-row" : "border-t-[3px] border-t-[#C9A66B]"
                  }`}
                >
                  {/* Fotografía nítida sin oscurecimiento excesivo */}
                  <div
                    className={`relative shrink-0 overflow-hidden bg-slate-200 ${
                      isFeatured
                        ? "aspect-[16/10] w-full lg:aspect-auto lg:w-[45%] lg:min-h-[360px]"
                        : "aspect-[16/10] w-full"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes={
                        isFeatured
                          ? "(max-width: 1024px) 100vw, 45vw"
                          : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      }
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#102D52]/30 to-transparent"
                    />

                    {/* Insignia de ícono sobre la fotografía */}
                    <div className="absolute bottom-3.5 left-3.5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-white/50 bg-white/95 text-[#102D52] shadow-sm backdrop-blur-xs">
                      <Icon className="h-5 w-5 text-[#0E9AA7]" strokeWidth={1.9} aria-hidden="true" />
                    </div>

                    {isFeatured && (
                      <span className="absolute top-4 left-4 z-10 inline-flex items-center rounded-full bg-[#C9A66B] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#102D52] shadow-xs">
                        Servicio principal
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3
                        className={`font-[family-name:var(--font-poppins)] font-bold text-white ${
                          isFeatured ? "text-2xl" : "text-xl"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {service.subtitle && (
                        <p className="mt-1 text-xs font-semibold tracking-wide text-[#E3B963]">
                          {service.subtitle}
                        </p>
                      )}

                      <p className="mt-3 text-[15px] leading-relaxed text-[#EAF4FC]/90 sm:text-base">
                        {service.shortDescription}
                      </p>

                      {/* Acordeón accesible "Ver qué incluye" */}
                      <div className="mt-4 border-t border-white/15 pt-3">
                        <button
                          type="button"
                          onClick={() => toggleExpanded(service.id)}
                          aria-expanded={isExpanded}
                          aria-controls={panelId}
                          className="flex w-full items-center justify-between gap-2 rounded-[var(--radius-sm)] py-1.5 text-left text-sm font-semibold text-white transition-colors hover:text-[#E3B963]"
                        >
                          <span>Ver qué incluye</span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 text-[#E3B963] transition-transform duration-300 motion-reduce:transition-none ${
                              isExpanded ? "rotate-180" : "rotate-0"
                            }`}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </button>

                        <div
                          id={panelId}
                          aria-hidden={!isExpanded}
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                            isExpanded
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <ul className="space-y-2 pt-2.5 pb-1 text-[15px] text-[#EAF4FC]">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5">
                                  <Check
                                    className="mt-1 h-4 w-4 shrink-0 text-[#E3B963]"
                                    strokeWidth={2.2}
                                    aria-hidden="true"
                                  />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-1">
                      <BtnAvion
                        type="button"
                        variant={isFeatured ? "primario" : "turquesa"}
                        intensity={isFeatured ? "completa" : "ligera"}
                        onClick={() => setActiveService(service)}
                        className="w-full sm:w-auto"
                      >
                        Más información
                      </BtnAvion>
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
            {/* Imagen real en el modal */}
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-slate-100 sm:h-56">
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#102D52]/60 via-transparent to-transparent"
              />
            </div>

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
