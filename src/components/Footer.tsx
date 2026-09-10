import { site } from '@/data/site';
import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-10 print:hidden">
      <Container className="flex flex-col gap-4 text-sm text-fg-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} · {site.location}
        </p>
        <nav className="flex flex-wrap gap-5" aria-label="Footer">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg"
          >
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-fg">
            Email
          </a>
          <a href={site.githubRepo} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            This repo
          </a>
        </nav>
      </Container>
    </footer>
  );
}
