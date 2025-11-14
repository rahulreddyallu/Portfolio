import React from "react";
import { useTheme } from "./index";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
      title="Toggle Dark/Light Mode"
      type="button"
    >
      {theme === "dark" ? (
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 3v1m0 16v1m6.364-12.364l-.707.707M6.343 18.364l-.707.707m12.728 0l-.707-.707M6.343 5.636l-.707-.707M21 12h1M3 12H2m15 6a7 7 0 01-14 0 7 7 0 0114 0z" />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-gray-900"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 3c.132 0 .263.008.39.02a9 9 0 118.59 8.59A7.5 7.5 0 0112 3z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
