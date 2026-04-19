"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/constants";

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  whatsapp: string;
  asunto: string;
  mensaje: string;
}

const initialState: FormData = {
  nombre: "",
  empresa: "",
  email: "",
  whatsapp: "",
  asunto: "",
  mensaje: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // TODO: conectar con backend real (Resend, Formspree, API route, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">¡Mensaje enviado!</h3>
        <p className="text-muted text-sm mb-5">
          Recibimos tu consulta. Te respondemos en menos de 24 horas hábiles.
        </p>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1DA851] transition-colors text-sm"
        >
          ¿Urgente? Escribinos por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-1">
            Nombre <span className="text-blue-brand">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Empresa</label>
          <input
            type="text"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">
            Email <span className="text-blue-brand">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="tu@empresa.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">WhatsApp</label>
          <input
            type="tel"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="+54 9 11 0000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1">Asunto</label>
        <select name="asunto" value={form.asunto} onChange={handleChange} className={inputClass}>
          <option value="">Seleccioná un asunto</option>
          <option value="cotizacion">Solicitar cotización</option>
          <option value="seguimiento">Consulta sobre seguimiento</option>
          <option value="aduana">Consulta sobre aduana</option>
          <option value="general">Consulta general</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1">
          Mensaje <span className="text-blue-brand">*</span>
        </label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Contanos en qué podemos ayudarte..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-brand text-white rounded-xl font-bold hover:bg-blue-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
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
          "Enviar consulta"
        )}
      </button>
    </form>
  );
}

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-slate-200 text-navy text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-brand/30 focus:border-blue-brand transition-colors bg-white";
