import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.section
      className="container max-w-4xl mx-auto my-16 px-4 sm:px-6 md:px-8 text-gray-900 dark:text-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold mb-6 tracking-tight">About Me</h1>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          A highly ambitious 22-year-old from India with a strong passion for
          quantitative finance, algorithmic trading, and entrepreneurship.
          Currently employed full-time with a 6 LPA salary and actively building
          a stock trading bot while exploring multiple income streams.
        </p>

        <p>
          Focused on wealth creation and continuous technical skill development,
          I am self-taught in finance, programming, and trading strategies. My
          commitment has enabled me to steadily enhance my market knowledge
          despite a non-traditional academic background.
        </p>

        <p>
          My work includes building sophisticated technical indicators such as
          RSI, MACD, VWAP, and developing automated pair trading and options
          strategies. I aim to leverage machine learning in trading signals and
          develop enterprise-grade FinTech products.
        </p>

        <p>
          With a strong risk tolerance balanced by analytical risk management,
          I maintain high confidence to scale my portfolio and entrepreneurial
          ventures for a goal of 1 Crore INR net worth by age 30.
        </p>

        <p>
          Outside work, I immerse myself in market research, coding, and
          continuous learning through documentation, tutorials, and expert
          consultations. My lifestyle is optimized for deep focus and lasting
          growth.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
