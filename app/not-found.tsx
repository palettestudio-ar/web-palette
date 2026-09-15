import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.content}>
        <span className={styles.eyebrow}>Error 404</span>

        <h1 className={styles.title}>
          Esta página<br />
          <em>se perdió en el camino.</em>
        </h1>

        <p className={styles.text}>
          La dirección que buscás no existe o se movió de lugar.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.btnPrimary}>
            Volver al inicio
          </Link>
          <Link href="/servicios" className={styles.btnSecondary}>
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
