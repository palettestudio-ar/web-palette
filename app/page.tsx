"use client";

import { useReveal } from "@/hooks/useReveal";
import Hero from "@/components/Hero/Hero";
import HomeManifesto from "@/components/HomeManifesto/HomeManifesto";
import Services from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  useReveal();

  return (
    <main>
      <Hero />
      <HomeManifesto />
      <Services />
      <Contact />
    </main>
  );
}
