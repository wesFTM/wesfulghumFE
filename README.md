# Wes Fulghum — Frontend Portfolio

Preview repo for the frontend engineer site. The live domain still points at [`wesFTM/newPortfolio`](https://github.com/wesFTM/newPortfolio) until this is promoted.

This is a **Next.js 15 App Router** app in **TypeScript** and **Tailwind CSS**. It is both the portfolio and a work sample — server components by default, a small UI kit, typed content, and live demos that fetch a fixture REST endpoint.

## Stack

- Next.js 15 (App Router, Server Components)
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel

## Architecture

```
src/
  app/
    (portfolio)/     Site chrome: home, about, archive, resume, case studies
    demos/           Restored / sanitized interactive demos
    api/kpis/        Fixture REST JSON for the analytics case-study widget
    api/ftlive/      Fixture REST JSON for the FT Live dashboard demo
    api/movement/    Fixture REST JSON for the Movement Live RSVP/hub demo
  components/
    ui/              Button, Tag, Container
    demos/           Demo-only clients (forms, canvas photobooth, overlays)
  data/              Typed project model, site constants, KPI fixture
```

Case studies live in [`src/data/projects.ts`](src/data/projects.ts). Featured work is engineering; design/motion is under `/archive`.

## Demos

| Route | What it shows |
| --- | --- |
| `/demos/the-general` | VAST player shell + validated 1PD form (no list writes) |
| `/demos/bacardi` | Overlays, merch modal, canvas photobooth, sweeps form |
| `/demos/ftlive` | Campaign analytics dashboard consuming `GET /api/ftlive` |
| `/demos/michelob` | Movement Live RSVP, lookup, sessions, merch, player overlay (`GET/POST /api/movement`) |
| `/demos/momentum` | NDA-safe patterns: Context auth, forms, media state |

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run lint
```

## GitHub

- This preview repo: [github.com/wesFTM/wesfulghumFE](https://github.com/wesFTM/wesfulghumFE)
- Live site repo (unchanged): [github.com/wesFTM/newPortfolio](https://github.com/wesFTM/newPortfolio)
- Profile: [github.com/wesFTM](https://github.com/wesFTM)
