import Image from "next/image";
import { Star, User } from "lucide-react";
import { siteConfig } from "@/config/site";
import { TESTIMONIALS } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";

/**
 * Sección de testimonios de viajeros.
 */
export function TestimonialsSection() {
  if (!siteConfig.showTestimonials || TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section id="testimonios" className="w-full bg-turquoise-sand section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="section-title text-[#102D52]">
            Experiencias de nuestros viajeros
          </h2>
        </RevealOnScroll>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, idx) => (
            <RevealOnScroll key={item.id} delayMs={idx * 65}>
              <article className="flex h-full flex-col justify-between rounded-[var(--radius-md)] border border-[#102D52]/10 border-t-[3px] border-t-[#0E9AA7] bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0E9AA7]/45 hover:shadow-[var(--shadow-elevated)]">
                <div>
                  <div className="flex items-center gap-1 text-[#C9A66B]" aria-label={`${item.rating} de 5 estrellas`}>
                    {Array.from({ length: item.rating }).map((_, starIdx) => (
                      <Star key={starIdx} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
                    “{item.comment}”
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#0E9AA7]/30 bg-[#E6F7F8] text-[#102D52]">
                    {item.photo ? (
                      <Image
                        src={item.photo}
                        alt={`Fotografía de ${item.name}`}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    ) : (
                      <User className="h-5 w-5 text-[#0E9AA7]" strokeWidth={1.75} aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#102D52]">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">Viajero asesorado</p>
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

