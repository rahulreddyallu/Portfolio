// ============================================================================
// CONTACT PAGE
// ============================================================================

import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactInfo } from '@/components/sections/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch for project inquiries, collaboration opportunities, or just to say hello. I respond to all messages within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="section-spacing">
      <div className="container-narrow">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="heading-xl mb-6">Let's work together</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-600 dark:text-primary-400">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision. Send me a message and I'll respond within 24 hours.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact Info - Takes 2 columns */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
