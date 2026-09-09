import Link from "next/link";
import styles from "./HomeManifesto.module.css";

export default function HomeManifesto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Quiénes somos</p>

        <h2 className={styles.statement}>
          No somos un estudio<br />
          <em>convencional.</em>
        </h2>

        <p className={styles.body}>
          Palette nació para trabajar con emprendedores y empresas que quieren
          salir de su zona de confort. Diseñamos identidades que se atreven a
          ser distintas — marcas que destacan donde más importa: el mundo digital.
        </p>

        <Link href="/servicios" className={styles.link}>
          Conocé cómo trabajamos →
        </Link>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>+50</span>
          <span className={styles.statLabel}>Marcas transformadas</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>100%</span>
          <span className={styles.statLabel}>Proyectos a medida</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>2</span>
          <span className={styles.statLabel}>Disciplinas de diseño</span>
        </div>
      </div>
    </section>
  );
}
