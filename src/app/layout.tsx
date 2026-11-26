import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.primarySlogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Asesoría de viajes y visas en República Dominicana: visa turista EE. UU. y España, asesoría consular, traducción de documentos, seguros de viaje y paquetes vacacionales en Punta Cana y el Caribe.",
  keywords: [
    "Traveldom Soluciones",
    "asesoría de viajes República Dominicana",
    "asesoría de visas",
    "visa turista Estados Unidos",
    "visa España República Dominicana",
    "asesoría consular Santo Domingo",
    "traducción de documentos para visa",
    "seguros de viaje",
    "hoteles Punta Cana",
    "paquetes vacacionales República Dominicana",
    "Santo Domingo",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_419",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.primarySlogan}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/beach-coastline-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "Traveldom Soluciones — Asesoría de viajes, visas y destinos en República Dominicana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.primarySlogan}`,
    description: siteConfig.description,
    images: ["/images/beach-coastline-aerial.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.name,
        description: siteConfig.description,
        slogan: siteConfig.primarySlogan,
        url: siteConfig.siteUrl,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phoneDisplay,
        logo: `${siteConfig.siteUrl}/images/logo-traveldom.jpg`,
        image: `${siteConfig.siteUrl}/images/beach-coastline-aerial.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santo Domingo",
          addressCountry: "DO",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "13:00",
          },
        ],
        areaServed: ["DO", "US", "ES"],
        availableLanguage: ["es"],
        priceRange: "$$",
      },
      {
        "@type": "Service",
        name: "Solicitud de Visa de Turista",
        description:
          "Asesoría y orientación para la solicitud de visa de turista a EE. UU., España y otros destinos desde República Dominicana.",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        serviceType: "Asesoría migratoria",
        areaServed: "DO",
      },
      {
        "@type": "Service",
        name: "Asesoría Consular",
        description:
          "Orientación personalizada para preparar entrevistas consulares, organización documental y acompañamiento en el proceso.",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        serviceType: "Asesoría consular",
        areaServed: "DO",
      },
      {
        "@type": "Service",
        name: "Traducción de Documentos",
        description:
          "Traducción de documentos personales, certificados y registros civiles para trámites de viaje internacionales.",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        serviceType: "Traducción documental",
        areaServed: "DO",
      },
      {
        "@type": "Service",
        name: "Seguros de Viaje",
        description:
          "Cotización y asesoría en seguros de asistencia en viaje para múltiples destinos internacionales.",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        serviceType: "Seguros de viaje",
        areaServed: "DO",
      },
      {
        "@type": "Service",
        name: "Paquetes Vacacionales República Dominicana",
        description:
          "Paquetes turísticos en Punta Cana, Bávaro, Bayahíbe, Puerto Plata y otros destinos del Caribe.",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        serviceType: "Paquetes turísticos",
        areaServed: "DO",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo puedo solicitar asesoría para mi visa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puedes completar el formulario de solicitud de asesoría en nuestra sección de contacto o escribirnos directamente por WhatsApp. Un asesor revisará tu caso para indicarte los pasos iniciales y ayudarte a organizar la información del trámite.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué documentos necesito para viajar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los requisitos varían según tu nacionalidad, el país de destino y el motivo del viaje. Generalmente se solicita pasaporte vigente, visas o autorizaciones aplicables, reservas de alojamiento o itinerario y, en ciertos destinos, seguro de viaje.",
            },
          },
          {
            "@type": "Question",
            name: "¿Traveldom garantiza la aprobación de una visa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Ninguna agencia ni asesor privado puede garantizar la aprobación de una visa. En Traveldom Soluciones te brindamos orientación profesional para organizar tus documentos y prepararte adecuadamente, pero la decisión final depende exclusivamente de las autoridades consulares competentes.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué documentos pueden traducir?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Facilitamos la traducción de documentos personales, certificados, documentos académicos, registros civiles y documentación administrativa de apoyo. Antes de iniciar, confirmamos contigo el formato requerido para tu trámite.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo puedo cotizar un seguro de viaje?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Solo indícanos tu destino, fechas de salida y regreso, y la edad aproximada de los viajeros mediante nuestro formulario o WhatsApp. Te presentaremos alternativas de asistencia acordes a las condiciones de cada póliza.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo puedo consultar hoteles en República Dominicana?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "En nuestra sección de destinos puedes explorar zonas como Punta Cana, Bávaro, Bayahíbe, Puerto Plata y Santo Domingo. Pulsa en 'Consultar disponibilidad' en cualquiera de las opciones o contáctanos indicando tus fechas para verificar alternativas reales.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo solicitar un paquete personalizado?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Diseñamos propuestas personalizadas para familias, parejas o viajeros individuales. Cuéntanos tu destino deseado, duración estimada y servicios de interés para prepararte una cotización a medida.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo puedo comunicarme con un asesor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puedes contactarnos mediante el botón flotante de WhatsApp, el formulario de asesoría en esta página o por correo electrónico dentro de nuestro horario de atención.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="es-419"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1a2433] antialiased selection:bg-[#1D5B91] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
