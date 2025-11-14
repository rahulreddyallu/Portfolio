import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../Styles/Work.css";

// Project data - Enhanced with more details
const projects = [
  {
    id: 1,
    title: "QuantM10 Trading Bot",
    url: "https://github.com/yourusername/quantm10",
    status: "In Progress",
    description:
      "An advanced algorithmic trading bot leveraging machine learning for market signal generation, automated execution strategies, and real-time risk management across multiple asset classes.",
    tags: [
      "Python",
      "Machine Learning",
      "FinTech",
      "Trading APIs",
      "Real-time Data",
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "📈",
  },
  {
    id: 2,
    title: "SaaS Integration Platform",
    url: "https://github.com/yourusername/saas-integration",
    status: "Completed",
    description:
      "Enterprise-grade integration platform managing seamless data flows between multiple SaaS vendors and client systems. Features automated data migration, real-time synchronization, and comprehensive error handling.",
    tags: [
      "API Integration",
      "Data Migration",
      "Enterprise Software",
      "Node.js",
      "PostgreSQL",
    ],
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    icon: "🔗",
  },
  {
    id: 3,
    title: "Portfolio Website",
    url: null,
    status: "Live",
    description:
      "Modern portfolio website built with cutting-edge web technologies featuring 3D graphics, glassmorphism design, smooth animations, and optimized performance for exceptional user experience.",
    tags: ["React", "Three.js", "Framer Motion", "GSAP", "Web3D"],
    gradient: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
    icon: "💼",
  },
  {
    id: 4,
    title: "Financial Analytics Dashboard",
    url: "https://github.com/yourusername/analytics-dashboard",
    status: "Completed",
    description:
      "Comprehensive analytics dashboard for financial data visualization, featuring real-time market data, interactive charts, predictive analytics, and customizable reporting tools for data-driven decision making.",
    tags: ["React", "D3.js", "Python", "FastAPI", "Data Visualization"],
    gradient: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
    icon: "📊",
  },
  {
    id: 5,
    title: "Database Migration Tool",
    url: "https://github.com/yourusername/db-migration",
    status: "Completed",
    description:
      "Robust database migration tool designed for large-scale enterprise migrations. Supports multiple database engines, automated schema conversion, data validation, and rollback capabilities.",
    tags: ["SQL", "Database Management", "Python", "ETL", "Cloud Migration"],
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: "🗄️",
  },
  {
    id: 6,
    title: "AI-Powered Market Predictor",
    url: "https://github.com/yourusername/market-predictor",
    status: "In Progress",
    description:
      "Deep learning model for stock market prediction using LSTM networks, sentiment analysis from financial news, and technical indicators. Provides confidence-scored predictions with explainable AI insights.",
    tags: ["TensorFlow", "Deep Learning", "NLP", "Python", "Time Series"],
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    icon: "🤖",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Work() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="work section" id="work" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="work__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="work__subtitle">Portfolio</span>
          <h2 className="work__title">Featured Projects</h2>
          <p className="work__description">
            A collection of my latest work showcasing expertise in SaaS
            integrations, algorithmic trading, FinTech solutions, and
            cutting-edge web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="work__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="work__card holographic"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Card Background Gradient */}
              <div
                className="work__card-bg"
                style={{ background: project.gradient }}
              />

              {/* Card Content */}
              <div className="work__card-content">
                {/* Icon */}
                <div className="work__card-icon">{project.icon}</div>

                {/* Header */}
                <div className="work__card-header">
                  <h3 className="work__card-title">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work__card-link"
                      >
                        {project.title}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M11 4H16V9M16 4L8 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </h3>

                  {/* Status Badge */}
                  <span
                    className={`work__badge work__badge--${project.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="work__card-description">{project.description}</p>

                {/* Technology Tags */}
                <div className="work__tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="work__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated Border */}
              <div className="work__card-border" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="work__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="work__cta-btn"
          >
            <span>View All Projects on GitHub</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-1.02-.01-1.85-2.51.46-3.16-.61-3.36-1.17-.11-.28-.6-1.17-1.02-1.41-.35-.19-.85-.65-.01-.66.79-.01 1.35.72 1.54 1.02.9 1.51 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.02-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.63.7 1.02 1.59 1.02 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.91.68 1.84 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48A10.01 10.01 0 0020 10c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div
        className="work__decoration work__decoration--1"
        aria-hidden="true"
      />
      <div
        className="work__decoration work__decoration--2"
        aria-hidden="true"
      />
    </section>
  );
}
