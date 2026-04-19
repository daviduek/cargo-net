import Link from "next/link";
import { NAV_LINKS, SITE, getWhatsAppUrl } from "@/lib/constants";

const footerLinks = {
  servicios: [
    { label: "Cotizá tu envío", href: "/cotizar" },
    { label: "Cómo funciona", href: "/como-funciona" },
    { label: "Aduana y requisitos", href: "/aduana-y-requisitos" },
    { label: "Seguimiento", href: "/seguimiento" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "/sobre-nosotros" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
  recursos: [
    { label: "Cómo traer mercadería de USA", href: "/blog/como-traer-importacion-usa-argentina" },
    { label: "Importar como PyME", href: "/blog/que-tener-en-cuenta-importar-pyme" },
    { label: "Courier vs. importación formal", href: "/blog/courier-vs-importacion-formal-diferencias" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* CTA strip */}
      <div className="bg-blue-brand py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">¿Necesitás traer mercadería del exterior?</p>
            <p className="text-blue-light text-sm opacity-90">Cotizá sin compromiso en menos de 2 minutos.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl("cotizar")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-blue-brand rounded-lg font-semibold hover:bg-blue-light transition-colors text-sm"
            >
              WhatsApp
            </a>
            <Link
              href="/cotizar"
              className="px-5 py-2.5 bg-navy text-white rounded-lg font-semibold hover:bg-navy-light transition-colors text-sm"
            >
              Cotizar ahora
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-brand text-white font-bold text-sm">
                CN
              </div>
              <span className="font-bold text-xl text-white tracking-tight">{SITE.name}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xs">
              Courier internacional B2B para PYMES argentinas. Importamos tu mercadería desde USA y el mundo hacia Argentina.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>
                <span className="text-slate-300 font-medium">Email:</span>{" "}
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="text-slate-300 font-medium">WhatsApp:</span>{" "}
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors leading-tight">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-navy-light flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © {currentYear} {SITE.name}. Todos los derechos reservados.
          </p>
          <p className="text-slate-600 text-xs">
            Courier internacional B2B para PYMES argentinas
          </p>
        </div>
      </div>
    </footer>
  );
}
