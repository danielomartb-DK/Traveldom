"use client";

import { useState } from "react";
import { SERVICE_FORM_OPTIONS } from "@/data/content";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ServicesSection } from "./ServicesSection";
import { HotelsSection } from "./HotelsSection";
import { PackagesSection } from "./PackagesSection";
import { WhyChooseSection } from "./WhyChooseSection";
import { AboutSection } from "./AboutSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import {
  AdvisoryFormSection,
  type AdvisoryFormState,
} from "./AdvisoryFormSection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { SectionDivider } from "./SectionDivider";
import { ScrollFlightPath } from "./ScrollFlightPath";
import { SmoothScroll } from "./SmoothScroll";
import { AvionDefsAndController, BtnAvion } from "./BtnAvion";

const initialFormState: AdvisoryFormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  country: "",
  service: SERVICE_FORM_OPTIONS[0],
  destination: "",
  description: "",
  acceptPrivacy: false,
};

export function HomeClient() {
  const [form, setForm] = useState<AdvisoryFormState>(initialFormState);

  const handleFieldChange = <K extends keyof AdvisoryFormState>(
    field: K,
    value: AdvisoryFormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const navigateToAdvisoryForm = (prefill: {
    service: string;
    destination?: string;
    notes?: string;
  }) => {
    setForm((prev) => ({
      ...prev,
      service: SERVICE_FORM_OPTIONS.includes(
        prefill.service as (typeof SERVICE_FORM_OPTIONS)[number]
      )
        ? prefill.service
        : prev.service,
      destination: prefill.destination ?? prev.destination,
      description: prefill.notes ?? prev.description,
    }));

    const contactEl = document.getElementById("contacto");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <SmoothScroll />
      <AvionDefsAndController />
      <ScrollFlightPath />
      <Header />
      <main id="main-content" className="flex-1 w-full">
        <Hero />
        <ServicesSection onSelectAdvisory={navigateToAdvisoryForm} />
        <SectionDivider variant="wave" fillColor="#f3ece1" bgColor="#e5f6f8" />
        <HotelsSection onConsultHotel={navigateToAdvisoryForm} />
        <PackagesSection onSelectPackage={navigateToAdvisoryForm} />

        {/* CTA strip after Packages */}
        <div className="w-full bg-[#F3ECE1] py-8 border-t border-[#C9A66B]/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#102D52]">
                ¿No encontraste el paquete ideal?
              </p>
              <p className="mt-1 text-[15px] text-slate-700">
                Diseñamos propuestas 100% personalizadas para ti.
              </p>
            </div>
            <BtnAvion
              href="#contacto"
              variant="primario"
              intensity="completa"
              className="shrink-0"
            >
              Solicita tu paquete personalizado
            </BtnAvion>
          </div>
        </div>
        <SectionDivider variant="wave" fillColor="#102d52" bgColor="#f3ece1" />
        <WhyChooseSection />
        <SectionDivider variant="wave" fillColor="#f3ece1" bgColor="#102d52" />
        <AboutSection />
        <SectionDivider variant="diagonal" fillColor="#e5f6f8" bgColor="#f3ece1" />
        <TestimonialsSection />
        <FaqSection />
        <SectionDivider variant="wave" fillColor="#e5f6f8" bgColor="#f3ece1" />
        <AdvisoryFormSection form={form} onChangeForm={handleFieldChange} />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
