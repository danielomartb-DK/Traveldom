import { Clock, Mail, Phone, Globe, Share2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function TopBar() {
  return (
    <div className="bg-[#102D52] text-white/90 text-xs border-b border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#C9A66B]"
          >
            <Mail className="h-3.5 w-3.5 text-[#C9A66B]" strokeWidth={1.75} aria-hidden="true" />
            <span>{siteConfig.contact.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.whatsappNumber}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#C9A66B]"
          >
            <Phone className="h-3.5 w-3.5 text-[#C9A66B]" strokeWidth={1.75} aria-hidden="true" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
          <span className="hidden md:inline-flex items-center gap-1.5 text-white/90">
            <Clock className="h-3.5 w-3.5 text-[#C9A66B]" strokeWidth={1.75} aria-hidden="true" />
            <span>{siteConfig.contact.hours}</span>
          </span>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4">
          <span className="md:hidden inline-flex items-center gap-1.5 text-[11px] text-white/90">
            <Clock className="h-3 w-3 text-[#C9A66B]" strokeWidth={1.75} aria-hidden="true" />
            <span>{siteConfig.contact.hours}</span>
          </span>
          <div className="flex items-center gap-3" aria-label="Redes sociales">
            <span className="hidden lg:inline text-white/90">Síguenos:</span>
            {siteConfig.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                title={`${social.name} (placeholder)`}
                className="inline-flex items-center gap-1 text-white/90 transition-colors hover:text-[#C9A66B]"
              >
                {social.name === "Instagram" ? (
                  <Globe className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                ) : (
                  <Share2 className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                )}
                <span className="text-[11px] font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

