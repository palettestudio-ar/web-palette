"use client";

import Link from "next/link";
import { motion } from "motion/react";
import styles from "./CrownPage.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CrownPage() {
  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: "url(/portfolio/crown.jpg)" }}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/portfolio" className={styles.backLink}>
              ← Portfolio
            </Link>
          </motion.div>

          <motion.span
            className={styles.heroLabel}
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
          >
            Branding &amp; UI/UX · 2026
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
          >
            CROWN<br /><em>Spirits</em>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
          >
            Identidad visual y sitio web para una marca premium de spirits.<br />
            Estética oscura, elegante y con personalidad propia.
          </motion.p>
        </div>
      </section>

      {/* ── PROJECT INFO ── */}
      <section className={styles.info}>
        <div className={styles.infoGrid}>
          {[
            { label: "Cliente", value: "CROWN Spirits" },
            { label: "Categoría", value: "Branding & UI/UX" },
            { label: "Año", value: "2026" },
            { label: "Servicios", value: "Identidad Visual · Diseño Web · Branding" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className={styles.infoItem}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className={styles.infoLabel}>{item.label}</span>
              <span className={styles.infoValue}>{item.value}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── IMAGES GALLERY ── */}
      <section className={styles.gallery}>
        <motion.div
          className={styles.galleryGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className={`${styles.galleryImg} ${styles.galleryImgLarge}`}
            style={{ backgroundImage: "url(/portfolio/crown.jpg)" }}
          />
          <div className={styles.galleryCol}>
            <div
              className={styles.galleryImg}
              style={{ backgroundImage: "url(/portfolio/crown-2.jpg)" }}
            />
            <div
              className={styles.galleryImg}
              style={{ backgroundImage: "url(/portfolio/crown-3.jpg)" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── LIVE SITE PREVIEW ── */}
      <section className={styles.preview}>
        <motion.div
          className={styles.previewHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.previewLabel}>Sitio web</span>
          <h2 className={styles.previewTitle}>Experiencia en vivo</h2>
          <p className={styles.previewSub}>
            Navegá el sitio completo directamente desde acá
          </p>
        </motion.div>

        <motion.div
          className={styles.iframeWrap}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Browser chrome */}
          <div className={styles.browserBar}>
            <div className={styles.browserDots}>
              <span /><span /><span />
            </div>
            <span className={styles.browserUrl}>crown-spirits.palette</span>
            <a
              href="/crown/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.browserOpen}
              aria-label="Abrir en pantalla completa"
            >
              ↗
            </a>
          </div>

          <iframe
            src="/crown/index.html"
            className={styles.iframe}
            title="CROWN Spirits — Sitio web"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className={styles.previewCta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a
            href="/crown/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Ver sitio en pantalla completa ↗
          </a>
        </motion.div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <section className={styles.next}>
        <Link href="/portfolio" className={styles.nextLink}>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ duration: 0.25 }}
          >
            <span className={styles.nextLabel}>Volver al</span>
            <span className={styles.nextTitle}>Portfolio →</span>
          </motion.div>
        </Link>
      </section>

    </main>
  );
}
