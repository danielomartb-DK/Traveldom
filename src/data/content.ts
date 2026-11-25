export type ServiceId =
  | "solicitud-visa"
  | "asesoria-consular"
  | "traduccion-documentos"
  | "seguros-viaje";

export interface ServiceItem {
  id: ServiceId;
  title: string;
  subtitle?: string;
  shortDescription: string;
  extendedDescription: string;
  features: string[];
  processSteps: string[];
  transparencyNote: string;
  image: string;
  imageAlt: string;
  formServiceValue: string;
  iconName: "FileCheck2" | "Building2" | "Languages" | "ShieldCheck";
}

export interface HotelItem {
  id: string;
  name: string;
  destination: "Punta Cana" | "Bávaro" | "Bayahíbe" | "Puerto Plata" | "Santo Domingo";
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  isDemo: boolean;
}

export interface PackageItem {
  id: string;
  title: string;
  categoryLabel: string;
  description: string;
  duration: string;
  includedServices: string[];
  priceLabel: string;
  image?: string;
  imageAlt?: string;
  imagePlaceholderName?: string;
  imageCaption?: string;
  destinationValue: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: "UserCheck" | "Compass" | "Layers" | "BadgeCheck";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  photo?: string;
  comment: string;
  rating: number;
}

export const SERVICE_FORM_OPTIONS = [
  "Visa Estados Unidos",
  "Visa España",
  "Asesoría consular",
  "Traducción de documentos",
  "Seguro de viaje",
  "Hoteles",
  "Paquetes vacacionales",
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "solicitud-visa",
    title: "Solicitud de visa",
    subtitle: "Visa de turista para Estados Unidos y España",
    shortDescription:
      "Te orientamos durante el proceso de solicitud de visa, ayudándote a comprender los requisitos, organizar tus documentos y prepararte para las diferentes etapas del trámite.",
    extendedDescription:
      "Acompañamos tu proceso de solicitud de visa de turista para Estados Unidos y España con una ruta clara y ordenada. Revisamos contigo la información general requerida por el trámite, te ayudamos a preparar tu documentación de respaldo y te brindamos orientación práctica para afrontar la entrevista o entrega documental con serenidad.",
    features: [
      "Orientación sobre requisitos",
      "Asesoría para formularios",
      "Organización de documentos",
      "Preparación para entrevistas cuando corresponda",
    ],
    processSteps: [
      "Evaluación inicial de tu objetivo de viaje y fechas estimadas.",
      "Lista de verificación documental adaptada a tu perfil de viajero.",
      "Orientación paso a paso para el llenado de formularios.",
      "Sesión informativa de preparación previa a la cita consular.",
    ],
    transparencyNote:
      "Traveldom Soluciones brinda asesoría privada e independiente. No representamos a ninguna embajada o consulado y no garantizamos la aprobación de visas, ya que toda decisión corresponde exclusivamente a las autoridades competentes.",
    image: "/images/service-visa-turista.jpg",
    imageAlt: "Solicitud de visa de turista: pasaporte, bandera americana y formulario sobre escritorio",
    formServiceValue: "Visa Estados Unidos",
    iconName: "FileCheck2",
  },
  {
    id: "asesoria-consular",
    title: "Asesoría consular",
    subtitle: "Orientación personalizada en procedimientos internacionales",
    shortDescription:
      "Recibe orientación personalizada sobre procedimientos consulares, requisitos y documentación necesaria para tus trámites internacionales.",
    extendedDescription:
      "Entender los procedimientos consulares puede resultar complejo cuando cambian requisitos o plazos. En Traveldom Soluciones te ofrecemos orientación estructurada para que conozcas qué documentos preparar, cómo verificar información oficial de citas y cómo presentar tu expediente de manera ordenada.",
    features: [
      "Orientación consular",
      "Revisión documental",
      "Información sobre citas",
      "Acompañamiento informativo",
    ],
    processSteps: [
      "Identificación del trámite consular y país de destino.",
      "Revisión preliminar de tu documentación disponible.",
      "Orientación sobre pasos administrativos y programación de citas.",
      "Seguimiento informativo durante la preparación de tu expediente.",
    ],
    transparencyNote:
      "Este servicio es estrictamente informativo y de acompañamiento organizativo. No tenemos vínculos ni alianzas oficiales con consulados, embajadas ni organismos gubernamentales.",
    image: "/images/service-asesoria-consular.jpg",
    imageAlt: "Asesoría consular: asesora entregando pasaporte a cliente en oficina luminosa",
    formServiceValue: "Asesoría consular",
    iconName: "Building2",
  },
  {
    id: "traduccion-documentos",
    title: "Traducción de documentos",
    subtitle: "Apoyo documental en español e inglés y otros requerimientos",
    shortDescription:
      "Facilitamos la traducción de documentos personales, académicos y administrativos para diferentes procesos y necesidades internacionales.",
    extendedDescription:
      "Apoyamos la preparación lingüística de tu carpeta de viaje o estudio mediante la traducción de documentos personales, académicos y administrativos. Cuidamos la fidelidad terminológica y la presentación clara para facilitar tus gestiones internacionales.",
    features: [
      "Certificados",
      "Documentos académicos",
      "Registros civiles",
      "Documentos personales",
    ],
    processSteps: [
      "Recepción digital o física de los documentos a traducir.",
      "Revisión de formato, legibilidad y alcance requerido.",
      "Traducción cuidada respetando nombres propios, fechas y estructura.",
      "Entrega digital y/o impresa según la necesidad del cliente.",
    ],
    transparencyNote:
      "Nota importante: Facilitamos traducciones de apoyo documental. No afirmamos que nuestras traducciones sean oficiales, judiciales o certificadas salvo confirmación explícita previa según los requisitos de la institución receptora.",
    image: "/images/service-traduccion-documentos.jpg",
    imageAlt: "Traducción de documentos: traductora firmando acta notarial en oficina de servicios internacionales",
    formServiceValue: "Traducción de documentos",
    iconName: "Languages",
  },
  {
    id: "seguros-viaje",
    title: "Seguros de viaje",
    subtitle: "Alternativas de asistencia y protección internacional",
    shortDescription:
      "Conoce alternativas de protección para viajar con mayor tranquilidad y contar con asistencia ante situaciones imprevistas.",
    extendedDescription:
      "Viajar protegido aporta tranquilidad tanto en vacaciones como en viajes familiares o de negocios. Te ayudamos a comparar opciones de asistencia al viajero acordes a tu destino, duración de estadía y requisitos de ingreso, explicando claramente coberturas y condiciones generales de cada póliza.",
    features: [
      "Asistencia médica según póliza",
      "Protección de equipaje según cobertura",
      "Asistencia durante el viaje",
      "Opciones de cobertura internacional",
    ],
    processSteps: [
      "Definición de destino, fechas de viaje y número de pasajeros.",
      "Presentación comparativa de alternativas de cobertura.",
      "Explicación clara de alcances médicos, equipaje y asistencia.",
      "Emisión y envío de comprobantes para tu viaje.",
    ],
    transparencyNote:
      "Los alcances, montos máximos, exclusiones y condiciones dependen íntegramente de la póliza seleccionada y de la aseguradora correspondiente.",
    image: "/images/service-seguros-viaje.jpg",
    imageAlt: "Seguros de viaje: pasaporte, avión de juguete, billetes de avión y estetoscopio sobre formulario de seguro",
    formServiceValue: "Seguro de viaje",
    iconName: "ShieldCheck",
  },
];

