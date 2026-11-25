import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de uso del sitio web de ${siteConfig.name}.`,
};

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout
      eyebrow="Marco informativo"
      title="Términos y condiciones"
    >
      <section className="space-y-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
          1. Naturaleza de los servicios
        </h2>
        <p>{siteConfig.legalDisclaimer}</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
          2. Traducciones y documentación
        </h2>
        <p>
          Los servicios de traducción ofrecidos corresponden a apoyo
          documental. No se asegura ni se afirma carácter oficial, judicial o
          certificado salvo confirmación escrita previa respecto a los
          requisitos específicos de cada institución.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
          3. Cotizaciones, hoteles y paquetes
        </h2>
        <p>
          La información de hoteles y paquetes presentada en el sitio tiene
          carácter informativo y demostrativo. Toda disponibilidad, cobertura de
          seguros o tarifa real se confirma exclusivamente mediante cotización
          directa emitida por un asesor según fechas y condiciones vigentes.
        </p>
      </section>
    </LegalPageLayout>
  );
}

