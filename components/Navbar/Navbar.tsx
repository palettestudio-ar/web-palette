import styles from "./Navbar.module.css";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#inicio" className={styles.navLogo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/logo.svg" alt="Palette Studio" className={styles.navLogoImg} />
        <span className={styles.navLogoText}>PALETTE STUDIO</span>
      </a>

      <div className={styles.navLinks}>
        <a href="#nosotras">Nosotras</a>
        <a href="#servicios">Servicios</a>
        <a href="#proceso">Proceso</a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navCta}
        >
          Contactar
        </a>
      </div>
    </nav>
  );
}
