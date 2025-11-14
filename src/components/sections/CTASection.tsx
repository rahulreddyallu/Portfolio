// ============================================================================
// CTA SECTION - CALL TO ACTION
// ============================================================================

import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';

export function CTASection() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-600 to-accent-700 px-8 py-16 text-center text-white shadow-soft-xl sm:px-12 sm:py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="heading-lg mb-6">Let's build something great together</h2>
            <p className="mb-8 text-lg text-accent-50 sm:text-xl">
              I'm always interested in hearing about new projects and opportunities. Whether you
              have a question or just want to say hi, I'll get back to you within 24 hours.
            </p>
            <Link href="/contact" className="btn-secondary bg-white hover:bg-primary-50">
              Start a Conversation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
