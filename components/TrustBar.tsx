import { ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { getDictionary, type Lang } from "@/constants/dictionaries";

const icons = [ShieldCheck, Clock, HeartHandshake];

/**
 * Полоса доверия (анонимность / круглосуточно / бесплатная консультация).
 * Стоит отдельной лентой под первым экраном, а не внутри него: в герое она
 * перекрывала бы фото-вырезку, ради которой сделан эффект пересечения границ.
 * Светлая — тёмный вариант спорил и с тёмной панелью героя, и с тёмным
 * блоком услуг ниже, из-за чего верх страницы выглядел тяжёлым.
 */
export default function TrustBar({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <section className="bg-rehab-light pt-8 pb-10 md:pt-10 md:pb-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {dict.hero.trust.map((item, i) => {
            const Icon = icons[i];
            return (
              <li
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm shadow-black/[0.03] transition-colors hover:border-rehab-gold/30 md:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rehab-gold/10 text-rehab-gold md:h-12 md:w-12">
                  <Icon size={22} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-snug text-rehab-dark md:text-[15px]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-gray-500">{item.sub}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
