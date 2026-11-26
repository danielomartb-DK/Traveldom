"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Check, ArrowRight, Info } from "lucide-react";
import { HOTELS_RD, RD_DESTINATIONS, type HotelItem } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";

interface HotelsSectionProps {
  onConsultHotel: (prefill: {
    service: string;
    destination: string;
    notes: string;
  }) => void;
}

export function HotelsSection({ onConsultHotel }: HotelsSectionProps) {
  const [selectedDestination, setSelectedDestination] = useState<string>("Todos");

  const filteredHotels =
    selectedDestination === "Todos"
      ? HOTELS_RD
      : HOTELS_RD.filter((hotel) => hotel.destination === selectedDestination);

  const handleConsult = (hotel: HotelItem) => {
    onConsultHotel({
      service: "Hoteles",
      destination: `${hotel.destination}, República Dominicana`,
      notes: `Quisiera consultar disponibilidad y opciones similares a ${hotel.name} en ${hotel.destination}.`,
    });
  };

  return (
    <section id="destinos" className="bg-[#F4F6F8] py-12 lg:py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado centrado */}
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1D5B91]">
            Destinos y alojamiento en el Caribe
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-[#102D52] sm:text-4xl">
            Descubre el paraíso de República Dominicana
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#C9A66B]" />
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Explora destinos increíbles, hoteles y experiencias en uno de los
            lugares más atractivos del Caribe.
          </p>
        </RevealOnScroll>

        {/* Destinos destacados y filtro */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div
            className="flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label="Filtrar hoteles por destino en República Dominicana"
          >
            {RD_DESTINATIONS.map((dest) => {
              const active = selectedDestination === dest;
              return (
                <button
                  key={dest}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedDestination(dest)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                    active
                      ? "bg-[#102D52] text-white shadow-sm"
                      : "border border-slate-200 bg-white text-[#102D52] hover:border-[#1D5B91] hover:bg-[#EAF4FC]"
                  }`}
                >
                  {dest}
                </button>
              );
            })}
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#1D5B91]/20 bg-white px-4 py-1.5 text-xs text-slate-600">
            <Info className="h-3.5 w-3.5 text-[#C9A66B]" strokeWidth={1.75} aria-hidden="true" />
            <span>
              Catálogo de demostración: los nombres definitivos, tarifas y
              disponibilidad real se confirman al consultar con un asesor.
            </span>
          </div>
        </div>

        {/* Grid de hoteles */}
        <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredHotels.map((hotel, idx) => (
            <RevealOnScroll key={hotel.id} delayMs={idx * 55}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_6px_24px_rgba(16,45,82,0.05)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_14px_34px_rgba(16,45,82,0.1)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={hotel.image}
                    alt={hotel.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#102D52]/85 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                    <MapPin className="h-3 w-3 text-[#C9A66B]" strokeWidth={2} aria-hidden="true" />
                    <span>{hotel.destination}</span>
                  </div>
                  {hotel.isDemo && (
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#102D52] shadow-xs">
                      Demo
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
                    {hotel.name}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {hotel.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                    {hotel.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1D5B91]"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => handleConsult(hotel)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1D5B91] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#102D52]"
                    >
                      <span>Consultar disponibilidad</span>
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

