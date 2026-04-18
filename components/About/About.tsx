import styles from "./About.module.css";
import shared from "@/styles/shared.module.css";

const stats = [
  { num: "100%", label: "Proyectos personalizados" },
  { num: "+50", label: "Marcas transformadas" },
  { num: "3", label: "Disciplinas de diseño" },
  { num: "∞", label: "Ideas sin límite" },
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
              Diseño con alma.<br />Marcas que se recuerdan.
            </h2>
            <div className={shared.secBar} />
            <p className={`${shared.secDesc} ${styles.desc}`}>
              En Palette Studio creemos que cada marca tiene una historia única
              que merece ser contada visualmente. Somos un estudio especializado
              en identidad visual, branding y diseño de interfaces — con una
              estética contemporánea, intencional y profundamente personal.
            </p>
            <p className={`${shared.secDesc} ${styles.desc}`} style={{ marginTop: "16px" }}>
              Trabajamos codo a codo con emprendedores y empresas que quieren
              dejar de pasar desapercibidos y comenzar a construir una presencia
              visual que inspire confianza, genere conexión y marque diferencia.
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
