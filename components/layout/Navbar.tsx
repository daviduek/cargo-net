"use client";

import Link from "next/link";
import { useState } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy text-white font-bold text-sm">
              CN
            </div>
            <span className="font-bold text-xl text-navy tracking-tight">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-navy hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <WhatsAppButton size="sm" message="default">
              WhatsApp
            </WhatsAppButton>
            <Link
              href="/cotizar"
              className="px-4 py-2 text-sm font-semibold bg-blue-brand text-white rounded-lg hover:bg-blue-dark transition-colors shadow-sm"
            >
              Cotizá tu envío
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-navy hover:bg-slate-100 transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <nav className="px-4 py-3 space-y-1" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 flex flex-col gap-2 border-t border-slate-100">
              <WhatsAppButton size="md" message="default" className="w-full justify-center">
                Escribinos por WhatsApp
              </WhatsAppButton>
              <Link
                href="/cotizar"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 text-sm font-semibold bg-blue-brand text-white rounded-lg hover:bg-blue-dark transition-colors"
              >
                Cotizá tu envío
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
