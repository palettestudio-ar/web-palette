"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch" || !heroRef.current) return;

    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    const shiftX = (x - 50) * 0.07;
    const shiftY = (y - 50) * 0.05;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      heroRef.current?.style.setProperty("--pointer-x", `${x}%`);
      heroRef.current?.style.setProperty("--pointer-y", `${y}%`);
      heroRef.current?.style.setProperty("--shift-x", `${shiftX}px`);
      heroRef.current?.style.setProperty("--shift-y", `${shiftY}px`);
    });
  };

  const resetPointer = () => {
    heroRef.current?.style.setProperty("--pointer-x", "50%");
    heroRef.current?.style.setProperty("--pointer-y", "48%");
    heroRef.current?.style.setProperty("--shift-x", "0px");
    heroRef.current?.style.setProperty("--shift-y", "0px");
  };

  return (
    <section ref={heroRef} className={styles.hero} onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <div className={styles.bg} aria-hidden="true" />

      <svg
        className={`${styles.waves} ${styles.wavesDesktop}`}
        aria-hidden="true"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--fucsia)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--fucsia)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--fucsia)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradB" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--fucsia)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--fucsia)" stopOpacity=".85" />
            <stop offset="100%" stopColor="var(--fucsia)" stopOpacity="0" />
          </linearGradient>
          <filter id="waveGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className={`${styles.wavePath} ${styles.waveBase}`}
          d="M 980 980 C 1080 770, 1260 640, 1430 585 S 1560 425, 1680 280"
          stroke="url(#waveGradA)"
        />
        <path
          className={`${styles.wavePath} ${styles.waveGlowA}`}
          d="M 980 980 C 1080 770, 1260 640, 1430 585 S 1560 425, 1680 280"
          stroke="url(#waveGradA)"
        />
        <path
          className={`${styles.wavePath} ${styles.waveA}`}
          d="M 980 980 C 1080 770, 1260 640, 1430 585 S 1560 425, 1680 280"
          stroke="url(#waveGradA)"
        />

        <path
          className={`${styles.wavePath} ${styles.waveBase}`}
          d="M -100 250 C 40 350, 155 385, 150 510 S 50 660, -100 735"
          stroke="url(#waveGradB)"
        />
        <path
          className={`${styles.wavePath} ${styles.waveGlowB}`}
          d="M -100 250 C 40 350, 155 385, 150 510 S 50 660, -100 735"
          stroke="url(#waveGradB)"
        />
        <path
          className={`${styles.wavePath} ${styles.waveB}`}
          d="M -100 250 C 40 350, 155 385, 150 510 S 50 660, -100 735"
          stroke="url(#waveGradB)"
        />
      </svg>

      {/* Mobile-only paths: the desktop curves hug the viewBox edges, but
          "slice" on a narrow/tall screen only keeps a thin center strip —
          none of the desktop curves fall inside it. These sweep through
          that center band instead, so the effect stays visible on phones. */}
      <svg
        className={`${styles.waves} ${styles.wavesMobile}`}
        aria-hidden="true"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradA-m" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--fucsia)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--fucsia)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--fucsia)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradB-m" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--fucsia)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--fucsia)" stopOpacity=".85" />
            <stop offset="100%" stopColor="var(--fucsia)" stopOpacity="0" />
          </linearGradient>
          <filter id="waveGlow-m" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className={`${styles.wavePath} ${styles.waveBase}`}
          d="M 150 850 C 500 700, 750 650, 900 500 S 1250 250, 1450 150"
          stroke="url(#waveGradA-m)"
        />
        <path
          className={`${styles.wavePath} ${styles.waveGlowA}`}
          style={{ filter: "url(#waveGlow-m)" }}
          d="M 150 850 C 500 700, 750 650, 900 500 S 1250 250, 1450 150"
          stroke="url(#waveGradA-m)"
        />
        <path
          className={`${styles.wavePath} ${styles.waveA}`}
          d="M 150 850 C 500 700, 750 650, 900 500 S 1250 250, 1450 150"
          stroke="url(#waveGradA-m)"
        />

        <path
          className={`${styles.wavePath} ${styles.waveBase}`}
          d="M 1450 750 C 1100 650, 950 500, 800 400 S 400 200, 150 100"
          stroke="url(#waveGradB-m)"
        />
        <path
          className={`${styles.wavePath} ${styles.waveGlowB}`}
          style={{ filter: "url(#waveGlow-m)" }}
          d="M 1450 750 C 1100 650, 950 500, 800 400 S 400 200, 150 100"
          stroke="url(#waveGradB-m)"
        />
        <path
          className={`${styles.wavePath} ${styles.waveB}`}
          d="M 1450 750 C 1100 650, 950 500, 800 400 S 400 200, 150 100"
          stroke="url(#waveGradB-m)"
        />
      </svg>

      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.content}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/logo.svg" alt="Palette Studio" className={styles.logo} />

        <p className={styles.eyebrow}><span /> Estudio de Branding &amp; Diseño UI <span /></p>

        <h1 className={styles.title}>
          Tu marca,<br />
          <em>tu esencia.</em>
        </h1>

        <p className={styles.script}>Donde la creatividad se convierte en identidad</p>

        <div className={styles.actions}>
          <Link href="/servicios" className={styles.btnPrimary}>
            Ver servicios
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12h18m-7-7 7 7-7 7" /></svg>
          </Link>
          <Link href="/contacto" className={styles.btnSecondary}>
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
}
