export type ProjectCategory = 'engineering' | 'design';

export type ArchitectureStep = {
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  category: ProjectCategory;
  featured: boolean;
  order: number;
  summary: string;
  problem: string;
  ownership: string;
  architecture: ArchitectureStep[];
  stack: string[];
  apis?: string[];
  engineering: string;
  outcome: string;
  demoUrl?: string;
  demoLabel?: string;
  poster?: string;
  posterAlt?: string;
  video?: string;
  nda?: boolean;
  client?: string;
  dates?: string;
};

const r2 = 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev';

const projects: Project[] = [
  {
    slug: 'ftlive',
    title: 'FT Live Analytics Platform',
    role: 'Frontend Engineer & Design',
    category: 'engineering',
    featured: true,
    order: 1,
    client: 'First Tube / Horizon Media',
    summary:
      'A campaign analytics web app that surfaced near-real-time KPIs across social and programmatic platforms, so brand and ops teams could see performance without waiting on a weekly deck.',
    problem:
      'Live and programmatic campaigns were generating data across YouTube, TikTok, Meta, X, and DV360. Stakeholders needed one frontend that could ingest aggregator payloads, normalize a messy JSON model, and render campaign-specific dashboards without a full backend rewrite for every brand.',
    ownership:
      'I designed and built the frontend with the lead developer: information architecture, dashboard UI, chart and table views, and the client-side mapping from aggregator responses into widgets. GitHub was the source of truth for iteration and release.',
    architecture: [
      {
        title: 'Aggregator APIs',
        detail:
          'Authenticated REST calls to a social/media aggregator returned per-platform metrics as nested JSON (impressions, completions, engagement, spend).',
      },
      {
        title: 'Normalize & map',
        detail:
          'Frontend transforms flattened platform records into a shared campaign model so widgets stay reusable across brands instead of one-off templates.',
      },
      {
        title: 'Dashboard UI',
        detail:
          'Next.js views compose KPI tiles, platform breakdowns, and time-sensitive totals. Loading and stale states are explicit because the data is near-real-time, not batch.',
      },
      {
        title: 'Ship',
        detail:
          'GitHub workflows for review and release; the app was hosted on AWS-backed infrastructure used by the campaign ops team.',
      },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'REST APIs', 'JSON', 'GitHub', 'AWS'],
    apis: [
      'Social aggregator REST (YouTube, TikTok, Meta, X)',
      'Programmatic metrics (DV360)',
      'Internal campaign config JSON',
    ],
    engineering:
      'The hard part was not drawing charts — it was making a volatile, nested JSON contract readable. I typed the payload shapes we could rely on, guarded the fields we could not, and kept async fetching out of presentational components so a failed platform did not blank the whole board. Browser performance mattered when several campaigns refreshed in one session.',
    outcome:
      'Ops and account teams could monitor live-campaign KPIs in one UI instead of stitching platform exports. The same dashboard shell was reused across campaigns with brand-level config rather than a new front end each time.',
    demoUrl: '/demos/ftlive',
    demoLabel: 'Launch dashboard',
    poster: `${r2}/ftLive01.png`,
    posterAlt: 'FT Live analytics dashboard UI',
    video: `${r2}/ft_live.mp4`,
  },
  {
    slug: 'momentum',
    title: 'Live Music Application',
    role: 'Frontend Engineer',
    category: 'engineering',
    featured: true,
    order: 2,
    nda: true,
    dates: 'April 2025 – August 2025',
    summary:
      'A Vite multi-page web app in the live-music space (April–August 2025), wrapped in Capacitor for native iOS and early-stage TestFlight. Cloudflare Worker + D1, R2, Stream HLS, and Durable Objects. Under NDA I can talk about the architecture and technologies — not the product name, client, or branded UI.',
    problem:
      'The product needed a production-grade Vite multi-page frontend that could ship as an iOS app (TestFlight / App Store Connect) while still updating from the edge: authenticated sessions, multi-step forms, real-time state, and HLS playback — without leaking implementation details that would identify the app.',
    ownership:
      'April–August 2025 I built and maintained the Vite multi-page web app and its Capacitor iOS shell: typed views, auth-aware routing, form flows, REST/JSON against a Worker on D1, media on Stream and R2, Durable Objects for real-time surfaces, and Worker-delivered web updates so TestFlight did not need a new native build for each change. CI ran on every meaningful change.',
    architecture: [
      {
        title: 'Native shell',
        detail:
          'Capacitor wraps the Vite multi-page web app so it can use native iOS features and ship via TestFlight / App Store Connect (early-stage testing). Web changes go out through a Cloudflare Worker without resubmitting a native build.',
      },
      {
        title: 'Auth boundary',
        detail:
          'Session-aware routes separate public and signed-in surfaces. Tokens stay off the URL; expired sessions fail closed. Session and resource APIs run on a Cloudflare Worker backed by D1.',
      },
      {
        title: 'State',
        detail:
          'Server-fetched resources live beside local UI state. Context holds session and cross-route preferences; Durable Objects coordinate real-time state; feature screens keep form and player state close to the components that own them.',
      },
      {
        title: 'Forms',
        detail:
          'Multi-field flows with client validation, inline errors, and async submit states. Invalid payloads never look like a successful save.',
      },
      {
        title: 'Media',
        detail:
          'Playback UI over Cloudflare Stream (HLS) with explicit loading, buffering, and error handling. Assets live on R2 object storage — the same class of browser constraints as campaign players, applied to a product context.',
      },
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Capacitor',
      'iOS / TestFlight',
      'Context API',
      'Cloudflare Workers',
      'D1',
      'R2',
      'Stream (HLS)',
      'Durable Objects',
      'Auth',
      'Media playback',
      'CI/CD',
    ],
    apis: [
      'Authenticated REST for session and resources (Worker + D1)',
      'Cloudflare Stream (HLS)',
      'R2 object storage',
    ],
    engineering:
      'This is the most contemporary TypeScript work I can show (April–August 2025): a Vite multi-page web app in a Capacitor iOS wrapper, plus a Cloudflare Worker on D1, R2, Stream HLS, and Durable Objects. Web updates shipped through the Worker so TestFlight did not need a new native build for each change. The public demo is a sanitized reconstruction of patterns only: a fake sign-in, a validated form, a player shell, and a small Context store. No branding, no real users, no production endpoints.',
    outcome:
      'A maintainable Vite multi-page + Capacitor structure that a hiring manager can evaluate: TestFlight delivery, Worker-driven updates, typed components, auth gating, forms, real-time state, media delivery, and an edge data layer — without violating the NDA.',
    demoUrl: '/demos/momentum',
    demoLabel: 'Launch pattern demo',
  },
  {
    slug: 'michelob',
    title: 'Michelob Ultra Movement',
    role: 'Frontend Engineer & Design',
    category: 'engineering',
    featured: true,
    order: 3,
    client: 'Michelob Ultra',
    summary:
      'An always-on content platform for exclusive workouts, merch, and live events — with in-stream overlays, discount codes, and giveaways wired into the watching experience.',
    problem:
      'The brand needed a hub that felt like a product, not a campaign landing page: browse sessions, watch, redeem offers, and come back. The frontend had to compose marketing modules and a player without collapsing into a one-off microsite.',
    ownership:
      'Working with the lead developer, I led frontend implementation and interface design in Figma and Next.js — layout system, content modules, and the overlay/giveaway interactions.',
    architecture: [
      {
        title: 'RSVP state',
        detail:
          'Index is RSVP or welcome depending on registration. Lookup recovers a prior RSVP by email. Register and lookup are REST endpoints; production used Firebase + Sendgrid, the public demo uses fixture JSON.',
      },
      {
        title: 'App shell',
        detail:
          'After RSVP, Next.js-style routes for live, sessions, and merch share a layout so new drops do not require a new site.',
      },
      {
        title: 'Content modules',
        detail:
          'Workout cards, event blocks, and merch tiles are reusable. JSON drives what renders; the UI does not hard-code a single season.',
      },
      {
        title: 'In-stream layer',
        detail:
          'Clickable overlays, discount codes, and giveaway prompts sit above the player as a separate interaction layer so playback and CTAs do not fight each other.',
      },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Sass', 'Firebase', 'Sendgrid', 'GitHub Actions'],
    apis: ['POST /api/register', 'GET /api/lookup', 'Maestro account create (production)', 'Promo overlay config'],
    engineering:
      'The platform is a composition problem: keep the player stable while overlays, codes, and merch CTAs change per event. I treated overlays as UI, not burned-in video, so they could be timed, dismissed, and reused.',
    outcome:
      'A branded hub for workouts and live events that could take new sessions without rebuilding the front end. The public demo is a full RSVP → hub flow with fixture users, session stills, merch, and a player overlay.',
    demoUrl: '/demos/michelob',
    demoLabel: 'Launch platform demo',
    poster: `${r2}/MU_WebImage.png`,
    posterAlt: 'Michelob Ultra Movement platform screenshot',
    video: `${r2}/MICHELOB_BRANDED_CONTENT__Inno.mp4`,
  },
  {
    slug: 'bacardi',
    title: 'Casa Bacardi Live',
    role: 'Frontend Engineer & Design',
    category: 'engineering',
    featured: true,
    order: 4,
    client: 'Bacardi',
    summary:
      'Festival sweepstakes microsite plus interactive stream technology: clickable overlays, exclusive merch, a digital photobooth, and promo codes.',
    problem:
      'The live show needed a web layer that collected first-party entries and let remote viewers do something with the stream — shop, grab a code, or take a branded photo — without sending them into a dead-end landing page.',
    ownership:
      'I designed and built the microsite and the interactive stream surfaces in HTML, CSS, and JavaScript, including the photobooth experience and merch/overlay behaviors used during the broadcast.',
    architecture: [
      {
        title: 'Microsite',
        detail:
          'Responsive campaign site for event story, eligibility, and 1PD sweepstakes capture. Forms validate in the browser before they ever hit the list provider.',
      },
      {
        title: 'Overlay runtime',
        detail:
          'Timed, clickable lower-thirds over the player. Hits map to merch, codes, or photobooth rather than a single generic URL.',
      },
      {
        title: 'Photobooth',
        detail:
          'Canvas-based capture with a brand frame so shares stay on-campaign. The restored demo uses a local canvas pipeline — no uploads, no PII.',
      },
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas', 'RTMP / player overlay'],
    apis: ['Sweepstakes / list capture', 'Merch deep links', 'Promo-code config'],
    engineering:
      'Overlays have to survive player chrome, mobile viewports, and accidental clicks. The photobooth is a frontend feature: getUserMedia or file input, draw to canvas, composite a frame, export a PNG. The restored demo is a sanitized reconstruction of those surfaces from the original HTML — no live list writes.',
    outcome:
      'Remote viewers could enter, shop, redeem, and generate shareable photos from the same event property. Launch the restored microsite below.',
    demoUrl: '/demos/bacardi',
    demoLabel: 'Launch restored microsite',
    poster: `${r2}/Bacardi_web.png`,
    posterAlt: 'Casa Bacardi campaign website',
    video: `${r2}/bacardi_1.mp4`,
  },
  {
    slug: 'the-general',
    title: 'The General Sound Studio Live',
    role: 'Frontend Engineer & Design',
    category: 'engineering',
    featured: true,
    order: 5,
    client: 'The General',
    summary:
      'Ad tech that wrapped a live studio feed in a VAST-compliant unit for programmatic distribution, plus a 1PD sweepstakes landing page.',
    problem:
      'A live car-show studio feed had to run as an in-stream ad across consumer sites. That is a frontend and standards problem: VAST lifecycle, player behavior, and a sweepstakes page that could collect entries without a full app stack.',
    ownership:
      'I designed and built the landing page (HTML, CSS, JavaScript, Mailchimp as the list store) and worked the live-to-VAST distribution path so the same feed could traffic as a programmatic unit.',
    architecture: [
      {
        title: 'Live source',
        detail: 'Studio feed encoded for web playback and for the ad wrapper, not only for a branded site player.',
      },
      {
        title: 'VAST wrapper',
        detail:
          'The live stream is presented inside a VAST-compliant unit so demand-side platforms can request, track, and complete it like any other in-stream creative.',
      },
      {
        title: '1PD landing page',
        detail:
          'A campaign site collects sweepstakes entries. Client-side validation, then Mailchimp as the datastore — no custom backend required for this surface.',
      },
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'VAST', 'Mailchimp'],
    apis: ['Mailchimp list API', 'VAST tracking beacons'],
    engineering:
      'VAST is unforgiving: impression beacons, quartiles, and completion events have to fire even when the creative is a live stream instead of a 30-second file. On the site, the form is a standard async POST with validation and a done state. The restored demo never writes to Mailchimp.',
    outcome:
      'The live unit could run programmatically across consumer inventory, with a companion page for entries. This is the kind of browser/network work the listing calls engineering excellence — just in an ad-tech costume.',
    demoUrl: '/demos/the-general',
    demoLabel: 'Launch restored landing page',
    poster: `${r2}/TheGeneralWeb.png`,
    posterAlt: 'The General Sound Studio landing page',
    video: `${r2}/theGeneral.mp4`,
  },
  {
    slug: 'southwest',
    title: 'Southwest Airlines Hawaii Heartbeats',
    role: 'Frontend Engineer & Design',
    category: 'engineering',
    featured: true,
    order: 6,
    client: 'Southwest Airlines',
    summary:
      'A Hawaii-only microsite for Rapid Rewards signup and a sweepstakes tied to a Maui benefit concert — tickets, airfare, and hotel.',
    problem:
      'Entry had to be limited to Hawaii residents, collect first-party data, and still feel like the concert campaign rather than a generic form. Geo eligibility was a product rule, not a footnote.',
    ownership:
      'I designed the campaign graphic system and built the sweepstakes frontend in HTML, CSS, and JavaScript — layout, form flow, and the eligibility story on the page.',
    architecture: [
      {
        title: 'Geo-aware entry',
        detail:
          'Hawaii-only positioning and form fields made eligibility visible before submit. The frontend carried the campaign rule instead of hiding it in legal copy.',
      },
      {
        title: '1PD form',
        detail:
          'Rapid Rewards plus sweepstakes fields, validated in-browser, wired to the campaign list. Clear success and error states.',
      },
      {
        title: 'Campaign UI',
        detail:
          'Responsive page that held concert story, talent, and the prize without drowning the form — the actual conversion surface.',
      },
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    apis: ['Sweepstakes / list capture'],
    engineering:
      'Sweepstakes frontends fail on the boring details: required fields, mobile keyboards, and users who bounce when eligibility is a surprise. I kept the geo constraint in the UI and the form short enough to finish on a phone.',
    outcome:
      'Hawaii residents could create or use Rapid Rewards and enter for concert tickets, airfare, and a hotel stay. The concert at the Maui Arts & Cultural Center was the capstone; the site was the conversion layer. Original HTML is not public — walkthrough and stills only.',
    poster: `${r2}/southwest.mp4`,
    posterAlt: 'Southwest Hawaii Heartbeats campaign',
    video: `${r2}/southwest.mp4`,
  },
  {
    slug: 'abi',
    title: 'Anheuser-Busch Reventón de Verano',
    role: 'Frontend Engineer & Design',
    category: 'engineering',
    featured: true,
    order: 7,
    client: 'Anheuser-Busch',
    summary:
      'Interactive livestream tactics for a digital summer music festival: clickable overlays, realtime shareable moments, promo codes, and in-stream shopping.',
    problem:
      'A streamed festival is passive unless the player has a web interaction layer. Viewers needed a way to click what they saw — shop, copy a code, or grab a moment — while the show stayed live.',
    ownership:
      'I led graphic and interactive development: overlay design and the frontend behaviors that turned those graphics into hit-targets during the broadcast.',
    architecture: [
      {
        title: 'Player + overlay',
        detail:
          'HTML overlay stack sits on the livestream. Coordinates and timing are a frontend concern so clicks resolve to the current offer, not last night’s.',
      },
      {
        title: 'Engagement actions',
        detail:
          'Each overlay type had a job: merch, promo code, or a generated shareable from live content. One interaction model, several payloads.',
      },
      {
        title: 'Shareable output',
        detail:
          'Moments generated from the live show needed a predictable web result (image/text) so social share was a feature, not a screenshot workaround.',
      },
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'RTMP / player overlay'],
    apis: ['Merch / shop links', 'Promo-code config', 'Shareable generation'],
    engineering:
      'Hit-testing on a live player is a browser problem: scaling, letterboxing, and mobile tap targets. I built overlays as DOM, not baked video, so offers could change mid-show. No public demo — the original runtime was event-bound.',
    outcome:
      'The stream was a shoppable, shareable surface instead of a one-way broadcast. Supporting video shows the overlay language in context.',
    poster: `${r2}/reventonWeb.png`,
    posterAlt: 'Reventón de Verano interactive stream UI',
    video: `${r2}/reventon.mp4`,
  },
  {
    slug: 'greygoose',
    title: 'Grey Goose Essences — In Bloom',
    role: 'Interactive & motion',
    category: 'design',
    featured: false,
    order: 20,
    client: 'Grey Goose',
    summary:
      'Campaign motion, promo, and a WebAR concept using image recognition and QR — 8th Wall and three.js — as a loyalty engagement on-pack.',
    problem:
      'Extend a brand campaign past static ads into a phone-based AR moment tied to product.',
    ownership:
      'Motion, versioning, static ads, and the AR engagement concept.',
    architecture: [
      {
        title: 'WebAR',
        detail: '8th Wall + three.js, triggered via QR / image target. Listed here as interactive frontend, not as a full product case study.',
      },
    ],
    stack: ['8th Wall', 'three.js', 'After Effects'],
    engineering:
      'WebAR sits on the engineering side of this archive: browser-based 3D, camera permissions, and image targets. The rest of the engagement was campaign motion.',
    outcome: 'Two years of In Bloom campaign assets, plus an on-pack AR concept.',
    poster: `${r2}/GG_web.jpeg`,
    posterAlt: 'Grey Goose In Bloom campaign',
    video: `${r2}/greygoose.mp4`,
  },
  {
    slug: 'grubhub',
    title: 'Grubhub Soundbites',
    role: 'Design & frontend',
    category: 'design',
    featured: false,
    order: 21,
    client: 'Grubhub',
    summary:
      'Branded music program with landing pages and in-stream QR for loyalty — WordPress plus campaign motion.',
    problem: 'Give a multi-show music series a web home and a scan-to-engage loop during streams.',
    ownership: 'Landing pages, motion, and QR loyalty engagements.',
    architecture: [],
    stack: ['WordPress', 'HTML', 'CSS'],
    engineering: 'Campaign landing pages and QR flows rather than a long-lived app.',
    outcome: 'A series hub for shows and a scan path back to loyalty.',
    poster: `${r2}/GH_web.gif`,
    posterAlt: 'Grubhub Soundbites web',
    video: `${r2}/grubhub.mp4`,
  },
  {
    slug: 'saksNYC',
    title: 'Saks 95th Anniversary Carousel',
    role: 'Art direction',
    category: 'design',
    featured: false,
    order: 22,
    client: 'Saks Fifth Avenue',
    summary:
      'Physical activation and consumer journey for a luxury carousel experience with MasterCard in-store offers.',
    problem: 'Translate Saks verticals into a rideable, photographable NYC moment.',
    ownership: 'Art direction and user experience of the activation.',
    architecture: [],
    stack: ['Art direction', 'Consumer journey'],
    engineering: 'Physical experience — not a web product.',
    outcome: 'A high-visibility brand activation in New York.',
    poster: `${r2}/saks__work1-2x1-1.jpg`,
    posterAlt: 'Saks carousel activation',
    video: `${r2}/saks.mp4`,
  },
  {
    slug: 'tapped-beer-festival',
    title: 'Tapped Beer Festival',
    role: 'Brand design',
    category: 'design',
    featured: false,
    order: 23,
    summary: 'Identity, style guide, and merchandise for the inaugural event at Barclays Center.',
    problem: 'A new festival needed a complete visual system before doors.',
    ownership: 'Branding package with the team.',
    architecture: [],
    stack: ['Identity', 'Print', 'Merchandise'],
    engineering: 'Design system for a live event, not a software system.',
    outcome: 'A launch-ready brand for Brooklyn’s first Tapped.',
    video: `${r2}/Tapped_main.mp4`,
  },
  {
    slug: 'american-photo-magazine',
    title: 'American Photo Magazine',
    role: 'Editorial design',
    category: 'design',
    featured: false,
    order: 24,
    client: 'Bonnier Corp.',
    summary:
      'Print layout, production preflight, and digital issues published to Apple Books, working with the editor in chief.',
    problem: 'Ship two photo magazines on print and digital calendars without sacrificing craft.',
    ownership: 'Layout, preflight, and digital packaging.',
    architecture: [],
    stack: ['Editorial design', 'Digital publishing'],
    engineering: 'Digital editions as a packaging problem; the craft is editorial.',
    outcome: 'National print issues and Apple Books versions.',
    video: `${r2}/projects-AP.mp4`,
  },
  {
    slug: 'papa-johns-pizza',
    title: 'Papa Johns Pizza',
    role: 'Social content',
    category: 'design',
    featured: false,
    order: 25,
    client: 'Papa Johns',
    summary: 'Franchise-owner stories and seasonal social, including non-traditional holidays.',
    problem: 'Make a national food brand feel local without losing a content calendar.',
    ownership: 'Social creative with the creative director.',
    architecture: [],
    stack: ['Social', 'Motion'],
    engineering: 'Content production — archived here as design history.',
    outcome: 'A seasonal and story-driven social run.',
    video: `${r2}/projects-AP_1.mp4`,
  },
  {
    slug: 'kane-11-socks',
    title: 'Kane 11 Socks',
    role: 'Social content',
    category: 'design',
    featured: false,
    order: 26,
    summary: 'Launch social for a new sock brand.',
    problem: 'Introduce a new CPG brand with a small, sharp content set.',
    ownership: 'Social creative with the creative director.',
    architecture: [],
    stack: ['Social', 'Motion'],
    engineering: 'Content production.',
    outcome: 'A launch feed for Kane 11.',
    video: `${r2}/01.mp4`,
  },
];

export function getFeaturedProjects() {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);
}

export function getArchiveProjects() {
  return projects
    .filter((project) => !project.featured)
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects() {
  return projects;
}

export default projects;
