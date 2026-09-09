"use client";

import { useReveal } from "@/hooks/useReveal";
import Hero from "@/components/Hero/Hero";
import HomeManifesto from "@/components/HomeManifesto/HomeManifesto";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  useReveal();

  return (
    <main>
      <Hero />
      <HomeManifesto />
      <Projects />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
