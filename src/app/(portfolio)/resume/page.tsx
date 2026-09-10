import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import PrintButton from '@/components/PrintButton';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume — ${site.name}, ${site.title}.`,
};

export default function ResumePage() {
  return (
    <main>
      <Container className="max-w-3xl pb-20 pt-16 md:pt-20 print:max-w-none print:px-0 print:pt-0">
        <div className="flex flex-col gap-4 print:hidden sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Resume</p>
          <div className="flex gap-3">
            <PrintButton />
            <Button href={`mailto:${site.email}`}>Email</Button>
          </div>
        </div>

        <header className="mt-8 border-b border-border pb-8">
          <h1 className="text-4xl font-semibold tracking-tight">{site.name}</h1>
          <p className="mt-1 text-lg text-fg-muted">{site.title}</p>
          <p className="mt-3 text-sm text-fg-muted">
            {site.location} · {site.email} ·{' '}
            <a href={site.github} className="underline">
              github.com/wesFTM
            </a>{' '}
            ·{' '}
            <a href={site.domain} className="underline">
              wesfulghum.com
            </a>
          </p>
        </header>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Summary</h2>
          <p className="mt-3 leading-relaxed text-fg-muted">
            Senior frontend engineer focused on React, TypeScript, and Next.js. Five years shipping
            production web apps, campaign platforms, and interactive media at First Tube / Horizon
            Media. Integrates REST APIs and complex JSON into maintainable UIs; partners with design
            and product in Agile. Ten-plus years in digital craft; does not pad React tenure.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Experience
          </h2>
          <div className="mt-6 space-y-8">
            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <h3 className="font-semibold">Frontend Engineer & Design Director</h3>
                <p className="text-sm text-fg-muted">May 2020 – May 2025</p>
              </div>
              <p className="text-sm text-fg-muted">First Tube — Horizon Media · New York</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-fg-muted">
                <li>
                  Designed and developed scalable frontends in React, Next.js, TypeScript, and
                  HTML/CSS/JS for event hubs, livestream portals, 1PD microsites, and tracking
                  dashboards.
                </li>
                <li>
                  Architected reusable component UIs for campaign platforms (Michelob Ultra Movement)
                  and analytics (FT Live), including REST integration against social aggregator JSON
                  (YouTube, TikTok, Meta, X, DV360).
                </li>
                <li>
                  Built interactive media features: clickable overlays, in-stream shopping, digital
                  photobooths, promo-code flows, and a VAST-compliant live ad unit.
                </li>
                <li>
                  Used Git (branches, pull requests, reviews) with a lead engineer; shipped on AWS and
                  GitHub-based release paths; worked Agile with PMs, brand, and backend.
                </li>
                <li>
                  Debugged browser, network, and player issues across mobile Safari, autoplay policy,
                  CORS, and ad environments.
                </li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <h3 className="font-semibold">Senior Designer</h3>
                <p className="text-sm text-fg-muted">April 2015 – April 2020</p>
              </div>
              <p className="text-sm text-fg-muted">Endeavor — 160over90 / WME | IMG · New York</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-fg-muted">
                <li>
                  Expanded a design team and led campaign systems, pitch materials, and
                  designer–stakeholder collaboration — still the way I work with product design.
                </li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <h3 className="font-semibold">Lead Designer</h3>
                <p className="text-sm text-fg-muted">March 2012 – April 2015</p>
              </div>
              <p className="text-sm text-fg-muted">
                Bonnier Corp. — Popular Photography & American Photo · New York
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-fg-muted">
                <li>
                  Editorial layout, production preflight, and digital issues for Apple Books.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Skills
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Next.js, Tailwind, REST APIs, JSON,
            Context API, Git, AWS, browser/network/performance debugging, Agile, Figma. Domain: VAST
            / interactive video, 1PD campaign forms.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Education
          </h2>
          <p className="mt-3 text-sm text-fg-muted">
            Associate of Science, Interactive Media Design · The Art Institute of New York City · 2011
          </p>
        </section>
      </Container>
    </main>
  );
}
