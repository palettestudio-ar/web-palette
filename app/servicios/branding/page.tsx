import type { Metadata } from "next";
import BrandingPageClient from "./BrandingPageClient";

export const metadata: Metadata = {
  title: "Branding",
  description:
    "Estrategia de marca, naming, tono de voz y manual de marca completo. La identidad detrás de todo, antes del diseño.",
};

export default function BrandingPage() {
  return <BrandingPageClient />;
}
