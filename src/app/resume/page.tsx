// ============================================================================
// RESUME PAGE
// ============================================================================

import type { Metadata } from 'next';
import { DownloadIcon } from '@/components/icons/DownloadIcon';
import { ExternalLinkIcon } from '@/components/icons/ExternalLinkIcon';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { RESUME_PATH } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Download my resume or view my experience, skills, and education. Business Analyst & Developer specializing in SaaS integrations and algorithmic trading.',
};

export default function ResumePage() {
  return (
    <div className="section-spacing">
      {/* Header */}
      <section className="container-narrow mb-16 text-center">
        <h1 className="heading-xl mb-6">Resume</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-600 dark:text-primary-400">
          Business Analyst & Developer with 3+ years of experience in SaaS integrations, enterprise
          systems, and algorithmic trading. Expertise in Python, data migration, and full-stack
          development.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={RESUME_PATH}
            download="Rahul_Reddy_Allu_Resume.pdf"
            className="btn-primary"
            aria-label="Download Resume PDF"
          >
            <DownloadIcon className="mr-2 h-5 w-5" />
            Download PDF
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="View Resume in new tab"
          >
            <ExternalLinkIcon className="mr-2 h-5 w-5" />
            View in Browser
          </a>
        </div>
      </section>

      {/* Experience */}
      <ExperienceTimeline />

      {/* Skills */}
      <SkillsSection />

      {/* Education */}
      <EducationSection />
    </div>
  );
}
