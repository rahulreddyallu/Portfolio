import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "QuantM10 Trading Bot",
    description:
      "Developing an advanced algorithmic trading bot implementing custom technical indicators and machine learning models for optimized market entries and exits.",
    url: "https://github.com/yourusername/QuantM10",
  },
  {
    title: "Technical Indicator Suite",
    description:
      "A collection of refined technical indicators (RSI, MACD, VWAP, TWAP) coded for precision and integrated into trading platforms via clean APIs.",
    url: "https://github.com/yourusername/TechnicalIndicators",
  },
  {
    title: "FinTech Product Prototype",
    description:
      "Early-stage prototype of a FinTech application focusing on real-time stock market analytics and portfolio management solutions.",
    url: "https://github.com/yourusername/FinTechPrototype",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Work = () => {
  return (
    <motion.section
      className="container max-w-5xl mx-auto px-4 py-16 sm:px-6 md:px-8 text-gray-900 dark:text-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold mb-10 tracking-tight">Work & Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map(({ title, description, url }) => (
          <motion.article
            key={title}
            className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <p className="mb-4">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-primary/90 font-medium underline"
            >
              View Repository
            </a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
