import {
  ShieldCheck, Users, Activity, HeartHandshake,
  Sparkles, Stethoscope, Briefcase, FileText
} from "lucide-react";
import { getDictionary, type Lang } from "@/constants/dictionaries";

const icons = [ShieldCheck, Users, Activity, HeartHandshake, Sparkles, Stethoscope, Briefcase, FileText];

export default function Advantages({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16 text-rehab-dark">{dict.advantages.title}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.advantages.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="group flex flex-col items-center">
                <div className="w-20 h-20 bg-rehab-light text-rehab-gold rounded-[2rem] flex items-center justify-center mb-6 group-hover:bg-rehab-gold group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  <Icon size={32} />
                </div>

                <h3 className="font-bold text-rehab-dark mb-2 text-sm uppercase tracking-wide group-hover:text-rehab-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs max-w-[150px]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
