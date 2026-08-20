import type { Lang } from "@/constants/dictionaries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Advantages from "@/components/Advantages";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <main className="min-h-screen bg-white">
      <Header lang={lang} />
      <Hero lang={lang} />
      <Intro lang={lang} />
      <Services lang={lang} />
      <Advantages lang={lang} />
      <Roadmap lang={lang} />
      <Team lang={lang} />
      <Reviews lang={lang} />
      <FAQ lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
