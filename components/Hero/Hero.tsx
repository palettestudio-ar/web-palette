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

      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.content}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/logo.svg" alt="Palette Studio" className={styles.logo} />

        <p className={styles.eyebrow}><span /> Branding &amp; Diseño UI <span /></p>

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
