import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import KpiPreview from '@/components/KpiPreview';
import { getAllProjects, getProjectBySlug } from '@/data/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: 'Not found' };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <CaseStudy project={project} />
      {project.slug === 'ftlive' && (
        <KpiPreview />
      )}
    </main>
  );
}
