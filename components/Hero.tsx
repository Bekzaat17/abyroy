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
    <section className="relative overflow-hidden bg-rehab-light pt-28 pb-14 md:pt-36 md:pb-20">
      {/* Мягкое золотое свечение, чтобы мобильный экран без фото не выглядел пустым */}
      <div
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-rehab-gold/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="text-center md:col-span-7 md:text-left">
          <span className="inline-block rounded-full bg-rehab-gold/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-rehab-gold sm:text-xs">
            {h.badge}
          </span>

          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.08] text-rehab-dark sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-rehab-gold">{h.titleLine1}</span>
            <br />
            {h.titleLine2}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-gray-600 sm:text-base md:mx-0 md:text-lg">
            {h.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={SITE_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-event="click_whatsapp"
              className="animate-call-pulse inline-flex items-center justify-center gap-2.5 rounded-2xl bg-rehab-gold px-6 py-4 text-base font-bold text-white shadow-lg shadow-rehab-gold/25 transition hover:bg-rehab-gold-dark active:scale-[0.98]"
            >
              <WhatsAppIcon size={22} />
              {h.ctaWhatsapp}
            </a>
            <a
              href={`tel:${SITE_DATA.phone.replace(/[^\d+]/g, "")}`}
              data-event="click_phone"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-rehab-dark bg-white px-6 py-4 text-base font-bold text-rehab-dark transition hover:bg-rehab-dark hover:text-white active:scale-[0.98]"
            >
              <Phone size={20} />
              {h.ctaCall}
            </a>
          </div>

          {/* Блок доверия: анонимность, круглосуточность, бесплатная консультация */}
          <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-200/80 text-left sm:grid-cols-3">
            {h.trust.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <li key={item.title} className="flex items-start gap-3 bg-white/90 p-4 backdrop-blur-sm">
                  <Icon size={20} className="mt-0.5 shrink-0 text-rehab-gold" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug text-rehab-dark">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-snug text-gray-500">{item.sub}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Фото специалиста — только на десктопе (файл тяжёлый, на мобильном не грузим).
            Тёмная подложка сделана карточкой внутри колонки, а не полосой во всю
            ширину экрана: так фото-вырезка всегда стоит ровно на своём фоне
            независимо от ширины монитора. */}
        <div className="hidden md:col-span-5 md:block">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2.5rem] bg-rehab-dark lg:max-w-[460px]">
            <div
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-rehab-gold/25 to-transparent"
              aria-hidden
            />
            <Image
              src="/main_page.png"
              alt={dict.meta.ogAlt}
              fill
              priority
              sizes="(min-width: 1024px) 460px, (min-width: 768px) 420px, 0px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
