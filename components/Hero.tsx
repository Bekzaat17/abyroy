import Image from "next/image";
import { Phone, ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { SITE_DATA } from "@/constants";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const trustIcons = [ShieldCheck, Clock, HeartHandshake];

export default function Hero({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const h = dict.hero;

  return (
    <section className="relative flex min-h-[640px] flex-col justify-center overflow-hidden bg-white pt-24 pb-12 md:min-h-[88vh] md:pt-24 md:pb-0">
      {/* Фон в две зоны: светлая слева, тёмная справа (40%).
          Фото-вырезка ниже шире тёмной зоны — за счёт этого фигуры пересекают
          границу цветов и получается объём. Это фишка первого экрана. */}
      <div className="absolute inset-0 z-0 flex" aria-hidden>
        <div className="w-full bg-rehab-light md:w-[60%]" />
        <div className="hidden w-[40%] bg-rehab-dark md:block" />
      </div>

      {/* Золотистый перелив сверху + мягкое пятно слева */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-72 bg-gradient-to-b from-rehab-gold/15 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 -top-28 z-[1] h-[420px] w-[420px] rounded-full bg-rehab-gold/15 blur-3xl"
        aria-hidden
      />

      {/* Слой с фото выровнен по контейнеру героя и растянут на всю высоту
          секции — фигуры стоят ровно на её нижней кромке. */}
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden w-full max-w-[1400px] px-4 sm:px-6 md:block lg:px-8">
        <div className="absolute bottom-0 right-0 h-full w-[44%] lg:w-[48%] xl:w-[50%]">
          <Image
            src="/main_page.png"
            alt={dict.meta.ogAlt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 0px"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Текст на 12-колоночной сетке: 7 колонок держат его слева от фигур.
          Ширина ограничена по брейкпоинтам, чтобы длинный заголовок переносился,
          а не доезжал до фото. */}
      <div className="relative z-20 mx-auto grid w-full max-w-[1400px] grid-cols-12 px-4 sm:px-6 lg:px-8">
        <div className="col-span-12 max-w-[700px] text-center md:col-span-7 md:max-w-[370px] md:text-left lg:max-w-[480px] xl:max-w-[600px] 2xl:max-w-[680px]">
          <span className="inline-block rounded-full bg-rehab-gold/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-rehab-gold sm:text-xs">
            {h.badge}
          </span>

          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.08] text-rehab-dark sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-rehab-gold">{h.titleLine1}</span>
            <br />
            {h.titleLine2}
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-pretty text-sm leading-relaxed text-gray-600 sm:text-base md:mx-0 md:text-base">
            {h.subtitle}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={SITE_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-event="click_whatsapp"
              className="animate-call-pulse inline-flex items-center justify-center gap-2.5 rounded-2xl bg-rehab-gold px-5 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-rehab-gold/25 transition hover:bg-rehab-gold-dark active:scale-[0.98]"
            >
              <WhatsAppIcon size={20} />
              {h.ctaWhatsapp}
            </a>
            <a
              href={`tel:${SITE_DATA.phone.replace(/[^\d+]/g, "")}`}
              data-event="click_phone"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-rehab-dark bg-white px-5 py-3.5 text-[15px] font-bold text-rehab-dark transition hover:bg-rehab-dark hover:text-white active:scale-[0.98]"
            >
              <Phone size={18} />
              {h.ctaCall}
            </a>
          </div>

          {/* Блок доверия — прямо под кнопками, слева от фото */}
          <ul className="mt-6 flex flex-col divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white/80 px-4 text-left shadow-sm shadow-black/[0.03] backdrop-blur-sm">
            {h.trust.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <li key={item.title} className="flex items-start gap-2.5 py-2.5">
                  <Icon size={17} className="mt-0.5 shrink-0 text-rehab-gold" />
                  <p className="text-[13px] leading-snug text-gray-500">
                    <span className="font-bold text-rehab-dark">{item.title}</span>
                    <span className="mx-1.5 text-gray-300">·</span>
                    {item.sub}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
