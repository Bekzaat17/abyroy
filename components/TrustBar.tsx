import { ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { getDictionary, type Lang } from "@/constants/dictionaries";

const icons = [ShieldCheck, Clock, HeartHandshake];

/**
 * Полоса доверия (анонимность / круглосуточно / бесплатная консультация).
 * Стоит отдельной лентой под первым экраном, а не внутри него: в герое она
 * перекрывала бы фото-вырезку, ради которой сделан эффект пересечения границ.
 */
export default function TrustBar({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <section className="bg-rehab-dark">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {dict.hero.trust.map((item, i) => {
            const Icon = icons[i];
            return (
              <li
                key={item.title}
                className="flex items-start gap-3 py-5 sm:justify-center sm:px-5 sm:py-6"
              >
                <Icon size={22} className="mt-0.5 shrink-0 text-rehab-gold" />
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-snug text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-snug text-white/50">{item.sub}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
