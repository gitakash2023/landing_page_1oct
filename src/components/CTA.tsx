"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" className="cta-section" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-tag" style={{ margin: "0 auto 1.5rem" }}>
            🎓 Admissions Open 2026–27
          </div>
          <h2 className="cta-title">
            Your Journey Starts Here.
            <br />
            <span style={{
              background: "linear-gradient(135deg, hsl(220,90%,65%), hsl(43,100%,65%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Apply to CGC University
            </span>
          </h2>
          <p className="cta-subtitle">
            Join 6,000+ students who chose CGC University Mohali for a world-class education.
            Applications for the 2026–27 academic year are now open.
          </p>

          <div className="cta-actions">
            <a href="https://www.cgcuniversity.in" id="cta-apply-btn" className="btn-hero-primary" target="_blank" rel="noopener noreferrer">
              Apply Now Online
              <ArrowRight size={18} />
            </a>
            <a href="tel:18005005005" id="cta-call-btn" className="btn-hero-secondary">
              <Phone size={16} />
              Call 1800 500 5005
            </a>
          </div>

          <div className="cta-contact-info">
            <div className="cta-contact-item">
              <Phone size={16} />
              <span>Toll Free: 1800 500 5005</span>
            </div>
            <div className="cta-contact-item">
              <Mail size={16} />
              <span>admissions@cgcuniversity.in</span>
            </div>
            <div className="cta-contact-item">
              <MapPin size={16} />
              <span>Sirhind Road, 12A, Mohali, Punjab 140307</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
