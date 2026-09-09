"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import PageHero from "@/components/PageHero/PageHero";
import styles from "../service.module.css";
import shared from "@/styles/shared.module.css";
import { WHATSAPP_URL } from "@/lib/constants";

const includes = [
  {
    title: "Diseño de sitios web",
    desc: "Diseñamos la interfaz completa de tu sitio — estructura, navegación, tipografía y visual — lista para desarrollo o en Framer/Webflow.",
  },
  {
    title: "Diseño de aplicaciones",
    desc: "Interfaces móviles que combinan usabilidad y estética. Pantallas, flujos y componentes diseñados para que el usuario quiera volver.",
  },
  {
    title: "Sistema de componentes UI",
    desc: "Librería de botones, cards, formularios y elementos reutilizables. Consistencia visual en cada pantalla, sin improvisar.",
  },
  {
    title: "Prototipado interactivo",
    desc: "Prototipos navegables que muestran cómo se mueve la interfaz antes de escribir una sola línea de código.",
  },
];

export default function DisenoUIPage() {
  useReveal();

  return (
    <main>
      <PageHero
        label="Servicio 02"
        title="Diseño UI"
        sub="Interfaces digitales que no solo se ven bien — generan confianza y convierten."
      />

      <section className={`${styles.intro} ${shared.sec}`}>
        <div className={shared.wrap}>
          <div className={styles.introGrid}>
            <div className={`${styles.introText} reveal-left`}>
              <span className={shared.secLabel}>Qué es</span>
              <h2 className={`${shared.secTitle} ${styles.introTitle}`}>
                Tu presencia digital<br />
                <em>es tu primera impresión.</em>
              </h2>
              <div className={shared.secBar} />
              <p className={shared.secDesc}>
                El diseño de interfaces (UI) es la disciplina que define cómo
                se ve y cómo funciona todo lo digital: tu sitio web, tu app, tu
                tienda online. Una buena interfaz hace que el usuario entienda
                dónde está, confíe en tu marca y complete la acción que querés.
              </p>
              <p className={`${shared.secDesc} ${styles.mt}`}>
                En Palette diseñamos interfaces que son una extensión de tu
                identidad visual — coherentes con tu marca, intuitivas para el
                usuario y pensadas para destacar en el mundo digital donde todo
                compite por la atención.
              </p>
            </div>

            <div className={`${styles.introAside} reveal-right`}>
              <p className={styles.asideLabel}>Ideal para</p>
              <ul className={styles.asideList}>
                <li>Marcas que necesitan sitio web o rediseño</li>
                <li>Startups que lanzan una app</li>
                <li>Negocios que quieren coherencia web-marca</li>
                <li>Proyectos que van a mano de desarrolladores</li>
              </ul>

              <div className={styles.asideDivider} />

              <p className={styles.asideLabel}>Resultado</p>
              <p className={styles.asideText}>
                Una interfaz lista para implementar — con todos los estados,
                componentes y especificaciones que el equipo de desarrollo
                necesita para ejecutar sin improvisar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.includes} ${shared.sec}`}>
        <div className={shared.wrap}>
          <div className={`${styles.includesHeader} reveal`}>
            <span className={shared.secLabel}>Qué incluye</span>
            <h2 className={shared.secTitle}>Diseño listo para implementar</h2>
            <div className={shared.secBar} />
          </div>

          <div className={styles.includesGrid}>
            {includes.map((item, i) => (
              <div key={item.title} className={`${styles.includeCard} reveal d${i + 1}`}>
                <span className={styles.includeNum}>0{i + 1}</span>
                <h3 className={styles.includeTitle}>{item.title}</h3>
                <p className={styles.includeDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.cta} ${shared.sec}`}>
        <div className={shared.wrap}>
          <div className={`${styles.ctaInner} reveal`}>
            <h2 className={styles.ctaTitle}>¿Tu marca necesita una presencia digital a la altura?</h2>
            <p className={styles.ctaDesc}>Contanos tu proyecto y diseñamos juntos la interfaz que tu marca merece.</p>
            <div className={styles.ctaBtns}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Consultanos por WhatsApp
              </a>
              <Link href="/servicios" className={styles.btnSecondary}>
                ← Ver todos los servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
