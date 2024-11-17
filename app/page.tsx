"use client";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-works";
import Features from "@/components/features";

export default function Home() {

  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Footer />
    </main>
  );
}
