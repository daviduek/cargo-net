import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import HowItWorks from "@/components/home/HowItWorks";
import Benefits from "@/components/home/Benefits";
import WhatYouCanImport from "@/components/home/WhatYouCanImport";
import TrustSection from "@/components/home/TrustSection";
import FAQSection from "@/components/home/FAQSection";
import { FAQ_ITEMS } from "@/lib/faq-data";
import FinalCTA from "@/components/home/FinalCTA";
import { SITE, SEO_DEFAULTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO_DEFAULTS.defaultTitle,
  description: SEO_DEFAULTS.defaultDescription,
  keywords: SEO_DEFAULTS.keywords,
  alternates: {
    canonical: SITE.url,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.slice(0, 6).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Benefits />
      <WhatYouCanImport />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
