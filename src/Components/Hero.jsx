import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <motion.section
      className="container max-w-3xl mx-auto flex flex-col justify-center h-screen px-4 sm:px-6 md:px-8 text-gray-900 dark:text-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
        Rahul Reddy Allu
      </h1>
      <p className="text-xl sm:text-2xl max-w-lg mb-8">
        Aspiring Quantitative Finance Specialist & FinTech Entrepreneur focused
        on algorithmic trading, machine learning, and innovative business
        solutions.
      </p>
      <a
        href="/Rahul_Reddy_Allu_Resume.pdf"
        download
        className="inline-block px-8 py-3 rounded-md bg-primary text-white font-semibold shadow-lg hover:bg-accent transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary/60"
        aria-label="Download Resume"
      >
        Download Resume
      </a>
    </motion.section>
  );
};

export default Hero;
