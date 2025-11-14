import { render, screen } from '@testing-library/react';
import { ProjectCard } from '@/components/cards/ProjectCard';
import type { Project } from '@/types';

const mockProject: Project = {
  id: '1',
  slug: 'test-project',
  title: 'Test Project',
  subtitle: 'A test project subtitle',
  description: 'Test description for the project',
  longDescription: 'A longer detailed description of the test project',
  category: 'Web Development',
  thumbnail: '/test.jpg',
  images: ['/test1.jpg', '/test2.jpg'],
  tags: ['React', 'TypeScript'],
  year: 2024,
  status: 'completed',
  featured: true,
  techStack: [
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'language' },
  ],
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText(/Test description/i)).toBeInTheDocument();
  });

  it('renders project tags', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});
