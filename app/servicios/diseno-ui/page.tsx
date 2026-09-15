import type { Metadata } from "next";
import DisenoUIPageClient from "./DisenoUIPageClient";

export const metadata: Metadata = {
  title: "Diseño UI",
  description:
    "Interfaces digitales que generan confianza y convierten: sitios web, apps, sistemas de componentes y prototipos.",
};

export default function DisenoUIPage() {
  return <DisenoUIPageClient />;
}
