import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/constants/dictionaries";
import { getDictionary } from "@/constants/dictionaries";
import { SITE_DATA } from "@/constants";
import LangSwitch from "@/components/LangSwitch";
import Footer from "@/components/Footer";

export default function PrivacyPage({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const home = lang === "kk" ? "/kk/" : "/";

  return (
    <>
      <header className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href={home} className="flex items-center gap-2">
            <div className="relative h-8 w-[112px]">
              <Image src="/logo.png" alt="Abyroy Rehab" fill className="object-contain" />
            </div>
          </Link>
          <LangSwitch lang={lang} altPath="/privacy" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-rehab-dark mb-2">{dict.privacy.title}</h1>
        <p className="text-sm text-gray-400 mb-8">{dict.privacy.updated}</p>
        <p className="text-gray-600 leading-relaxed mb-10">{dict.privacy.intro}</p>

        <div className="flex flex-col gap-8">
          {dict.privacy.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-lg font-bold text-rehab-dark mb-2">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-12">
          {SITE_DATA.address} · {SITE_DATA.phone}
        </p>
      </main>

      <Footer lang={lang} />
    </>
  );
}
