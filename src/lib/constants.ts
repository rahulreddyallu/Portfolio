// ============================================================================
// GLOBAL CONSTANTS - CONFIGURATION & CONTENT
// ============================================================================

import type { SiteMetadata, NavItem, SocialLink } from '@/types';

export const SITE_METADATA: SiteMetadata = {
  title: 'Rahul Reddy Allu - Business Analyst & Developer',
  description:
    'Business Analyst & Developer specializing in SaaS integrations, algorithmic trading systems, and enterprise data solutions. Building institutional-grade financial technology.',
  author: 'Rahul Reddy Allu',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://rahulreddyallu.com',
  image: '/images/og-image.jpg',
  twitterHandle: '@rahulreddyallu',
  linkedIn: 'https://linkedin.com/in/rahulreddyallu',
  github: 'https://github.com/rahulreddyallu',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/rahulreddyallu',
    label: 'GitHub',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/rahulreddyallu',
    label: 'LinkedIn',
  },
  {
    platform: 'email',
    url: 'mailto:rahul@example.com',
    label: 'Email',
  },
  {
    platform: 'telegram',
    url: 'https://t.me/rahulreddyallu',
    label: 'Telegram',
  },
];

export const HERO_STATS = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Client Satisfaction', value: '100%' },
];

export const RESUME_PATH = '/Resume_Rahul.pdf';

// Feature flags
export const FEATURES = {
  darkMode: true,
  smoothScroll: true,
  analytics: false,
  projectCaseStudies: true,
  blog: false, // Future expansion
} as const;

// Rate limiting
export const RATE_LIMIT = {
  maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5', 10),
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 minutes
};

// Animation durations (ms)
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 700,
} as const;

// Breakpoints (match Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
