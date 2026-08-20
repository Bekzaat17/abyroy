import { PhoneCall, ClipboardCheck, LayoutList, HeartPulse, Home } from "lucide-react";
import { getDictionary, type Lang } from "@/constants/dictionaries";

const icons = [PhoneCall, ClipboardCheck, LayoutList, HeartPulse, Home];

export default function Roadmap({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <section id="roadmap" className="py-24 bg-[#F5F5F7] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16 text-rehab-dark">{dict.roadmap.title}</h2>

        {/* grid-cols-2 бастапқыда, lg:grid-cols-5 кезеңдерді қатар қояды */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
          {dict.roadmap.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="group flex flex-col items-center relative">

                {/* Кезеңдер арасындағы сызық (тек үлкен экрандарда) */}
                {i < dict.roadmap.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gray-200 group-hover:bg-rehab-gold transition-colors duration-500"></div>
                )}

                <div className="w-20 h-20 bg-rehab-light text-rehab-gold rounded-[2rem] flex items-center justify-center mb-6 group-hover:bg-rehab-gold group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100 z-10">
                  <Icon size={32} />
                </div>

                <h3 className="font-bold text-rehab-dark mb-2 text-sm uppercase tracking-wide group-hover:text-rehab-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs max-w-[150px]">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
