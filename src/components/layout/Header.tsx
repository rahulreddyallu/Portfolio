'use client';

// ============================================================================
// HEADER - PERSISTENT NAVIGATION
// ============================================================================

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { MenuIcon } from '@/components/icons/MenuIcon';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'glass-strong border-b border-primary-200/50 shadow-soft dark:border-primary-800/50'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary-900 transition-colors hover:text-accent-600 dark:text-primary-50 dark:hover:text-accent-400 sm:text-2xl"
        >
          Rahul Reddy Allu
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'text-accent-600 dark:text-accent-400'
                    : 'text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-50'
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent-600 dark:bg-accent-400" />
                )}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-lg p-2 text-primary-700 transition-colors hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800"
            aria-label="Open menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
