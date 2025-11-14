// ============================================================================
// EXPERIENCE DATA
// ============================================================================

import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'business-analyst-fintech',
    company: 'FinTech Solutions Inc.',
    role: 'Business Analyst & Integration Specialist',
    duration: 'Jan 2022 - Present',
    location: 'Remote',
    description:
      'Leading SaaS integration projects and enterprise data migrations. Bridge technical implementation and customer success, ensuring seamless platform adoption.',
    achievements: [
      'Led integration of 15+ SaaS platforms with zero data loss across 2M+ records',
      'Reduced migration timelines by 60% through process automation and optimization',
      'Designed and implemented robust ETL pipelines handling 500K+ daily transactions',
      'Achieved 99.9% uptime across all critical integration endpoints',
      'Collaborated with C-suite executives to define technical roadmaps',
    ],
    technologies: [
      'Python',
      'SQL',
      'REST APIs',
      'PostgreSQL',
      'Azure',
      'Docker',
      'Redis',
      'Node.js',
    ],
    current: true,
  },
  {
    id: 'quantitative-developer',
    company: 'Independent Projects',
    role: 'Quantitative Developer & Algorithmic Trading',
    duration: 'Jun 2023 - Present',
    location: 'Remote',
    description:
      'Building institutional-grade algorithmic trading systems from scratch. Developing multi-strategy trading bots with machine learning, backtesting, and live execution.',
    achievements: [
      'Built QuantM10: 50,000+ lines of production-ready Python trading infrastructure',
      'Implemented 15+ candlestick pattern detection algorithms with institutional-grade rigor',
      'Developed comprehensive backtesting engine with realistic slippage and commission modeling',
      'Integrated real-time market data feeds supporting 500+ instruments',
      'Created robust portfolio management system with multi-strategy orchestration',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'PostgreSQL',
      'AWS',
      'Telegram Bot API',
      'Upstox API',
    ],
    current: true,
  },
  {
    id: 'civil-engineer',
    company: 'Infrastructure Development Corp.',
    role: 'Civil Engineer',
    duration: 'Jul 2020 - Dec 2021',
    location: 'Hyderabad, India',
    description:
      'Managed large-scale infrastructure projects. Transitioned analytical engineering skills into software development and financial technology.',
    achievements: [
      'Managed projects worth $5M+ from planning to execution',
      'Coordinated cross-functional teams of 20+ members',
      'Reduced project delivery time by 15% through process optimization',
      'Developed data-driven project tracking systems using Excel and Python',
    ],
    technologies: ['AutoCAD', 'Excel', 'Python', 'Project Management Tools'],
    current: false,
  },
];
