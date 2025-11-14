import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import './App.css';

// Lazy load components for better performance
const NavBar = lazy(() => import('./Components/NavBar'));
const Landing = lazy(() => import('./Components/Landing'));
const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));
const Footer = lazy(() => import('./Components/Footer'));

// Premium Loading Component
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-content">
      <div className="loader-spinner"></div>
      <p className="loader-text">Loading Premium Experience...</p>
    </div>
  </div>
);

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.4,
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Router>
      <div className="app" data-theme={theme}>
        <Suspense fallback={<PageLoader />}>
          <NavBar theme={theme} toggleTheme={toggleTheme} />
          
          <main className="app-content">
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  path="/"
                  element={
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Landing />
                    </motion.div>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <About />
                    </motion.div>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Contact />
                    </motion.div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
        </Suspense>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="scroll-progress"
          style={{
            scaleX: 0,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #0ea5e9, #3b82f6)',
            transformOrigin: '0%',
            zIndex: 9999,
          }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </Router>
  );
}

export default App;