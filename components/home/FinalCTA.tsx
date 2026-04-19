import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="py-20 gradient-hero text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-brand/10 blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 text-gold text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          Cotización sin costo ni compromiso
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          ¿Necesitás traer mercadería del exterior?
        </h2>

        <p className="text-slate-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Contanos qué necesitás importar y te enviamos una cotización detallada en menos de 24 horas hábiles. Sin costo, sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/cotizar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-brand text-white rounded-xl font-bold text-lg hover:bg-blue-dark transition-all shadow-2xl hover:shadow-blue-brand/30 hover:-translate-y-0.5"
          >
            Cotizá tu envío ahora
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <WhatsAppButton
            variant="outline"
            size="lg"
            message="cotizar"
            className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10"
          >
            O escribinos por WhatsApp
          </WhatsAppButton>
        </div>

        {/* Reassurances */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Respuesta en menos de 24hs
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sin costo ni compromiso
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Asesor asignado a tu cuenta
          </div>
        </div>
      </div>
    </section>
  );
}
