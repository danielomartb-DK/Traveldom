import Image from "next/image";
import { RevealOnScroll } from "./RevealOnScroll";
import { BtnAvion } from "./BtnAvion";

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
          {/* Línea de ruta punteada con avión decorativo */}
          <div aria-hidden="true" className="mx-auto mb-3 flex max-w-[260px] justify-center">
            <svg viewBox="0 0 240 24" className="h-6 w-full overflow-visible" fill="none">
              <path
                d="M6 16 C 68 2, 152 22, 220 9"
                stroke="#0E9AA7"
                strokeWidth="2"
                strokeDasharray="5 5"
                strokeLinecap="round"
              />
              <g transform="translate(218, 2)">
                <path
                  d="M16 7.5c0-.6-.5-1.1-1.1-1.1h-4L7.2 1H5.8l1.8 5.4H4.2L3 5.2H1.9l.8 2.3-.8 2.3H3l1.2-1.2h3.4L5.8 14h1.4l3.7-5.4h4c.6 0 1.1-.5 1.1-1.1z"
                  fill="#C9A66B"
                />
              </g>
            </svg>
          </div>

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
            <BtnAvion
              href="#contacto"
              variant="primario"
              intensity="completa"
            >
              Solicitar asesoría ahora
            </BtnAvion>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

