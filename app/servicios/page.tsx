import type { Metadata } from "next";
import ServiciosPageClient from "./ServiciosPageClient";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Branding y Diseño UI: dos disciplinas, un mismo objetivo — que tu marca comunique exactamente lo que es.",
};

export default function ServiciosPage() {
  return <ServiciosPageClient />;
}
