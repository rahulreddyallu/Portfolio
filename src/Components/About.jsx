import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "../Styles/About.css";

// Skills data with proficiency levels
const skillsData = {
  technical: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "JavaScript/React", level: 85, icon: "⚛️" },
    { name: "SQL/Databases", level: 88, icon: "🗄️" },
    { name: "API Integration", level: 92, icon: "🔌" },
    { name: "Machine Learning", level: 75, icon: "🤖" },
    { name: "Data Analysis", level: 87, icon: "📊" },
  ],
  business: [
    { name: "Business Analysis", level: 95, icon: "📈" },
    { name: "Project Management", level: 88, icon: "📋" },
    { name: "Client Relations", level: 90, icon: "🤝" },
    { name: "Technical Writing", level: 85, icon: "📝" },
    { name: "Agile/Scrum", level: 82, icon: "🔄" },
    { name: "Strategic Planning", level: 86, icon: "🎯" },
  ],
};

// Timeline/Experience data
const experienceData = [
  {
    year: "2024 - Present",
    title: "Senior Business Analyst",
    company: "TechCorp Solutions",
    description:
      "Leading SaaS integration projects for enterprise clients, managing data migrations, and optimizing business processes across multiple platforms.",
    achievements: [
      "Reduced data migration time by 60% through automated workflows",
      "Successfully integrated 15+ SaaS platforms",
      "Improved client satisfaction scores by 40%",
    ],
  },
  {
    year: "2022 - 2024",
    title: "Business Analyst & Developer",
    company: "FinTech Innovations",
    description:
      "Developed algorithmic trading solutions and financial analytics tools while bridging technical and business requirements.",
    achievements: [
      "Built trading bot with 85% prediction accuracy",
      "Managed $2M+ in trading volume",
      "Delivered 10+ client-facing projects",
    ],
  },
  {
    year: "2020 - 2022",
    title: "Junior Data Analyst",
    company: "DataFlow Systems",
    description:
      "Analyzed complex datasets, created visualization dashboards, and supported business decision-making processes.",
    achievements: [
      "Created 20+ interactive dashboards",
      "Automated reporting processes saving 15hrs/week",
      "Trained team on data analysis best practices",
    ],
  },
];

// KPI Cards data
const kpiData = [
  { label: "Years of Experience", value: "3+", icon: "⏱️", color: "#667eea" },
  { label: "Projects Completed", value: "15+", icon: "✅", color: "#06b6d4" },
  { label: "Client Satisfaction", value: "100%", icon: "⭐", color: "#f472b6" },
  {
    label: "Technologies Mastered",
    value: "20+",
    icon: "🚀",
    color: "#10b981",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("technical");
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Track scroll for background gradient
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gradientOpacity = Math.min(scrollY / 500, 0.3);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      {/* Animated background gradient */}
      <motion.div
        className="about__gradient-bg"
        style={{ opacity: gradientOpacity, y }}
        aria-hidden="true"
      />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="about__subtitle">Get to Know Me</span>
          <h2 className="about__title">About Me</h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="about__content">
          {/* Left: Bio & Image */}
          <motion.div
            className="about__bio"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__image-wrapper glass-card">
              <div className="about__image-border" />
              <div className="about__image">
                <div className="about__image-placeholder gradient-text">RA</div>
              </div>
            </div>

            <div className="about__bio-text">
              <p>
                I'm a <strong>Business Analyst</strong> specializing in SaaS
                integrations and enterprise database migrations. I bridge the
                gap between technical implementation and customer success,
                ensuring seamless platform adoption.
              </p>
              <p>
                With a background in <strong>Civil Engineering</strong> and a
                passion for technology, I've transitioned into the world of
                software and finance, where I combine analytical thinking with
                technical execution.
              </p>
              <p>
                My expertise spans from designing data pipelines to building
                algorithmic trading systems, always with a focus on delivering
                measurable business value.
              </p>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            className="about__skills"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="about__skills-header">
              <h3>Skills & Expertise</h3>
              <div className="about__skills-tabs">
                <button
                  className={`about__tab ${
                    activeTab === "technical" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("technical")}
                >
                  Technical
                </button>
                <button
                  className={`about__tab ${
                    activeTab === "business" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("business")}
                >
                  Business
                </button>
              </div>
            </div>

            <div className="about__skills-grid">
              {skillsData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="about__skill-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="about__skill-header">
                    <span className="about__skill-icon">{skill.icon}</span>
                    <span className="about__skill-name">{skill.name}</span>
                    <span className="about__skill-percentage">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="about__skill-bar">
                    <motion.div
                      className="about__skill-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.8 + index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* KPI Cards */}
        <motion.div
          className="about__kpi-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="about__kpi-grid">
            {kpiData.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                className="about__kpi-card glass-card"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="about__kpi-icon" style={{ color: kpi.color }}>
                  {kpi.icon}
                </div>
                <h3 className="about__kpi-value gradient-text">{kpi.value}</h3>
                <p className="about__kpi-label">{kpi.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="about__timeline-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="about__timeline-title">Professional Journey</h3>
          <div className="about__timeline">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                className="about__timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              >
                <div className="about__timeline-marker" />
                <div className="about__timeline-content glass-card">
                  <span className="about__timeline-year">
                    {experience.year}
                  </span>
                  <h4 className="about__timeline-job">{experience.title}</h4>
                  <p className="about__timeline-company">
                    {experience.company}
                  </p>
                  <p className="about__timeline-description">
                    {experience.description}
                  </p>
                  <ul className="about__timeline-achievements">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.5 4.5L6 12L2.5 8.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
