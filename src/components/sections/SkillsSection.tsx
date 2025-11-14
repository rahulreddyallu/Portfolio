'use client';

// ============================================================================
// SKILLS SECTION
// ============================================================================

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, getSkillsByCategory } from '@/content/skills';
import type { SkillCategory } from '@/types';

const categories: { key: SkillCategory; label: string }[] = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks & Libraries' },
  { key: 'databases', label: 'Databases' },
  { key: 'tools', label: 'Tools & Technologies' },
  { key: 'cloud', label: 'Cloud & DevOps' },
  { key: 'methodologies', label: 'Methodologies' },
];

export function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-spacing bg-primary-50 dark:bg-primary-900/30">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="heading-lg mb-12 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-10">
          {categories.map((category, idx) => {
            const categorySkills = getSkillsByCategory(category.key);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="heading-sm mb-4">{category.label}</h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        skill.proficiency === 'expert'
                          ? 'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300'
                          : skill.proficiency === 'advanced'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'bg-primary-200 text-primary-800 dark:bg-primary-800 dark:text-primary-300'
                      }`}
                    >
                      {skill.name}
                      {skill.years && ` (${skill.years}y)`}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
