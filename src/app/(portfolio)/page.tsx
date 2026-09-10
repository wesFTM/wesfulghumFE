import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import ProjectCard from '@/components/ProjectCard';
import HowIWork from '@/components/HowIWork';
import StackChips from '@/components/StackChips';
import { getFeaturedProjects } from '@/data/projects';
import { site } from '@/data/site';

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <main>
      <Container as="section" className="pb-20 pt-16 md:pb-28 md:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
          {site.location}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          {site.title}
        </h1>
        <p className="mt-2 text-xl text-fg-muted md:text-2xl">
          React, TypeScript, Next.js.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">{site.pitch}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
          {site.supporting}
        </p>
        <div className="mt-8">
          <StackChips />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/#work">View work</Button>
          <Button href="/resume" variant="secondary">
            Resume
          </Button>
        </div>
      </Container>

      <HowIWork />

      <Container as="section" id="work" className="py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Selected work
            </h2>
            <p className="mt-2 max-w-xl text-lg font-semibold tracking-tight">
              Frontend systems — platforms, microsites, ad tech, and interactive video.
            </p>
          </div>
          <Button href="/archive" variant="ghost">
            Design archive
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>

      <Container as="section" className="pb-8">
        <p className="max-w-2xl text-sm leading-relaxed text-fg-muted">
          This site is a Next.js 15 App Router app in TypeScript and Tailwind, deployed on Vercel.
          Source:{' '}
          <a
            href={site.githubRepo}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/wesFTM/wesfulghumFE
          </a>
          .
        </p>
      </Container>
    </main>
  );
}
