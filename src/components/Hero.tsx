import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4F6F8] to-white border-b border-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Columna izquierda: Texto impactante alineado a la izquierda (composición Contixs) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1D5B91]/20 bg-[#EAF4FC] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#102D52]">
              <Compass className="h-3.5 w-3.5 text-[#1D5B91]" strokeWidth={1.75} aria-hidden="true" />
              <span>{siteConfig.primarySlogan}</span>
            </div>

            <h1 className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-[1.18] tracking-tight text-[#102D52] sm:text-4xl lg:text-[2.85rem]">
              El mundo te espera.{" "}
              <span className="text-[#1D5B91]">Nosotros te ayudamos a llegar.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Te acompañamos en cada paso de tu viaje, brindándote asesoría y
              soluciones integrales para que puedas explorar nuevos destinos con
              tranquilidad y confianza.
            </p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#102D52] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1D5B91]"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1D5B91] bg-white px-6 py-3.5 text-sm font-semibold text-[#102D52] transition-all hover:bg-[#EAF4FC]"
              >
                <span>Solicita asesoría</span>
              </a>
            </div>

            <div className="flex items-start gap-2.5 pt-2 text-xs text-slate-500">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A66B]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <p>
                Asesoría privada e independiente en trámites de viaje, seguros y
                destinos turísticos. Las decisiones de visa dependen
                exclusivamente de las autoridades consulares.
              </p>
            </div>
          </div>

          {/* Columna derecha: Fotografía corporativa de viajes/playas (composición dividida Contixs) */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(16,45,82,0.12)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/beach-coastline-aerial.jpg"
                  alt="Costa turquesa y resort tropical en el Caribe como destino de viajes internacionales"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-[#102D52]/20 via-transparent to-transparent"
                />
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 bg-white px-5 py-3.5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A66B]">
                    Traveldom Soluciones
                  </p>
                  <p className="text-sm font-medium text-[#102D52]">
                    {siteConfig.secondarySlogan}
                  </p>
                </div>
                <span className="hidden sm:inline-flex rounded-full bg-[#EAF4FC] px-3 py-1 text-xs font-semibold text-[#1D5B91]">
                  RD · EE. UU. · Europa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

