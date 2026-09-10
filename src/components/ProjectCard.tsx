import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import Tag from '@/components/ui/Tag';

function isRasterPoster(src?: string) {
  if (!src) return false;
  return /\.(png|jpe?g|webp|gif)(\?|$)/i.test(src);
}

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const showImage = isRasterPoster(project.poster);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated transition-colors hover:border-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-accent-soft">
        {showImage ? (
          <Image
            src={project.poster!}
            alt={project.posterAlt ?? project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full flex-col justify-end p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-accent">
              {project.nda ? 'NDA' : project.client ?? 'Selected work'}
            </p>
            <p className="mt-2 text-lg font-semibold leading-snug">{project.title}</p>
          </div>
        )}
        {project.demoUrl && (
          <span className="absolute right-3 top-3 rounded-full bg-bg-elevated/95 px-2.5 py-1 text-[11px] font-medium text-fg shadow-sm">
            Live demo
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-fg-muted">{project.role}</p>
        </div>
        {!compact && (
          <p className="text-sm leading-relaxed text-fg-muted">{project.summary}</p>
        )}
        <ul className="mt-auto flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((item) => (
            <Tag key={item} as="li">
              {item}
            </Tag>
          ))}
        </ul>
      </div>
    </Link>
  );
}
