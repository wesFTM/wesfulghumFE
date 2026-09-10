import type { Project } from '@/data/projects';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Tag from '@/components/ui/Tag';
import Image from 'next/image';

function isRasterPoster(src?: string) {
  if (!src) return false;
  return /\.(png|jpe?g|webp|gif)(\?|$)/i.test(src);
}

export default function CaseStudy({ project }: { project: Project }) {
  const showImage = isRasterPoster(project.poster);

  return (
    <article>
      <Container as="header" className="pb-10 pt-16 md:pt-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
          {project.nda ? 'Confidential — patterns only' : 'Case study'}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-fg-muted">{project.role}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item} as="li">
              {item}
            </Tag>
          ))}
        </ul>
        {project.demoUrl && (
          <div className="mt-8">
            <Button href={project.demoUrl}>{project.demoLabel ?? 'Launch demo'}</Button>
          </div>
        )}
      </Container>

      {showImage && project.poster && (
        <Container className="pb-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-accent-soft">
            <Image
              src={project.poster}
              alt={project.posterAlt ?? project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </Container>
      )}

      <Container className="grid gap-12 pb-20 md:grid-cols-3">
        <section className="md:col-span-2 space-y-10">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Problem
            </h2>
            <p className="mt-3 leading-relaxed text-fg-muted">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Role & ownership
            </h2>
            <p className="mt-3 leading-relaxed text-fg-muted">{project.ownership}</p>
          </div>
          {project.architecture.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Architecture
              </h2>
              <ol className="mt-4 space-y-4">
                {project.architecture.map((step, index) => (
                  <li key={step.title} className="rounded-xl border border-border bg-bg-elevated p-4">
                    <p className="text-sm font-semibold">
                      <span className="mr-2 text-fg-muted">{String(index + 1).padStart(2, '0')}</span>
                      {step.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Engineering
            </h2>
            <p className="mt-3 leading-relaxed text-fg-muted">{project.engineering}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Outcome
            </h2>
            <p className="mt-3 leading-relaxed text-fg-muted">{project.outcome}</p>
          </div>
        </section>

        <aside className="space-y-8 md:pt-1">
          {project.client && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Client
              </h2>
              <p className="mt-2 text-sm">{project.client}</p>
            </div>
          )}
          {project.apis && project.apis.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                APIs & data
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-fg-muted">
                {project.apis.map((api) => (
                  <li key={api}>{api}</li>
                ))}
              </ul>
            </div>
          )}
          {project.video && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Walkthrough
              </h2>
              <video
                src={project.video}
                controls
                preload="metadata"
                className="mt-3 w-full rounded-lg border border-border"
              >
                Supporting video for {project.title}
              </video>
            </div>
          )}
        </aside>
      </Container>
    </article>
  );
}
