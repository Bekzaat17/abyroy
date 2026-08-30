import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Lang } from "@/constants/dictionaries";
import { getAnswerPages } from "@/lib/answer-pages";
import { buildAnswersHubJsonLd, getAnswerUrl, serializeJsonLd } from "@/lib/seo";

export default function AnswersHubPage({ lang }: { lang: Lang }) {
  const isRu = lang === "ru";
  const prefix = isRu ? "/ru" : "";
  const pages = getAnswerPages(lang);
  const jsonLd = buildAnswersHubJsonLd(lang, pages);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <Header lang={lang} altPath="/answers" />
      <main className="bg-white pt-20">
        <section className="bg-rehab-dark py-16 text-white md:py-24">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-white/50" aria-label={isRu ? "Хлебные крошки" : "Навигация жолы"}>
              <Link href={`${prefix}/`} className="hover:text-rehab-gold">{isRu ? "Главная" : "Басты бет"}</Link> / <span className="text-white/75">{isRu ? "Ответы" : "Жауаптар"}</span>
            </nav>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-rehab-gold">{isRu ? "Полезные ответы" : "Пайдалы жауаптар"}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {isRu ? "Что делать семье при зависимости близкого" : "Жақын адам тәуелді болғанда отбасы не істейді"}
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
              {isRu
                ? "Разбираем конкретные ситуации: употребление наркотиков, отказ от лечения, алкогольная и игровая зависимость. Короткий ответ — в начале каждой страницы, подробный план — ниже."
                : "Нақты жағдайларды талдаймыз: есірткі қолдану, емделуден бас тарту, алкоголь және ойынға тәуелділік. Әр бетте қысқа жауап және толық әрекет жоспары бар."}
            </p>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-5xl gap-5 px-4 sm:px-6 lg:px-8 md:grid-cols-2">
            {pages.map((page) => (
              <article key={page.key} className="group relative flex flex-col rounded-3xl border border-gray-100 bg-rehab-light/70 p-6 transition hover:-translate-y-1 hover:border-rehab-gold/30 hover:bg-white hover:shadow-xl hover:shadow-black/5 sm:p-8">
                <HelpCircle size={28} className="text-rehab-gold" aria-hidden />
                <h2 className="mt-5 text-balance text-xl font-bold leading-snug text-rehab-dark sm:text-2xl">
                  <Link href={new URL(getAnswerUrl(lang, page)).pathname} className="after:absolute after:inset-0">{page.question}</Link>
                </h2>
                <p className="mt-3 grow text-sm leading-relaxed text-gray-600">{page.metaDescription}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rehab-gold">
                  {isRu ? "Прочитать ответ" : "Жауапты оқу"}<ArrowRight size={17} className="transition group-hover:translate-x-1" aria-hidden />
                </span>
              </article>
            ))}
          </div>
        </section>
        <CTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
