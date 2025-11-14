'use client';

// ============================================================================
// EDUCATION SECTION
// ============================================================================

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '@/content/education';

export function EducationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-spacing">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="heading-lg mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="heading-sm mb-1">{edu.degree}</h3>
                  <p className="font-semibold text-accent-600 dark:text-accent-400">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right text-sm text-primary-600 dark:text-primary-400">
                  <p>{edu.duration}</p>
                  <p>{edu.location}</p>
                  {edu.gpa && <p className="mt-1 font-semibold">GPA: {edu.gpa}</p>}
                </div>
              </div>

              {edu.description && (
                <p className="mb-4 text-primary-600 dark:text-primary-400">{edu.description}</p>
              )}

              {edu.honors && edu.honors.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-primary-700 dark:text-primary-300">
                    Honors & Awards:
                  </h4>
                  <ul className="space-y-1">
                    {edu.honors.map((honor, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                        <span className="text-primary-600 dark:text-primary-400">{honor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
