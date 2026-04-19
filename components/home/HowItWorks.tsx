import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Nos enviás los datos",
    description:
      "Completás el formulario de cotización o nos escribís por WhatsApp con los datos del envío: qué, desde dónde, peso y valor estimado.",
  },
  {
    number: "02",
    title: "Te cotizamos",
    description:
      "En menos de 24 horas hábiles recibís una cotización clara con el detalle de costos, tiempos estimados y condiciones del servicio.",
  },
  {
    number: "03",
    title: "Coordinamos el retiro",
    description:
      "Si aceptás, coordinamos el retiro en origen (depósito, proveedor o dirección) y preparamos la documentación necesaria.",
  },
  {
    number: "04",
    title: "Gestionamos aduana",
    description:
      "Nos encargamos de todos los trámites aduaneros. Te avisamos ante cualquier requerimiento o novedad en el proceso.",
  },
  {
    number: "05",
    title: "Seguimiento en tiempo real",
    description:
      "Vas a poder seguir el estado de tu envío en todo momento. Cada paso importante te llega por mail o WhatsApp.",
  },
  {
    number: "06",
    title: "Entrega en Argentina",
    description:
      "Tu mercadería llega a destino en Argentina. Coordinamos la entrega y te acompañamos hasta el cierre de la operación.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-blue-brand font-semibold text-sm uppercase tracking-wider mb-3">
            El proceso
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Cómo funciona Cargo Net
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Un proceso claro y transparente, de principio a fin. Sin sorpresas.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover">
              {/* Step number */}
              <span className="text-5xl font-black text-slate-100 leading-none block mb-4 select-none">
                {step.number}
              </span>
              {/* Connector line (decorative) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-slate-200 z-10" aria-hidden="true" />
              )}
              <h3 className="font-bold text-navy text-lg mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/como-funciona"
            className="inline-flex items-center gap-2 text-blue-brand font-semibold hover:text-blue-dark transition-colors"
          >
            Ver el proceso detallado
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
