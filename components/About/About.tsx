import styles from "./About.module.css";
import shared from "@/styles/shared.module.css";

const stats = [
  { num: "100%", label: "Proyectos personalizados" },
  { num: "1:1", label: "Atención personalizada" },
  { num: "2", label: "Disciplinas de diseño" },
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
              No somos un estudio<br />convencional.
            </h2>
            <div className={shared.secBar} />
            <p className={`${shared.secDesc} ${styles.desc}`}>
              Palette nació para trabajar con emprendedores y empresas que
              quieren salir de su zona de confort. No replicamos tendencias ni
              usamos fórmulas genéricas — diseñamos identidades que se atreven
              a ser distintas y que destacan donde más importa: el mundo digital.
            </p>
            <p className={`${shared.secDesc} ${styles.desc}`} style={{ marginTop: "16px" }}>
              Si tu marca está lista para dejar de pasar desapercibida y
              empezar a ocupar el lugar que se merece, estamos para hacerlo
              realidad.
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
