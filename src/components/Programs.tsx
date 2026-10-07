"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const programs = [
  {
    icon: "💻",
    color: "hsla(220,90%,55%,0.15)",
    iconBg: "linear-gradient(135deg, hsl(220,90%,50%), hsl(240,80%,60%))",
    title: "Engineering & Technology",
    desc: "Cutting-edge programs in CS, AI, Robotics, Civil, Mechanical, and Electronics.",
    courses: ["B.Tech", "M.Tech", "Ph.D", "Lateral Entry"],
    id: "prog-engineering",
  },
  {
    icon: "📊",
    color: "hsla(160,70%,45%,0.12)",
    iconBg: "linear-gradient(135deg, hsl(160,70%,40%), hsl(180,65%,50%))",
    title: "Management & Business",
    desc: "MBA, BBA, and executive programs with industry mentors and live case studies.",
    courses: ["MBA", "BBA", "PGDM", "Executive MBA"],
    id: "prog-management",
  },
  {
    icon: "⚕️",
    color: "hsla(340,80%,55%,0.12)",
    iconBg: "linear-gradient(135deg, hsl(340,80%,50%), hsl(20,90%,55%))",
    title: "Pharmacy & Health Sciences",
    desc: "B.Pharm, M.Pharm, and healthcare programs with advanced research facilities.",
    courses: ["B.Pharm", "M.Pharm", "Pharm.D", "D.Pharm"],
    id: "prog-pharmacy",
  },
  {
    icon: "⚖️",
    color: "hsla(35,95%,52%,0.12)",
    iconBg: "linear-gradient(135deg, hsl(35,95%,48%), hsl(50,90%,58%))",
    title: "Law & Legal Studies",
    desc: "BA LLB, LLB, and LLM programs with moot courts and legal clinic experience.",
    courses: ["BA LLB", "LLB", "LLM", "Ph.D Law"],
    id: "prog-law",
  },
  {
    icon: "🎨",
    color: "hsla(270,70%,55%,0.12)",
    iconBg: "linear-gradient(135deg, hsl(270,70%,50%), hsl(300,60%,55%))",
    title: "Design & Architecture",
    desc: "B.Des, M.Des, and B.Arch programs with world-class design studios and workshops.",
    courses: ["B.Des", "M.Des", "B.Arch", "Interior Design"],
    id: "prog-design",
  },
  {
    icon: "🔬",
    color: "hsla(195,90%,45%,0.12)",
    iconBg: "linear-gradient(135deg, hsl(195,90%,40%), hsl(210,85%,55%))",
    title: "Sciences & Research",
    desc: "BSc, MSc, and Ph.D programs with cutting-edge laboratories and research grants.",
    courses: ["B.Sc", "M.Sc", "Ph.D", "Integrated MSc"],
    id: "prog-science",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Programs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="programs" className="programs-section" ref={ref}>
      <div className="container">
        <motion.div
          className="programs-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">📚 Academic Programs</div>
          <h2 className="section-title">
            100+ Programs Across <span>6 Schools</span>
          </h2>
          <p className="section-subtitle">
            From engineering to law, discover industry-aligned programs designed to prepare you
            for a globally competitive career.
          </p>
        </motion.div>

        <div className="programs-grid">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              id={prog.id}
              className="program-card"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
            >
              <div
                className="program-card-icon"
                style={{ background: prog.iconBg }}
              >
                {prog.icon}
              </div>
              <h3 className="program-card-title">{prog.title}</h3>
              <p className="program-card-desc">{prog.desc}</p>
              <div className="program-card-courses">
                {prog.courses.map((c) => (
                  <span key={c} className="program-tag">{c}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
