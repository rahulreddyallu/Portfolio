import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./index";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false); // close menu on navigation change
  }, [location.pathname]);

  // Detect scroll to add subtle shadow and background for nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Nav link underline animation variants
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md bg-white/90 dark:bg-gray-900/80" : "bg-transparent"
      }`}
      aria-label="Primary Navigation"
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-semibold text-xl text-primary dark:text-primary/90"
          aria-label="Homepage"
        >
          Rahul Allu
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-base text-gray-800 dark:text-gray-200">
          {links.map(({ href, label }) => (
            <li key={href}>
              <NavLink
                to={href}
                className="relative py-2 group"
                end={href === "/"}
              >
                {({ isActive }) => (
                  <>
                    <span>{label}</span>
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-primary dark:bg-primary/90 rounded"
                      initial="hidden"
                      animate={isActive ? "visible" : "hidden"}
                      variants={underlineVariants}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-primary dark:bg-primary/90 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ width: "100%" }}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/80"
          title="Toggle Dark/Light Mode"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m6.364-12.364l-.707.707M6.343 18.364l-.707.707m12.728 0l-.707-.707M6.343 5.636l-.707-.707M21 12h1M3 12H2m15 6a7 7 0 01-14 0 7 7 0 0114 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c.132 0 .263.008.39.02a9 9 0 118.59 8.59A7.5 7.5 0 0112 3z"
              />
            </svg>
          )}
        </button>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle Navigation Menu"
          className="md:hidden ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-primary dark:text-primary/90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 p-4 font-semibold text-lg text-gray-900 dark:text-gray-200">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded transition-colors ${
                        isActive
                          ? "bg-primary text-white dark:bg-primary/90"
                          : "hover:bg-primary/10 dark:hover:bg-primary/20"
                      }`
                    }
                    end={href === "/"}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
