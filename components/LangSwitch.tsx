import Link from "next/link";
import type { Lang } from "@/constants/dictionaries";
import { getDictionary } from "@/constants/dictionaries";

/**
 * Переключатель языка. `altPath` — путь текущей страницы БЕЗ языкового
 * префикса (например "" для главной, "/privacy" для политики конфиденциальности).
 */
export default function LangSwitch({
  lang,
  altPath = "",
  className = "",
}: {
  lang: Lang;
  altPath?: string;
  className?: string;
}) {
  const dict = getDictionary(lang);
  const ruHref = `${altPath || "/"}`;
  const kkHref = `/kk${altPath}/`;

  return (
    <div
      className={`inline-flex items-center rounded-full border border-gray-200 bg-white p-0.5 text-xs font-bold ${className}`}
    >
      <Link
        href={ruHref}
        aria-current={lang === "ru" ? "page" : undefined}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === "ru" ? "bg-rehab-gold text-white" : "text-gray-500 hover:text-rehab-dark"
        }`}
      >
        {dict.langSwitch.ru}
      </Link>
      <Link
        href={kkHref}
        aria-current={lang === "kk" ? "page" : undefined}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === "kk" ? "bg-rehab-gold text-white" : "text-gray-500 hover:text-rehab-dark"
        }`}
      >
        {dict.langSwitch.kk}
      </Link>
    </div>
  );
}
