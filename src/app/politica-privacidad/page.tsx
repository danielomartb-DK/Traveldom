import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad de ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Información legal"
      title="Política de privacidad"
    >
      <section className="space-y-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
          1. Responsable de la información
        </h2>
        <p>
          {siteConfig.name} recopila únicamente la información que el usuario
          decide proporcionar voluntariamente a través de los canales de
          contacto habilitados (WhatsApp o correo electrónico) con el fin de
          recibir orientación sobre servicios de viaje, trámites consulares,
          traducción documental, seguros y paquetes turísticos.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
          2. Finalidad del uso de datos
        </h2>
        <p>
          Los datos ingresados en el formulario de asesoría (nombre, correo,
          número de WhatsApp, país de residencia, servicio de interés, destino y
          descripción) se utilizan exclusivamente para preparar el mensaje de
          contacto que el usuario envía y brindar la atención solicitada.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
          3. Confidencialidad y no cesión a terceros
        </h2>
        <p>
          No vendemos ni cedemos información personal a terceros ajenos a la
          gestión solicitada por el cliente. Cuando un servicio requiera
          coordinación con proveedores turísticos o aseguradoras, se informará
          previamente al interesado.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#102D52]">
          4. Contacto
        </h2>
        <p>
          Para consultas relacionadas con esta política puedes escribir a{" "}
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

