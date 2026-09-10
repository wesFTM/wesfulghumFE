export const site = {
  name: 'Wes Fulghum',
  title: 'Frontend Engineer',
  location: 'New York City',
  email: 'wfulghum@gmail.com',
  github: 'https://github.com/wesFTM',
  githubRepo: 'https://github.com/wesFTM/wesfulghumFE',
  linkedin: 'https://www.linkedin.com/in/wes-fulghum-a3045273/',
  resumePdf: '/WesleyFulghumResume2025.pdf',
  domain: 'https://wesfulghum.com',
  pitch:
    'I build production web apps and interactive media systems for brands — campaign platforms, first-party data microsites, and in-stream engagement. Previously at First Tube / Horizon Media.',
  supporting:
    'I also design the interfaces I ship, so designer–engineer handoff stays tight.',
} as const;

export const stackChips = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'REST APIs',
  'AWS',
  'Git',
] as const;

export const howIWork = [
  {
    title: 'Component architecture',
    body: 'Reusable, typed UI that can survive more than one campaign. Shared primitives, clear ownership boundaries, and layouts that scale from microsites to platforms.',
  },
  {
    title: 'API integration',
    body: 'REST and complex JSON modeled into views people can actually use — dashboards, forms, overlays, and merch flows — with loading, empty, and error states treated as part of the product.',
  },
  {
    title: 'Performance & debugging',
    body: 'Interactive video, VAST, and live overlays mean real browser and network work: autoplay policies, CORS, mobile Safari, ad-blocked environments, and player lifecycle.',
  },
  {
    title: 'Delivery',
    body: 'Git branching, pull requests, and reviews with lead engineers. Agile cycles with product, brand, and backend. Deploys on Vercel and AWS-backed campaign infrastructure.',
  },
] as const;
