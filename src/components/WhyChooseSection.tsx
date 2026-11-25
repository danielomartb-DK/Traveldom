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
      className="bg-[#102D52] py-16 text-white lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A66B]">
            Nuestro compromiso
          </span>
          <h2
            id="why-choose-heading"
            className="mt-2 font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            ¿Por qué elegir Traveldom Soluciones?
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#C9A66B]" />
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_BENEFITS.map((benefit, index) => {
            const Icon = benefitIcons[benefit.iconName];
            return (
              <RevealOnScroll key={benefit.id} delayMs={index * 70}>
                <div className="flex h-full flex-col items-center rounded-xl border border-white/10 bg-white/[0.04] p-6 text-center transition-colors hover:border-[#C9A66B]/40 hover:bg-white/[0.07]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#C9A66B]/40 bg-[#1D5B91]/40 text-[#C9A66B]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-base font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#EAF4FC]/85">
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

