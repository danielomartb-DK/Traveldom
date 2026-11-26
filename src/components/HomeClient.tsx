"use client";

import { useState } from "react";
import { SERVICE_FORM_OPTIONS } from "@/data/content";
import { TopBar } from "./TopBar";
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
import { ScrollToTop } from "./ScrollToTop";

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
      <TopBar />
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <ServicesSection onSelectAdvisory={navigateToAdvisoryForm} />
        <HotelsSection onConsultHotel={navigateToAdvisoryForm} />
        <PackagesSection onSelectPackage={navigateToAdvisoryForm} />

        {/* CTA strip after Packages */}
        <div className="bg-[#F4F6F8] py-8 border-y border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#102D52]">
                ¿No encontraste el paquete ideal?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Diseñamos propuestas 100% personalizadas para ti.
              </p>
            </div>
            <a
              href="#contacto"
              className="shrink-0 inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#C9A66B] px-7 py-3 text-sm font-bold text-[#102D52] shadow transition-all duration-200 hover:bg-[#b8954f] active:scale-[0.98]"
            >
              Solicita tu paquete personalizado
            </a>
          </div>
        </div>
        <WhyChooseSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
        <AdvisoryFormSection form={form} onChangeForm={handleFieldChange} />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
