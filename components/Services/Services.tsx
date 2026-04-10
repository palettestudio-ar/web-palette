import styles from "./Services.module.css";
import shared from "@/styles/shared.module.css";

const services = [
  {
    num: "01",
    name: "Identidad Visual Completa",
    desc: "Una identidad visual coherente y memorable que comunica quién sos antes de que digas una sola palabra.",
    items: [
      "Diseño de logotipo profesional",
      "Paleta de colores personalizada",
      "Selección tipográfica",
      "Manual de marca completo",
      "Archivos en todos los formatos",
    ],
    badge: "El más completo",
    delay: "",
  },
  {
    num: "02",
    name: "Diseño de Logotipo",
    desc: "Tu símbolo de identidad. Un logotipo diseñado con intención que representa la esencia de tu marca.",
    items: [
      "Concepto creativo exclusivo",
      "Versiones positiva y negativa",
      "Variantes de uso",
      "Archivos SVG, PNG y PDF",
      "Guía de uso básica",
    ],
    badge: "Ideal para empezar",
    delay: "d1",
  },
  {
    num: "03",
    name: "Manual de Marca",
    desc: "Las reglas de juego de tu marca. Todo lo que necesitás para mantener una imagen coherente en cada plataforma.",
    items: [
      "Guía de colores y tipografía",
      "Normas de uso del logo",
      "Tono de voz y personalidad",
      "Estilo fotográfico",
      "Ejemplos de aplicación",
    ],
    badge: "Profesionaliza tu marca",
    delay: "d2",
  },
];

export default function Services() {
  return (
    <section className={`${styles.services} ${shared.sec}`} id="servicios">
      <div className={shared.wrap}>
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className={shared.secLabel}>Lo que hacemos</span>
          <h2 className={shared.secTitle}>Nuestros servicios</h2>
          <div className={shared.secBar} />
          <p className={`${shared.secDesc} ${styles.headerDesc}`}>
            Cada servicio está diseñado para darte la identidad visual que tu
            marca necesita, sin importar en qué etapa estés.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {services.map((s) => (
            <div
              key={s.num}
              className={`${styles.card} reveal${s.delay ? " " + s.delay : ""}`}
            >
              <span className={styles.num}>{s.num}</span>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <ul className={styles.list}>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className={styles.badge}>{s.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