export const RD_DESTINATIONS = [
  "Todos",
  "Punta Cana",
  "Bávaro",
  "Bayahíbe",
  "Puerto Plata",
  "Santo Domingo",
] as const;

export const HOTELS_RD: HotelItem[] = [
  {
    id: "hotel-demo-1",
    name: "Hotel Demo 1 — Resort Frente al Mar",
    destination: "Punta Cana",
    description:
      "Propiedad de demostración frente a aguas turquesas, pensada para estadías familiares o en pareja con amplias zonas de piscina y acceso directo a la playa.",
    features: [
      "Acceso directo a playa de arena blanca",
      "Piscinas exteriores y áreas de descanso",
      "Opciones gastronómicas y actividades diurnas",
      "Disponibilidad y tarifas sujetas a consulta",
    ],
    image: "/images/resort-aerial-punta-cana.jpg",
    imageAlt: "Vista aérea de resort frente al mar con piscinas y palmeras en Punta Cana",
    isDemo: true,
  },
  {
    id: "hotel-demo-2",
    name: "Hotel Demo 2 — Club Tropical & Palapa",
    destination: "Bávaro",
    description:
      "Alojamiento de demostración rodeado de palmeras caribeñas y amplias terrazas junto a la piscina, ideal para desconectar bajo el sol de Bávaro.",
    features: [
      "Piscina central con área de palapa",
      "Tumbonas y jardines tropicales",
      "Ambiente relajado para escapadas de descanso",
      "Información de habitaciones bajo solicitud",
    ],
    image: "/images/resort-palapa-pool.jpg",
    imageAlt: "Piscina de resort rodeada de palmeras y palapa en Bávaro",
    isDemo: true,
  },
  {
    id: "hotel-demo-3",
    name: "Hotel Demo 3 — Laguna Caribeña",
    destination: "Bayahíbe",
    description:
      "Ejemplo de resort costero en ambiente sereno, con piscina estilo laguna rodeada de vegetación tropical y cercanía a excursiones marítimas.",
    features: [
      "Piscina panorámica estilo laguna",
      "Entorno tranquilo cercano al mar",
      "Espacios pensados para descanso en familia",
      "Consulta de fechas y disponibilidad directa",
    ],
    image: "/images/resort-lagoon-pool.jpg",
    imageAlt: "Piscina estilo laguna con aguas turquesas y palmeras en Bayahíbe",
    isDemo: true,
  },
  {
    id: "hotel-demo-4",
    name: "Hotel Demo 4 — Oasis Costero",
    destination: "Puerto Plata",
    description:
      "Referencia demostrativa de hospedaje en la costa norte dominicana, combinando arquitectura abierta, brisa marina y amplios espacios al aire libre.",
    features: [
      "Piscina amplia con islas de palmeras",
      "Cercanía a atractivos de la costa norte",
      "Alternativas para viajes en grupo o pareja",
      "Cotización personalizada según temporada",
    ],
    image: "/images/resort-palms-pool.jpg",
    imageAlt: "Resort caribeño con piscina amplia y palmeras bajo cielo azul en Puerto Plata",
    isDemo: true,
  },
  {
    id: "hotel-demo-5",
    name: "Hotel Demo 5 — Patio Colonial Boutique",
    destination: "Santo Domingo",
    description:
      "Propiedad de demostración inspirada en el encanto histórico de Santo Domingo, con arcos de ladrillo, patio interior y piscina privada de descanso.",
    features: [
      "Arquitectura colonial con arcos de ladrillo",
      "Patio interior con piscina de inmersión",
      "Ubicación cultural y gastronómica céntrica",
      "Ideal para estadías urbanas o ejecutivas",
    ],
    image: "/images/hotel-colonial-patio-1.jpg",
    imageAlt: "Patio interior colonial de ladrillo con piscina boutique en Santo Domingo",
    isDemo: true,
  },
  {
    id: "hotel-demo-6",
    name: "Hotel Demo 6 — Casa Histórica Colonial",
    destination: "Santo Domingo",
    description:
      "Espacio boutique de demostración que combina tradición arquitectónica, vegetación tropical y confort moderno en el corazón histórico de la ciudad.",
    features: [
      "Ambiente íntimo y atención cercana",
      "Terraza soleada con tumbonas y piscina",
      "Entorno tranquilo para viajes de placer o trámites",
      "Disponibilidad verificable con nuestros asesores",
    ],
    image: "/images/hotel-colonial-patio-2.jpg",
    imageAlt: "Terraza colonial con tumbonas verdes y piscina en Santo Domingo",
    isDemo: true,
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: "paquete-rd",
    title: "Vacaciones en República Dominicana",
    categoryLabel: "Caribe y Playas",
    description:
      "Escapadas diseñadas para disfrutar las playas de Punta Cana, Bávaro, Bayahíbe, Puerto Plata o el encanto histórico de Santo Domingo.",
    duration: "Duración editable (ej. 3 a 7 noches)",
    includedServices: [
      "Opciones de alojamiento según presupuesto y estilo",
      "Orientación de traslados aeropuerto - hotel",
      "Recomendaciones de actividades y excursiones",
      "Acompañamiento personalizado antes y durante el viaje",
    ],
    priceLabel: "Solicitar cotización",
    image: "/images/beach-coastline-aerial.jpg",
    imageAlt: "Vista aérea de costa turquesa y resort en República Dominicana",
    destinationValue: "República Dominicana",
  },
  {
    id: "paquete-eeuu",
    title: "Viajes a Estados Unidos",
    categoryLabel: "Destinos Norteamérica",
    description:
      "Planificación organizada para visitar ciudades icónicas como Nueva York, Miami u Orlando, combinando asesoría de viaje y hospedaje.",
    duration: "Duración editable según itinerario",
    includedServices: [
      "Orientación previa sobre requisitos de ingreso",
      "Propuesta de alojamiento en ubicaciones estratégicas",
      "Alternativas de seguro de asistencia internacional",
      "Itinerario sugerido adaptado a tus intereses",
    ],
    priceLabel: "Solicitar cotización",
    imagePlaceholderName: "destinos-eeuu.jpg",
    imageCaption: "Nueva York y destinos principales en Estados Unidos",
    destinationValue: "Estados Unidos",
  },
  {
    id: "paquete-europa",
    title: "Viajes a Europa",
    categoryLabel: "España y Circuitos",
    description:
      "Experiencias culturales y urbanas por Madrid, Barcelona y otras ciudades europeas con planificación estructurada y respaldo documental.",
    duration: "Duración editable (ej. 7 a 14 días)",
    includedServices: [
      "Diseño de ruta por ciudades de España y Europa",
      "Opciones de hoteles céntricos y traslados",
      "Orientación de requisitos de entrada y seguros",
      "Asistencia informativa previa a la salida",
    ],
    priceLabel: "Solicitar cotización",
    imagePlaceholderName: "destinos-europa.jpg",
    imageCaption: "Barcelona, Madrid y arquitectura europea",
    destinationValue: "España / Europa",
  },
  {
    id: "paquete-personalizado",
    title: "Paquetes personalizados",
    categoryLabel: "A tu medida",
    description:
      "Itinerarios creados desde cero para familias, parejas, viajes de descanso o celebraciones especiales, ajustados a tus tiempos y preferencias.",
    duration: "Duración 100% adaptable",
    includedServices: [
      "Asesoría uno a uno para definir destino y fechas",
      "Selección de alojamiento y servicios complementarios",
      "Integración de seguro de viaje y orientación consular",
      "Seguimiento cercano desde la planificación",
    ],
    priceLabel: "Solicitar cotización",
    imagePlaceholderName: "paquetes-personalizados.jpg",
    imageCaption: "Viajes a medida para familias, parejas y viajeros",
    destinationValue: "Destino personalizado",
  },
];

