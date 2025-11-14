'use client';

// ============================================================================
// HERO SECTION - HOME PAGE BANNER
// ============================================================================

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { HERO_STATS } from '@/lib/constants';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';

export function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-mesh" />

      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-2 text-sm font-medium text-accent-700 dark:border-accent-800 dark:bg-accent-900/20 dark:text-accent-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-600" />
            </span>
            Available for new opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-xl mb-6 text-balance"
          >
            Business Analyst & Developer specializing in{' '}
            <span className="gradient-text">SaaS integrations</span> and{' '}
            <span className="gradient-text">algorithmic trading</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-primary-600 dark:text-primary-400 sm:text-xl"
          >
            Building institutional-grade financial systems and enterprise data solutions. Bridging
            the gap between technical execution and business success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary">
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/resume" className="btn-secondary">
              View Resume
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-primary-200 pt-8 dark:border-primary-800"
          >
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-primary-600 dark:text-primary-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
