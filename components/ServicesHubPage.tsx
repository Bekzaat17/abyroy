import Link from "next/link";
import { ArrowRight, Gamepad2, HeartHandshake, Pill, Wine } from "lucide-react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Lang } from "@/constants/dictionaries";
import { getServicePages, type ServiceKey } from "@/lib/service-pages";
import {
  buildServicesHubJsonLd,
  getServiceUrl,
  serializeJsonLd,
} from "@/lib/seo";

const icons = {
  drug: Pill,
  alcohol: Wine,
  gambling: Gamepad2,
  family: HeartHandshake,
} satisfies Record<ServiceKey, typeof Pill>;

export default function ServicesHubPage({ lang }: { lang: Lang }) {
  const pages = getServicePages(lang);
  const isRu = lang === "ru";
  const home = isRu ? "/ru/" : "/";
  const jsonLd = buildServicesHubJsonLd(lang, pages);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Header lang={lang} altPath="/services" />
      <main className="bg-white pt-20">
        <section className="relative overflow-hidden bg-rehab-dark py-16 text-white md:py-24">
          <div
            className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-rehab-gold/15 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav aria-label={isRu ? "Хлебные крошки" : "Навигация жолы"}>
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li><Link href={home} className="hover:text-rehab-gold">{isRu ? "Главная" : "Басты бет"}</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white/75">{isRu ? "Услуги" : "Қызметтер"}</li>
              </ol>
            </nav>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-rehab-gold">
              {isRu ? "Программы помощи" : "Көмек бағдарламалары"}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {isRu
                ? "Лечение зависимостей и реабилитация в Шымкенте"
                : "Шымкентте тәуелділікті емдеу және оңалту"}
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
              {isRu
                ? "Выберите направление, чтобы узнать о признаках зависимости, этапах программы и первых действиях семьи. Все обращения конфиденциальны, консультации принимаются круглосуточно."
                : "Тәуелділік белгілері, бағдарлама кезеңдері және отбасының алғашқы әрекеттері туралы білу үшін бағытты таңдаңыз. Барлық өтініш құпия, кеңес тәулік бойы беріледі."}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              {pages.map((page) => {
                const Icon = icons[page.key];
                const href = new URL(getServiceUrl(lang, page)).pathname;

                return (
                  <article
                    key={page.key}
                    className="group relative flex h-full flex-col rounded-3xl border border-gray-100 bg-rehab-light/70 p-6 transition hover:-translate-y-1 hover:border-rehab-gold/30 hover:bg-white hover:shadow-xl hover:shadow-black/5 sm:p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rehab-dark text-rehab-gold">
                      <Icon size={26} aria-hidden />
                    </div>
                    <h2 className="mt-6 text-balance text-xl font-bold leading-snug text-rehab-dark sm:text-2xl">
                      <Link href={href} className="after:absolute after:inset-0">
                        {page.title}
                      </Link>
                    </h2>
                    <p className="mt-3 grow text-sm leading-relaxed text-gray-600 sm:text-base">
                      {page.metaDescription}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rehab-gold">
                      {isRu ? "Подробнее о программе" : "Бағдарлама туралы толығырақ"}
                      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </article>
                );
              })}
            </div>

            <aside className="mt-12 rounded-3xl border border-rehab-gold/20 bg-rehab-gold/5 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-rehab-dark">
                {isRu ? "Не знаете, какое направление выбрать?" : "Қай бағытты таңдау керегін білмейсіз бе?"}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
                {isRu
                  ? "Опишите ситуацию на бесплатной консультации. Мы зададим несколько вопросов, оценим срочность и объясним возможный следующий шаг без давления и обязательств."
                  : "Тегін кеңесте жағдайды айтып беріңіз. Біз бірнеше сұрақ қойып, шұғылдықты бағалаймыз және қысым мен міндеттемесіз келесі қадамды түсіндіреміз."}
              </p>
            </aside>
          </div>
        </section>
        <CTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
