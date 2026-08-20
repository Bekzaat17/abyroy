import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";
import type { Lang } from "@/constants/dictionaries";
import { getDictionary } from "@/constants/dictionaries";
import { SITE_DATA } from "@/constants";
import LangSwitch from "@/components/LangSwitch";

export default function PrivacyPage({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const home = lang === "ru" ? "/ru/" : "/";
  const back = lang === "ru" ? "Назад" : "Артқа";

  return (
    // Оверлей в духе модального окна: приглушённый фон + карточка по центру.
    // Остаётся полноценной страницей (для прямых ссылок и индексации), но
    // читается как современный диалог, а не отдельный "голый" документ.
    <div className="min-h-screen bg-rehab-dark/95 flex items-start md:items-center justify-center px-0 md:px-4 py-0 md:py-10">
      <div className="relative w-full md:max-w-2xl bg-white md:rounded-[2rem] shadow-2xl min-h-screen md:min-h-0 md:max-h-[88vh] flex flex-col overflow-hidden">

        {/* Шапка карточки: явный путь назад + закрытие + языки */}
        <div className="shrink-0 flex items-center justify-between gap-3 px-5 md:px-8 pt-5 md:pt-7 pb-4 border-b border-gray-100">
          <Link
            href={home}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-rehab-gold transition-colors"
          >
            <ArrowLeft size={18} />
            {back}
          </Link>
          <div className="flex items-center gap-3">
            <LangSwitch lang={lang} altPath="/privacy" />
            <Link
              href={home}
              aria-label={back}
              className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-gray-200 text-rehab-dark hover:bg-rehab-light transition-colors"
            >
              <X size={18} />
            </Link>
          </div>
        </div>

        {/* Прокручиваемое содержимое */}
        <div className="grow overflow-y-auto px-5 md:px-8 py-6 md:py-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="relative h-7 w-[98px]">
              <Image src="/logo.webp" alt="Abyroy Rehab" fill className="object-contain" />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-rehab-dark mb-1">{dict.privacy.title}</h1>
          <p className="text-xs text-gray-400 mb-6">{dict.privacy.updated}</p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">{dict.privacy.intro}</p>

          <div className="flex flex-col gap-6">
            {dict.privacy.sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-base md:text-lg font-bold text-rehab-dark mb-1.5">{s.title}</h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-10 pt-6 border-t border-gray-100">
            {SITE_DATA.address} · {SITE_DATA.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
