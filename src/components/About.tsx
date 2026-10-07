"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: <CheckCircle size={18} />,
    title: "UGC Section 2(f) Recognized",
    desc: "Fully recognized under UGC Act with the right to confer degrees under Section 22.",
  },
  {
    icon: <Shield size={18} />,
    title: "Punjab State Legislature Est.",
    desc: "Established in 2025 by an Act of the Punjab State Legislature — a true state university.",
  },
  {
    icon: <Zap size={18} />,
    title: "Industry-First Curriculum",
    desc: "Courses designed with top industry partners, ensuring graduates are job-ready from day one.",
  },
  {
    icon: <Globe size={18} />,
    title: "World-Class Research",
    desc: "A research university with state-of-the-art labs, incubation centres, and innovation hubs.",
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Image Side */}
          <motion.div
            className="about-image-wrapper"
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Campus image with fallback */}
            <div
              className="about-image-fallback"
              style={{
                background: "linear-gradient(135deg, hsl(220,40%,12%), hsl(240,30%,8%))",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative campus illustration */}
              <svg width="100%" height="100%" viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">
                {/* Sky gradient */}
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(220,60%,20%)" />
                    <stop offset="100%" stopColor="hsl(220,40%,12%)" />
                  </linearGradient>
                  <linearGradient id="gGold" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(220,90%,55%)" />
                    <stop offset="100%" stopColor="hsl(200,80%,65%)" />
                  </linearGradient>
                </defs>
                <rect width="600" height="450" fill="url(#sky)" />
                {/* Ground */}
                <rect x="0" y="320" width="600" height="130" fill="hsl(135,40%,18%)" opacity="0.6" />
                {/* Main building */}
                <rect x="200" y="140" width="200" height="180" rx="4" fill="hsl(220,30%,22%)" />
                <rect x="210" y="130" width="180" height="30" rx="2" fill="url(#gGold)" opacity="0.9" />
                {/* Windows */}
                {[0,1,2,3,4].map(row => [0,1,2,3].map(col => (
                  <rect key={`${row}-${col}`} x={215 + col * 44} y={170 + row * 28} width={28} height={18}
                    rx="2" fill="hsl(200,80%,70%)" opacity={Math.random() > 0.4 ? 0.7 : 0.2} />
                )))}
                {/* Left wing */}
                <rect x="80" y="200" width="120" height="120" rx="4" fill="hsl(220,30%,18%)" />
                <rect x="90" y="192" width="100" height="20" rx="2" fill="hsl(220,70%,45%)" opacity="0.8" />
                {/* Right wing */}
                <rect x="400" y="200" width="120" height="120" rx="4" fill="hsl(220,30%,18%)" />
                <rect x="410" y="192" width="100" height="20" rx="2" fill="hsl(220,70%,45%)" opacity="0.8" />
                {/* Path */}
                <ellipse cx="300" cy="380" rx="60" ry="15" fill="hsl(45,60%,40%)" opacity="0.5" />
                <rect x="284" y="320" width="32" height="60" fill="hsl(45,60%,40%)" opacity="0.4" />
                {/* Stars */}
                {[50,150,450,530,520,90].map((x,i) => (
                  <circle key={i} cx={x} cy={[30,60,20,50,80,40][i]} r="1.5"
                    fill="white" opacity={0.6 + Math.random() * 0.4} />
                ))}
                {/* CGC Text */}
                <text x="300" y="175" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="900"
                  fontSize="14" letterSpacing="3">CGC UNIVERSITY</text>
              </svg>
            </div>

            {/* Floating Badge */}
            <div className="about-image-badge">
              <div className="about-image-badge-value">2025</div>
              <div className="about-image-badge-label">Established</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="section-tag">🎓 About CGC University</div>
            <h2 className="section-title">
              Excellence in Education Since <span>2025</span>
            </h2>
            <p className="section-subtitle">
              CGC University, Mohali (formerly Chandigarh Group of Colleges, Jhanjeri) is one of the
              best universities in North India. We provide high-quality education with state-of-the-art
              infrastructure, experienced faculty, and industry partnerships that shape tomorrow&apos;s leaders.
            </p>

            <div className="about-features">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="about-feature"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.5, duration: 0.6 }}
                >
                  <div className="about-feature-icon">{f.icon}</div>
                  <div>
                    <div className="about-feature-title">{f.title}</div>
                    <div className="about-feature-desc">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
