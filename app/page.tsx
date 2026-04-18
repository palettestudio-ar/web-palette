"use client";

import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import Process from "@/components/Process/Process";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useReveal();

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <PortfolioSection />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
