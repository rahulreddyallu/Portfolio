// ============================================================================
// TYPE DEFINITIONS - WORLD-CLASS PORTFOLIO
// ============================================================================

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  images?: string[];
  tags: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  url?: string;
  github?: string;
  year: number;
  role?: string;
  client?: string;
  duration?: string;
  metrics?: ProjectMetric[];
  testimonial?: Testimonial;
  techStack?: TechStackItem[];
  achievements?: string[];
  challenges?: string[];
  solutions?: string[];
  outcomes?: string[];
}

export type ProjectCategory =
  | 'fintech'
  | 'saas'
  | 'enterprise'
  | 'web'
  | 'data'
  | 'ml'
  | 'automation';

export type ProjectStatus = 'completed' | 'in-progress' | 'live' | 'archived';

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tool' | 'language' | 'framework';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: 'expert' | 'advanced' | 'intermediate' | 'learning';
  years?: number;
}

export type SkillCategory =
  | 'languages'
  | 'frameworks'
  | 'databases'
  | 'tools'
  | 'cloud'
  | 'methodologies';

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description?: string;
  gpa?: string;
  honors?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  image: string;
  twitterHandle?: string;
  linkedIn?: string;
  github?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'telegram';
  url: string;
  label: string;
}
