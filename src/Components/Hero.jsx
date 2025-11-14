import React, { useEffect, useState, useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "../Styles/Hero.css";

// 3D Animated Sphere Component
const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#7c3aed"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Fade in animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section ref={heroRef} className="hero" style={{ opacity }}>
      {/* Animated Background Blobs */}
      <div className="hero__background">
        <motion.div
          className="hero__blob hero__blob--1"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="hero__blob hero__blob--2"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="hero__blob hero__blob--3"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Particle Grid Background */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="hero__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          {/* 3D Parallax Content */}
          <motion.div
            className="hero__text"
            style={{
              transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="hero__greeting">Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="gradient-text">Rahul Reddy Allu</span>
            </motion.h1>

            <motion.p
              className="hero__description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Business Analyst & Developer specializing in{" "}
              <span className="hero__highlight">SaaS integrations</span>,{" "}
              <span className="hero__highlight">data analysis</span>, and{" "}
              <span className="hero__highlight">FinTech solutions</span>.
            </motion.p>

            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/contact" className="hero__btn hero__btn--primary">
                <span>Get in Touch</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M10 4l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link to="/" className="hero__btn hero__btn--secondary">
                <span>View My Work</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            className="hero__3d"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              transform: `translateX(${-mousePosition.x * 0.5}px) translateY(${
                -mousePosition.y * 0.5
              }px)`,
            }}
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight
                position={[-10, -10, -5]}
                intensity={0.5}
                color="#06b6d4"
              />
              <Suspense fallback={null}>
                <AnimatedSphere />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={1}
              />
            </Canvas>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="hero__stat glass-card"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>3+</h3>
            <p>Years Experience</p>
          </motion.div>
          <motion.div
            className="hero__stat glass-card"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>15+</h3>
            <p>Projects Completed</p>
          </motion.div>
          <motion.div
            className="hero__stat glass-card"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <span>Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
}
