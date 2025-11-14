// ============================================================================
// PROJECT METRICS - DISPLAY KEY METRICS
// ============================================================================

import type { ProjectMetric } from '@/types';

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <section className="container-custom mb-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, idx) => (
          <div key={idx} className="card text-center">
            <div className="mb-2 text-4xl font-bold text-accent-600 dark:text-accent-400">
              {metric.value}
            </div>
            <div className="mb-1 font-semibold text-primary-900 dark:text-primary-50">
              {metric.label}
            </div>
            {metric.description && (
              <div className="text-sm text-primary-600 dark:text-primary-400">
                {metric.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
