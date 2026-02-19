import Hero from "@/components/containers/hero/Hero";
import StatsSection from "@/components/StatSection/StatSection";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <StatsSection />
    </main>
  );
}
