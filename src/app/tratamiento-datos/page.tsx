import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tratamiento de datos personales",
  description: `Lineamientos sobre tratamiento de datos personales de ${siteConfig.name}.`,
};

export default function DataProcessingPage() {
  return (
    <LegalPageLayout
      eyebrow="Protección de la información"
      title="Tratamiento de datos personales"
    >
      <section className="space-y-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
          1. Principios de tratamiento
        </h2>
        <p>
          {siteConfig.name} trata los datos personales suministrados por los
          interesados bajo principios de finalidad específica, minimización,
          confidencialidad y transparencia.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
          2. Consentimiento del titular
        </h2>
        <p>
          Al marcar la casilla de aceptación y enviar una solicitud mediante
          WhatsApp o correo electrónico, el titular autoriza el contacto
          directo de un asesor de {siteConfig.name} para responder su consulta y
          dar seguimiento al servicio requerido.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
          3. Derechos de acceso, rectificación y supresión
        </h2>
        <p>
          En cualquier momento podrás solicitar la actualización, corrección o
          eliminación de tu información de contacto enviando un correo a{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-semibold text-[#1D5B91] underline underline-offset-2"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}

