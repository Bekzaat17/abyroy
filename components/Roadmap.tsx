import { PhoneCall, ClipboardCheck, LayoutList, HeartPulse, Home } from "lucide-react";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";

const icons = [PhoneCall, ClipboardCheck, LayoutList, HeartPulse, Home];

export default function Roadmap({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const steps = dict.roadmap.steps;

  return (
    <Section id="roadmap" className="bg-rehab-light">
      <SectionHeading
        eyebrow={dict.roadmap.eyebrow}
        title={dict.roadmap.title}
        subtitle={dict.roadmap.subtitle}
      />

      {/* 5 этапов не делятся на 2 или 3 колонки без «сирот», поэтому до lg —
          вертикальный таймлайн, а на широких экранах горизонтальный ряд. */}
      <ol className="relative mx-auto flex max-w-3xl flex-col gap-6 lg:max-w-none lg:grid lg:grid-cols-5 lg:gap-6">
        {steps.map((step, i) => {
          const Icon = icons[i];
          const isLast = i === steps.length - 1;

          return (
            <li key={step.title} className="group relative flex gap-4 lg:flex-col lg:gap-0 lg:text-center">
              {/* Соединительная линия: вертикальная на мобильных, горизонтальная на десктопе */}
              {!isLast && (
                <>
                  <span
                    className="absolute left-6 top-14 h-[calc(100%-2rem)] w-px bg-gray-300 lg:hidden"
                    aria-hidden
                  />
                  <span
                    className="absolute top-7 left-[calc(50%+2.25rem)] right-[-1.5rem] hidden h-px bg-gray-300 lg:block"
                    aria-hidden
                  />
                </>
              )}

              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white text-rehab-gold shadow-sm transition-colors duration-300 group-hover:bg-rehab-gold group-hover:text-white lg:mx-auto lg:h-14 lg:w-14">
                <Icon size={22} />
              </div>

              <div className="pb-1 lg:mt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-rehab-gold">
                  {dict.roadmap.stepLabel} {i + 1}
                </p>
                <h3 className="mt-1 text-base font-bold leading-snug text-rehab-dark">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500 lg:mx-auto lg:max-w-[15rem]">
                  {step.desc}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
