import { getDictionary, type Lang } from "@/constants/dictionaries";

export default function Team({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <section id="team" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.team.title}</h2>
        </div>

        {/* Мобильдіде карусель (кішкентай фотолармен), Десктопта баяғыдай 4 бағанды grid */}
        <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 snap-x snap-mandatory pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {dict.team.members.map((member, i) => (
            <div key={i} className="w-[65vw] max-w-[260px] md:max-w-none md:w-auto shrink-0 snap-center group">
              <div className="aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-4 md:mb-6 shadow-soft">
                <img
                  src={member.img}
                  alt={`${member.name} — ${member.role}, Abyroy Rehab Шымкент`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-rehab-dark text-center md:text-left">{member.name}</h3>
              <p className="text-rehab-gold font-medium text-xs md:text-sm uppercase tracking-wider text-center md:text-left mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