export const WHY_CHOOSE_BENEFITS: BenefitItem[] = [
  {
    id: "atencion-personalizada",
    title: "Atención personalizada",
    description:
      "Escuchamos tu necesidad específica y adaptamos nuestra orientación a tu perfil, fechas y destino.",
    iconName: "UserCheck",
  },
  {
    id: "orientacion-proceso",
    title: "Orientación durante el proceso",
    description:
      "Te acompañamos paso a paso para que prepares tu documentación e itinerario con claridad y orden.",
    iconName: "Compass",
  },
  {
    id: "soluciones-integrales",
    title: "Soluciones integrales",
    description:
      "Reunimos asesoría de viaje, traducción documental, seguros, alojamiento y paquetes en un solo lugar.",
    iconName: "Layers",
  },
  {
    id: "compromiso-transparencia",
    title: "Compromiso y transparencia",
    description:
      "Comunicación honesta y responsable: sin falsas garantías ni costos ocultos en cada gestión.",
    iconName: "BadgeCheck",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo puedo solicitar asesoría para mi visa?",
    answer:
      "Puedes completar el formulario de solicitud de asesoría en nuestra sección de contacto o escribirnos directamente por WhatsApp. Un asesor revisará tu caso para indicarte los pasos iniciales y ayudarte a organizar la información del trámite.",
  },
  {
    id: "faq-2",
    question: "¿Qué documentos necesito para viajar?",
    answer:
      "Los requisitos varían según tu nacionalidad, el país de destino y el motivo del viaje. Generalmente se solicita pasaporte vigente, visas o autorizaciones aplicables, reservas de alojamiento o itinerario y, en ciertos destinos, seguro de viaje. Te orientamos según tu ruta específica.",
  },
  {
    id: "faq-3",
    question: "¿Traveldom garantiza la aprobación de una visa?",
    answer:
      "No. Ninguna agencia ni asesor privado puede garantizar la aprobación de una visa. En Traveldom Soluciones te brindamos orientación profesional para organizar tus documentos y prepararte adecuadamente, pero la decisión final depende exclusivamente de las autoridades consulares competentes.",
  },
  {
    id: "faq-4",
    question: "¿Qué documentos pueden traducir?",
    answer:
      "Facilitamos la traducción de documentos personales, certificados, documentos académicos, registros civiles y documentación administrativa de apoyo. Antes de iniciar, confirmamos contigo el formato requerido para tu trámite; no afirmamos que las traducciones sean oficiales o certificadas sin verificación previa del alcance necesario.",
  },
  {
    id: "faq-5",
    question: "¿Cómo puedo cotizar un seguro de viaje?",
    answer:
      "Solo indícanos tu destino, fechas de salida y regreso, y la edad aproximada de los viajeros mediante nuestro formulario o WhatsApp. Te presentaremos alternativas de asistencia acordes a las condiciones de cada póliza.",
  },
  {
    id: "faq-6",
    question: "¿Cómo puedo consultar hoteles en República Dominicana?",
    answer:
      "En nuestra sección de destinos puedes explorar zonas como Punta Cana, Bávaro, Bayahíbe, Puerto Plata y Santo Domingo. Pulsa en \"Consultar disponibilidad\" en cualquiera de las opciones o contáctanos indicando tus fechas para verificar alternativas reales.",
  },
  {
    id: "faq-7",
    question: "¿Puedo solicitar un paquete personalizado?",
    answer:
      "Sí. Diseñamos propuestas personalizadas para familias, parejas o viajeros individuales. Cuéntanos tu destino deseado, duración estimada y servicios de interés para prepararte una cotización a medida.",
  },
  {
    id: "faq-8",
    question: "¿Cómo puedo comunicarme con un asesor?",
    answer:
      "Puedes contactarnos mediante el botón flotante de WhatsApp, el formulario de asesoría en esta página o por correo electrónico dentro de nuestro horario de atención.",
  },
];

// Estructura lista para testimonios reales autorizados (actualmente oculta por configuración)
export const TESTIMONIALS: TestimonialItem[] = [];

