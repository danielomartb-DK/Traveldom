import Image from "next/image";
import { UserCheck, Compass, Layers, BadgeCheck } from "lucide-react";
import { WHY_CHOOSE_BENEFITS } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";

const benefitIcons = {
  UserCheck,
  Compass,
  Layers,
  BadgeCheck,
};

export function WhyChooseSection() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative w-full overflow-hidden bg-[#102D52] section-pad text-white"
    >
      {/* Textura fotográfica sutil de fondo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/beach-coastline-aerial.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#102D52]/90 via-[#102D52]/75 to-[#102D52]/92" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A66B]">
            Nuestro compromiso
          </span>
          <h2
            id="why-choose-heading"
            className="section-title mt-2 text-white"
          >
            ¿Por qué elegir Traveldom Soluciones?
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_BENEFITS.map((benefit, index) => {
            const Icon = benefitIcons[benefit.iconName];
            return (
              <RevealOnScroll key={benefit.id} delayMs={index * 60}>
                <div className="flex h-full flex-col items-center rounded-[var(--radius-md)] border border-white/12 bg-white/[0.05] p-6 text-center backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0E9AA7]/60 hover:bg-white/[0.09]">
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-[var(--radius-md)] border border-[#C9A66B]/45 bg-[#1D5B91]/45 text-[#C9A66B] shadow-sm">
                    <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[#EAF4FC]/85">
                    {benefit.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

