// ============================================================================
// FOOTER - SITE-WIDE FOOTER
// ============================================================================

import Link from 'next/link';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-200 bg-white dark:border-primary-800 dark:bg-primary-900">
      <div className="container-custom py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2">
            <h3 className="mb-4 text-xl font-bold text-primary-900 dark:text-primary-50">
              Rahul Reddy Allu
            </h3>
            <p className="mb-6 max-w-md text-primary-600 dark:text-primary-400">
              Business Analyst & Developer specializing in SaaS integrations, algorithmic trading,
              and enterprise solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-600 transition-colors hover:text-accent-600 dark:text-primary-400 dark:hover:text-accent-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
              Connect
            </h4>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 transition-colors hover:text-accent-600 dark:text-primary-400 dark:hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-200 pt-8 dark:border-primary-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-600 dark:text-primary-400">
              © {currentYear} Rahul Reddy Allu. All rights reserved.
            </p>
            <p className="text-sm text-primary-600 dark:text-primary-400">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
