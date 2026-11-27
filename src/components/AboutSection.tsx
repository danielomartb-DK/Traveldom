import Image from "next/image";
import { HeartHandshake, FolderCheck, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { RevealOnScroll } from "./RevealOnScroll";
import { BtnAvion } from "./BtnAvion";

export function AboutSection() {
  return (
    <section id="nosotros" className="w-full bg-[#F3ECE1] section-pad scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Fotografía del equipo a la izquierda */}
          <RevealOnScroll variant="left" className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[#102D52]/12 bg-white shadow-[var(--shadow-elevated)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/about-team-office.jpg"
                  alt="Equipo de asesores de Traveldom Soluciones brindando atención personalizada"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102D52]/25 via-transparent to-transparent"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Texto y bento grid de valores a la derecha */}
          <RevealOnScroll variant="right" className="lg:col-span-6" delayMs={100}>
            <span className="inline-block rounded-full bg-[#0E9AA7]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B7D88]">
              Sobre nosotros
            </span>
            <h2 className="section-title mt-3 text-[#102D52]">
              Tu aliado para descubrir nuevos destinos
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-[1.0625rem]">
              En Traveldom Soluciones creemos que cada viaje representa una
              nueva oportunidad y una experiencia inolvidable. Acompañamos a
              nuestros clientes con servicios de asesoría, orientación y
              soluciones turísticas claras en cada etapa.
            </p>

            {/* Bento grid escaneable de valores */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-[var(--radius-md)] border border-[#102D52]/10 bg-white p-4 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0E9AA7]/45">
                <HeartHandshake className="h-5 w-5 text-[#0E9AA7]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#102D52]">
                  Atención cercana
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
                  Acompañamiento humano adaptado a tus fechas y destino.
                </p>
              </div>

              <div className="rounded-[var(--radius-md)] border border-[#102D52]/10 bg-white p-4 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0E9AA7]/45">
                <FolderCheck className="h-5 w-5 text-[#0E9AA7]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#102D52]">
                  Proceso organizado
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
                  Preparación ordenada de documentos e itinerarios.
                </p>
              </div>

              <div className="sm:col-span-2 rounded-[var(--radius-md)] border border-[#0E9AA7]/30 bg-[#E5F6F8] p-4 flex items-start gap-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A66B]" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#102D52]">
                    Transparencia y decisiones informadas
                  </h3>
                  <p className="mt-0.5 text-[15px] leading-relaxed text-slate-600">
                    Comunicación honesta y responsable: “{siteConfig.secondarySlogan}”.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <BtnAvion
                href="#contacto"
                variant="oscuro"
                intensity="ligera"
              >
                Solicitar asesoría
              </BtnAvion>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

