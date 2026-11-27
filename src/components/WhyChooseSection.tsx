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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F3ECE1] via-[#E9F6F8] to-[#F3ECE1] section-pad"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0E9AA7]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#0E9AA7]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B7D88]">
            Nuestro compromiso
          </span>
          <h2
            id="why-choose-heading"
            className="section-title mt-3 text-[#102D52]"
          >
            ¿Por qué elegir Traveldom Soluciones?
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_BENEFITS.map((benefit, index) => {
            const Icon = benefitIcons[benefit.iconName];
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <RevealOnScroll key={benefit.id} delayMs={index * 60}>
                <article className="group flex h-full flex-col justify-between rounded-[var(--radius-md)] border border-[#102D52] border-t-[3px] border-t-[#C9A66B] bg-[#102D52] p-6 text-left text-white shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0E9AA7]/60">
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#E3B963]/40 bg-gradient-to-br from-[#C9A66B]/20 to-[#0E9AA7]/20 text-[#E3B963] shadow-xs transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-6 w-6" strokeWidth={1.85} aria-hidden="true" />
                      </div>
                      <span
                        aria-hidden="true"
                        className="font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight text-white/15 transition-colors duration-300 group-hover:text-[#E3B963]/45"
                      >
                        {stepNumber}
                      </span>
                    </div>

                    <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-[#EAF4FC]/85">
                      {benefit.description}
                    </p>
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

