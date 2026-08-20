import { getDictionary, type Lang } from "@/constants/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";

export default function Team({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <Section id="team" className="bg-white">
      <SectionHeading
        eyebrow={dict.team.eyebrow}
        title={dict.team.title}
        subtitle={dict.team.subtitle}
      />

      {/* Раньше здесь была горизонтальная карусель с карточками по 65vw —
          она уезжала за край экрана. Теперь обычная сетка без бокового скролла. */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {dict.team.members.map((member) => (
          <figure key={member.name} className="group">
            <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-2xl bg-rehab-light shadow-soft md:mb-4 md:rounded-3xl">
              <img
                src={member.img}
                alt={`${member.name} — ${member.role}, Abyroy Rehab Шымкент`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption>
              <h3 className="text-sm font-bold leading-snug text-rehab-dark md:text-base">
                {member.name}
              </h3>
              <p className="mt-1 text-[11px] font-medium uppercase leading-snug tracking-wider text-rehab-gold md:text-xs">
                {member.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
