import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, BLOG_POSTS } from "@/lib/blog-data";
import { SITE } from "@/lib/constants";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="min-h-screen">
        {/* Header */}
        <div className="bg-navy text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Blog
              </Link>
              <span className="text-slate-600">/</span>
              <span className="px-2.5 py-1 bg-blue-brand/20 text-blue-brand text-xs font-semibold rounded-full border border-blue-brand/30">
                {post.category}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span>
                {new Date(post.date).toLocaleDateString("es-AR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>·</span>
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-10">
                <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium border-l-4 border-blue-brand pl-5 italic">
                  {post.excerpt}
                </p>
                <div
                  className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-navy prose-a:text-blue-brand prose-a:no-underline hover:prose-a:underline prose-li:text-slate-700 prose-p:text-slate-700 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
                />
              </div>

              {/* Author block */}
              <div className="mt-6 bg-slate-50 rounded-2xl border border-slate-100 p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-sm flex-shrink-0">
                  CN
                </div>
                <div>
                  <p className="font-bold text-navy">Equipo Cargo Net</p>
                  <p className="text-muted text-sm mt-0.5">
                    Courier internacional B2B para PYMES argentinas. Importamos tu mercadería desde USA y el mundo.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* CTA */}
              <div className="bg-navy rounded-2xl p-6 text-white sticky top-20">
                <h3 className="font-bold text-lg mb-2">¿Necesitás importar?</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Cotizá tu envío sin compromiso. Te respondemos en 24hs.
                </p>
                <Link
                  href="/cotizar"
                  className="w-full block text-center px-4 py-3 bg-blue-brand text-white rounded-lg font-bold text-sm hover:bg-blue-dark transition-colors mb-3"
                >
                  Cotizá tu envío
                </Link>
                <WhatsAppButton size="sm" message="cotizar" className="w-full justify-center">
                  WhatsApp
                </WhatsAppButton>
              </div>

              {/* Other posts */}
              {otherPosts.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <h3 className="font-bold text-navy mb-4 text-sm">Otros artículos</h3>
                  <div className="space-y-4">
                    {otherPosts.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                        <p className="font-semibold text-navy text-sm group-hover:text-blue-brand transition-colors leading-snug mb-1">
                          {p.title}
                        </p>
                        <p className="text-muted text-xs">{p.readTime} de lectura</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

// Simple markdown-to-HTML converter for blog content
function markdownToHtml(markdown: string): string {
  return markdown
    .trim()
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
    .replace(/^(\d+)\. (.+)$/gm, "<li>$2</li>")
    .replace(/^(?!<[hulo])(.+)$/gm, "<p>$1</p>")
    .replace(/\n{2,}/g, "\n")
    .replace(/<\/p>\n<p>/g, "</p><p>")
    .replace(/---\n/g, "<hr/>")
    .replace(/\n/g, "");
}
