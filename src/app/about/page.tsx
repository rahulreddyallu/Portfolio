// ============================================================================
// ABOUT PAGE
// ============================================================================

import type { Metadata } from 'next';
import Image from 'next/image';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Business Analyst & Developer with expertise in SaaS integrations, algorithmic trading, and enterprise systems. Background in Civil Engineering, now building institutional-grade FinTech solutions.',
};

export default function AboutPage() {
  return (
    <div className="section-spacing">
      {/* Hero Section */}
      <section className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="heading-xl mb-6">
              Building bridges between
              <br />
              <span className="gradient-text">technology and business</span>
            </h1>
            <div className="space-y-4 text-lg text-primary-600 dark:text-primary-400">
              <p>
                I'm a <strong className="font-semibold text-primary-900 dark:text-primary-50">Business Analyst</strong> specializing in SaaS integrations and
                enterprise database migrations. I bridge the gap between technical implementation
                and customer success, ensuring seamless platform adoption.
              </p>
              <p>
                With a background in <strong className="font-semibold">Civil Engineering</strong> and a passion for technology,
                I've transitioned into the world of software and finance, where I combine analytical
                thinking with technical execution.
              </p>
              <p>
                Currently, I'm building <strong className="font-semibold">institutional-grade algorithmic trading systems</strong>,
                applying the same rigor I learned in engineering to financial markets.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-auto lg:h-[600px]">
            <Image
              src="/images/portrait.jpg"
              alt="Rahul Reddy Allu"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
          </div>
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
