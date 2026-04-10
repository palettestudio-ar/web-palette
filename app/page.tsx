"use client";

import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
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
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
