// ─────────────────────────────────────────────────────────────
// CARGO NET — Constantes globales
// Actualizar estos valores antes del deploy en producción
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Cargo Net",
  tagline: "Courier internacional B2B para PYMES argentinas",
  description:
    "Importamos tu mercadería desde USA y el mundo hacia Argentina, con asesoramiento, seguimiento y gestión simple.",
  url: "https://cargonet.com.ar", // TODO: actualizar con dominio real
  email: "info@cargonet.com.ar", // TODO: actualizar
  phone: "+54 11 0000-0000", // TODO: actualizar
};

// ─── WhatsApp ────────────────────────────────────────────────
// Reemplazar con el número real en formato internacional (sin +, sin espacios)
export const WHATSAPP_NUMBER = "5491100000000"; // TODO: reemplazar con número real

export const WHATSAPP_MESSAGES = {
  default: "Hola, me gustaría consultar sobre el servicio de Cargo Net.",
  cotizar:
    "Hola, quiero solicitar una cotización para importar mercadería desde el exterior.",
  seguimiento:
    "Hola, necesito información sobre el seguimiento de mi envío.",
};

export function getWhatsAppUrl(message: keyof typeof WHATSAPP_MESSAGES = "default") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGES[message]
  )}`;
}

// ─── Navegación ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Cómo funciona", href: "/como-funciona" },
  { label: "Aduana", href: "/aduana-y-requisitos" },
  { label: "Seguimiento", href: "/seguimiento" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

// ─── Horarios de atención ────────────────────────────────────
export const BUSINESS_HOURS = "Lunes a viernes, 9:00 a 18:00 hs (Argentina)";

// ─── SEO defaults ────────────────────────────────────────────
export const SEO_DEFAULTS = {
  titleTemplate: "%s | Cargo Net — Courier Internacional",
  defaultTitle: "Cargo Net — Courier Internacional para PYMES argentinas",
  defaultDescription:
    "Importá desde USA y el mundo a Argentina con Cargo Net. Asesoramiento, seguimiento y gestión simple para PYMES. Cotizá tu envío hoy.",
  keywords: [
    "courier internacional argentina",
    "importar desde usa a argentina",
    "courier usa argentina",
    "traer mercaderia de usa",
    "importacion para pymes argentina",
    "envios internacionales argentina",
    "courier para empresas argentina",
    "importacion puerta a puerta argentina",
    "como importar desde usa",
    "courier b2b argentina",
  ],
};
