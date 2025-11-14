// ============================================================================
// PROJECT DETAIL PAGE (DYNAMIC ROUTE)
// ============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects, getProjectBySlug } from '@/content/projects';
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon';
import { ExternalLinkIcon } from '@/components/icons/ExternalLinkIcon';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { ProjectMetrics } from '@/components/project/ProjectMetrics';
import { TechStack } from '@/components/project/TechStack';
import { ProjectTestimonial } from '@/components/project/ProjectTestimonial';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="section-spacing">
      {/* Back Button */}
      <div className="container-custom mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-primary-600 transition-colors hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-50"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container-custom mb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-3">
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

            <h1 className="heading-xl mb-4">{project.title}</h1>
            <p className="mb-6 text-xl text-primary-600 dark:text-primary-400">
              {project.subtitle}
            </p>
            <p className="mb-8 text-lg text-primary-600 dark:text-primary-400">
              {project.longDescription || project.description}
            </p>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLinkIcon className="mr-2 h-5 w-5" />
                  View Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <GithubIcon className="mr-2 h-5 w-5" />
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Metrics */}
      {project.metrics && <ProjectMetrics metrics={project.metrics} />}

      {/* Tech Stack */}
      {project.techStack && <TechStack stack={project.techStack} />}

      {/* Challenge-Solution-Outcome */}
      {(project.challenges || project.solutions || project.outcomes) && (
        <section className="container-narrow mb-16">
          <div className="space-y-12">
            {project.challenges && (
              <div>
                <h2 className="heading-md mb-6">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
                      <span className="text-lg text-primary-600 dark:text-primary-400">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && (
              <div>
                <h2 className="heading-md mb-6">Solutions</h2>
                <ul className="space-y-3">
                  {project.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
                      <span className="text-lg text-primary-600 dark:text-primary-400">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.outcomes && (
              <div>
                <h2 className="heading-md mb-6">Outcomes</h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                      <span className="text-lg text-primary-600 dark:text-primary-400">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && <ProjectTestimonial testimonial={project.testimonial} />}

      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="container-custom mb-16">
          <h2 className="heading-md mb-8">Gallery</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.images.map((image, idx) => (
              <div key={idx} className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-narrow text-center">
        <div className="rounded-2xl border border-primary-200 bg-primary-50 p-12 dark:border-primary-800 dark:bg-primary-900/50">
          <h2 className="heading-md mb-4">Interested in working together?</h2>
          <p className="mb-6 text-lg text-primary-600 dark:text-primary-400">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </article>
  );
}
