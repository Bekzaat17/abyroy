import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Phone,
  Search,
} from "lucide-react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink, SITE_DATA } from "@/constants";
import type { Lang } from "@/constants/dictionaries";
import {
  getAnswerPageByKey,
  getAnswerPages,
  type AnswerPageContent,
} from "@/lib/answer-pages";
import { getServicePageByKey } from "@/lib/service-pages";
import {
  buildAnswerJsonLd,
  getAnswerUrl,
  getServiceUrl,
  serializeJsonLd,
} from "@/lib/seo";

export default function AnswerLandingPage({
  lang,
  page,
}: {
  lang: Lang;
  page: AnswerPageContent;
}) {
  const isRu = lang === "ru";
  const prefix = isRu ? "/ru" : "";
  const alternate = getAnswerPageByKey(isRu ? "kk" : "ru", page.key);
  const alternateHrefs = {
    kk: new URL(getAnswerUrl("kk", isRu ? alternate : page)).pathname,
    ru: new URL(getAnswerUrl("ru", isRu ? page : alternate)).pathname,
  };
  const service = getServicePageByKey(lang, page.serviceKey);
  const related = getAnswerPages(lang).filter((item) => item.key !== page.key);
  const jsonLd = buildAnswerJsonLd(lang, page);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Header lang={lang} alternateHrefs={alternateHrefs} />
      <main className="bg-white pt-20">
        <article>
          <header className="relative overflow-hidden bg-rehab-dark py-14 text-white md:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rehab-gold/15 blur-3xl" aria-hidden />
            <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
              <nav aria-label={isRu ? "Хлебные крошки" : "Навигация жолы"}>
                <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50 sm:gap-2">
                  <li><Link href={`${prefix}/`} className="hover:text-rehab-gold">{isRu ? "Главная" : "Басты бет"}</Link></li>
                  <li aria-hidden><ChevronRight size={13} /></li>
                  <li><Link href={`${prefix}/answers/`} className="hover:text-rehab-gold">{isRu ? "Ответы" : "Жауаптар"}</Link></li>
                  <li aria-hidden><ChevronRight size={13} /></li>
                  <li aria-current="page" className="max-w-[18rem] truncate text-white/75 sm:max-w-xl">{page.question}</li>
                </ol>
              </nav>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-rehab-gold">{page.eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {page.question}
              </h1>
              <p className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/75 sm:text-base">
                <strong className="text-white">{isRu ? "Короткий ответ: " : "Қысқа жауап: "}</strong>
                {page.shortAnswer}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={getWhatsAppLink(lang)} target="_blank" rel="noopener noreferrer" data-event="click_whatsapp" className="animate-call-pulse inline-flex items-center justify-center gap-2.5 rounded-2xl bg-rehab-gold px-5 py-3.5 text-sm font-bold text-white transition hover:bg-rehab-gold-dark sm:text-base">
                  <WhatsAppIcon size={20} />
                  {isRu ? "Обсудить свою ситуацию" : "Жағдайыңызды талқылау"}
                </a>
                <a href={`tel:${SITE_DATA.phone.replace(/[^+\d]/g, "")}`} data-event="click_phone" className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:border-rehab-gold hover:text-rehab-gold sm:text-base">
                  <Phone size={18} /> {SITE_DATA.phone}
                </a>
              </div>
            </div>
          </header>

          <div className="mx-auto grid w-full max-w-5xl gap-14 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <aside className="rounded-3xl border border-gray-100 bg-rehab-light p-6 sm:p-8" aria-labelledby="query-variants">
              <div className="flex items-start gap-4">
                <Search size={22} className="mt-0.5 shrink-0 text-rehab-gold" aria-hidden />
                <div>
                  <h2 id="query-variants" className="text-lg font-bold text-rehab-dark">
                    {isRu ? "Этот вопрос также формулируют так" : "Бұл сұрақты тағы былай қояды"}
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {page.searchVariants.map((variant) => (
                      <li key={variant} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 sm:text-sm">
                        {variant}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <section aria-labelledby="answer-explanation">
              <h2 id="answer-explanation" className="text-balance text-2xl font-bold text-rehab-dark sm:text-3xl">{page.explanationTitle}</h2>
              <div className="mt-6 grid gap-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                {page.explanation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>

            <section aria-labelledby="answer-steps">
              <h2 id="answer-steps" className="text-balance text-2xl font-bold text-rehab-dark sm:text-3xl">{page.stepsTitle}</h2>
              <ol className="mt-7 grid gap-4 md:grid-cols-2">
                {page.steps.map((step, index) => (
                  <li key={step.title} className="rounded-2xl border border-gray-100 p-5 shadow-lg shadow-black/[0.03]">
                    <span className="text-xs font-bold uppercase tracking-wider text-rehab-gold">{isRu ? "Шаг" : "Қадам"} {index + 1}</span>
                    <h3 className="mt-2 font-bold text-rehab-dark">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-3xl bg-rehab-dark p-6 text-white sm:p-8" aria-labelledby="answer-avoid">
              <h2 id="answer-avoid" className="text-2xl font-bold sm:text-3xl">{page.avoidTitle}</h2>
              <ul className="mt-6 grid gap-3">
                {page.avoid.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/65 sm:text-base">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-rehab-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="answer-conversation">
              <h2 id="answer-conversation" className="text-balance text-2xl font-bold text-rehab-dark sm:text-3xl">{page.conversationTitle}</h2>
              <div className="mt-6 grid gap-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                {page.conversationText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>

            <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8" aria-labelledby="answer-emergency">
              <div className="flex items-start gap-4">
                <AlertTriangle size={24} className="mt-0.5 shrink-0 text-amber-600" aria-hidden />
                <div>
                  <h2 id="answer-emergency" className="text-lg font-bold text-rehab-dark sm:text-xl">{page.emergencyTitle}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">{page.emergencyText}</p>
                </div>
              </div>
            </aside>

            <section aria-labelledby="answer-faq">
              <h2 id="answer-faq" className="text-2xl font-bold text-rehab-dark sm:text-3xl">{isRu ? "Дополнительные вопросы" : "Қосымша сұрақтар"}</h2>
              <div className="mt-6 grid gap-3">
                {page.faq.map((item) => (
                  <details key={item.q} className="group rounded-2xl border border-gray-100 bg-rehab-light/60 px-5 py-4 open:border-rehab-gold/25 open:bg-white sm:px-6 sm:py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-bold text-rehab-dark sm:text-base [&::-webkit-details-marker]:hidden">
                      {item.q}<span className="text-xl font-normal leading-none text-rehab-gold transition group-open:rotate-45" aria-hidden>+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <aside className="rounded-3xl border border-rehab-gold/25 bg-rehab-gold/5 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-rehab-dark">{isRu ? "Подходящая программа помощи" : "Сәйкес көмек бағдарламасы"}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">{service.metaDescription}</p>
              <Link href={new URL(getServiceUrl(lang, service)).pathname} className="mt-5 inline-flex items-center gap-2 font-bold text-rehab-gold">
                {service.title}<ArrowRight size={17} aria-hidden />
              </Link>
            </aside>

            <nav aria-label={isRu ? "Другие ответы" : "Басқа жауаптар"}>
              <h2 className="text-xl font-bold text-rehab-dark sm:text-2xl">{isRu ? "Другие частые ситуации" : "Басқа жиі кездесетін жағдайлар"}</h2>
              <ul className="mt-5 grid gap-3 md:grid-cols-3">
                {related.map((item) => (
                  <li key={item.key}>
                    <Link href={new URL(getAnswerUrl(lang, item)).pathname} className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-gray-100 p-4 text-sm font-bold leading-snug text-rehab-dark transition hover:border-rehab-gold/30 hover:text-rehab-gold">
                      {item.question}<ArrowRight size={17} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
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
