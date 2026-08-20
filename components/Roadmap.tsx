import { PhoneCall, ClipboardCheck, LayoutList, HeartPulse, Home } from "lucide-react";

const steps = [
  { title: "Алғашқы кеңес", desc: "Маманмен алғашқы байланыс немесе орталыққа келу." },
  { title: "Диагностика", desc: "Ағзаның жай-күйін кешенді тексеру." },
  { title: "Жеке жоспар", desc: "Әркімге арналған емдеу бағдарламасы." },
  { title: "Сауығу", desc: "Терапия және кәсіби қолдау." },
  { title: "Ортаға оралу", desc: "Әлеуметтік бейімделу және жаңа өмір." },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-[#F5F5F7] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16 text-rehab-dark">Сауығу жолы</h2>
        
        {/* grid-cols-2 бастапқыда, lg:grid-cols-5 кезеңдерді қатар қояды */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="group flex flex-col items-center relative">
              
              {/* Кезеңдер арасындағы сызық (тек үлкен экрандарда) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gray-200 group-hover:bg-rehab-gold transition-colors duration-500"></div>
              )}

              <div className="w-20 h-20 bg-rehab-light text-rehab-gold rounded-[2rem] flex items-center justify-center mb-6 group-hover:bg-rehab-gold group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100 z-10">
                {/* Иконкаларды index бойынша қайтару */}
                {[<PhoneCall size={32} />, <ClipboardCheck size={32} />, <LayoutList size={32} />, <HeartPulse size={32} />, <Home size={32} />][i]}
              </div>
              
              <h3 className="font-bold text-rehab-dark mb-2 text-sm uppercase tracking-wide group-hover:text-rehab-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-400 text-xs max-w-[150px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}