// ============================================================================
// TECH STACK - DISPLAY PROJECT TECHNOLOGIES
// ============================================================================

import type { TechStackItem } from '@/types';

interface TechStackProps {
  stack: TechStackItem[];
}

export function TechStack({ stack }: TechStackProps) {
  const categories = Array.from(new Set(stack.map((item) => item.category)));

  return (
    <section className="container-narrow mb-16">
      <h2 className="heading-md mb-8">Tech Stack</h2>
      <div className="space-y-6">
        {categories.map((category) => {
          const items = stack.filter((item) => item.category === category);
          return (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-lg bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 dark:bg-primary-800 dark:text-primary-300"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
