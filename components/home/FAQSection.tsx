"use client";

import { useState } from "react";
import Link from "next/link";
import { type FAQItem, FAQ_ITEMS } from "@/lib/faq-data";

export type { FAQItem };

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 text-left bg-white hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-navy text-sm sm:text-base leading-snug">{item.question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full bg-blue-light flex items-center justify-center text-blue-brand transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 bg-white border-t border-slate-100">
          <p className="text-muted text-sm leading-relaxed pt-3">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

interface FAQSectionProps {
  items?: FAQItem[];
  showViewAll?: boolean;
}

export default function FAQSection({ items = FAQ_ITEMS.slice(0, 6), showViewAll = true }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-blue-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Respondemos tus dudas
          </h2>
          <p className="text-muted text-lg">
            Estas son las preguntas que más nos hacen. Si la tuya no está acá, escribinos directamente.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3 mb-8">
          {items.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <p className="text-muted text-sm mb-3">¿Tenés alguna otra duda?</p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-blue-brand font-semibold hover:text-blue-dark transition-colors"
            >
              Contactanos directamente
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
