// components/LandingPage.tsx
"use client";
import FeatureSection from "@/components/FeatureSection";
import { PricingSection } from "./pricing";
import { AnalyzeSection } from "./AnalyzeSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import { About } from "./AboutSection";
import { Features } from "./Features";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
      <Header />
      <main className="flex-1 pt-0">
        <HeroSection />
        <FeatureSection />
        {/* <Features /> */}
        <PricingSection />
        <AnalyzeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
