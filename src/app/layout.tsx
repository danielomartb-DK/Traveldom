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
  description: siteConfig.description,
  keywords: [
    "Traveldom Soluciones",
    "asesoría de visas",
    "visa Estados Unidos",
    "visa España",
    "asesoría consular",
    "traducción de documentos",
    "seguros de viaje",
    "hoteles República Dominicana",
    "paquetes vacacionales",
    "Punta Cana",
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
    "@type": "TravelAgency",
    name: siteConfig.name,
    description: siteConfig.description,
    slogan: siteConfig.primarySlogan,
    url: siteConfig.siteUrl,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneDisplay,
    logo: `${siteConfig.siteUrl}/images/logo-traveldom.jpg`,
    image: `${siteConfig.siteUrl}/images/beach-coastline-aerial.jpg`,
    areaServed: ["DO", "US", "ES"],
    availableLanguage: ["es"],
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
