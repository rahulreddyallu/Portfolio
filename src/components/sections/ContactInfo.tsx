// ============================================================================
// CONTACT INFO - SIDEBAR FOR CONTACT PAGE
// ============================================================================

import { SOCIAL_LINKS } from '@/lib/constants';
import { MailIcon } from '@/components/icons/MailIcon';
import { LocationIcon } from '@/components/icons/LocationIcon';
import { ClockIcon } from '@/components/icons/ClockIcon';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Quick Info */}
      <div className="card">
        <h3 className="heading-sm mb-6">Get in Touch</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MailIcon className="mt-1 h-5 w-5 flex-shrink-0 text-accent-600 dark:text-accent-400" />
            <div>
              <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">Email</p>
              <a
                href="mailto:rahul@example.com"
                className="text-primary-600 hover:text-accent-600 dark:text-primary-400 dark:hover:text-accent-400"
              >
                rahul@example.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <LocationIcon className="mt-1 h-5 w-5 flex-shrink-0 text-accent-600 dark:text-accent-400" />
            <div>
              <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                Location
              </p>
              <p className="text-primary-600 dark:text-primary-400">Remote / Hyderabad, India</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ClockIcon className="mt-1 h-5 w-5 flex-shrink-0 text-accent-600 dark:text-accent-400" />
            <div>
              <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                Response Time
              </p>
              <p className="text-primary-600 dark:text-primary-400">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="card">
        <h3 className="heading-sm mb-6">Connect</h3>
        <div className="space-y-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg p-3 text-primary-700 transition-colors hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800"
            >
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="rounded-2xl border border-accent-200 bg-accent-50 p-6 dark:border-accent-800 dark:bg-accent-900/20">
        <div className="mb-2 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-600" />
          </span>
          <span className="font-semibold text-accent-900 dark:text-accent-100">
            Available for Work
          </span>
        </div>
        <p className="text-sm text-accent-700 dark:text-accent-300">
          I'm currently open to new opportunities and interesting projects.
        </p>
      </div>
    </div>
  );
}
