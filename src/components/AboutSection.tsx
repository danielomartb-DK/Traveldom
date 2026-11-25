import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { RevealOnScroll } from "./RevealOnScroll";

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-20 lg:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Imagen a la izquierda (composición fiel a "About" de Contixs) */}
          <RevealOnScroll className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-[#F4F6F8] shadow-[0_14px_38px_rgba(16,45,82,0.08)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hotel-colonial-courtyard.jpg"
                  alt="Patio arquitectónico acogedor con palmeras para recibir y asesorar a nuestros viajeros"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Texto y botón a la derecha */}
          <RevealOnScroll className="lg:col-span-6" delayMs={100}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1D5B91]">
              Sobre nosotros
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-[#102D52] sm:text-4xl">
              Tu aliado para descubrir nuevos destinos
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-[#C9A66B]" />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                En Traveldom Soluciones creemos que cada viaje representa una
                nueva oportunidad, un sueño y una experiencia inolvidable.
              </p>
              <p>
                Nuestro propósito es acompañar a nuestros clientes mediante
                servicios de asesoría, orientación y soluciones turísticas que
                faciliten la preparación de sus viajes.
              </p>
              <p>
                Trabajamos para ofrecer una atención cercana, organizada y
                transparente, ayudando a nuestros clientes a tomar decisiones
                informadas en cada etapa de su experiencia.
              </p>
            </div>

            <p className="mt-5 border-l-2 border-[#C9A66B] pl-4 text-sm font-semibold italic text-[#102D52]">
              “{siteConfig.secondarySlogan}”
            </p>

            <div className="mt-8">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-md bg-[#102D52] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D5B91]"
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

