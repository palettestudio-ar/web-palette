"use client";

import { useReveal } from "@/hooks/useReveal";
import PageHero from "@/components/PageHero/PageHero";
import Services from "@/components/Services/Services";

export default function ServiciosPage() {
  useReveal();

  return (
    <>
      <PageHero
        label="Lo que hacemos"
        title="Servicios"
        sub="Dos disciplinas. Un mismo objetivo: que tu marca comunique exactamente lo que es."
      />
      <Services hideHeader />
    </>
  );
}
