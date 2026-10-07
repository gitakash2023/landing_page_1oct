"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const campusItems = [
  {
    id: "campus-sports",
    emoji: "🏟️",
    gradient: "linear-gradient(135deg, hsl(200,80%,20%), hsl(220,70%,12%))",
    accentColor: "hsl(200,80%,50%)",
    title: "Sports Complex",
    desc: "World-class sports facilities including cricket ground, football field, basketball courts, swimming pool, and indoor sports arena.",
    featured: true,
  },
  {
    id: "campus-library",
    emoji: "📚",
    gradient: "linear-gradient(135deg, hsl(270,60%,20%), hsl(250,50%,12%))",
    accentColor: "hsl(270,70%,60%)",
    title: "Digital Library",
    desc: "Access to 1M+ books, journals, and digital resources. 24/7 reading rooms.",
    featured: false,
  },
  {
    id: "campus-labs",
    emoji: "🔬",
    gradient: "linear-gradient(135deg, hsl(160,60%,18%), hsl(180,50%,10%))",
    accentColor: "hsl(160,70%,45%)",
    title: "Research Labs",
    desc: "State-of-the-art research labs for AI, Biotech, Robotics, and Material Sciences.",
    featured: false,
  },
  {
    id: "campus-hostel",
    emoji: "🏠",
    gradient: "linear-gradient(135deg, hsl(35,80%,18%), hsl(30,60%,10%))",
    accentColor: "hsl(35,95%,52%)",
    title: "Hostels & Housing",
    desc: "Comfortable, secure AC hostels with Wi-Fi, dining halls, and recreational areas.",
    featured: false,
  },
  {
    id: "campus-startup",
    emoji: "🚀",
    gradient: "linear-gradient(135deg, hsl(340,70%,18%), hsl(320,50%,10%))",
    accentColor: "hsl(340,80%,55%)",
    title: "Innovation Hub",
    desc: "Incubation centre, startup studios, maker spaces, and mentorship programs.",
    featured: false,
  },
];

export default function Campus() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="campus" className="campus-section" ref={ref}>
      <div className="container">
        <motion.div
          className="campus-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">🏛️ Campus Life</div>
          <h2 className="section-title">
            A Campus Built for <span>Your Success</span>
          </h2>
          <p className="section-subtitle">
            Spread across acres in Mohali, our campus features world-class amenities that enrich
            both academic and personal growth.
          </p>
        </motion.div>

        <div className="campus-grid">
          {campusItems.map((item, i) => (
            <motion.div
              key={item.id}
              id={item.id}
              className={`campus-card ${item.featured ? "featured" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="campus-card-visual"
                style={{ background: item.gradient }}
              >
                {/* SVG decorative background */}
                <svg
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }}
                  viewBox="0 0 400 200"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <circle cx="80" cy="60" r="80" fill={item.accentColor} />
                  <circle cx="320" cy="150" r="60" fill={item.accentColor} />
                  <circle cx="200" cy="20" r="40" fill={item.accentColor} opacity="0.6" />
                </svg>
                <span style={{ position: "relative", fontSize: item.featured ? "4rem" : "3rem" }}>
                  {item.emoji}
                </span>
              </div>
              <div className="campus-card-content">
                <h3 className="campus-card-title">{item.title}</h3>
                <p className="campus-card-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
