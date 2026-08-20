import {
  ShieldCheck, Users, Activity, HeartHandshake,
  Sparkles, Stethoscope, Briefcase, FileText
} from "lucide-react";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";

const icons = [ShieldCheck, Users, Activity, HeartHandshake, Sparkles, Stethoscope, Briefcase, FileText];

export default function Advantages({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow={dict.advantages.eyebrow}
        title={dict.advantages.title}
        subtitle={dict.advantages.subtitle}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {dict.advantages.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <article
              key={item.title}
              className="group h-full rounded-2xl border border-gray-100 bg-rehab-light/60 p-5 transition-colors duration-300 hover:border-rehab-gold/30 hover:bg-white hover:shadow-lg hover:shadow-black/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-rehab-gold shadow-sm transition-colors duration-300 group-hover:bg-rehab-gold group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="text-sm font-bold leading-snug text-rehab-dark sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">{item.desc}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
