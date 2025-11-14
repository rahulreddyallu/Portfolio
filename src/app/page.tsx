// ============================================================================
// HOME PAGE - WORK/PORTFOLIO SHOWCASE
// ============================================================================

import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { CTASection } from '@/components/sections/CTASection';
import { getFeaturedProjects } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Explore my portfolio of SaaS integrations, algorithmic trading systems, and enterprise software solutions.',
};

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />
      <ProjectGrid projects={featuredProjects} />
      <CTASection />
    </>
  );
}
