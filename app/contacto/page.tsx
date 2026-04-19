import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE, BUSINESS_HOURS, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con Cargo Net. Estamos disponibles por WhatsApp, email o formulario. Respondemos en menos de 24 horas hábiles.",
  alternates: { canonical: `${SITE.url}/contacto` },
};

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "WhatsApp",
    value: SITE.phone,
    href: getWhatsAppUrl("default"),
    external: true,
    highlight: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Horario de atención",
    value: BUSINESS_HOURS,
    href: null,
    external: false,
    highlight: false,
  },
];

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Estamos para ayudarte
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contacto
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Respondemos todas las consultas en menos de 24 horas hábiles. También podés escribirnos por WhatsApp para una respuesta más rápida.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info sidebar */}
          <aside className="space-y-5">
            {/* WhatsApp CTA */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-6 text-center">
              <p className="font-bold text-navy text-base mb-2">Respuesta rápida</p>
              <p className="text-muted text-sm mb-4">
                Para consultas urgentes o si preferís hablar directamente, escribinos por WhatsApp.
              </p>
              <WhatsAppButton size="md" message="default" className="w-full justify-center">
                Escribir por WhatsApp
              </WhatsAppButton>
            </div>

            {/* Contact methods */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100">
              {contactMethods.map((method, i) => (
                <div key={i} className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center text-blue-brand flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted font-medium uppercase tracking-wide mb-0.5">
                        {method.label}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.external ? "_blank" : undefined}
                          rel={method.external ? "noopener noreferrer" : undefined}
                          className="text-navy font-semibold text-sm hover:text-blue-brand transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-navy font-semibold text-sm">{method.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="font-semibold text-navy text-sm">Tiempo de respuesta</p>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Respondemos consultas y formularios en menos de <strong>24 horas hábiles</strong>. Para urgencias, WhatsApp es la vía más rápida.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
            <h2 className="font-bold text-navy text-xl mb-1">Envianos un mensaje</h2>
            <p className="text-muted text-sm mb-6">
              Completá el formulario y te respondemos a la brevedad.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
