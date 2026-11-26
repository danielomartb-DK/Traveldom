import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

export function CtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-[#102D52] py-14 text-white lg:py-16"
    >
      <Image
        src="/images/resort-palms-pool.jpg"
        alt="Playa tropical y palmeras bajo cielo azul para tu próximo viaje"
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#102D52]/95 via-[#102D52]/85 to-[#1D5B91]/80"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <RevealOnScroll>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A66B]">
            Comienza hoy tu planificación
          </span>
          <h2
            id="final-cta-heading"
            className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]"
          >
            ¿Listo para tu próximo viaje?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#EAF4FC] sm:text-lg">
            Permítenos acompañarte en la planificación de tu próxima
            experiencia. Estamos aquí para ayudarte.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-md bg-[#C9A66B] px-7 py-3.5 text-sm font-bold text-[#102D52] shadow-lg transition-all hover:bg-white"
            >
              <span>Solicitar asesoría ahora</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

