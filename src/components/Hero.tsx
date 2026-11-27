"use client";

import Image from "next/image";
import {
  MapPin,
  Globe,
  ShieldCheck,
  Compass,
  Sparkles,
} from "lucide-react";
import { BtnAvion } from "./BtnAvion";

const HERO_BENEFITS = [
  {
    icon: Globe,
    label: "Destinos globales",
  },
  {
    icon: ShieldCheck,
    label: "Asesoría independiente",
  },
  {
    icon: Compass,
    label: "Acompañamiento real",
  },
  {
    icon: Sparkles,
    label: "Viajes a tu medida",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex w-full flex-col justify-between overflow-hidden bg-[#081C38] text-white lg:min-h-[min(100svh,760px)]"
    >
      {/* Fotografía de fondo original sin oscurecimiento en el mar ni cielo */}
      <Image
        src="/images/hero-beach-caribe.jpg"
        alt="Playa paradisíaca del Caribe con palmeras, muelle y velero sobre aguas turquesa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Velo sutil localizado solo detrás del texto izquierdo para no oscurecer el mar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#061830]/45 via-[#061830]/15 to-transparent lg:w-[60%]"
      />

      {/* Contenido principal dimensionado para caber completo en pantalla al 100% */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 pt-20 pb-2 sm:px-6 sm:pt-24 lg:px-8 lg:pt-24 lg:pb-3">
        <div className="max-w-xl space-y-3.5 hero-fade-up">
          {/* Eyebrow con pin + línea horizontal */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF7F2] drop-shadow-xs sm:text-sm">
              <MapPin
                className="h-4 w-4 text-[#E3B963]"
                strokeWidth={2.2}
                aria-hidden="true"
              />
              <span>República Dominicana</span>
            </span>
            <span
              aria-hidden="true"
              className="h-px w-20 bg-white/50 sm:w-32"
            />
          </div>

          {/* Titular principal */}
          <h1 className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(6,24,48,0.45)] sm:text-4xl lg:text-[2.95rem] xl:text-[3.25rem]">
            Tu próximo viaje comienza con una{" "}
            <span className="italic text-[#E3B963]">buena asesoría.</span>
          </h1>

          <p className="max-w-lg text-sm leading-relaxed text-white/95 drop-shadow-[0_1px_6px_rgba(6,24,48,0.5)] sm:text-base lg:text-[1.05rem]">
            Asesoría de viajes, orientación sobre visas y experiencias diseñadas
            desde República Dominicana.
          </p>

          {/* CTAs principales */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <BtnAvion href="#contacto" variant="primario" intensity="completa">
              Solicita asesoría
            </BtnAvion>

            <BtnAvion
              href="#servicios"
              variant="secundario"
              intensity="completa"
              className="!border-white/75 !bg-[#081C38]/55 !text-white backdrop-blur-md hover:!bg-[#081C38]/75 hover:!border-white"
            >
              Conoce nuestros servicios
            </BtnAvion>
          </div>
        </div>

        {/* Barra inferior delgada y limpia */}
        <div className="mt-6 lg:mt-8">
          <div className="w-fit max-w-full rounded-2xl border border-white/25 bg-[#081C38]/55 px-4 py-2.5 shadow-[0_10px_28px_rgba(4,16,34,0.25)] backdrop-blur-md sm:px-5">
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/20">
              {HERO_BENEFITS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 ${
                      idx > 0 ? "lg:pl-4" : ""
                    } ${idx < HERO_BENEFITS.length - 1 ? "lg:pr-4" : ""}`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white">
                      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-medium whitespace-nowrap text-white">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-2 text-[11px] leading-normal text-white/85 drop-shadow-[0_1px_4px_rgba(6,24,48,0.6)]">
            Asesoría privada independiente. La resolución de visas es facultad
            exclusiva de las autoridades consulares correspondientes.
          </p>
        </div>
      </div>

      {/* Ola blanca inferior para transición limpia a Servicios */}
      <div
        aria-hidden="true"
        className="relative z-10 w-full overflow-hidden leading-none pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="block h-5 w-full sm:h-7 lg:h-8"
        >
          <path
            d="M0,26 C360,60 1080,-4 1440,32 L1440,56 L0,56 Z"
            fill="#EAF7F8"
          />
        </svg>
      </div>
    </section>
  );
}
