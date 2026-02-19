import Hero from "@/components/containers/hero/Hero";
import StatsSection from "@/components/StatSection/StatSection";
import HeroSection from "@/components/sections/HeroSection";
import SkillsGrid from "@/components/sections/SkillsGrid";
import QuoteCard from "@/components/sections/QuoteCard";
import ResultsHeader from "@/components/sections/ResultsHeader";
import WithMeCard from "@/components/sections/WithMeCard";
import OtherCard from "@/components/sections/OtherCard";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <StatsSection />

      <div className="w-full max-w-md space-y-8">
        <HeroSection />
        <SkillsGrid />
        <QuoteCard />
        <ResultsHeader />
        <WithMeCard />
        <OtherCard />
      </div>
    </main>
  );
}
