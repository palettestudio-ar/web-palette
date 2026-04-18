import styles from "./Services.module.css";
import shared from "@/styles/shared.module.css";
import { WHATSAPP_URL } from "@/lib/constants";

const categories = [
  {
    num: "01",
    name: "Branding",
    desc: "Tu marca es mucho más que un logo. Construimos la estrategia completa — el concepto, el posicionamiento y la personalidad que te diferencian en el mercado y conectan con tu audiencia ideal.",
    items: [
      "Estrategia y posicionamiento de marca",
      "Naming y propuesta de valor",
      "Tono de voz y personalidad",
      "Manual de marca completo",
    ],
    delay: "",
  },
  {
    num: "02",
    name: "Identidad Visual",
    desc: "Diseñamos el sistema visual que hace que tu marca sea reconocible al instante. Cada elemento — forma, color, tipografía — elegido con intención para comunicar quién sos antes de decir una sola palabra.",
    items: [
      "Diseño de logotipo profesional",
      "Paleta de colores a medida",
      "Sistema tipográfico editorial",
      "Archivos en todos los formatos",
    ],
    delay: "d1",
  },
  {
    num: "03",
    name: "Diseño UI",
    desc: "Interfaces que no solo se ven bien — generan confianza, retienen usuarios y convierten. Diseñamos experiencias digitales que reflejan tu marca y funcionan para tu negocio.",
    items: [
      "Diseño de sitios web",
      "Diseño de aplicaciones móviles",
      "Sistemas de componentes UI",
      "Prototipado interactivo",
    ],
    delay: "d2",
  },
];

export default function Services({ hideHeader }: { hideHeader?: boolean } = {}) {
  return (
    <section className={styles.services} id="servicios">
      <div className={shared.wrap}>
        {/* Header — oculto cuando la página ya tiene PageHero */}
        {!hideHeader && (
          <div className={`${styles.header} reveal`}>
            <span className={styles.secLabel}>Lo que hacemos</span>
            <h2 className={styles.secTitle}>Nuestros servicios</h2>
            <div className={styles.secBar} />
            <p className={styles.headerDesc}>
              No trabajamos con plantillas. Cada proyecto parte de cero,<br />
              construido a medida del estilo y la visión de cada cliente.
            </p>
          </div>
        )}

        {/* Category grid */}
        <div className={styles.grid}>
          {categories.map((s) => (
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
            </div>
          ))}
        </div>

        {/* Custom tagline */}
        <div className={`${styles.adapt} reveal d3`}>
          <p className={styles.adaptText}>
            ¿Tenés algo en mente que no está acá?{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.adaptLink}>
              Contanos tu idea →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
