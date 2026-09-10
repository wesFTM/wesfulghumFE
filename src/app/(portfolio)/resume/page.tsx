import type { Metadata } from 'next';
import PrintButton from '@/components/PrintButton';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume — ${site.name}, ${site.title}.`,
};

export default function ResumePage() {
  return (
    <main className="bg-white text-black">
      <div className="mx-auto flex max-w-[8.5in] justify-end px-6 pt-6 print:hidden">
        <PrintButton />
      </div>

      <article className="resume-sheet mx-auto max-w-[8.5in] px-6 pb-16 pt-4 text-[13px] leading-tight print:max-w-none print:px-0 print:py-0">
        <h1 className="text-xl font-semibold">{site.name}</h1>
        <p className="mt-0.5 font-medium">{site.title}</p>
        <p className="mt-3 max-w-[7.2in]">
          Frontend engineer who ships production React, TypeScript, and Next.js. Five years building
          campaign platforms, analytics dashboards, and interactive video UIs at First Tube / Horizon
          Media — including REST integrations, 1PD microsites, and in-stream engagement. Works in
          Git/PR review with lead engineers, PMs, and design. April–August 2025: React SPA in
          TypeScript for a live-music product (NDA).
        </p>
        <p className="mt-2">
          New York, NY |{' '}
          <a href={site.phoneHref} className="text-black underline">
            {site.phone}
          </a>{' '}
          |{' '}
          <a href={`mailto:${site.email}`} className="text-black underline">
            {site.email}
          </a>{' '}
          |{' '}
          <a href={site.linkedin} className="text-black underline">
            linkedin.com/in/wes-fulghum-a3045273
          </a>{' '}
          |{' '}
          <a href={site.domain} className="text-black underline">
            wesfulghum.com
          </a>
        </p>

        <h2 className="mt-4 border-b border-black pb-0.5 text-base font-semibold">Experience</h2>

        <section className="mt-2.5">
          <div className="flex flex-wrap justify-between gap-x-4">
            <h3 className="font-semibold">Frontend Engineer</h3>
            <p>April 2025 – August 2025</p>
          </div>
          <p className="italic">Confidential live-music product (NDA)</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">
            <li>
              Shipped a React SPA in TypeScript and Tailwind: reusable components, typed props, and
              public vs authenticated route splits.
            </li>
            <li>
              Auth-gated routing (sessions fail closed; tokens off the URL). Consumed authenticated
              REST/JSON with async/await for session and resource data.
            </li>
            <li>
              Multi-step forms with client validation, inline errors, and async submit states. Context
              API for session and preferences; local state for forms and the player.
            </li>
            <li>
              Media playback UI with loading, buffering, and error handling. Git branches, pull
              requests, and CI on each meaningful change.
            </li>
          </ul>
        </section>

        <section className="mt-3">
          <div className="flex flex-wrap justify-between gap-x-4">
            <h3 className="font-semibold">Frontend Engineer</h3>
            <p>May 2020 – May 2025</p>
          </div>
          <p className="italic">First Tube — Horizon Media | New York</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">
            <li>
              Built production frontends in React, Next.js, TypeScript, and HTML/CSS/JS for branded
              platforms, livestream portals, sweepstakes microsites, and campaign dashboards.
            </li>
            <li>
              FT Live analytics: consumed REST aggregator JSON (YouTube, TikTok, Meta, X, DV360) and
              mapped nested payloads into a reusable dashboard so ops could watch KPIs without weekly
              exports.
            </li>
            <li>
              Michelob Ultra Movement: Next.js content platform for workouts, merch, and live events;
              overlays, discount codes, and giveaways as DOM on the player, not burned-in video.
            </li>
            <li>
              Casa Bacardi and Anheuser-Busch Reventón: clickable livestream overlays, in-stream merch,
              promo codes, and a canvas photobooth for remote viewers.
            </li>
            <li>
              The General Sound Studio: VAST-compliant wrapper around a live studio feed for
              programmatic distribution, plus a 1PD landing page with client-side validation (Mailchimp).
            </li>
            <li>
              Southwest Hawaii Heartbeats: geo-limited sweepstakes UI (Hawaii residents) so eligibility
              lived in the form, not only in legal copy.
            </li>
            <li>
              Git branching, pull requests, and reviews with a lead engineer; AWS-hosted campaign apps;
              Agile with product and brand. Debugged CORS, autoplay policy, mobile Safari, and
              ad-blocked players.
            </li>
          </ul>
        </section>

        <section className="mt-3">
          <div className="flex flex-wrap justify-between gap-x-4">
            <h3 className="font-semibold">Senior Designer</h3>
            <p>April 2015 – April 2020</p>
          </div>
          <p className="italic">Endeavor — 160over90 / WME | IMG | New York</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">
            <li>
              Grew a design team from 3 to 15 and ran campaign systems with writers and stakeholders —
              the same collaboration model used later with PMs and engineers.
            </li>
          </ul>
        </section>

        <section className="mt-3">
          <div className="flex flex-wrap justify-between gap-x-4">
            <h3 className="font-semibold">Lead Designer</h3>
            <p>March 2012 – April 2015</p>
          </div>
          <p className="italic">Bonnier Corp. — Popular Photography & American Photo | New York</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">
            <li>
              Shipped editorial layout and production preflight for two national magazines, plus digital
              editions for Apple Books.
            </li>
          </ul>
        </section>

        <h2 className="mt-4 border-b border-black pb-0.5 text-base font-semibold">Skills</h2>
        <p className="mt-2">
          <span className="font-semibold">Frontend:</span> React, Next.js, TypeScript, JavaScript
          (ES6+), HTML5, CSS3, Tailwind, Context API.{' '}
          <span className="font-semibold">Integration & delivery:</span> REST APIs, JSON data models,
          Git (branches, PRs, reviews), AWS, Vercel, Agile.{' '}
          <span className="font-semibold">Media & campaigns:</span> VAST, livestream overlays, 1PD /
          sweepstakes forms, Canvas, Figma.
        </p>

        <h2 className="mt-4 border-b border-black pb-0.5 text-base font-semibold">Education</h2>
        <p className="mt-2">
          Associate of Science, Interactive Media Design | The Art Institute of New York City | 2011
        </p>
      </article>
    </main>
  );
}
