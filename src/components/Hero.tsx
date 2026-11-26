import Image from "next/image";
import { ArrowRight, ShieldCheck, UserCheck, Compass, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4F6F8] via-white to-white border-b border-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Columna izquierda: Título, descripción persuasiva, CTAs y elementos de confianza */}
          <div className="lg:col-span-6 space-y-5 hero-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1D5B91]/15 bg-[#EAF4FC] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#102D52]">
              <Sparkles className="h-3.5 w-3.5 text-[#C9A66B]" strokeWidth={2} aria-hidden="true" />
              <span>Asesoría turística & consular en RD</span>
            </div>

            <h1 className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-[1.16] tracking-tight text-[#102D52] sm:text-4xl lg:text-[2.75rem]">
              Tu próximo viaje comienza{" "}
              <span className="text-[#1D5B91]">con una buena asesoría.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Expertos en asesoría de viajes, orientación sobre visas y planificación
              de experiencias nacionales e internacionales desde República Dominicana.
            </p>

            {/* CTAs con altura ergonómica y microinteracción */}
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <a
                href="#servicios"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#102D52] px-6 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#1D5B91] hover:shadow-md active:scale-[0.98]"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </a>

              <a
                href="#contacto"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#C9A66B] px-6 py-3 text-sm font-bold text-[#102D52] shadow-xs transition-all duration-200 hover:bg-[#b8954f] hover:shadow-md active:scale-[0.98]"
              >
                <span>Solicita asesoría</span>
              </a>
            </div>

            {/* 3 Indicadores de confianza discretos y minimalistas */}
            <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-3 border-t border-slate-200/70">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#EAF4FC] text-[#1D5B91]">
                  <UserCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span>Atención personalizada</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#EAF4FC] text-[#1D5B91]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#C9A66B]" strokeWidth={2} aria-hidden="true" />
                </span>
                <span>Asesoría independiente</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#EAF4FC] text-[#1D5B91]">
                  <Compass className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span>Acompañamiento continuo</span>
              </div>
            </div>

            {/* Nota legal sutil */}
            <p className="text-[11px] text-slate-400 leading-normal">
              Asesoría privada independiente. La resolución de visas es facultad exclusiva de las autoridades consulares correspondientes.
            </p>
          </div>

          {/* Columna derecha: Fotografía turística de alta calidad dentro de tarjeta elegante */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2 shadow-[0_20px_50px_rgba(16,45,82,0.08)] transition-all hover:shadow-[0_24px_60px_rgba(16,45,82,0.12)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/beach-coastline-aerial.jpg"
                  alt="Costa turquesa y playas de República Dominicana"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#102D52]/40 via-transparent to-transparent"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold text-[#102D52] shadow-xs backdrop-blur-xs">
                  República Dominicana · EE. UU. · Europa
                </span>
              </div>
              <div className="flex items-center justify-between px-3 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A66B]">
                    Traveldom Soluciones
                  </p>
                  <p className="text-sm font-medium text-[#102D52]">
                    Experiencias de viaje estructuradas y seguras
                  </p>
                </div>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D5B91] hover:text-[#102D52] transition-colors"
                >
                  <span>Planifica tu viaje</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

