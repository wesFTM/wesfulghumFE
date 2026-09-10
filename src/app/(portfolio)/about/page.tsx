import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Wes Fulghum is a frontend engineer in New York. React, TypeScript, Next.js. Previously First Tube / Horizon Media.',
};

const skills = [
  'React',
  'TypeScript',
  'JavaScript (ES6+)',
  'Next.js',
  'HTML5',
  'CSS3',
  'Tailwind',
  'REST APIs',
  'JSON data models',
  'Context API',
  'Git / PRs / code review',
  'AWS',
  'Cloudflare Workers',
  'R2 / Stream / D1',
  'Durable Objects',
  'Vite',
  'Capacitor',
  'iOS / TestFlight',
  'Debugging (browser, network, performance)',
  'Agile',
  'Figma',
  'Interactive video / VAST',
  '1PD / campaign forms',
];

export default function AboutPage() {
  return (
    <main>
      <Container className="max-w-3xl pb-20 pt-16 md:pt-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">About</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Frontend engineer with production time inside Horizon.
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-fg-muted">
          <p>
            I am a {site.title.toLowerCase()} in {site.location}. I design and develop scalable
            frontends in React, TypeScript, and Next.js — and I have spent five years doing that work
            at First Tube / Horizon Media for brand platforms, sweepstakes microsites, and in-stream
            engagement.
          </p>
          <p>
            Before that I led design at Endeavor and editorial design at Bonnier. That history is
            useful here: this role collaborates with designers and PMs. I can take a Figma file to a
            maintainable component tree without a translator.
          </p>
          <p>
            I do not claim ten years of React. I claim ten-plus years shipping digital work, five-plus
            years of production frontend at Horizon (HTML/CSS/JS through Next.js), and a Vite
            multi-page web app in Capacitor (April–August 2026, NDA; iOS TestFlight). The case studies
            are the proof.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Experience
          </h2>
          <ul className="mt-6 space-y-8">
            <li>
              <h3 className="text-xl font-semibold">Founding Engineer</h3>
              <p className="text-sm text-fg-muted">
                Confidential live-music product (NDA) · April 2026 – August 2026
              </p>
              <p className="mt-2 leading-relaxed text-fg-muted">
                Shipped a dynamically built Vite multi-page web app in TypeScript and Tailwind, wrapped in
                Capacitor for native iOS and early-stage TestFlight / App Store Connect testing.
                Auth-gated routes, multi-step forms, Context for session state, and REST/JSON from a
                Cloudflare Worker on D1. Media over Stream (HLS) with assets on R2; Durable Objects
                for real-time state. Web updates went through the Worker so TestFlight did not need a
                new native build for each change. Git branches, pull requests, and CI.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Frontend Engineer & Lead Designer</h3>
              <p className="text-sm text-fg-muted">First Tube | Horizon Media · May 2020 – May 2025</p>
              <p className="mt-2 leading-relaxed text-fg-muted">
                Designed and developed campaign platforms, livestream portals, 1PD forms, and
                analytics dashboards. Integrated REST aggregator data (YouTube, TikTok, Meta, X,
                DV360). Built interactive overlays, in-stream shopping, photobooths, and a VAST live
                unit. GitHub for review and release; AWS-backed hosting for campaign apps. Worked in
                Agile with product, brand, and the lead engineer.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Senior Designer</h3>
              <p className="text-sm text-fg-muted">Endeavor — 160over90 / WME | IMG · April 2015 – April 2020</p>
              <p className="mt-2 leading-relaxed text-fg-muted">
                Grew a design team, led pitch and campaign systems, and partnered with writers and
                strategists. The relevant leftover: I still speak fluent designer in engineering
                reviews.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Lead Designer</h3>
              <p className="text-sm text-fg-muted">
                Bonnier Corp. — Popular Photography & American Photo · March 2012 – April 2015
              </p>
              <p className="mt-2 leading-relaxed text-fg-muted">
                Editorial layout, production preflight, and digital editions for Apple Books.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Education
          </h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Associate of Science, Interactive Media Design</h3>
            <p className="text-sm text-fg-muted">The Art Institute of New York City · 2011</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Skills
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Tag key={skill} as="li">
                {skill}
              </Tag>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Domain
          </h2>
          <p className="mt-3 leading-relaxed text-fg-muted">
            Ad tech (VAST, programmatic live), first-party data capture, clickable video overlays,
            in-stream commerce, and campaign analytics. Useful at a media company; not a substitute
            for the React/TypeScript work above.
          </p>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/resume">Resume</Button>
          <Button href={site.github} variant="secondary" external>
            GitHub
          </Button>
        </div>
      </Container>
    </main>
  );
}
