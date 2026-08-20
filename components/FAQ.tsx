import { getDictionary, type Lang } from "@/constants/dictionaries";

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
    <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-rehab-dark mb-3">{dict.faq.title}</h2>
          <p className="text-gray-500 text-sm md:text-base">
            {dict.faq.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {dict.faq.items.map((item, i) => (
            <details
              key={i}
              className="group bg-rehab-light rounded-2xl px-5 py-4 md:px-6 md:py-5 open:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between gap-4 font-bold text-rehab-dark text-sm md:text-base cursor-pointer list-none">
                {item.q}
                <span className="shrink-0 text-rehab-gold text-xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
