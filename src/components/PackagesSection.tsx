import Image from "next/image";
import { Calendar, Check, Tag } from "lucide-react";
import { PACKAGES, type PackageItem } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";
import { VisualPlaceholder } from "./VisualPlaceholder";
import { BtnAvion } from "./BtnAvion";

interface PackagesSectionProps {
  onSelectPackage: (prefill: {
    service: string;
    destination: string;
    notes: string;
  }) => void;
}

export function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  const handleQuote = (pkg: PackageItem) => {
    onSelectPackage({
      service: "Paquetes vacacionales",
      destination: pkg.destinationValue,
      notes: `Me interesa cotizar el paquete "${pkg.title}" (${pkg.duration}).`,
    });
  };

  return (
    <section
      id="paquetes"
      className="w-full bg-gradient-to-b from-[#E5F6F8] via-[#EDF8FA] to-[#F3ECE1] section-pad scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado alineado a la izquierda */}
        <RevealOnScroll className="max-w-2xl text-left">
          <span className="inline-block rounded-full bg-[#0E9AA7]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B7D88]">
            Experiencias planificadas
          </span>
          <h2 className="section-title mt-3 text-[#102D52]">
            Paquetes de vacaciones
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-[1.0625rem]">
            Experiencias diseñadas para disfrutar, descubrir y vivir momentos
            inolvidables
          </p>
        </RevealOnScroll>

        <div className="mt-10 space-y-8">
          {PACKAGES.map((pkg, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <RevealOnScroll
                key={pkg.id}
                variant={isReversed ? "right" : "left"}
                delayMs={idx * 75}
              >
                <article className="group grid grid-cols-1 overflow-hidden rounded-[var(--radius-lg)] border border-[#102D52] border-t-[3px] border-t-[#C9A66B] bg-[#102D52] text-white shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#0E9AA7]/60 lg:grid-cols-12">
                  {/* Fotografía grande o placeholder elegante (alternando izquierda/derecha en escritorio) */}
                  <div
                    className={`relative min-h-[260px] sm:min-h-[320px] lg:col-span-6 lg:min-h-[390px] overflow-hidden bg-slate-100 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {pkg.image ? (
                      <Image
                        src={pkg.image}
                        alt={pkg.imageAlt || pkg.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <VisualPlaceholder
                        fileName={pkg.imagePlaceholderName || "paquete-viaje.jpg"}
                        caption={pkg.imageCaption || pkg.title}
                        icon={
                          pkg.id === "paquete-eeuu"
                            ? "Landmark"
                            : pkg.id === "paquete-europa"
                              ? "Plane"
                              : "Compass"
                        }
                        variant={idx % 2 === 0 ? "navy" : "corporate"}
                        className="h-full w-full min-h-[260px] sm:min-h-[320px] lg:min-h-[390px]"
                      />
                    )}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102D52]/35 via-transparent to-transparent"
                    />
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-[#102D52]/90 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-xs">
                      {pkg.categoryLabel}
                    </span>
                  </div>

                  {/* Contenido editorial */}
                  <div
                    className={`flex flex-col justify-between p-6 sm:p-8 lg:col-span-6 lg:p-10 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-[#EAF4FC]">
                          <Calendar className="h-3.5 w-3.5 text-[#4DD0DC]" strokeWidth={1.75} aria-hidden="true" />
                          <span>{pkg.duration}</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A66B]/45 bg-[#C9A66B]/15 px-3 py-1 text-xs font-semibold text-[#F6DFB0]">
                          <Tag className="h-3.5 w-3.5 text-[#E3B963]" strokeWidth={1.75} aria-hidden="true" />
                          <span>{pkg.priceLabel}</span>
                        </span>
                      </div>

                      <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-2xl font-bold text-white">
                        {pkg.title}
                      </h3>

                      <p className="mt-3 text-[15px] leading-relaxed text-[#EAF4FC]/90 sm:text-base">
                        {pkg.description}
                      </p>

                      <div className="mt-5 border-t border-white/15 pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#E3B963]">
                          Servicios incluidos en la propuesta
                        </p>
                        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 text-[15px] text-[#EAF4FC]">
                          {pkg.includedServices.map((service) => (
                            <li key={service} className="flex items-start gap-2">
                              <Check
                                className="mt-1 h-4 w-4 shrink-0 text-[#E3B963]"
                                strokeWidth={2.2}
                                aria-hidden="true"
                              />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-7 pt-2">
                      <BtnAvion
                        type="button"
                        variant="primario"
                        intensity="completa"
                        onClick={() => handleQuote(pkg)}
                        className="w-full sm:w-auto"
                      >
                        Cotizar paquete
                      </BtnAvion>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

