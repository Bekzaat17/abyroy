import { Pill, Wine, Gamepad2, Users } from "lucide-react";
import { getDictionary, type Lang } from "@/constants/dictionaries";

const icons = [Pill, Wine, Gamepad2, Users];

export default function Services({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <section id="services" className="py-24 bg-[#F5F5F7] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-rehab-dark mb-2 uppercase">{dict.services.title}</h2>
          <p className="text-gray-500 text-sm md:text-base mb-4">
            {dict.services.subtitle}
          </p>
          <div className="h-1 w-20 bg-rehab-gold"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="bg-rehab-dark rounded-2xl p-8 shadow-xl transition-all hover:-translate-y-2 flex flex-col">
                <div className="w-16 h-16 bg-rehab-gold/10 rounded-xl flex items-center justify-center mb-6 text-rehab-gold">
                  <Icon size={32} />
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-rehab-gold text-xs font-semibold mb-4">
                    {service.tag}
                  </p>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
