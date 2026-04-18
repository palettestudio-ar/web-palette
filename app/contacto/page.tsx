"use client";

import { useReveal } from "@/hooks/useReveal";
import Contact from "@/components/Contact/Contact";

export default function ContactoPage() {
  useReveal();
  return <Contact fullPage />;
}
