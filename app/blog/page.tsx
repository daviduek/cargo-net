import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Guías de importación para PYMES",
  description:
    "Guías, consejos y recursos para importar desde USA y el mundo hacia Argentina. Todo lo que necesitás saber sobre courier internacional, aduana y comercio exterior.",
  alternates: { canonical: `${SITE.url}/blog` },
  keywords: [
    "importar desde usa guia",
    "como importar argentina",
    "courier internacional argentina blog",
    "importacion pyme argentina",
    "comercio exterior argentina",
  ],
};

export default function BlogPage() {
  const featured = BLOG_POSTS.filter((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Recursos y guías
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Blog de importaciones
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Guías prácticas, consejos y recursos para PYMES argentinas que quieren importar desde USA y el mundo.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Featured posts */}
        <div className="mb-10">
          <h2 className="font-bold text-navy text-xl mb-6">Artículos destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        </div>

        {/* More posts */}
        {rest.length > 0 && (
          <div>
            <h2 className="font-bold text-navy text-xl mb-6">Más artículos</h2>
            <div className="grid grid-cols-1 gap-4">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Coming soon */}
        <div className="mt-14 bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-8 text-center">
          <p className="text-2xl mb-3">📝</p>
          <h3 className="font-bold text-navy text-lg mb-2">Más contenido próximamente</h3>
          <p className="text-muted text-sm max-w-md mx-auto mb-4">
            Estamos preparando más guías sobre importación, aduana y comercio exterior para PYMES argentinas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-blue-brand font-semibold text-sm hover:text-blue-dark transition-colors"
          >
            Sugerir un tema
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post, featured = false }: { post: (typeof BLOG_POSTS)[0]; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-brand/30 transition-all card-hover ${
        featured ? "p-6" : "p-5"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="px-2.5 py-1 bg-blue-light text-blue-brand text-xs font-semibold rounded-full">
          {post.category}
        </span>
        <span className="text-muted text-xs">{post.readTime} de lectura</span>
      </div>
      <h3
        className={`font-bold text-navy group-hover:text-blue-brand transition-colors mb-2 ${
          featured ? "text-xl" : "text-base"
        }`}
      >
        {post.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
        <span className="text-xs text-muted">
          {new Date(post.date).toLocaleDateString("es-AR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <span className="inline-flex items-center gap-1 text-blue-brand text-xs font-semibold group-hover:gap-2 transition-all">
          Leer artículo
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
