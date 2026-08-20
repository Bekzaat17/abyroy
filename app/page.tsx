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

export default function Home() {
    return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Advantages />
      <Roadmap />
      <Team />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );

}