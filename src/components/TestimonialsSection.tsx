import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { TESTIMONIALS } from "@/data/content";

/**
 * Sección preparada para opiniones reales autorizadas.
 * Permanece oculta mientras no existan testimonios reales verificados.
 */
export function TestimonialsSection() {
  if (!siteConfig.showTestimonials || TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section id="testimonios" className="bg-[#F4F6F8] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-[#102D52]">
            Experiencias de nuestros viajeros
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#C9A66B]" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
            >
              <div className="flex items-center gap-1 text-[#C9A66B]">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                “{item.comment}”
              </p>
              <p className="mt-4 text-sm font-semibold text-[#102D52]">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

