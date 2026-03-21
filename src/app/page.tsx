// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BenefitsTicker from "@/components/BenefitsTicker";
import StatsBar from "@/components/StatsBar";
import ProductShowcase from "@/components/ProductShowcase";
import ScienceSection from "@/components/ScienceSection";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <BenefitsTicker />
      <StatsBar />
      <ProductShowcase />
      <ScienceSection />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
  );
}
