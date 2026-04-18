import styles from "./About.module.css";
import shared from "@/styles/shared.module.css";

const stats = [
  { num: "100%", label: "Diseño personalizado" },
  { num: "∞", label: "Creatividad sin límites" },
  { num: "3", label: "Servicios estrella" },
  { num: "1", label: "Estética única" },
];

export default function About() {
  return (
    <section className={`${styles.about} ${shared.sec}`} id="nosotras">
      <div className={shared.wrap}>
        <div className={styles.grid}>
          {/* Left column */}
          <div className="reveal-left">
            <span className={shared.secLabel}>Quiénes somos</span>
            <h2 className={`${shared.secTitle} ${styles.title}`}>
              Más que diseño.<br />Arte con propósito.
            </h2>
            <div className={shared.secBar} />
            <p className={`${shared.secDesc} ${styles.desc}`}>
              En Palette Studio creemos que la belleza es una declaración de
              intenciones. Nos especializamos en estética femenina audaz y
              contemporánea — marcas que tienen carácter, presencia y dejan
              huella.
            </p>
            <p className={`${shared.secDesc} ${styles.desc}`} style={{ marginTop: "16px" }}>
              Trabajamos con emprendedoras y empresas familiares que quieren
              dejar de pasar desapercibidas y empezar a ser recordadas.
            </p>
          </div>

          {/* Right column — stats */}
          <div className={`${styles.statsGrid} reveal-right d2`}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statN}>{s.num}</span>
                <span className={styles.statL}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
