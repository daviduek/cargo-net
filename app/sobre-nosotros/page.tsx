import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conocé a Cargo Net: courier internacional B2B para PYMES argentinas. Nuestra misión es simplificar la importación desde USA y el mundo hacia Argentina.",
  alternates: { canonical: `${SITE.url}/sobre-nosotros` },
};

const values = [
  {
    icon: "🤝",
    title: "Acompañamiento real",
    description:
      "No somos un formulario ni un sistema automatizado. Detrás de cada operación hay personas que conocen tu caso y se preocupan por que salga bien.",
  },
  {
    icon: "🔍",
    title: "Transparencia",
    description:
      "Te decimos exactamente cuánto cuesta, cuánto tarda y qué incluye el servicio. Sin sorpresas, sin letra chica.",
  },
  {
    icon: "🎯",
    title: "Foco en PYMES",
    description:
      "Entendemos que las PYMES argentinas necesitan soluciones serias pero accesibles. Eso es lo que ofrecemos.",
  },
  {
    icon: "⚡",
    title: "Agilidad",
    description:
      "Respondemos rápido, decidimos rápido y nos adaptamos a las necesidades de cada cliente.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Nuestra empresa
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Sobre Cargo Net
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Somos un courier internacional B2B con licencia y marca propia, especializado en traer mercadería desde USA y el mundo hacia Argentina.
          </p>
        </div>
      </div>

      {/* Mission section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-blue-brand font-semibold text-sm uppercase tracking-wider mb-3">
                Nuestra misión
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                Simplificar la importación para las PYMES argentinas
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Sabemos que importar puede parecer complejo, burocrático e incierto. Hay muchos actores involucrados, terminología específica y procesos que no siempre son claros.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Nuestra misión es cambiar eso. Queremos que cualquier PYME argentina pueda traer mercadería del exterior de forma simple, con soporte real y sin sentirse perdida en el proceso.
              </p>
              <p className="text-muted leading-relaxed">
                Operamos con licencia y marca propias, apoyados en una red de operadores internacionales con trayectoria. Eso nos permite ofrecer la solidez de una operación global con la cercanía de un equipo local.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Países de origen", value: "30+" },
                { label: "Foco en PYMES argentinas", value: "B2B" },
                { label: "Respuesta a consultas", value: "<24hs" },
                { label: "Soporte humano", value: "Siempre" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 bg-slate-50 rounded-xl border border-slate-100"
                >
                  <span className="text-navy font-medium">{stat.label}</span>
                  <span className="text-blue-brand font-black text-xl">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-brand font-semibold text-sm uppercase tracking-wider mb-3">
              Nuestros valores
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              Cómo trabajamos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <span className="text-3xl mb-4 block">{value.icon}</span>
                <h3 className="font-bold text-navy text-lg mb-2">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How we operate */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Nuestra operación
            </h2>
            <p className="text-muted leading-relaxed">
              Cargo Net es un courier con licencia y marca propias. La operación logística internacional se apoya en una red de operadores y agentes con presencia en los principales destinos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Licencia propia",
                body: "Operamos con habilitación propia como courier internacional. La marca y la relación con el cliente son nuestras.",
              },
              {
                title: "Red de operadores",
                body: "Para la logística internacional trabajamos con operadores y agentes con presencia global y experiencia probada.",
              },
              {
                title: "Gestión local",
                body: "La atención al cliente, coordinación y seguimiento son gestionados directamente por nuestro equipo en Argentina.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-gold text-lg font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            ¿Querés trabajar con nosotros?
          </h2>
          <p className="text-slate-300 mb-8">
            Consultanos sin compromiso. Te respondemos con la mejor opción para tu operación.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cotizar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-brand text-white rounded-xl font-bold hover:bg-blue-dark transition-all"
            >
              Cotizá tu envío
            </Link>
            <Link
              href="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
