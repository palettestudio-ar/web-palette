import styles from "./PageHero.module.css";

interface PageHeroProps {
  label: string;
  title: string;
  sub?: string;
}

export default function PageHero({ label, title, sub }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <h1 className={styles.title}>{title}</h1>
        {sub && <p className={styles.sub}>{sub}</p>}
      </div>
    </section>
  );
}
