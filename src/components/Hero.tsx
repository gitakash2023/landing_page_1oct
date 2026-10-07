"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Award, BookOpen } from "lucide-react";
import Image from "next/image";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 15,
  duration: Math.random() * 10 + 15,
}));

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background */}
      <div className="hero-bg">
        <Image
          src="/campus-hero.jpg"
          alt="CGC University Campus Aerial View"
          fill
          priority
          className="hero-bg-image"
          style={{ objectFit: "cover" }}
        />
        <div className="hero-bg-overlay" />
        <div className="hero-glow" />
      </div>

      {/* Particles */}
      <div className="hero-particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container">
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              <Star size={12} />
              UGC Recognized · Est. 2025 · Mohali, Punjab
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 className="hero-title" variants={fadeUp}>
            Shape Your Future at
            <br />
            <span className="line-highlight">CGC University</span>
            <br />
            Mohali
          </motion.h1>

          {/* Description */}
          <motion.p className="hero-description" variants={fadeUp}>
            One of the best universities in North India — offering world-class education across
            Engineering, Management, Pharmacy, Law & more. 6,000+ students, 100+ programs,
            industry-driven curriculum.
          </motion.p>

          {/* Actions */}
          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#contact" id="hero-apply-btn" className="btn-hero-primary">
              Apply for 2026–27
              <ArrowRight size={18} />
            </a>
            <a href="#programs" id="hero-explore-btn" className="btn-hero-secondary">
              <Play size={16} />
              Explore Programs
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div className="hero-stats" variants={fadeUp}>
            <div className="hero-stat">
              <span className="hero-stat-value">
                6,000<span>+</span>
              </span>
              <span className="hero-stat-label">Students Enrolled</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">
                100<span>+</span>
              </span>
              <span className="hero-stat-label">Programs Offered</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">
                4.4<span>★</span>
              </span>
              <span className="hero-stat-label">Google Rating</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">
                #1
              </span>
              <span className="hero-stat-label">North India Rank</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
