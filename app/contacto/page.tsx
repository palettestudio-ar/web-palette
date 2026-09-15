import type { Metadata } from "next";
import ContactoPageClient from "./ContactoPageClient";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contanos tu proyecto por WhatsApp, Instagram o email — Palette Studio, branding y diseño UI.",
};

export default function ContactoPage() {
  return <ContactoPageClient />;
}
