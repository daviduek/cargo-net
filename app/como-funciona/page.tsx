import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "Entendé el proceso de importación con Cargo Net paso a paso. Desde la cotización hasta la entrega de tu mercadería en Argentina.",
  alternates: { canonical: `${SITE.url}/como-funciona` },
};

const steps = [
  {
    number: "01",
    title: "Nos enviás los datos de tu envío",
    description:
      "Todo empieza con una consulta. Podés completar el formulario de cotización en nuestra web o escribirnos directamente por WhatsApp. Necesitamos saber qué querés importar, desde dónde, el valor estimado y el peso aproximado.",
    details: [
      "Tipo y descripción de la mercadería",
      "País y ciudad de origen",
      "Valor comercial estimado (en USD)",
      "Peso y dimensiones aproximadas",
      "Urgencia del envío",
    ],
    cta: { label: "Completar formulario", href: "/cotizar" },
  },
  {
    number: "02",
    title: "Te enviamos una cotización detallada",
    description:
      "En menos de 24 horas hábiles recibís una cotización clara con todos los costos involucrados: flete, gestión aduanera, seguro y cualquier cargo adicional. Sin letra chica.",
    details: [
      "Costo total del servicio",
      "Tiempos estimados de entrega",
      "Condiciones del servicio",
      "Qué incluye y qué no incluye",
    ],
  },
  {
    number: "03",
    title: "Aceptás y coordinamos el retiro",
    description:
      "Si la cotización te conviene, avanzamos. Coordinamos el retiro de tu mercadería en el depósito, proveedor o dirección que nos indiques en el país de origen.",
    details: [
      "Coordinación directa con el proveedor o depósito",
      "Confirmación de fechas de retiro",
      "Verificación de la mercadería",
    ],
  },
  {
    number: "04",
    title: "Gestionamos la documentación y aduana",
    description:
      "Nos encargamos de toda la documentación necesaria para el transporte internacional y el despacho aduanero en Argentina. Te mantenemos informado en caso de que se requiera algo de tu parte.",
    details: [
      "Factura comercial y packing list",
      "Documentación de transporte (AWB/BL)",
      "Trámites de aduana argentina",
      "Comunicación ante requerimientos especiales",
    ],
  },
  {
    number: "05",
    title: "Seguimiento en tiempo real",
    description:
      "Podés seguir el estado de tu envío en todo momento a través de nuestra sección de seguimiento. Además, te enviamos actualizaciones por email o WhatsApp en cada hito importante.",
    details: [
      "Número de tracking asignado",
      "Actualizaciones por email y WhatsApp",
      "Notificación de llegada a Argentina",
      "Comunicación de estado aduanero",
    ],
    cta: { label: "Seguir un envío", href: "/seguimiento" },
  },
  {
    number: "06",
    title: "Entrega en Argentina",
    description:
      "Una vez liberada la mercadería de aduana, coordinamos la entrega en Buenos Aires o en el interior del país. Cerramos la operación cuando vos confirmás que todo llegó en orden.",
    details: [
      "Coordinación de entrega en destino",
      "Notificación de fecha y horario",
      "Cierre y confirmación de operación",
    ],
  },
];

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            El proceso
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Cómo funciona Cargo Net
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Un proceso simple, claro y transparente. Te acompañamos desde la primera consulta hasta la entrega en Argentina.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 sm:gap-10">
                {/* Step indicator */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-gold font-black text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 mt-3 min-h-[40px]" aria-hidden="true" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3">{step.title}</h2>
                  <p className="text-muted leading-relaxed mb-4">{step.description}</p>

                  {/* Details list */}
                  <ul className="space-y-1.5 mb-4">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <svg
                          className="w-4 h-4 text-blue-brand flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {step.cta && (
                    <Link
                      href={step.cta.href}
                      className="inline-flex items-center gap-2 text-blue-brand font-semibold text-sm hover:text-blue-dark transition-colors"
                    >
                      {step.cta.label}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            ¿Listo para importar?
          </h2>
          <p className="text-muted mb-8">
            Empezá con una cotización sin cargo. Te respondemos en menos de 24 horas hábiles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cotizar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-brand text-white rounded-xl font-bold hover:bg-blue-dark transition-all shadow-lg"
            >
              Cotizá tu envío
            </Link>
            <WhatsAppButton size="lg" message="cotizar">
              O escribinos por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
