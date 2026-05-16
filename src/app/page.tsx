import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Philosophy from "@/components/Philosophy";
import Research from "@/components/Research";
import Execution from "@/components/Execution";
import Process from "@/components/Process";
import Work from "@/components/Work";
import WhyUs from "@/components/WhyUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const CAPABILITIES = [
  "Product Engineering",
  "Brand Systems",
  "Growth Infrastructure",
  "AI Automation",
  "SaaS Architecture",
  "Performance Marketing",
  "UX Research",
  "Conversion Systems",
];

export default function Home() {
  return (
    <main className="bg-[#06060A] min-h-screen">
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Philosophy />
      <Research />
      <Marquee
        items={CAPABILITIES}
        speed={28}
        direction="right"
      />
      <Execution />
      <Process />
      <Work />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
