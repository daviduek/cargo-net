"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/constants";

interface FormData {
  // Datos del cliente
  nombre: string;
  empresa: string;
  email: string;
  whatsapp: string;
  // Datos del envío
  paisOrigen: string;
  ciudadOrigen: string;
  destinoArgentina: string;
  tipoMercaderia: string;
  valorComercial: string;
  cantidadBultos: string;
  pesoTotal: string;
  dimensiones: string;
  urgencia: string;
  // Datos comerciales
  frecuencia: string;
  // Extras
  retiroEnOrigen: boolean;
  asesoramientoAduanero: boolean;
  comentario: string;
}

const initialState: FormData = {
  nombre: "",
  empresa: "",
  email: "",
  whatsapp: "",
  paisOrigen: "",
  ciudadOrigen: "",
  destinoArgentina: "",
  tipoMercaderia: "",
  valorComercial: "",
  cantidadBultos: "",
  pesoTotal: "",
  dimensiones: "",
  urgencia: "",
  frecuencia: "",
  retiroEnOrigen: false,
  asesoramientoAduanero: false,
  comentario: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: conectar con backend real (Resend, Formspree, API route, etc.)
    // Por ahora simula éxito después de 1.5 segundos
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">¡Solicitud recibida!</h3>
        <p className="text-muted mb-6">
          Recibimos tu consulta de cotización. Te respondemos en menos de 24 horas hábiles al email y WhatsApp que nos dejaste.
        </p>
        <a
          href={getWhatsAppUrl("cotizar")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1DA851] transition-colors"
        >
          También podés escribirnos por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100">
      {/* Sección: datos del cliente */}
      <FormSection title="Tus datos" subtitle="Para poder contactarte y enviarte la cotización.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nombre" required>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className={inputClass}
            />
          </Field>
          <Field label="Empresa">
            <input
              type="text"
              name="empresa"
              value={form.empresa}
              onChange={handleChange}
              placeholder="Nombre de tu empresa"
              className={inputClass}
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@empresa.com"
              required
              className={inputClass}
            />
          </Field>
          <Field label="WhatsApp" required>
            <input
              type="tel"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="+54 9 11 0000-0000"
              required
              className={inputClass}
            />
          </Field>
        </div>
      </FormSection>

      {/* Sección: datos del envío */}
      <FormSection title="Datos del envío" subtitle="Cuanta más información nos des, más precisa será la cotización.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="País de origen" required>
            <select name="paisOrigen" value={form.paisOrigen} onChange={handleChange} required className={inputClass}>
              <option value="">Seleccioná un país</option>
              <option value="USA">Estados Unidos (USA)</option>
              <option value="China">China</option>
              <option value="Alemania">Alemania</option>
              <option value="España">España</option>
              <option value="Italia">Italia</option>
              <option value="Reino Unido">Reino Unido</option>
              <option value="Francia">Francia</option>
              <option value="Otro">Otro</option>
            </select>
          </Field>
          <Field label="Ciudad de origen" required>
            <input
              type="text"
              name="ciudadOrigen"
              value={form.ciudadOrigen}
              onChange={handleChange}
              placeholder="Miami, New York, etc."
              required
              className={inputClass}
            />
          </Field>
          <Field label="Destino en Argentina" required>
            <input
              type="text"
              name="destinoArgentina"
              value={form.destinoArgentina}
              onChange={handleChange}
              placeholder="Buenos Aires, Córdoba, etc."
              required
              className={inputClass}
            />
          </Field>
          <Field label="Tipo de mercadería" required>
            <input
              type="text"
              name="tipoMercaderia"
              value={form.tipoMercaderia}
              onChange={handleChange}
              placeholder="Repuestos, electrónica, insumos..."
              required
              className={inputClass}
            />
          </Field>
          <Field label="Valor comercial estimado (USD)" required>
            <input
              type="text"
              name="valorComercial"
              value={form.valorComercial}
              onChange={handleChange}
              placeholder="Ej: 2500"
              required
              className={inputClass}
            />
          </Field>
          <Field label="Urgencia">
            <select name="urgencia" value={form.urgencia} onChange={handleChange} className={inputClass}>
              <option value="">Sin urgencia específica</option>
              <option value="urgente">Urgente (lo antes posible)</option>
              <option value="normal">Normal (1-3 semanas)</option>
              <option value="flexible">Flexible (sin fecha límite)</option>
            </select>
          </Field>
          <Field label="Cantidad de bultos">
            <input
              type="number"
              name="cantidadBultos"
              value={form.cantidadBultos}
              onChange={handleChange}
              placeholder="Ej: 3"
              min="1"
              className={inputClass}
            />
          </Field>
          <Field label="Peso total estimado (kg)">
            <input
              type="text"
              name="pesoTotal"
              value={form.pesoTotal}
              onChange={handleChange}
              placeholder="Ej: 25 kg"
              className={inputClass}
            />
          </Field>
          <Field label="Dimensiones aproximadas" hint="Opcional — alto × ancho × profundidad en cm">
            <input
              type="text"
              name="dimensiones"
              value={form.dimensiones}
              onChange={handleChange}
              placeholder="Ej: 60x40x30 cm"
              className={inputClass}
            />
          </Field>
        </div>
      </FormSection>

      {/* Sección: frecuencia */}
      <FormSection title="Frecuencia de envíos" subtitle="Nos ayuda a entender mejor tu operación.">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { value: "unico", label: "Envío único", desc: "Una sola vez" },
            { value: "mensual", label: "Mensual", desc: "Una vez por mes" },
            { value: "frecuente", label: "Frecuente", desc: "Más de una vez por mes" },
          ].map((option) => (
            <label
              key={option.value}
              className={`cursor-pointer flex items-start gap-3 p-4 rounded-xl border-2 transition-colors ${
                form.frecuencia === option.value
                  ? "border-blue-brand bg-blue-light"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="frecuencia"
                value={option.value}
                checked={form.frecuencia === option.value}
                onChange={handleChange}
                className="mt-0.5 accent-blue-brand"
              />
              <div>
                <span className="font-semibold text-navy text-sm block">{option.label}</span>
                <span className="text-muted text-xs">{option.desc}</span>
              </div>
            </label>
          ))}
        </div>
      </FormSection>

      {/* Sección: extras */}
      <FormSection title="Servicios adicionales">
        <div className="space-y-3 mb-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="retiroEnOrigen"
              checked={form.retiroEnOrigen}
              onChange={handleChange}
              className="w-4 h-4 accent-blue-brand"
            />
            <span className="text-sm text-navy font-medium group-hover:text-blue-brand transition-colors">
              Necesito retiro en origen (depósito o proveedor en el país de origen)
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="asesoramientoAduanero"
              checked={form.asesoramientoAduanero}
              onChange={handleChange}
              className="w-4 h-4 accent-blue-brand"
            />
            <span className="text-sm text-navy font-medium group-hover:text-blue-brand transition-colors">
              Necesito asesoramiento aduanero
            </span>
          </label>
        </div>

        <Field label="Comentarios adicionales" hint="Cualquier detalle relevante sobre la mercadería o la operación">
          <textarea
            name="comentario"
            value={form.comentario}
            onChange={handleChange}
            rows={4}
            placeholder="Contanos más sobre tu envío, si tenés alguna duda o requerimiento especial..."
            className={`${inputClass} resize-none`}
          />
        </Field>
      </FormSection>

      {/* Submit */}
      <div className="p-6 sm:p-8 bg-slate-50 rounded-b-2xl">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-blue-brand text-white rounded-xl font-bold text-lg hover:bg-blue-dark transition-all disabled:opacity-60 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando...
            </>
          ) : (
            <>
              Solicitar cotización
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
        <p className="text-center text-muted text-xs mt-3">
          Respondemos en menos de 24 horas hábiles. Sin costo ni compromiso.
        </p>
      </div>
    </form>
  );
}

// Helper components
const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-slate-200 text-navy text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-brand/30 focus:border-blue-brand transition-colors bg-white";

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-blue-brand ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}

function FormSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-5">
        <h3 className="font-bold text-navy text-base">{title}</h3>
        {subtitle && <p className="text-muted text-sm mt-0.5">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
