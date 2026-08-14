import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.content}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/logo.svg" alt="Palette Studio" className={styles.logo} />

        <p className={styles.eyebrow}>Estudio de Branding &amp; Diseño UI</p>

        <h1 className={styles.title}>
          Tu marca,<br />
          <em>tu esencia.</em>
        </h1>

        <p className={styles.script}>Donde la creatividad se convierte en identidad</p>

        <div className={styles.actions}>
          <Link href="/servicios" className={styles.btnPrimary}>
            Ver servicios
          </Link>
          <Link href="/contacto" className={styles.btnSecondary}>
            Contactanos
          </Link>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
