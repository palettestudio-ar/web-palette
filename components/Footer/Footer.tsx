import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo/logo.svg" alt="Palette Studio" className={styles.logo} />
      <p className={styles.script}>Palette Studio</p>
      <p className={styles.copy}>
        © 2026 Palette Studio · Branding &amp; Diseño UI
      </p>
    </footer>
  );
}
