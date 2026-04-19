import Link from "next/link";

const categories = [
  {
    icon: "⚙️",
    title: "Repuestos y maquinaria",
    description: "Partes, piezas y equipamiento industrial para mantener tu producción activa.",
  },
  {
    icon: "💻",
    title: "Electrónica y tecnología",
    description: "Dispositivos, componentes electrónicos, periféricos y equipos de cómputo.",
  },
  {
    icon: "📦",
    title: "Insumos y materias primas",
    description: "Materiales para producción, embalaje, laboratorio o insumos específicos de tu rubro.",
  },
  {
    icon: "🛒",
    title: "Productos comerciales",
    description: "Artículos para reventa, importación de mercadería para tu negocio o tienda.",
  },
  {
    icon: "🧪",
    title: "Muestras y prototipos",
    description: "Muestras de productos nuevos, prototipos o piezas para evaluación antes de compras mayores.",
  },
  {
    icon: "🎨",
    title: "Materiales especializados",
    description: "Materiales de diseño, herramientas específicas, equipamiento para industrias creativas o técnicas.",
  },
];

export default function WhatYouCanImport() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-blue-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Qué podés importar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Traemos todo tipo de mercadería
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Trabajamos con distintos tipos de productos y rubros. Estas son algunas de las categorías más frecuentes.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 hover:border-blue-brand/30 hover:shadow-sm transition-all group bg-white"
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{cat.icon}</span>
              <div>
                <h3 className="font-semibold text-navy text-base mb-1 group-hover:text-blue-brand transition-colors">
                  {cat.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-3 bg-gold-light border border-gold/30 rounded-xl p-4">
            <svg
              className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="text-navy font-semibold text-sm mb-0.5">Sobre restricciones</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Algunos productos pueden tener restricciones o requerimientos especiales de importación en Argentina.
                Antes de confirmar una operación, evaluamos juntos el tipo de mercadería y te informamos si hay
                alguna consideración particular.{" "}
                <Link href="/aduana-y-requisitos" className="text-blue-brand underline hover:text-blue-dark">
                  Conocé más sobre aduana y requisitos.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
