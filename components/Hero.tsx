import { Phone, ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { getWhatsAppLink, SITE_DATA } from "@/constants";
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

      {/* Фото в своём — более широком — контейнере, чтобы стоять правее и крупнее,
          при этом текст ниже остаётся на общей сетке сайта. */}
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden w-full max-w-[1700px] md:block">
        <div className="absolute bottom-0 right-2 h-full w-[44%]">
          {/* Обычный <picture> вместо next/image: при статическом экспорте
              (images.unoptimized) next/image всё равно отдаёт голый <img>, но
              вдобавок ставит preload — и телефон качал фото, которого не видит
              (блок скрыт до md). Здесь реальный файл подключён только через
              media-условие, а на мобильном подставляется пиксель из data-URI,
              то есть запроса в сеть нет вообще. */}
          <picture>
            <source media="(min-width: 768px)" srcSet="/main_page.webp" type="image/webp" />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              alt={dict.meta.ogAlt}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain object-bottom"
            />
          </picture>
        </div>
      </div>

      {/* Текст на 12-колоночной сетке: 7 колонок держат его слева от фигур.
          Ширина ограничена по брейкпоинтам, чтобы длинный заголовок переносился,
          а не доезжал до фото. */}
      <div className="relative z-20 mx-auto grid w-full max-w-7xl grid-cols-12 px-4 sm:px-6 lg:px-8">
        <div className="col-span-12 max-w-[700px] text-center md:col-span-7 md:max-w-[400px] md:text-left lg:max-w-[540px] xl:max-w-[680px] 2xl:max-w-[700px]">
          <span className="inline-block rounded-full bg-rehab-gold/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-rehab-gold sm:text-xs">
            {h.badge}
          </span>

          {/* Кегль подобран так, чтобы вторая строка заголовка помещалась
              в одну строку на каждом брейкпоинте, а не переносилась. */}
          <h1 className="mt-5 text-[1.9rem] font-bold leading-[1.08] text-rehab-dark sm:text-[2.6rem] md:text-[2.625rem] lg:text-[3.5rem] xl:text-[4.25rem]">
            <span className="text-rehab-gold">{h.titleLine1}</span>
            <br />
            {h.titleLine2}
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-pretty text-sm leading-relaxed text-gray-600 sm:text-base md:mx-0 md:text-base">
            {h.subtitle}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={getWhatsAppLink(lang)}
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

          {/* Блок доверия — прямо под кнопками, слева от фото. Каждый пункт
              отдельной карточкой. w-fit стоит на списке, а карточки внутри
              тянутся на его ширину: список обжимается по самой длинной строке,
              а все три карточки при этом одинаковой ширины и не «пляшут». */}
          <ul className="mx-auto mt-6 flex w-fit max-w-full flex-col gap-2 md:mx-0">
            {h.trust.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <li
                  key={item.title}
                  className="flex w-full items-start gap-2.5 rounded-xl border border-gray-100 bg-white/80 px-3.5 py-2.5 text-left shadow-sm shadow-black/[0.03] backdrop-blur-sm"
                >
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
