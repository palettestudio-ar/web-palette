"use client";

import { useReveal } from "@/hooks/useReveal";
import PageHero from "@/components/PageHero/PageHero";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";

export default function PortfolioPage() {
  useReveal();

  return (
    <>
      <PageHero
        label="Nuestro trabajo"
        title="Portfolio"
        sub="Cada proyecto es el resultado de escuchar, crear y dar vida a una visión única."
      />
      <PortfolioSection hideHeader />
    </>
  );
}
