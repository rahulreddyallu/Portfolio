// ============================================================================
// PROJECT CARD - INDIVIDUAL PROJECT DISPLAY
// ============================================================================

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              project.status === 'completed'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : project.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-400'
            }`}
          >
            {project.status.replace('-', ' ')}
          </span>
          <span className="text-sm text-primary-500">{project.year}</span>
        </div>

        {/* Title & Description */}
        <h3 className="heading-sm mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-primary-600 dark:text-primary-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-primary-100 px-2 py-1 text-xs font-medium text-primary-700 dark:bg-primary-800 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center text-sm font-semibold text-accent-600 transition-colors group-hover:text-accent-700 dark:text-accent-400 dark:group-hover:text-accent-300">
          View Case Study
          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
