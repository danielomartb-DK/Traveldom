import Image from "next/image";
import { Calendar, Check, ArrowRight, Tag } from "lucide-react";
import { PACKAGES, type PackageItem } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";
import { VisualPlaceholder } from "./VisualPlaceholder";

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
    <section id="paquetes" className="bg-white py-20 lg:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1D5B91]">
            Experiencias planificadas
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-[#102D52] sm:text-4xl">
            Paquetes de vacaciones
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#C9A66B]" />
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Experiencias diseñadas para disfrutar, descubrir y vivir momentos
            inolvidables
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PACKAGES.map((pkg, idx) => (
            <RevealOnScroll key={pkg.id} delayMs={idx * 75}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_6px_24px_rgba(16,45,82,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(16,45,82,0.1)]">
                {/* Fotografía o placeholder elegante */}
                {pkg.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={pkg.image}
                      alt={pkg.imageAlt || pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#102D52]/90 px-3 py-1 text-xs font-semibold text-white">
                      {pkg.categoryLabel}
                    </span>
                  </div>
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
                    className="aspect-[16/9] w-full"
                  />
                )}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF4FC] px-3 py-1 text-xs font-semibold text-[#1D5B91]">
                      <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                      <span>{pkg.duration}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A66B]/40 bg-[#C9A66B]/10 px-3 py-1 text-xs font-semibold text-[#102D52]">
                      <Tag className="h-3.5 w-3.5 text-[#C9A66B]" strokeWidth={1.75} aria-hidden="true" />
                      <span>{pkg.priceLabel}</span>
                    </span>
                  </div>

                  <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-xl font-bold text-[#102D52]">
                    {pkg.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {pkg.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Servicios incluidos en la propuesta
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {pkg.includedServices.map((service) => (
                        <li key={service} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A66B]"
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => handleQuote(pkg)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#102D52] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1D5B91]"
                    >
                      <span>Cotizar paquete</span>
                      <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

