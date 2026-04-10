import styles from "./Process.module.css";
import shared from "@/styles/shared.module.css";

const steps = [
  {
    num: "01",
    title: "Consulta inicial",
    desc: "Nos conocemos, entendemos tu marca, tu público y lo que querés transmitir.",
  },
  {
    num: "02",
    title: "Concepto creativo",
    desc: "Desarrollamos la dirección visual que mejor representa la esencia de tu marca.",
  },
  {
    num: "03",
    title: "Diseño & refinado",
    desc: "Creamos, presentamos y ajustamos hasta que el resultado sea perfecto.",
  },
  {
    num: "04",
    title: "Entrega final",
    desc: "Recibís todos los archivos listos para usar en cualquier plataforma o soporte.",
  },
];

export default function Process() {
  return (
    <section className={`${styles.process} ${shared.sec}`} id="proceso">
      <div className={shared.wrap}>
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className={shared.secLabel}>Cómo trabajamos</span>
          <h2 className={shared.secTitle}>El proceso</h2>
          <div className={shared.secBar} />
        </div>

        {/* Steps */}
        <div className={`${styles.grid} reveal d1`}>
          {steps.map((s) => (
            <div key={s.num} className={styles.step}>
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
