import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aduana y requisitos de importación",
  description:
    "Información sobre aduana y requisitos para importar desde USA a Argentina. Proceso aduanero, documentación básica, tiempos y restricciones explicados de forma clara.",
  alternates: { canonical: `${SITE.url}/aduana-y-requisitos` },
  keywords: [
    "aduana argentina importacion",
    "requisitos importar desde usa",
    "documentacion importacion argentina",
    "proceso aduanero argentina",
    "importar mercaderia argentina requisitos",
  ],
};

export default function AduanaPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Información aduanera
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Aduana y requisitos de importación
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Información general sobre cómo funciona el proceso aduanero para importar hacia Argentina. Cada operación es particular; siempre la evaluamos con vos.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Disclaimer banner */}
        <div className="flex items-start gap-3 bg-gold-light border border-gold/30 rounded-xl p-5 mb-10">
          <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-semibold text-navy text-sm mb-1">Nota importante</p>
            <p className="text-slate-700 text-sm leading-relaxed">
              La información de esta página es orientativa y de carácter general. La normativa de comercio exterior en Argentina puede variar. Para evaluar tu operación específica, consultanos directamente.
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-10">
          {/* Section 1 */}
          <ContentSection
            title="¿Cómo funciona el courier internacional hacia Argentina?"
            icon="🚚"
          >
            <p>
              Un courier internacional es un servicio de transporte de paquetes y mercaderías entre países que simplifica el proceso comparado con una importación formal tradicional. En la modalidad courier, el operador gestiona el transporte, la documentación y, en muchos casos, los trámites aduaneros en nombre del importador.
            </p>
            <p>
              Cargo Net opera como courier internacional habilitado. Coordinamos el retiro en origen, el transporte internacional y la gestión de ingreso de la mercadería a Argentina.
            </p>
          </ContentSection>

          {/* Section 2 */}
          <ContentSection title="Documentación básica necesaria" icon="📄">
            <p>Para la mayoría de las operaciones de importación, se requiere como mínimo:</p>
            <ul>
              <li>
                <strong>Factura comercial</strong>: emitida por el vendedor o proveedor, con el detalle de la mercadería, precio y condiciones de venta.
              </li>
              <li>
                <strong>Packing list</strong>: lista de empaque con el detalle de bultos, cantidades, pesos y dimensiones.
              </li>
              <li>
                <strong>Datos del importador</strong>: CUIT, razón social o nombre completo del destinatario en Argentina.
              </li>
              <li>
                <strong>Descripción precisa de la mercadería</strong>: nombre técnico o comercial del producto, uso y composición si aplica.
              </li>
            </ul>
            <p>
              Según el tipo de producto y su valor, puede requerirse documentación adicional. Te informamos antes de avanzar.
            </p>
          </ContentSection>

          {/* Section 3 */}
          <ContentSection title="Proceso aduanero general" icon="🏛️">
            <p>
              Al ingresar a Argentina, toda mercadería pasa por control aduanero. El proceso general incluye:
            </p>
            <ol>
              <li>
                <strong>Arribo al aeropuerto o puerto</strong>: la mercadería ingresa al país por el punto de entrada correspondiente.
              </li>
              <li>
                <strong>Presentación de documentación</strong>: se presentan la factura, packing list y demás documentos ante la Dirección General de Aduanas (DGA).
              </li>
              <li>
                <strong>Valoración aduanera</strong>: la aduana determina el valor imponible sobre el cual se calculan los derechos e impuestos.
              </li>
              <li>
                <strong>Pago de aranceles e impuestos</strong>: incluye derechos de importación, tasa de estadística e IVA de importación, entre otros posibles tributos según el tipo de mercadería.
              </li>
              <li>
                <strong>Libramiento</strong>: una vez aprobada la documentación y pagados los tributos, la mercadería queda liberada para su retiro.
              </li>
            </ol>
          </ContentSection>

          {/* Section 4 */}
          <ContentSection title="Tiempos estimados" icon="⏱️">
            <p>
              Los tiempos de importación varían según el origen, la modalidad de transporte y la complejidad de la operación aduanera.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              {[
                { origin: "USA (aéreo)", time: "7 a 14 días hábiles" },
                { origin: "USA (marítimo)", time: "30 a 45 días hábiles" },
                { origin: "Europa (aéreo)", time: "10 a 18 días hábiles" },
                { origin: "China (aéreo)", time: "12 a 20 días hábiles" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-medium text-navy text-sm">{row.origin}</span>
                  <span className="text-blue-brand font-semibold text-sm">{row.time}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              Estos son tiempos estimados orientativos. Cada operación es evaluada individualmente. Factores como controles aduaneros, feriados o características del producto pueden afectar los plazos.
            </p>
          </ContentSection>

          {/* Section 5 */}
          <ContentSection title="Productos con restricciones" icon="⚠️">
            <p>
              Algunos productos requieren habilitaciones previas, licencias o no están permitidos para importar a Argentina. Entre las categorías con restricciones habituales se encuentran:
            </p>
            <ul>
              <li>Alimentos y bebidas (requieren habilitación SENASA)</li>
              <li>Medicamentos y productos farmacéuticos (requieren habilitación ANMAT)</li>
              <li>Cosméticos y productos de higiene personal</li>
              <li>Material radiactivo o sustancias peligrosas</li>
              <li>Armas y municiones</li>
              <li>Productos protegidos por la Convención CITES (fauna y flora)</li>
            </ul>
            <p>
              Esta lista no es exhaustiva. Antes de iniciar una operación, siempre evaluamos contigo el tipo de mercadería para detectar cualquier restricción o requerimiento.
            </p>
          </ContentSection>

          {/* Section 6 */}
          <ContentSection title="Costos involucrados" icon="💰">
            <p>
              Al importar mercadería, los costos totales incluyen más que el precio del producto. Para planificar correctamente, tener en cuenta:
            </p>
            <ul>
              <li><strong>Precio del producto en origen</strong></li>
              <li><strong>Flete internacional</strong> (aéreo o marítimo)</li>
              <li><strong>Seguro de carga</strong></li>
              <li><strong>Derechos de importación</strong> (aranceles según posición arancelaria)</li>
              <li><strong>Tasa de estadística</strong></li>
              <li><strong>IVA de importación</strong> (21% o 10.5% según el producto)</li>
              <li><strong>Honorarios del courier o despachante</strong></li>
            </ul>
            <p>
              En nuestra cotización detallamos todos los costos del servicio de forma clara, para que puedas tomar una decisión informada.
            </p>
          </ContentSection>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-navy rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">¿Tenés dudas sobre tu operación específica?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Cada importación tiene sus particularidades. Consultanos y evaluamos tu caso puntual sin costo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cotizar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-brand text-white rounded-xl font-bold hover:bg-blue-dark transition-all"
            >
              Solicitar cotización
            </Link>
            <WhatsAppButton size="md" message="default" variant="outline" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10">
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSection({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-navy mb-4">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      <div className="text-slate-700 leading-relaxed space-y-3">{children}</div>
      <hr className="border-slate-200 mt-8" />
    </section>
  );
}
