import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-16">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-700 dark:text-gray-300">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Rahul Reddy Allu. All rights reserved.
        </p>
        <nav aria-label="Social media" className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6 fill-current"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub icon</title>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.334-1.757-1.334-1.757-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.606-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.987-.4 3.008-.404 1.02.004 2.047.137 3.008.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.243 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.923.43.37.823 1.096.823 2.213v3.287c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 fill-current"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn icon</title>
              <path d="M20.452 20.452h-3.554v-5.78c0-1.377-.025-3.148-1.916-3.148-1.918 0-2.211 1.5-2.211 3.042v5.886H9.221V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.604 0 4.269 2.371 4.269 5.451v6.29zM5.337 7.433a2.06 2.06 0 110-4.119 2.059 2.059 0 010 4.119zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.793 0 0 .77 0 1.72v20.509C0 23.208.792 24 1.771 24h20.451C23.207 24 24 23.208 24 22.229V1.72C24 .77 23.207 0 22.225 0z" />
            </svg>
          </a>
          {/* Add other social icons as needed */}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
