import Image from "next/image";
import { ArrowRight, HeartHandshake, FolderCheck, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { RevealOnScroll } from "./RevealOnScroll";

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-12 lg:py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Imagen a la izquierda (composición fiel a "About" de Contixs) */}
          <RevealOnScroll className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-[#F4F6F8] shadow-[0_14px_38px_rgba(16,45,82,0.08)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hotel-colonial-courtyard.jpg"
                  alt="Patio arquitectónico acogedor con palmeras para recibir y asesorar a nuestros viajeros"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Texto y bento grid de valores a la derecha */}
          <RevealOnScroll className="lg:col-span-6" delayMs={80}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1D5B91]">
              Sobre nosotros
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-[#102D52] sm:text-4xl">
              Tu aliado para descubrir nuevos destinos
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-[#C9A66B]" />

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              En Traveldom Soluciones creemos que cada viaje representa una
              nueva oportunidad y una experiencia inolvidable. Acompañamos a
              nuestros clientes con servicios de asesoría, orientación y
              soluciones turísticas claras en cada etapa.
            </p>

            {/* Bento grid escaneable de valores */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200/80 bg-[#F4F6F8] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1D5B91]/30">
                <HeartHandshake className="h-5 w-5 text-[#1D5B91]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#102D52]">
                  Atención cercana
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Acompañamiento humano adaptado a tus fechas y destino.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-[#F4F6F8] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1D5B91]/30">
                <FolderCheck className="h-5 w-5 text-[#1D5B91]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#102D52]">
                  Proceso organizado
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Preparación ordenada de documentos e itinerarios.
                </p>
              </div>

              <div className="sm:col-span-2 rounded-xl border border-[#C9A66B]/30 bg-[#EAF4FC]/60 p-4 flex items-start gap-3 transition-all duration-200 hover:-translate-y-0.5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A66B]" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#102D52]">
                    Transparencia y decisiones informadas
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                    Comunicación honesta y responsable: “{siteConfig.secondarySlogan}”.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#contacto"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#102D52] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1D5B91] active:scale-[0.98]"
              >
                <span>Solicitar asesoría</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

