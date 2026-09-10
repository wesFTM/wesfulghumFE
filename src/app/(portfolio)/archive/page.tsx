import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import ProjectCard from '@/components/ProjectCard';
import { getArchiveProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Design archive',
  description:
    'Selected design, motion, and editorial work — archived so the homepage can lead with frontend engineering.',
};

export default function ArchivePage() {
  const archive = getArchiveProjects();

  return (
    <main>
      <Container className="pb-20 pt-16 md:pt-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
          Supporting work
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Selected design</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">
          Campaign motion, identity, editorial, and activations. Kept here on purpose so hiring
          managers meet the engineering work first. Grey Goose includes a WebAR experiment (8th Wall /
          three.js).
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {archive.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </Container>
    </main>
  );
}
