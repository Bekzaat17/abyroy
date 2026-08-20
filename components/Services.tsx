import { Pill, Wine, Gamepad2, Users } from "lucide-react";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";

const icons = [Pill, Wine, Gamepad2, Users];

export default function Services({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <Section id="services" className="bg-rehab-light">
      <SectionHeading
        eyebrow={dict.services.eyebrow}
        title={dict.services.title}
        subtitle={dict.services.subtitle}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {dict.services.items.map((service, index) => {
          const Icon = icons[index];
          return (
            <article
              key={service.title}
              className="group flex flex-col rounded-3xl bg-rehab-dark p-6 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1 lg:p-7"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rehab-gold/10 text-rehab-gold transition-colors duration-300 group-hover:bg-rehab-gold group-hover:text-white">
                <Icon size={26} />
              </div>

              <h3 className="text-lg font-bold leading-snug text-white">{service.title}</h3>
              <p className="mt-1.5 text-xs font-semibold text-rehab-gold">{service.tag}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{service.desc}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
