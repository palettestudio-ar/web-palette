import { projects } from "@/lib/projects";
import styles from "./Projects.module.css";
import shared from "@/styles/shared.module.css";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className={styles.projects} id="proyectos" aria-labelledby="projects-title">
      <div className={shared.wrap}>
        <header className={`${styles.header} reveal`}>
          <div>
            <span className={shared.secLabel}>Trabajo seleccionado</span>
            <h2 className={styles.title} id="projects-title">
              Proyectos con una<br /><em>historia que contar.</em>
            </h2>
          </div>
          <p className={styles.intro}>
            Estrategia, identidad y experiencias digitales creadas para marcas
            que eligieron mostrarse con una voz propia.
          </p>
        </header>

        {projects.length > 0 ? (
          <div className={styles.grid}>
            {projects.map((project, index) => {
              const content = (
                <>
                  <div className={styles.media}>
                    {/* Las dimensiones se reservan por CSS para evitar saltos de layout. */}
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className={styles.image}
                    />
                    {project.wordmarkImage ? (
                      <span className={styles.wordmark}>
                        <img src={project.wordmarkImage} alt="" className={styles.wordmarkImg} />
                      </span>
                    ) : project.wordmark && (
                      <span
                        className={styles.wordmark}
                        style={project.wordmarkFont ? { fontFamily: project.wordmarkFont } : undefined}
                      >
                        {project.wordmark}
                      </span>
                    )}
                    <span className={styles.index}>0{index + 1}</span>
                    {project.href && <span className={styles.arrow}><ArrowIcon /></span>}
                  </div>
                  <div className={styles.meta}>
                    <div>
                      <p className={styles.category}>{project.category}</p>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                    </div>
                    <span className={styles.year}>{project.year}</span>
                  </div>
                </>
              );

              return project.href ? (
                <a
                  key={project.title}
                  href={project.href}
                  className={`${styles.card} reveal d${Math.min(index + 1, 4)}`}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={`Ver proyecto ${project.title}`}
                >
                  {content}
                </a>
              ) : (
                <article key={project.title} className={`${styles.card} reveal d${Math.min(index + 1, 4)}`}>
                  {content}
                </article>
              );
            })}
          </div>
        ) : (
          <div className={`${styles.empty} reveal`}>
            <span className={styles.emptyNumber}>01—</span>
            <div>
              <p className={styles.emptyEyebrow}>Portfolio en preparación</p>
              <p className={styles.emptyText}>Muy pronto vas a poder conocer nuestros proyectos más recientes.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
