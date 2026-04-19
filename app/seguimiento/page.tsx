"use client";

import type { Metadata } from "next";
import { useState } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

// Note: metadata can't be exported from a client component. Move to a separate layout or use static export.
// This page uses client-side interactivity for the tracking form.

const STATUS_STEPS = [
  { id: "recibido", label: "Envío recibido", description: "Datos y documentación recibidos." },
  { id: "retiro", label: "Retiro coordinado", description: "Retiro confirmado con el proveedor." },
  { id: "transito", label: "En tránsito internacional", description: "Mercadería en camino." },
  { id: "aduana", label: "Aduana Argentina", description: "En proceso de despacho aduanero." },
  { id: "entregado", label: "Entregado", description: "Mercadería entregada en destino." },
];

function TrackingResult() {
  // Mock result — in production this connects to your backend
  const activeStep = 2; // 0-indexed: "En tránsito internacional"

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-sm text-muted mb-1">Número de tracking</p>
          <p className="font-bold text-navy text-lg">CN-2024-00123</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-blue-light text-blue-brand text-sm font-semibold">
          En tránsito
        </span>
      </div>

      {/* Progress stepper */}
      <div className="space-y-0">
        {STATUS_STEPS.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;
          const isPending = index > activeStep;

          return (
            <div key={step.id} className="flex gap-4">
              {/* Indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold border-2 ${
                    isCompleted
                      ? "bg-green-500 border-green-500 text-white"
                      : isActive
                      ? "bg-blue-brand border-blue-brand text-white"
                      : "bg-white border-slate-200 text-slate-400"
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                {index < STATUS_STEPS.length - 1 && (
                  <div
                    className={`w-0.5 h-8 my-1 ${
                      isCompleted ? "bg-green-400" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>

              {/* Label */}
              <div className={`pb-6 flex-1 ${index === STATUS_STEPS.length - 1 ? "pb-0" : ""}`}>
                <p
                  className={`font-semibold text-sm ${
                    isActive ? "text-blue-brand" : isCompleted ? "text-navy" : "text-slate-400"
                  }`}
                >
                  {step.label}
                  {isActive && (
                    <span className="ml-2 text-xs font-normal text-blue-brand bg-blue-light px-2 py-0.5 rounded-full">
                      Estado actual
                    </span>
                  )}
                </p>
                <p className={`text-xs mt-0.5 ${isPending ? "text-slate-300" : "text-muted"}`}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <p className="text-xs text-muted text-center">
          * Este es un ejemplo del tipo de información que verás al ingresar tu número de tracking real.
        </p>
      </div>
    </div>
  );
}

export default function SeguimientoPage() {
  const [tracking, setTracking] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tracking.trim()) setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Estado de tu envío
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Seguimiento de envíos
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Ingresá tu número de tracking para ver el estado actual de tu mercadería.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Tracking form */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 mb-8">
          <h2 className="font-bold text-navy text-lg mb-2">Ingresá tu número de tracking</h2>
          <p className="text-muted text-sm mb-5">
            Te enviamos el número de tracking por email cuando confirmamos tu envío.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={tracking}
              onChange={(e) => setTracking(e.target.value)}
              placeholder="Ej: CN-2024-00123"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-200 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-blue-brand/30 focus:border-blue-brand"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-brand text-white rounded-lg font-bold text-sm hover:bg-blue-dark transition-colors whitespace-nowrap"
            >
              Buscar
            </button>
          </form>
        </div>

        {/* Result */}
        {submitted && <TrackingResult />}

        {/* Notice */}
        <div className="mt-8 bg-blue-light rounded-2xl border border-blue-brand/20 p-6">
          <h3 className="font-bold text-navy mb-2">¿No encontrás tu número de tracking?</h3>
          <p className="text-muted text-sm mb-4 leading-relaxed">
            El número de tracking se envía por email cuando confirmamos la operación. Si no lo encontrás, escribinos por WhatsApp con tu nombre y empresa y te lo informamos.
          </p>
          <WhatsAppButton size="sm" message="seguimiento">
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>

        {/* TODO notice for developers */}
        <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-xs font-mono">
            {/* TODO: conectar con API de tracking real */}
            ⚙️ DEV NOTE: Esta interfaz está lista para conectar con tu sistema de tracking real. Ver `/app/seguimiento/page.tsx` para los puntos de integración.
          </p>
        </div>
      </div>
    </div>
  );
}
