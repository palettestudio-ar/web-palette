"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import PageHero from "@/components/PageHero/PageHero";
import styles from "../service.module.css";
import shared from "@/styles/shared.module.css";
import { WHATSAPP_URL } from "@/lib/constants";

const includes = [
  {
    title: "Estrategia de marca",
    desc: "Definimos el posicionamiento, los valores y la promesa de tu marca. Quién sos, para quién sos y por qué te eligen a vos.",
  },
  {
    title: "Naming y propuesta de valor",
    desc: "Si necesitás un nombre o querés afinarlo, trabajamos en crear uno que sea memorable, disponible y que represente tu esencia.",
  },
  {
    title: "Tono de voz y personalidad",
    desc: "Cómo habla tu marca, qué palabras usa, qué actitud tiene. Consistencia en cada mensaje, en cada plataforma.",
  },
  {
    title: "Manual de marca completo",
    desc: "El documento que reúne todas las reglas de tu marca para que vos, tu equipo y cualquier proveedor la usen correctamente.",
  },
];

export default function BrandingPage() {
  useReveal();

  return (
    <main>
      <PageHero
        label="Servicio 01"
        title="Branding"
        sub="La estrategia detrás de todo. Antes del diseño, viene la identidad."
      />

      <section className={`${styles.intro} ${shared.sec}`}>
        <div className={shared.wrap}>
          <div className={styles.introGrid}>
            <div className={`${styles.introText} reveal-left`}>
              <span className={shared.secLabel}>Qué es</span>
              <h2 className={`${shared.secTitle} ${styles.introTitle}`}>
                Tu marca es más que un logo.<br />
                <em>Es lo que sentís cuando la ves.</em>
              </h2>
              <div className={shared.secBar} />
              <p className={shared.secDesc}>
                El branding es la estrategia que define quién es tu marca, qué
                dice, cómo lo dice y por qué las personas la eligen. Sin una
                base sólida de branding, el diseño no tiene dirección — y una
                marca sin dirección se pierde entre la competencia.
              </p>
              <p className={`${shared.secDesc} ${styles.mt}`}>
                En Palette no arrancamos con el logo. Arrancamos con preguntas:
                ¿qué hace especial a tu marca? ¿quién es tu cliente ideal? ¿qué
                querés que sientan cuando te encuentran? Las respuestas son la
                base de todo lo que viene después.
              </p>
            </div>

            <div className={`${styles.introAside} reveal-right`}>
              <p className={styles.asideLabel}>Ideal para</p>
              <ul className={styles.asideList}>
                <li>Marcas que arrancan desde cero</li>
                <li>Negocios que crecieron sin una estrategia clara</li>
                <li>Emprendedores que quieren reposicionarse</li>
                <li>Empresas que se expanden a nuevos mercados</li>
              </ul>

              <div className={styles.asideDivider} />

              <p className={styles.asideLabel}>Resultado</p>
              <p className={styles.asideText}>
                Una marca con dirección, personalidad y un sistema de
                comunicación que funciona solo — sin depender de que vos estés
                explicándola todo el tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className={`${styles.includes} ${shared.sec}`}>
        <div className={shared.wrap}>
          <div className={`${styles.includesHeader} reveal`}>
            <span className={shared.secLabel}>Qué incluye</span>
            <h2 className={shared.secTitle}>Lo que construimos juntos</h2>
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

      {/* CTA */}
      <section className={`${styles.cta} ${shared.sec}`}>
        <div className={shared.wrap}>
          <div className={`${styles.ctaInner} reveal`}>
            <h2 className={styles.ctaTitle}>¿Lista para construir tu marca desde adentro?</h2>
            <p className={styles.ctaDesc}>Contanos dónde está tu marca hoy y hacia dónde querés llevarla.</p>
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
