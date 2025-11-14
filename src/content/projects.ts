// ============================================================================
// PROJECT DATA - CMS-READY CONTENT
// ============================================================================

import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'quantm10-trading-bot',
    slug: 'quantm10-trading-bot',
    title: 'QuantM10 Trading Bot',
    subtitle: 'Institutional-grade algorithmic trading system',
    description:
      'Multi-strategy algorithmic trading bot with machine learning signal generation, backtesting engine, and real-time execution via broker APIs.',
    longDescription:
      'Built from scratch: a production-ready trading system featuring 70+ Python modules, comprehensive backtesting, portfolio management, options analysis, risk controls, and live execution through Upstox API. Designed for institutional-grade reliability and performance.',
    thumbnail: '/images/projects/quantm10-thumb.jpg',
    images: [
      '/images/projects/quantm10-1.jpg',
      '/images/projects/quantm10-2.jpg',
      '/images/projects/quantm10-3.jpg',
    ],
    tags: ['Python', 'Machine Learning', 'FinTech', 'Trading APIs', 'Real-time'],
    category: 'fintech',
    status: 'in-progress',
    featured: true,
    github: 'https://github.com/rahulreddyallu/quantm10',
    year: 2024,
    role: 'Lead Developer & Architect',
    duration: '6 months (ongoing)',
    metrics: [
      { label: 'Lines of Code', value: '50,000+', description: '70+ modules' },
      { label: 'Backtesting Speed', value: '<5s', description: 'Per strategy' },
      { label: 'Signal Accuracy', value: '68%', description: 'ML-based signals' },
    ],
    techStack: [
      { name: 'Python', category: 'language' },
      { name: 'Pandas', category: 'tool' },
      { name: 'Scikit-learn', category: 'tool' },
      { name: 'Upstox API', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'AWS Lambda', category: 'devops' },
      { name: 'Telegram Bot API', category: 'tool' },
    ],
    challenges: [
      'Real-time data ingestion at scale (500+ instruments)',
      'Low-latency order execution (<100ms)',
      'Robust error handling for production reliability',
      'Comprehensive testing across market conditions',
    ],
    solutions: [
      'Event-driven architecture with async processing',
      'Direct broker API integration with fallback mechanisms',
      'Multi-layer validation and circuit breakers',
      'Rigorous backtesting framework with realistic slippage modeling',
    ],
    outcomes: [
      'Production-ready trading system deployed on AWS',
      'Successfully backtested 10+ strategies across 3 years of data',
      'Zero downtime during market hours',
      'Positioned for private equity/VC showcase',
    ],
  },
  {
    id: 'saas-integration-platform',
    slug: 'saas-integration-platform',
    title: 'Enterprise SaaS Integration Platform',
    subtitle: 'Seamless data flow across enterprise systems',
    description:
      'Designed and implemented a robust integration layer connecting multiple SaaS vendors to client databases, ensuring data integrity and seamless migrations.',
    thumbnail: '/images/projects/saas-integration-thumb.jpg',
    images: ['/images/projects/saas-integration-1.jpg', '/images/projects/saas-integration-2.jpg'],
    tags: ['API Integration', 'Data Migration', 'Enterprise Software', 'ETL'],
    category: 'saas',
    status: 'completed',
    featured: true,
    year: 2023,
    role: 'Business Analyst & Integration Lead',
    client: 'Fortune 500 Enterprise',
    duration: '4 months',
    metrics: [
      { label: 'Data Records Migrated', value: '2M+' },
      { label: 'Integration Endpoints', value: '15+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    techStack: [
      { name: 'Node.js', category: 'backend' },
      { name: 'REST APIs', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'Docker', category: 'devops' },
      { name: 'Azure', category: 'devops' },
    ],
    achievements: [
      'Zero data loss during migration of 2M+ records',
      'Reduced integration time by 60% through automation',
      '99.9% uptime maintained across all integrations',
    ],
  },
  {
    id: 'portfolio-website',
    slug: 'portfolio-website',
    title: 'Portfolio Website v2.0',
    subtitle: 'Performance-first, world-class design',
    description:
      'Next.js 14 portfolio built with institutional-grade standards: 90+ Lighthouse scores, sophisticated animations, dark mode, and serverless contact form.',
    thumbnail: '/images/projects/portfolio-thumb.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    status: 'live',
    featured: false,
    url: 'https://rahulreddyallu.com',
    github: 'https://github.com/rahulreddyallu/portfolio-v2',
    year: 2024,
    role: 'Designer & Developer',
    duration: '2 weeks',
    metrics: [
      { label: 'Lighthouse Performance', value: '95+' },
      { label: 'Lighthouse Accessibility', value: '100' },
      { label: 'First Contentful Paint', value: '<1.2s' },
    ],
    techStack: [
      { name: 'Next.js 14', category: 'framework' },
      { name: 'TypeScript', category: 'language' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Framer Motion', category: 'frontend' },
      { name: 'Vercel', category: 'devops' },
    ],
  },
  {
    id: 'market-data-analyzer',
    slug: 'market-data-analyzer',
    title: 'Market Data Analyzer',
    subtitle: 'Real-time market insights dashboard',
    description:
      'Interactive dashboard for visualizing market trends, candlestick patterns (15+ patterns), volume analysis, and support/resistance levels.',
    thumbnail: '/images/projects/market-analyzer-thumb.jpg',
    tags: ['Python', 'Data Visualization', 'FinTech', 'Real-time'],
    category: 'data',
    status: 'completed',
    featured: false,
    year: 2024,
    role: 'Developer',
    duration: '1 month',
    techStack: [
      { name: 'Python', category: 'language' },
      { name: 'Streamlit', category: 'frontend' },
      { name: 'Plotly', category: 'tool' },
      { name: 'Pandas', category: 'tool' },
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => b.year - a.year);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}
