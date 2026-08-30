import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { Lang } from "@/constants/dictionaries";
import { getAnswerPages } from "@/lib/answer-pages";
import { getAnswerUrl } from "@/lib/seo";

export default function PopularQuestions({ lang }: { lang: Lang }) {
  const isRu = lang === "ru";
  const pages = getAnswerPages(lang);
  const prefix = isRu ? "/ru" : "";

  return (
    <Section className="bg-rehab-light">
      <SectionHeading
        eyebrow={isRu ? "Полезные ответы" : "Пайдалы жауаптар"}
        title={isRu ? "Что чаще всего ищут родственники" : "Туыстар жиі іздейтін сұрақтар"}
        subtitle={isRu ? "Пошаговые ответы для конкретных семейных ситуаций." : "Нақты отбасылық жағдайларға арналған қадамдық жауаптар."}
      />
      <div className="grid gap-4 md:grid-cols-2">
        {pages.map((page) => (
          <Link key={page.key} href={new URL(getAnswerUrl(lang, page)).pathname} className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 font-bold leading-snug text-rehab-dark shadow-sm transition hover:border-rehab-gold/30 hover:text-rehab-gold sm:p-6">
            {page.question}
            <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href={`${prefix}/answers/`} className="inline-flex items-center gap-2 rounded-2xl bg-rehab-dark px-5 py-3 text-sm font-bold text-white transition hover:bg-rehab-gold">
          {isRu ? "Все ответы о зависимости" : "Тәуелділік туралы барлық жауап"}<ArrowRight size={17} aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
