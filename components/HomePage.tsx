import type { Lang } from "@/constants/dictionaries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Advantages from "@/components/Advantages";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import PopularQuestions from "@/components/PopularQuestions";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { buildJsonLd, serializeJsonLd } from "@/lib/seo";

export default function HomePage({ lang }: { lang: Lang }) {
  const jsonLd = buildJsonLd(lang);

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Header lang={lang} />
      <Hero lang={lang} />
      <Intro lang={lang} />
      <Services lang={lang} />
      <Advantages lang={lang} />
      <Roadmap lang={lang} />
      <Team lang={lang} />
      <Reviews lang={lang} />
      <PopularQuestions lang={lang} />
      <FAQ lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
