import { Plus } from "lucide-react";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";
import { serializeJsonLd } from "@/lib/seo";

export default function FAQ({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <Section id="faq" className="bg-white" containerClassName="max-w-3xl">
      <SectionHeading
        eyebrow={dict.faq.eyebrow}
        title={dict.faq.title}
        subtitle={dict.faq.subtitle}
      />

      <div className="flex flex-col gap-2.5">
        {dict.faq.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-gray-100 bg-rehab-light/70 px-5 py-4 transition-colors open:border-rehab-gold/25 open:bg-white open:shadow-lg open:shadow-black/5 md:px-6 md:py-5"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-bold text-rehab-dark md:text-base [&::-webkit-details-marker]:hidden">
              <span className="text-pretty">{item.q}</span>
              <Plus
                size={20}
                className="mt-0.5 shrink-0 text-rehab-gold transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-gray-600 md:text-base">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
      />
    </Section>
  );
}
