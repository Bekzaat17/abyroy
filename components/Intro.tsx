import { getDictionary, type Lang } from "@/constants/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";

export default function Intro({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <Section id="about" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow={dict.intro.eyebrow}
            title={dict.intro.title}
            align="left"
            className="mb-6 md:mb-6"
          />
          <p className="text-pretty text-sm leading-relaxed text-gray-600 sm:text-base">
            {dict.intro.text}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {dict.intro.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-rehab-gold/10 px-3.5 py-1.5 text-xs font-medium text-rehab-gold sm:text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Цифры вынесены сюда из первого экрана — там они спорили с кнопками */}
        <div className="lg:col-span-5">
          <dl className="grid h-full grid-cols-3 gap-px overflow-hidden rounded-3xl border border-gray-200 bg-gray-200 lg:grid-cols-1">
            {dict.intro.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center gap-1 bg-rehab-light px-3 py-6 text-center lg:px-8 lg:text-left"
              >
                <dt className="order-2 text-[11px] leading-snug text-gray-500 sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="order-1 text-2xl font-bold text-rehab-dark sm:text-3xl lg:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
