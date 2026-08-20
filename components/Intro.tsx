import { getDictionary, type Lang } from "@/constants/dictionaries";

export default function Intro({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <section id="about" className="bg-white pt-8 pb-16 md:pt-10 md:pb-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-rehab-dark mb-4">
            {dict.intro.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
            {dict.intro.text}
          </p>
          <div className="flex flex-wrap gap-2">
            {dict.intro.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs md:text-sm font-medium text-rehab-gold bg-rehab-gold/10 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
