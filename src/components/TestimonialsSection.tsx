import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { TESTIMONIALS } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";

/**
 * Sección preparada para opiniones reales autorizadas.
 * Permanece oculta mientras no existan testimonios reales verificados.
 */
export function TestimonialsSection() {
  if (!siteConfig.showTestimonials || TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section id="testimonios" className="bg-[#F4F6F8] py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-[#102D52]">
            Experiencias de nuestros viajeros
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#C9A66B]" />
        </RevealOnScroll>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, idx) => (
            <RevealOnScroll key={item.id} delayMs={idx * 65}>
              <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-1 text-[#C9A66B]">
                  {Array.from({ length: item.rating }).map((_, starIdx) => (
                    <Star key={starIdx} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  “{item.comment}”
                </p>
                <p className="mt-4 text-sm font-semibold text-[#102D52]">
                  {item.name}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

