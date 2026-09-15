export type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  href?: string;
  /** Texto de marca superpuesto sobre la portada (ej. el nombre del cliente). Opcional. */
  wordmark?: string;
  /** Tipografía CSS para el wordmark — usá la del manual de marca del cliente si la tiene. */
  wordmarkFont?: string;
  /** Alternativa a `wordmark`: el logo real del cliente (PNG/SVG, preferí una versión blanca/silueta) superpuesto sobre la portada. */
  wordmarkImage?: string;
};

/*
 * Para publicar un proyecto:
 * 1. Guardá su portada WebP o AVIF en /public/proyectos.
 * 2. Agregá un objeto al array usando el ejemplo comentado de abajo.
 * 3. `href` es opcional: puede apuntar a Behance, Instagram o un caso de estudio.
 */
export const projects: Project[] = [
  {
    title: "NOIRÉ",
    category: "Diseño UI · Desarrollo Web · E-commerce",
    year: "2026",
    image: "/proyectos/noire.webp",
    imageAlt: "Campaña editorial en tonos oscuros para la tienda online NOIRÉ",
    href: "https://palettestudio-ar.github.io/noire-store/",
    wordmark: "Noiré",
    wordmarkFont: "var(--font-cormorant), 'Cormorant Garamond', serif",
  },
  {
    title: "Inplant",
    category: "Diseño Web · Branding",
    year: "2026",
    image: "/proyectos/inplant.webp",
    imageAlt: "Rincón con plantas y hamaca junto a una ventana, para el sitio de Inplant",
    href: "https://palettestudio-ar.github.io/inplant-website/",
    wordmarkImage: "/proyectos/inplant-logo-white.png",
  },
  {
    title: "Alto Antojo",
    category: "Branding · Identidad Visual",
    year: "2026",
    image: "/proyectos/alto-antojo.webp",
    imageAlt: "Logotipo ilustrado de Alto Antojo",
    href: "/proyectos/alto-antojo",
  },
];
