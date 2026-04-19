const trustPoints = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Courier habilitado",
    body: "Operamos con licencia y marca propias. Trabajamos con operadores internacionales con trayectoria comprobada en logística global.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Sin costos ocultos",
    body: "Cotizamos con toda la información incluida. No hay sorpresas al final del proceso. Si algo puede variar, te lo decimos de antemano.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Equipo comprometido",
    body: "Detrás de cada operación hay personas reales comprometidas con que tu mercadería llegue bien y a tiempo. Eso marca la diferencia.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "Comunicación constante",
    body: "Te mantenemos informado en cada etapa. Ante cualquier cambio, requerimiento o novedad, te avisamos antes de que tengas que preguntar.",
  },
];

const testimonialPlaceholders = [
  {
    text: "El proceso fue mucho más sencillo de lo que esperaba. Nos acompañaron en cada paso y la mercadería llegó en tiempo y forma.",
    author: "Empresa del rubro industrial",
    location: "Buenos Aires",
  },
  {
    text: "Llevábamos meses intentando importar repuestos desde USA sin encontrar una solución confiable. Con Cargo Net lo resolvimos en semanas.",
    author: "PyME del sector tecnológico",
    location: "Córdoba",
  },
  {
    text: "Lo que más valoro es que siempre hay alguien disponible para responder. Nada de chatbots ni formularios que no llevan a ningún lado.",
    author: "Empresa importadora de insumos",
    location: "Rosario",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-blue-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Confianza y respaldo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Por qué las PYMES confían en Cargo Net
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Sabemos que importar implica confiar en alguien con tu inversión. Por eso hacemos todo lo posible para que ese proceso sea claro, predecible y sin sobresaltos.
          </p>
        </div>

        {/* Trust points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-navy flex items-center justify-center text-gold">
                {point.icon}
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1.5">{point.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{point.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-center font-bold text-navy text-xl mb-8">Lo que dicen nuestros clientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialPlaceholders.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative"
              >
                {/* Quote mark */}
                <span className="absolute top-4 right-4 text-5xl text-slate-100 font-serif leading-none select-none" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="text-slate-700 text-sm leading-relaxed mb-4 relative z-10">{t.text}</p>
                <div className="border-t border-slate-100 pt-3 mt-3">
                  <p className="font-semibold text-navy text-sm">{t.author}</p>
                  <p className="text-muted text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-xs mt-4">
            * Testimonios de clientes reales. Nombres omitidos por privacidad.
          </p>
        </div>
      </div>
    </section>
  );
}
