import styles from "./PortfolioSection.module.css";
import shared from "@/styles/shared.module.css";

const projects = [
  {
    id: "crown",
    name: "CROWN Spirits",
    category: "Branding & UI/UX",
    image: "/portfolio/crown.jpg",
    href: "#",
  },
  {
    id: "bloom",
    name: "Bloom Cosmetics",
    category: "Identidad Visual",
    image: "/portfolio/bloom.jpg",
    href: "#",
  },
  {
    id: "luna",
    name: "Luna Atelier",
    category: "Packaging & Branding",
    image: "/portfolio/luna.jpg",
    href: "#",
  },
  {
    id: "nova",
    name: "Nova Skincare",
    category: "Diseño Web & Branding",
    image: "/portfolio/nova.jpg",
    href: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section
      className={`${styles.portfolio} ${shared.sec}`}
      id="portafolio"
    >
      <div className={shared.wrap}>
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className={shared.secLabel}>Portafolio</span>
          <p className={styles.script}>Nuestros trabajos</p>
          <h2 className={shared.secTitle}>Proyectos destacados</h2>
          <div className={shared.secBar} />
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={p.href}
              className={`${styles.card} reveal d${i + 1}`}
            >
              <img
                src={p.image}
                alt={p.name}
                className={styles.cardImg}
              />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{p.name}</h3>
                <span className={styles.cardCategory}>{p.category}</span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className={`${styles.cta} reveal d5`}>
          <a href="#contacto" className={shared.btnO}>
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
