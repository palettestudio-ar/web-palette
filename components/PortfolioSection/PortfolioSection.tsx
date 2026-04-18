"use client";

import Link from "next/link";
import { motion } from "motion/react";
import styles from "./PortfolioSection.module.css";
import shared from "@/styles/shared.module.css";

const projects = [
  {
    id: "crown",
    num: "01",
    name: "CROWN Spirits",
    category: "Branding & UI/UX",
    year: "2026",
    image: "/portfolio/crown.jpg",
    href: "/portfolio/crown",
    featured: true, // full-width hero card
    tags: ["Identidad Visual", "Diseño Web", "Branding"],
  },
  {
    id: "bloom",
    num: "02",
    name: "Bloom Cosmetics",
    category: "Identidad Visual",
    year: "2025",
    image: "/portfolio/bloom.jpg",
    href: "#",
    featured: false,
    tags: ["Logo", "Paleta de colores", "Manual de marca"],
  },
  {
    id: "luna",
    num: "03",
    name: "Luna Atelier",
    category: "Packaging & Branding",
    year: "2025",
    image: "/portfolio/luna.jpg",
    href: "#",
    featured: false,
    tags: ["Packaging", "Branding", "Fotografía"],
  },
  {
    id: "nova",
    num: "04",
    name: "Nova Skincare",
    category: "Diseño Web & Branding",
    year: "2025",
    image: "/portfolio/nova.jpg",
    href: "#",
    featured: false,
    tags: ["Sitio Web", "Identidad Visual"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

interface PortfolioSectionProps {
  hideHeader?: boolean;
}

export default function PortfolioSection({ hideHeader }: PortfolioSectionProps = {}) {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section className={`${styles.portfolio} ${shared.sec}`} id="portafolio">
      <div className={shared.wrap}>
        {/* Header */}
        {!hideHeader && (
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={shared.secLabel}>Portafolio</span>
            <p className={styles.script}>Nuestros trabajos</p>
            <h2 className={shared.secTitle}>Proyectos destacados</h2>
            <div className={shared.secBar} />
          </motion.div>
        )}

        {/* ── FEATURED CARD (CROWN) ── */}
        <motion.div
          className={styles.featuredWrap}
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Link href={featured.href} className={styles.featuredCard}>
            <div
              className={styles.featuredImg}
              style={{ backgroundImage: `url(${featured.image})` }}
            />
            <div className={styles.featuredOverlay} />

            {/* Top meta */}
            <div className={styles.featuredMeta}>
              <span className={styles.cardNum}>{featured.num}</span>
              <span className={styles.cardYear}>{featured.year}</span>
            </div>

            {/* Bottom content */}
            <motion.div
              className={styles.featuredContent}
              initial={{ y: 12, opacity: 0.8 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.cardCategory}>{featured.category}</span>
              <h3 className={styles.featuredTitle}>{featured.name}</h3>
              <div className={styles.cardTags}>
                {featured.tags.map((t) => (
                  <span key={t} className={styles.cardTag}>{t}</span>
                ))}
              </div>
              <span className={styles.cardCta}>
                Ver proyecto <span className={styles.ctaArrow}>→</span>
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* ── SECONDARY GRID ── */}
        <div className={styles.grid}>
          {rest.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i + 1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <Link href={p.href} className={styles.card}>
                <div
                  className={styles.cardImg}
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className={styles.cardOverlay} />

                <div className={styles.cardMeta}>
                  <span className={styles.cardNum}>{p.num}</span>
                  <span className={styles.cardYear}>{p.year}</span>
                </div>

                <motion.div
                  className={styles.cardContent}
                  initial={{ y: 8 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className={styles.cardCategory}>{p.category}</span>
                  <h3 className={styles.cardTitle}>{p.name}</h3>
                  <div className={styles.cardTags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.cardTag}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
