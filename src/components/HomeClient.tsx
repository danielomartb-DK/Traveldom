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
        <WhyChooseSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
        <AdvisoryFormSection form={form} onChangeForm={handleFieldChange} />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
