"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { HOTELS_RD, RD_DESTINATIONS, type HotelItem } from "@/data/content";
import { buildWhatsAppUrl } from "@/config/site";
import { RevealOnScroll } from "./RevealOnScroll";
import { BtnAvion } from "./BtnAvion";

interface HotelsSectionProps {
  onConsultHotel?: (prefill: {
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

  const getWhatsAppHref = (hotel: HotelItem) =>
    buildWhatsAppUrl(
      `Hola, me interesa cotizar el destino ${hotel.destination}, República Dominicana (opción: ${hotel.name}).`
    );

  return (
    <section id="destinos" className="w-full bg-sand-turquoise section-pad scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado centrado */}
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#0E9AA7]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B7D88]">
            Caribe y descanso
          </span>
          <h2 className="section-title mt-3 text-[#102D52]">
            Descubre el paraíso de República Dominicana
          </h2>
          <p className="mt-3 text-base text-slate-700 sm:text-[1.0625rem]">
            Explora destinos increíbles, hoteles y experiencias en uno de los
            lugares más atractivos del Caribe.
          </p>
        </RevealOnScroll>

        {/* Destinos destacados y filtro */}
        <div className="mt-7 flex flex-col items-center gap-4">
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
                      : "border border-[#102D52]/15 bg-white text-[#102D52] hover:border-[#0E9AA7] hover:bg-[#E6F7F8]"
                  }`}
                >
                  {dest}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carrusel horizontal en móvil; grilla limpia 3 columnas en escritorio con foto despejada */}
        <div className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3">
          {filteredHotels.map((hotel, idx) => {
            const highlights = hotel.features.slice(0, 2);

            return (
              <RevealOnScroll
                key={hotel.id}
                delayMs={idx * 60}
                className="shrink-0 w-[85vw] sm:w-[68vw] snap-center md:w-auto"
              >
                <article className="group flex h-full w-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[#102D52]/12 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0E9AA7]/40 hover:shadow-[var(--shadow-elevated)]">
                  {/* Fotografía limpia sin texto encima */}
                  <div className="relative h-56 w-full shrink-0 overflow-hidden bg-[#102D52] sm:h-60">
                    <Image
                      src={hotel.image}
                      alt={hotel.imageAlt}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102D52]/35 to-transparent"
                    />
                    <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#102D52]/90 px-3 py-1 text-xs font-semibold text-white shadow-xs backdrop-blur-xs">
                      <MapPin className="h-3.5 w-3.5 text-[#E3B963]" strokeWidth={2} aria-hidden="true" />
                      <span>{hotel.destination}</span>
                    </span>
                  </div>

                  {/* Cuerpo editorial limpio y respirable */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#102D52] sm:text-xl">
                        {hotel.name}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                        {hotel.description}
                      </p>

                      <ul
                        aria-label={`Destacados de ${hotel.destination}`}
                        className="mt-3.5 space-y-1.5 border-t border-slate-100 pt-3 text-xs font-medium text-slate-700"
                      >
                        {highlights.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E9AA7]"
                            />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3 pt-1">
                      <BtnAvion
                        href={getWhatsAppHref(hotel)}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primario"
                        intensity="ligera"
                        className="!min-h-[40px] !px-5 !py-2 !text-xs sm:!text-sm"
                      >
                        Cotizar destino
                      </BtnAvion>

                      {onConsultHotel && (
                        <button
                          type="button"
                          onClick={() =>
                            onConsultHotel({
                              service: "Hoteles",
                              destination: `${hotel.destination}, República Dominicana`,
                              notes: `Quisiera consultar disponibilidad y opciones similares a ${hotel.name} en ${hotel.destination}.`,
                            })
                          }
                          className="text-xs font-semibold text-[#0B7D88] underline-offset-4 transition-colors hover:text-[#102D52] hover:underline"
                        >
                          Por formulario
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

