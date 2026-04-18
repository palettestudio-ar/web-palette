import styles from "./Process.module.css";
import shared from "@/styles/shared.module.css";

const steps = [
  {
    num: "01",
    title: "Consulta inicial",
    desc: "Nos conocemos a fondo. Escuchamos tu visión, tu audiencia, tus valores y lo que querés que el mundo sienta al ver tu marca.",
  },
  {
    num: "02",
    title: "Dirección creativa",
    desc: "Desarrollamos el concepto visual estratégico: el camino estético que mejor captura la esencia de tu marca y la diferencia del resto.",
  },
  {
    num: "03",
    title: "Diseño & refinado",
    desc: "Creamos cada pieza con detalle. Presentamos, escuchamos tu feedback y ajustamos hasta que el resultado te represente al 100%.",
  },
  {
    num: "04",
    title: "Entrega & lanzamiento",
    desc: "Recibís todos los archivos organizados y listos para usar — en cualquier plataforma, soporte o formato que necesites.",
  },
];

export default function Process() {
  return (
    <section className={`${styles.process} ${shared.sec}`} id="proceso">
      <div className={shared.wrap}>
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className={shared.secLabel}>Cómo trabajamos</span>
          <h2 className={shared.secTitle}>Un proceso hecho para vos</h2>
          <div className={shared.secBar} />
        </div>

        {/* Steps */}
        <div className={styles.grid}>
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`${styles.step} reveal-scale d${i + 1}`}
            >
              <span className={styles.num}>{s.num}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
