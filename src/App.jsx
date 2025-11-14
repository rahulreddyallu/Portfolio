import "./App.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ThemeToggle from "./Components/ThemeToggle";
import ScrollToTop from "./Components/ScrollToTop";
import CustomCursor from "./Components/CustomCursor";

// Lazy load route components for performance optimization
const Landing = lazy(() => import("./Components/Landing"));
const Work = lazy(() => import("./Components/Work"));
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));

/**
 * Loading Fallback Component
 * Premium loading experience with smooth animations
 */
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="loading-fallback__spinner"></div>
    <p className="loading-fallback__text">Loading Experience...</p>
  </div>
);

/**
 * Error Boundary Component
 * Catches and displays errors gracefully
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.state = { hasError: true, error, errorInfo };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <motion.div
            className="error-boundary__content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="error-boundary__icon">⚠️</div>
            <h1 className="error-boundary__title">
              Oops! Something went wrong
            </h1>
            <p className="error-boundary__message">
              We encountered an unexpected error. Don't worry, your data is
              safe.
            </p>
            <button
              className="error-boundary__button"
              onClick={this.handleReset}
            >
              Return Home
            </button>
            {/* Show error details in development */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="error-boundary__details">
                <pre>
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Page Transition Wrapper
 * Handles smooth page transitions with Framer Motion
 */
const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="page-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: [0.34, 1.56, 0.64, 1], // Spring easing
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

/**
 * Scroll Restoration
 * Scrolls to top on route change
 */
const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
};

/**
 * Main App Component
 */
function App() {
  const [theme, setTheme] = useState("light");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ErrorBoundary>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          {/* Noise texture overlay */}
          <div className="noise-overlay" aria-hidden="true"></div>

          {/* Custom cursor effect */}
          <CustomCursor />

          {/* Navigation bar */}
          <NavBar />

          {/* Theme toggle button */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Scroll restoration */}
          <ScrollRestoration />

          {/* Main content with page transitions */}
          <Suspense fallback={<LoadingFallback />}>
            <PageTransitionWrapper>
              <Routes>
                {/* Home/Landing page with Hero and Work sections */}
                <Route path="/" element={<Landing />} />

                {/* About page */}
                <Route path="/about" element={<About />} />

                {/* Contact page */}
                <Route path="/contact" element={<Contact />} />

                {/* Catch all - redirect to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </PageTransitionWrapper>
          </Suspense>

          {/* Footer */}
          <Footer />

          {/* Scroll to top button */}
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
