'use client';

// ============================================================================
// MOBILE MENU - SLIDE-IN NAVIGATION
// ============================================================================

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants';
import { CloseIcon } from '@/components/icons/CloseIcon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-primary-900/50 backdrop-blur-sm"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-glass-dark dark:bg-primary-900 sm:max-w-md"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-primary-200 px-6 py-4 dark:border-primary-800">
                <span className="text-lg font-semibold text-primary-900 dark:text-primary-50">
                  Menu
                </span>
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-primary-700 transition-colors hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800"
                  aria-label="Close menu"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto px-6 py-8">
                <ul className="space-y-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            'block rounded-lg px-4 py-3 text-lg font-medium transition-colors',
                            isActive
                              ? 'bg-accent-50 text-accent-600 dark:bg-accent-900/20 dark:text-accent-400'
                              : 'text-primary-700 hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800'
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Social Links */}
              <div className="border-t border-primary-200 px-6 py-6 dark:border-primary-800">
                <p className="mb-4 text-sm font-semibold text-primary-700 dark:text-primary-300">
                  Connect
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-primary-300 px-4 py-2 text-center text-sm font-medium text-primary-700 transition-colors hover:border-accent-500 hover:bg-accent-50 hover:text-accent-600 dark:border-primary-700 dark:text-primary-300 dark:hover:border-accent-500 dark:hover:bg-accent-900/20 dark:hover:text-accent-400"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
