// ============================================================================
// PROJECT TESTIMONIAL
// ============================================================================

import Image from 'next/image';
import type { Testimonial } from '@/types';

interface ProjectTestimonialProps {
  testimonial: Testimonial;
}

export function ProjectTestimonial({ testimonial }: ProjectTestimonialProps) {
  return (
    <section className="container-narrow mb-16">
      <div className="rounded-2xl bg-primary-50 p-8 dark:bg-primary-900/30 sm:p-12">
        <blockquote className="mb-6 text-xl italic text-primary-700 dark:text-primary-300">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex items-center gap-4">
          {testimonial.avatar && (
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-primary-900 dark:text-primary-50">
              {testimonial.author}
            </p>
            <p className="text-sm text-primary-600 dark:text-primary-400">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
