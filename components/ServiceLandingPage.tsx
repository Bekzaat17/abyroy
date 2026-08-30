import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Phone,
  ShieldCheck,
} from "lucide-react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink, SITE_DATA } from "@/constants";
import type { Lang } from "@/constants/dictionaries";
import {
  getServicePageByKey,
  getServicePages,
  type ServicePageContent,
} from "@/lib/service-pages";
import {
  buildServiceJsonLd,
  getServiceUrl,
  serializeJsonLd,
} from "@/lib/seo";

export default function ServiceLandingPage({
  lang,
  page,
}: {
  lang: Lang;
  page: ServicePageContent;
}) {
  const isRu = lang === "ru";
  const prefix = isRu ? "/ru" : "";
  const home = `${prefix}/`;
  const servicesHref = `${prefix}/services/`;
  const alternatePage = getServicePageByKey(isRu ? "kk" : "ru", page.key);
  const alternateHrefs = {
    kk: new URL(getServiceUrl("kk", isRu ? alternatePage : page)).pathname,
    ru: new URL(getServiceUrl("ru", isRu ? page : alternatePage)).pathname,
  };
  const relatedPages = getServicePages(lang).filter((item) => item.key !== page.key);
  const jsonLd = buildServiceJsonLd(lang, page);
  const tel = `tel:${SITE_DATA.phone.replace(/[^+\d]/g, "")}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Header lang={lang} alternateHrefs={alternateHrefs} />
      <main className="bg-white pt-20">
        <article>
          <header className="relative overflow-hidden bg-rehab-dark py-14 text-white md:py-24">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-rehab-gold/15 blur-3xl"
              aria-hidden
            />
            <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
              <nav aria-label={isRu ? "Хлебные крошки" : "Навигация жолы"}>
                <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50 sm:gap-2">
                  <li><Link href={home} className="hover:text-rehab-gold">{isRu ? "Главная" : "Басты бет"}</Link></li>
                  <li aria-hidden><ChevronRight size={13} /></li>
                  <li><Link href={servicesHref} className="hover:text-rehab-gold">{isRu ? "Услуги" : "Қызметтер"}</Link></li>
                  <li aria-hidden><ChevronRight size={13} /></li>
                  <li aria-current="page" className="max-w-[17rem] truncate text-white/75 sm:max-w-xl">{page.title}</li>
                </ol>
              </nav>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-rehab-gold">
                {page.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {page.title}
              </h1>
              <p className="mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
                {page.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={getWhatsAppLink(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="click_whatsapp"
                  className="animate-call-pulse inline-flex items-center justify-center gap-2.5 rounded-2xl bg-rehab-gold px-5 py-3.5 text-sm font-bold text-white transition hover:bg-rehab-gold-dark sm:text-base"
                >
                  <WhatsAppIcon size={20} />
                  {isRu ? "Получить консультацию" : "Кеңес алу"}
                </a>
                <a
                  href={tel}
                  data-event="click_phone"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:border-rehab-gold hover:text-rehab-gold sm:text-base"
                >
                  <Phone size={18} />
                  {SITE_DATA.phone}
                </a>
              </div>
              <p className="mt-5 inline-flex items-center gap-2 text-xs text-white/50">
                <ShieldCheck size={15} className="text-rehab-gold" aria-hidden />
                {isRu ? "Конфиденциально · обращения 24/7" : "Құпия · өтініштер 24/7"}
              </p>
            </div>
          </header>

          <div className="mx-auto grid w-full max-w-5xl gap-14 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <section aria-labelledby="service-summary">
              <h2 id="service-summary" className="text-balance text-2xl font-bold text-rehab-dark sm:text-3xl">
                {page.summaryTitle}
              </h2>
              <div className="mt-6 grid gap-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                {page.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>

            <section className="rounded-3xl bg-rehab-light p-6 sm:p-8" aria-labelledby="service-signs">
              <h2 id="service-signs" className="text-balance text-2xl font-bold text-rehab-dark sm:text-3xl">
                {page.signsTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">{page.signsIntro}</p>
              <ul className="mt-6 grid gap-3">
                {page.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-rehab-gold" aria-hidden />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="service-process">
              <h2 id="service-process" className="text-balance text-2xl font-bold text-rehab-dark sm:text-3xl">
                {page.processTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">{page.processIntro}</p>
              <ol className="mt-8 grid gap-4 md:grid-cols-5">
                {page.steps.map((step, index) => (
                  <li key={step.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-black/[0.04]">
                    <span className="text-xs font-bold uppercase tracking-wider text-rehab-gold">
                      {isRu ? "Этап" : "Кезең"} {index + 1}
                    </span>
                    <h3 className="mt-3 text-sm font-bold leading-snug text-rehab-dark sm:text-base">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">{step.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="grid gap-6 md:grid-cols-[1fr_1.8fr]" aria-labelledby="service-family">
              <h2 id="service-family" className="text-balance text-2xl font-bold text-rehab-dark sm:text-3xl">
                {page.familyTitle}
              </h2>
              <div className="grid gap-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                {page.familyText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>

            <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8" aria-labelledby="service-important">
              <div className="flex items-start gap-4">
                <AlertTriangle size={24} className="mt-0.5 shrink-0 text-amber-600" aria-hidden />
                <div>
                  <h2 id="service-important" className="text-lg font-bold text-rehab-dark sm:text-xl">{page.importantTitle}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">{page.importantText}</p>
                </div>
              </div>
            </aside>

            <section aria-labelledby="service-faq">
              <h2 id="service-faq" className="text-balance text-2xl font-bold text-rehab-dark sm:text-3xl">
                {isRu ? "Частые вопросы" : "Жиі қойылатын сұрақтар"}
              </h2>
              <div className="mt-6 grid gap-3">
                {page.faq.map((item) => (
                  <details key={item.q} className="group rounded-2xl border border-gray-100 bg-rehab-light/60 px-5 py-4 open:border-rehab-gold/25 open:bg-white sm:px-6 sm:py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-bold text-rehab-dark sm:text-base [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span className="text-xl font-normal leading-none text-rehab-gold transition group-open:rotate-45" aria-hidden>+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <nav aria-label={isRu ? "Другие программы" : "Басқа бағдарламалар"}>
              <h2 className="text-xl font-bold text-rehab-dark sm:text-2xl">
                {isRu ? "Другие направления помощи" : "Басқа көмек бағыттары"}
              </h2>
              <ul className="mt-5 grid gap-3 md:grid-cols-3">
                {relatedPages.map((related) => (
                  <li key={related.key}>
                    <Link
                      href={new URL(getServiceUrl(lang, related)).pathname}
                      className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-gray-100 p-4 text-sm font-bold leading-snug text-rehab-dark transition hover:border-rehab-gold/30 hover:text-rehab-gold"
                    >
                      {related.title}
                      <ArrowRight size={17} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </article>
        <CTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
