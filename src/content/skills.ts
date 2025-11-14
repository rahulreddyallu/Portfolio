// ============================================================================
// SKILLS DATA
// ============================================================================

import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'languages', proficiency: 'expert', years: 4 },
  { name: 'TypeScript', category: 'languages', proficiency: 'advanced', years: 2 },
  { name: 'JavaScript', category: 'languages', proficiency: 'advanced', years: 3 },
  { name: 'SQL', category: 'languages', proficiency: 'expert', years: 4 },
  { name: 'Bash', category: 'languages', proficiency: 'intermediate', years: 2 },

  // Frameworks
  { name: 'Next.js', category: 'frameworks', proficiency: 'advanced', years: 2 },
  { name: 'React', category: 'frameworks', proficiency: 'advanced', years: 3 },
  { name: 'Node.js', category: 'frameworks', proficiency: 'advanced', years: 3 },
  { name: 'FastAPI', category: 'frameworks', proficiency: 'intermediate', years: 1 },
  { name: 'Pandas', category: 'frameworks', proficiency: 'expert', years: 4 },

  // Databases
  { name: 'PostgreSQL', category: 'databases', proficiency: 'expert', years: 4 },
  { name: 'MongoDB', category: 'databases', proficiency: 'intermediate', years: 2 },
  { name: 'Redis', category: 'databases', proficiency: 'advanced', years: 2 },
  { name: 'MySQL', category: 'databases', proficiency: 'advanced', years: 3 },

  // Tools
  { name: 'Git', category: 'tools', proficiency: 'expert', years: 4 },
  { name: 'Docker', category: 'tools', proficiency: 'advanced', years: 3 },
  { name: 'Scikit-learn', category: 'tools', proficiency: 'advanced', years: 2 },
  { name: 'Tailwind CSS', category: 'tools', proficiency: 'advanced', years: 2 },
  { name: 'REST APIs', category: 'tools', proficiency: 'expert', years: 4 },

  // Cloud
  { name: 'AWS', category: 'cloud', proficiency: 'advanced', years: 2 },
  { name: 'Azure', category: 'cloud', proficiency: 'intermediate', years: 2 },
  { name: 'Vercel', category: 'cloud', proficiency: 'advanced', years: 2 },
  { name: 'GitHub Actions', category: 'cloud', proficiency: 'intermediate', years: 2 },

  // Methodologies
  { name: 'Agile/Scrum', category: 'methodologies', proficiency: 'expert' },
  { name: 'CI/CD', category: 'methodologies', proficiency: 'advanced' },
  { name: 'Testing (TDD)', category: 'methodologies', proficiency: 'advanced' },
  { name: 'System Design', category: 'methodologies', proficiency: 'advanced' },
];

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter((s) => s.category === category);
}
