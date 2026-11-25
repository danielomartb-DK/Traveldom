export const siteConfig = {
  name: "Traveldom Soluciones",
  primarySlogan: "Tu aliado en cada viaje, en cada destino",
  secondarySlogan: "Viaja tranquilo, nosotros te acompañamos",
  description:
    "Asesoría integral para trámites de viaje, orientación consular, traducción de documentos, seguros de viaje, alojamiento en República Dominicana y paquetes vacacionales.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://traveldomsoluciones.com",
  locale: "es-419",

  // Único punto de configuración para el número de WhatsApp (código de país + número sin + ni espacios)
  whatsappNumber: "18090000000",
  whatsappDefaultMessage:
    "Hola, estoy interesado en conocer los servicios de Traveldom Soluciones. Me gustaría recibir información y asesoría.",

  contact: {
    email: "contacto@traveldomsoluciones.com",
    phoneDisplay: "+1 (809) 000-0000",
    whatsappDisplay: "+1 (809) 000-0000",
    hours: "Lun - Vie: 9:00 a.m. - 6:00 p.m. | Sáb: 9:00 a.m. - 1:00 p.m.",
    location: "Santo Domingo, República Dominicana (Datos de contacto demostrativos)",
  },

  socials: [
    {
      name: "Instagram",
      href: "https://instagram.com",
      ariaLabel: "Visitar perfil de Instagram de Traveldom Soluciones (enlace de ejemplo)",
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      ariaLabel: "Visitar página de Facebook de Traveldom Soluciones (enlace de ejemplo)",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      ariaLabel: "Visitar perfil de LinkedIn de Traveldom Soluciones (enlace de ejemplo)",
    },
  ],

  navLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Destinos", href: "#destinos" },
    { label: "Paquetes", href: "#paquetes" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],

  // Oculto por regla de transparencia: no mostrar testimonios hasta contar con opiniones reales verificadas
  showTestimonials: false,

  legalDisclaimer:
    "Traveldom Soluciones es una empresa privada de asesoría de viajes, orientación documental y planificación turística. No somos una entidad gubernamental, embajada ni consulado, ni mantenemos alianzas oficiales con representaciones diplomáticas. La evaluación y aprobación de cualquier solicitud de visa depende exclusivamente de las autoridades consulares competentes.",
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  const message = customMessage ?? siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

