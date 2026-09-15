import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingButtons from "@/components/FloatingButtons/FloatingButtons";
import { SITE_URL } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cormorant",
  display: "swap",
});

const title = "Palette Studio — Branding & Diseño UI";
const description =
  "Transformamos la esencia de emprendedores y empresas familiares en marcas que el mundo no puede ignorar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s — Palette Studio",
  },
  description,
  icons: {
    icon: "/logo/logo.svg",
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Palette Studio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Palette Studio" }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable} ${cormorant.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
