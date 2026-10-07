"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: "testimonial-1",
    text: "CGC University transformed my career. The faculty is exceptional and the industry exposure we get here is unmatched. The placements team is incredibly supportive.",
    name: "Arjun Sharma",
    role: "B.Tech CSE, 2025 · Placed at Google",
    initials: "AS",
    avatarBg: "linear-gradient(135deg, hsl(220,90%,50%), hsl(240,80%,60%))",
    rating: 5,
  },
  {
    id: "testimonial-2",
    text: "The MBA program here gave me both theoretical knowledge and practical experience. The campus life and networking opportunities are truly world-class.",
    name: "Priya Verma",
    role: "MBA 2024 · Co-founder, FinTech Startup",
    initials: "PV",
    avatarBg: "linear-gradient(135deg, hsl(340,80%,50%), hsl(20,90%,55%))",
    rating: 5,
  },
  {
    id: "testimonial-3",
    text: "The research facilities at CGC University are phenomenal. I completed my Ph.D here and now work with ISRO. The professors are world-renowned in their fields.",
    name: "Dr. Manpreet Singh",
    role: "Ph.D Physics · Scientist, ISRO",
    initials: "MS",
    avatarBg: "linear-gradient(135deg, hsl(160,70%,40%), hsl(180,65%,50%))",
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="testimonials-section" ref={ref}>
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">💬 Student Stories</div>
          <h2 className="section-title">
            Voices of Our <span>Alumni</span>
          </h2>
          <p className="section-subtitle">
            Hear from the thousands of students whose lives were shaped at CGC University,
            now thriving across the world.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              id={t.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="testimonial-quote">&ldquo;</div>
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="testimonial-star">★</span>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: t.avatarBg }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
