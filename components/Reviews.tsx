import { Star, Quote } from "lucide-react";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";

export default function Reviews({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <Section id="reviews" className="bg-rehab-light">
      <SectionHeading
        eyebrow={dict.reviews.eyebrow}
        title={dict.reviews.title}
        subtitle={dict.reviews.subtitle}
      />

      {/* Была карусель по 85vw с боковым скроллом — заменена на сетку */}
      <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
        {dict.reviews.items.map((rev) => (
          <figure
            key={rev.name + rev.date}
            className="relative flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-6 shadow-lg shadow-black/5 md:p-8"
          >
            <Quote
              size={64}
              className="pointer-events-none absolute right-5 top-4 text-rehab-gold/[0.07]"
              aria-hidden
            />
            <div className="relative">
              <div className="mb-4 flex items-center gap-1" aria-label="5/5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={16} className="fill-rehab-gold text-rehab-gold" />
                ))}
              </div>
              <blockquote className="text-pretty text-sm leading-relaxed text-gray-600 md:text-base">
                {rev.text}
              </blockquote>
            </div>
            <figcaption className="relative mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-sm font-bold text-rehab-dark md:text-base">{rev.name}</span>
              <span className="text-xs font-medium text-gray-400">{rev.date}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
