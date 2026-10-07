"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { icon: "🎓", value: 6000, suffix: "+", label: "Students Enrolled", id: "stat-students" },
  { icon: "📚", value: 100, suffix: "+", label: "Programs Offered", id: "stat-programs" },
  { icon: "🏆", value: 50, suffix: "+", label: "Awards & Rankings", id: "stat-awards" },
  { icon: "🏢", value: 500, suffix: "+", label: "Industry Partners", id: "stat-partners" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / 60);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="stats" className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-inner">
          {stats.map((s, i) => (
            <motion.div
              key={s.id}
              id={s.id}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="stat-icon">{s.icon}</span>
              <div className="stat-number">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
