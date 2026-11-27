import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { buildWhatsAppUrl, siteConfig } from "@/config/site";
import { SERVICES } from "@/data/content";
import { SocialBrandIcon, WhatsAppIcon } from "./SocialIcons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#102D52] text-white/90 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Marca y eslogan */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-lg bg-white p-0.5">
                <Image
                  src="/images/logo-traveldom.jpg"
                  alt="Logotipo de Traveldom Soluciones"
                  fill
                  sizes="44px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-poppins)] text-lg font-bold text-white">
                  {siteConfig.name}
                </p>
                <p className="text-xs font-medium text-[#C9A66B]">
                  {siteConfig.primarySlogan}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/75">
              {siteConfig.description}
            </p>
            <p className="text-xs font-medium italic text-[#EAF4FC]">
              “{siteConfig.secondarySlogan}”
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:col-span-2">
            <h3 className="font-[family-name:var(--font-poppins)] text-sm font-semibold uppercase tracking-wider text-[#C9A66B]">
              Enlaces rápidos
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-[#0E9AA7]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios y destinos */}
          <div className="lg:col-span-3">
            <h3 className="font-[family-name:var(--font-poppins)] text-sm font-semibold uppercase tracking-wider text-[#C9A66B]">
              Servicios y destinos
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicios"
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#destinos"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Destinos en República Dominicana
                </a>
              </li>
              <li>
                <a
                  href="#paquetes"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Paquetes vacacionales
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto y redes */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-[family-name:var(--font-poppins)] text-sm font-semibold uppercase tracking-wider text-[#C9A66B]">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#C9A66B]" strokeWidth={1.75} aria-hidden="true" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.whatsappNumber}`}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#C9A66B]" strokeWidth={1.75} aria-hidden="true" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
                </a>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 transition-colors hover:border-[#C9A66B]/50 hover:text-white"
                >
                  <SocialBrandIcon name={social.name} className="h-3.5 w-3.5 text-[#C9A66B]" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer legal obligatorio */}
        <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-xs leading-relaxed text-white/75">
          <strong className="text-[#C9A66B]">Aviso legal y de transparencia:</strong>{" "}
          {siteConfig.legalDisclaimer}
        </div>

        {/* Barra inferior legal */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/70 md:flex-row">
          <p>
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/politica-privacidad" className="hover:text-white underline-offset-4 hover:underline">
              Política de privacidad
            </Link>
            <Link href="/tratamiento-datos" className="hover:text-white underline-offset-4 hover:underline">
              Tratamiento de datos
            </Link>
            <Link href="/terminos-condiciones" className="hover:text-white underline-offset-4 hover:underline">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

