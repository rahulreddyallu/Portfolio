'use client';

// ============================================================================
// EXPERIENCE TIMELINE
// ============================================================================

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '@/content/experience';

export function ExperienceTimeline() {
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
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative border-l-2 border-accent-500 pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-white bg-accent-500 dark:border-primary-950" />

              {/* Content */}
              <div className="card">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="heading-sm mb-1">{exp.role}</h3>
                    <p className="font-semibold text-accent-600 dark:text-accent-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right text-sm text-primary-600 dark:text-primary-400">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <p className="mb-4 text-primary-600 dark:text-primary-400">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-primary-700 dark:text-primary-300">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                        <span className="text-primary-600 dark:text-primary-400">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary-100 px-2 py-1 text-xs font-medium text-primary-700 dark:bg-primary-800 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
