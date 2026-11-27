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
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#081C38] text-white lg:min-h-[min(100svh,760px)]"
    >
      {/* Fotografía de fondo original sin oscurecimiento en el mar ni cielo en escritorio */}
      <Image
        src="/images/hero-beach-caribe.jpg"
        alt="Playa paradisíaca del Caribe con palmeras, muelle y velero sobre aguas turquesa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-center"
      />

      {/* Velo sutil vertical en móvil para legibilidad; en escritorio solo detrás del texto izquierdo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#061830]/45 via-[#061830]/15 to-[#061830]/60 sm:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-full bg-gradient-to-r from-[#061830]/45 via-[#061830]/15 to-transparent sm:block lg:w-[60%]"
      />

      {/* Contenido principal dimensionado para cubrir 100% de la portada */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 pt-20 pb-5 sm:px-6 sm:pt-24 sm:pb-6 lg:px-8 lg:pt-24 lg:pb-7">
        <div className="max-w-xl space-y-3.5 sm:space-y-4 hero-fade-up">
          {/* Eyebrow con cápsula estilizada y alineada */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#081C38]/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FAF7F2] shadow-xs backdrop-blur-xs sm:gap-2 sm:px-3.5 sm:text-xs sm:tracking-[0.18em]">
              <MapPin
                className="h-3.5 w-3.5 text-[#E3B963] shrink-0"
                strokeWidth={2.2}
                aria-hidden="true"
              />
              <span>República Dominicana</span>
            </span>
          </div>

          {/* Titular principal */}
          <h1 className="font-[family-name:var(--font-poppins)] text-[1.8rem] font-bold leading-[1.14] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(6,24,48,0.45)] sm:text-4xl sm:leading-[1.08] lg:text-[2.95rem] xl:text-[3.25rem]">
            Tu próximo viaje comienza con una{" "}
            <span className="italic text-[#E3B963]">buena asesoría.</span>
          </h1>

          <p className="max-w-lg text-[14.5px] leading-relaxed text-white/95 drop-shadow-[0_1px_6px_rgba(6,24,48,0.5)] sm:text-base lg:text-[1.05rem]">
            Asesoría de viajes, orientación sobre visas y experiencias diseñadas
            desde República Dominicana.
          </p>

          {/* CTAs principales alineados con ancho uniforme en móvil y en fila en escritorio */}
          <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:items-center sm:gap-4">
            <BtnAvion
              href="#contacto"
              variant="primario"
              intensity="completa"
              className="w-full sm:w-auto text-center"
            >
              Solicita asesoría
            </BtnAvion>

            <BtnAvion
              href="#servicios"
              variant="secundario"
              intensity="completa"
              className="w-full sm:w-auto text-center !border-white/75 !bg-[#081C38]/55 !text-white backdrop-blur-md hover:!bg-[#081C38]/75 hover:!border-white"
            >
              Conoce nuestros servicios
            </BtnAvion>
          </div>
        </div>

        {/* Barra inferior delgada y limpia (2x2 a todo lo ancho en móvil; fila única en escritorio) */}
        <div className="mt-6 lg:mt-8">
          <div className="w-full rounded-2xl border border-white/25 bg-[#081C38]/60 px-3.5 py-2.5 shadow-[0_10px_28px_rgba(4,16,34,0.28)] backdrop-blur-md sm:w-fit sm:max-w-full sm:px-5">
            <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/20">
              {HERO_BENEFITS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 sm:gap-2.5 ${
                      idx > 0 ? "lg:pl-4" : ""
                    } ${idx < HERO_BENEFITS.length - 1 ? "lg:pr-4" : ""}`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white sm:h-8 sm:w-8">
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-medium leading-tight text-white sm:text-xs sm:whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-2.5 inline-block max-w-full rounded-lg bg-[#061830]/45 px-2.5 py-1 text-[10.5px] leading-snug text-white/95 backdrop-blur-[2px] sm:text-[11px] sm:bg-[#061830]/35">
            Asesoría privada independiente. La resolución de visas es facultad
            exclusiva de las autoridades consulares correspondientes.
          </p>
        </div>
      </div>
    </section>
  );
}
