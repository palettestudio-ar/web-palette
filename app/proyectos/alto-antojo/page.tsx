import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import shared from "@/styles/shared.module.css";

export const metadata: Metadata = {
  title: "Alto Antojo — Caso de Branding",
  description:
    "Identidad de marca, packaging e ilustración de personajes para Alto Antojo, un proyecto de práctica de Palette Studio.",
};

export default function AltoAntojoPage() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: "url(/proyectos/alto-antojo-hero.webp)" }}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <Link href="/#proyectos" className={styles.backLink}>
            ← Proyectos
          </Link>
          <span className={styles.heroLabel}>Branding · Identidad Visual · 2026</span>
          <h1 className={styles.heroTitle}>Alto Antojo</h1>
          <p className={styles.heroSub}>
            Identidad ilustrada y sistema de packaging para una marca de
            comida callejera con mucha personalidad.
          </p>
        </div>
      </section>

      {/* INFO */}
      <section className={styles.info}>
        <div className={styles.infoGrid}>
          {[
            { label: "Tipo de proyecto", value: "Práctica propia" },
            { label: "Categoría", value: "Branding · Identidad Visual" },
            { label: "Año", value: "2026" },
            { label: "Entregables", value: "Logotipo · Packaging · Personajes ilustrados" },
          ].map((item) => (
            <div key={item.label} className={styles.infoItem}>
              <span className={styles.infoLabel}>{item.label}</span>
              <span className={styles.infoValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUÉ */}
      <section className={`${shared.sec}`}>
        <div className={shared.wrap}>
          <div className={styles.storyGrid}>
            <div>
              <span className={shared.secLabel}>Por qué lo hicimos</span>
              <h2 className={shared.secTitle}>
                Un cliente ficticio,<br />un sistema real.
              </h2>
              <div className={shared.secBar} />
              <p className={shared.secDesc}>
                Alto Antojo no es un cliente — es un proyecto propio de Palette,
                pensado para tener en el portfolio un caso de Branding completo
                de punta a punta, más allá de un logo suelto.
              </p>
              <p className={shared.secDesc} style={{ marginTop: "16px" }}>
                Elegimos el rubro de comida callejera porque exige una
                identidad que se entienda en un segundo: colores que abren el
                apetito, una tipografía que gotea como el queso derretido, y
                un tono de voz directo y con humor (&ldquo;¡Sabor que chorrea!&rdquo;).
              </p>
            </div>
            <div>
              <span className={shared.secLabel}>Qué construimos</span>
              <ul className={styles.storyList}>
                <li>Logotipo con lettering ilustrado a mano</li>
                <li>Paleta de marca: negro, blanco y amarillo mostaza</li>
                <li>Personajes ilustrados de las hamburguesas del menú</li>
                <li>Sistema de packaging: bolsas, vasos, cajas y stickers</li>
                <li>Tono de voz y frases de marca</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallery}>
        <div className={styles.galleryGrid}>
          <div
            className={`${styles.galleryImg} ${styles.galleryImgLarge}`}
            style={{ backgroundImage: "url(/proyectos/alto-antojo-2.webp)" }}
          />
          <div className={styles.galleryCol}>
            <div
              className={styles.galleryImg}
              style={{ backgroundImage: "url(/proyectos/alto-antojo-3.webp)" }}
            />
            <div
              className={styles.galleryImg}
              style={{ backgroundImage: "url(/proyectos/alto-antojo-4.webp)" }}
            />
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className={styles.next}>
        <Link href="/#proyectos" className={styles.nextLink}>
          <span className={styles.nextLabel}>Volver a</span>
          <span className={styles.nextTitle}>Proyectos →</span>
        </Link>
      </section>
    </main>
  );
}
