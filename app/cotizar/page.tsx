import type { Metadata } from "next";
import QuoteForm from "@/components/forms/QuoteForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cotizá tu envío",
  description:
    "Solicitá tu cotización de importación internacional. Completá el formulario y te respondemos en menos de 24 horas. Sin costo ni compromiso.",
  alternates: { canonical: `${SITE.url}/cotizar` },
};

const trustItems = [
  { icon: "⚡", text: "Respuesta en menos de 24hs hábiles" },
  { icon: "🔒", text: "Sin costo ni compromiso" },
  { icon: "👤", text: "Asesor asignado a tu cuenta" },
  { icon: "🌎", text: "USA y 30+ países de origen" },
];

export default function CotizarPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page header */}
      <div className="bg-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Sin costo · Sin compromiso
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Cotizá tu envío
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Completá el formulario con los datos de tu mercadería y te enviamos una cotización detallada en menos de 24 horas hábiles.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form — main column */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Trust block */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="font-bold text-navy text-base mb-4">¿Por qué elegirnos?</h2>
              <ul className="space-y-3">
                {trustItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp alternative */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="font-bold text-navy text-base mb-2">¿Preferís hablar directamente?</h2>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                Si tenés dudas o preferís coordinar por WhatsApp, escribinos y te respondemos enseguida.
              </p>
              <WhatsAppButton size="md" message="cotizar" className="w-full justify-center">
                Escribir por WhatsApp
              </WhatsAppButton>
            </div>

            {/* Process reminder */}
            <div className="bg-blue-light rounded-2xl border border-blue-brand/20 p-6">
              <h2 className="font-bold text-navy text-base mb-3">Cómo funciona</h2>
              <ol className="space-y-2 text-sm text-slate-700">
                {[
                  "Completás el formulario",
                  "Te cotizamos en 24hs",
                  "Si aceptás, coordinamos el retiro",
                  "Seguimiento hasta la entrega",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-brand text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
