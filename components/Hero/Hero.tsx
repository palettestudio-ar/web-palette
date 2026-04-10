import styles from "./Hero.module.css";
import shared from "@/styles/shared.module.css";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.circle1} />
      <div className={styles.circle2} />

      <div className={styles.content}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/logo.svg"
          alt="Palette Studio"
          className={styles.heroLogo}
        />

        <p className={styles.eyebrow}>Identidad visual &amp; branding</p>

        <h1 className={styles.title}>
          Tu marca,{" "}
          <em>tu esencia.</em>
        </h1>

        <p className={styles.script}>Diseñamos identidades que brillan</p>

        <p className={styles.sub}>
          Transformamos la esencia de emprendedores y empresas familiares en
          identidades visuales que el mundo no puede ignorar.
        </p>

        <div className={styles.btns}>
          <a href="#servicios" className={shared.btnF}>
            Ver servicios
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={shared.btnO}
          >
            Escribinos
          </a>
        </div>
      </div>
    </section>
  );
}
