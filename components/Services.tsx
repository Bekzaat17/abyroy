import { ArrowRight, Pill, Wine, Gamepad2, Users } from "lucide-react";
import Link from "next/link";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getServiceHref, type ServiceKey } from "@/lib/service-pages";

const icons = [Pill, Wine, Gamepad2, Users];
const serviceKeys: ServiceKey[] = ["drug", "alcohol", "gambling", "family"];

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
          const href = getServiceHref(lang, serviceKeys[index]);
          return (
            <article
              key={service.title}
              className="group flex flex-col rounded-3xl bg-rehab-dark p-6 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1 lg:p-7"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rehab-gold/10 text-rehab-gold transition-colors duration-300 group-hover:bg-rehab-gold group-hover:text-white">
                <Icon size={26} />
              </div>

              <h3 className="text-lg font-bold leading-snug text-white">
                <Link href={href} className="transition-colors hover:text-rehab-gold">
                  {service.title}
                </Link>
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-rehab-gold">{service.tag}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{service.desc}</p>
              <Link
                href={href}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-rehab-gold/30 px-4 py-2.5 text-sm font-bold text-rehab-gold transition hover:border-rehab-gold hover:bg-rehab-gold hover:text-white"
              >
                {lang === "ru" ? "Подробнее о программе" : "Бағдарлама туралы толығырақ"}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </article>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={lang === "ru" ? "/ru/services/" : "/services/"}
          className="inline-flex items-center gap-2 rounded-2xl bg-rehab-dark px-6 py-3.5 text-sm font-bold text-white transition hover:bg-rehab-gold sm:text-base"
        >
          {lang === "ru" ? "Смотреть все услуги" : "Барлық қызметті көру"}
          <ArrowRight size={17} aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
