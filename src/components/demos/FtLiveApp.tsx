'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  platformColors,
  sumPlatforms,
  type CampaignFixture,
  type PhaseId,
  type PlatformId,
  type PlatformSlice,
} from '@/data/ftlive';
import { formatCompact, formatPercent } from '@/data/kpis';

type Payload = { campaigns: CampaignFixture[] };

const phases: { id: 'all' | PhaseId; label: string }[] = [
  { id: 'all', label: 'All phases' },
  { id: 'pre', label: 'Pre-event' },
  { id: 'live', label: 'Live' },
  { id: 'replay', label: 'Replay' },
];

export default function FtLiveApp() {
  const [payload, setPayload] = useState<Payload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [campaignId, setCampaignId] = useState<string>('');
  const [platform, setPlatform] = useState<'all' | PlatformId>('all');
  const [phase, setPhase] = useState<'all' | PhaseId>('all');

  useEffect(() => {
    let cancelled = false;
    fetch('/api/ftlive')
      .then(async (response) => {
        if (!response.ok) throw new Error('Could not load campaign analytics');
        return response.json() as Promise<Payload>;
      })
      .then((json) => {
        if (cancelled) return;
        setPayload(json);
        setCampaignId(json.campaigns[0]?.id ?? '');
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const campaign = payload?.campaigns.find((item) => item.id === campaignId) ?? payload?.campaigns[0];

  const platforms = useMemo(() => {
    if (!campaign) return [];
    return platform === 'all'
      ? campaign.platforms
      : campaign.platforms.filter((item) => item.id === platform);
  }, [campaign, platform]);

  const placements = useMemo(() => {
    if (!campaign) return [];
    return campaign.placements.filter((item) => {
      const platformOk = platform === 'all' || item.platform === platform;
      const phaseOk = phase === 'all' || item.phase === phase;
      return platformOk && phaseOk;
    });
  }, [campaign, platform, phase]);

  const totals = useMemo(() => {
    const base = sumPlatforms(platforms);
    if (!campaign || phase === 'all') return base;
    const scoped = campaign.placements.filter(
      (item) => platform === 'all' || item.platform === platform,
    );
    const allImpressions = scoped.reduce((sum, item) => sum + item.impressions, 0);
    const filteredImpressions = scoped
      .filter((item) => item.phase === phase)
      .reduce((sum, item) => sum + item.impressions, 0);
    const scale = allImpressions ? filteredImpressions / allImpressions : 1;
    return {
      ...base,
      impressions: Math.round(base.impressions * scale),
      views: Math.round(base.views * scale),
      reach: Math.round(base.reach * scale),
      watchtimeSecs: Math.round(base.watchtimeSecs * scale),
      videoCompletes: Math.round(base.videoCompletes * scale),
      clicks: Math.round(base.clicks * scale),
    };
  }, [campaign, platforms, platform, phase]);

  if (error) {
    return (
      <p className="p-8 text-sm text-red-300" role="alert">
        {error}
      </p>
    );
  }

  if (!campaign) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#100a17] text-sm text-violet-200">
        Loading campaign analytics…
      </div>
    );
  }

  const platformOptions: { id: 'all' | PlatformId; label: string }[] = [
    { id: 'all', label: 'All platforms' },
    ...campaign.platforms.map((item) => ({ id: item.id, label: item.name })),
  ];

  return (
    <div className="min-h-screen bg-[#100a17] text-white">
      <div className="border-b border-white/10 bg-[#1e1626]/90 px-4 py-2.5 text-xs text-violet-200">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2">
          <p>Portfolio demo · fixture JSON from GET /api/ftlive · no aggregator credentials</p>
          <Link href="/projects/ftlive" className="underline underline-offset-4 hover:text-white">
            Back to case study
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px]">
        <aside className="hidden w-56 shrink-0 border-r border-white/10 px-4 py-8 md:block">
          <p className="text-lg font-semibold tracking-tight">FT Live</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-violet-300">Analytics</p>
          <nav className="mt-10 space-y-1 text-sm">
            <span className="block rounded-lg bg-violet-600/30 px-3 py-2 font-medium text-white">
              Campaign analytics
            </span>
            <span className="block px-3 py-2 text-violet-300">Live stats</span>
            <span className="block px-3 py-2 text-violet-300">Insights</span>
            <span className="block px-3 py-2 text-violet-300">Media plan</span>
          </nav>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-8 md:px-8">
          <header className="rounded-xl bg-gradient-to-br from-[#2a1d3d] to-[#1e1626] p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-light text-violet-200">Now viewing</p>
                <h1 className="mt-1 text-3xl font-semibold tracking-tight">{campaign.name}</h1>
                <p className="mt-2 text-sm text-violet-200">
                  {campaign.brand} · {campaign.client}
                </p>
                <p className="mt-1 text-xs text-violet-300">
                  {formatDate(campaign.start)} – {formatDate(campaign.end)} · updated{' '}
                  {new Date(campaign.updatedAt).toLocaleString('en-US')}
                </p>
              </div>
              <StatusPill status={campaign.status} />
            </div>
            <div className="mt-6">
              <label className="text-xs uppercase tracking-wide text-violet-300" htmlFor="campaign">
                Campaign
              </label>
              <select
                id="campaign"
                className="mt-1 w-full max-w-md rounded-lg border border-violet-500/60 bg-[#100a17] px-3 py-2 text-sm"
                value={campaign.id}
                onChange={(event) => {
                  setCampaignId(event.target.value);
                  setPlatform('all');
                  setPhase('all');
                }}
              >
                {payload?.campaigns.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </header>

          <section className="mt-10">
            <h2 className="text-2xl font-bold">Campaign summary</h2>
            <div className="mt-3 h-1 w-full bg-[#841ECF]" />
            <div className="mt-4 flex flex-wrap gap-2">
              <FilterGroup
                label="Phase"
                value={phase}
                options={phases}
                onChange={(value) => setPhase(value as 'all' | PhaseId)}
              />
              <FilterGroup
                label="Platform"
                value={platform}
                options={platformOptions}
                onChange={(value) => setPlatform(value as 'all' | PlatformId)}
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <StatCard
                title="Impressions"
                value={formatCompact(totals.impressions)}
                estimate={`Est. ${formatCompact(campaign.estimates.impressions)}`}
              />
              <StatCard
                title="Viewability"
                value={formatPercent(totals.viewability)}
                estimate={`Bench ${formatPercent(campaign.benchmarks.viewability)}`}
              />
              <StatCard
                title="Reach"
                value={formatCompact(totals.reach)}
                estimate={`Est. ${formatCompact(campaign.estimates.reach)}`}
              />
              <StatCard
                title="Views"
                value={formatCompact(totals.views)}
                estimate={`Est. ${formatCompact(campaign.estimates.views)}`}
              />
              <StatCard title="Video completes" value={formatCompact(totals.videoCompletes)} />
              <StatCard
                title="Video completion rate"
                value={formatPercent(totals.videoCompletionRate)}
                estimate={`Bench ${formatPercent(campaign.benchmarks.videoCompletionRate)}`}
              />
              <StatCard title="Watchtime" value={`${formatCompact(totals.watchtimeSecs)} sec`} />
              <StatCard
                title="View rate"
                value={formatPercent(totals.viewRate)}
                estimate={`Bench ${formatPercent(campaign.benchmarks.viewRate)}`}
              />
              <StatCard
                title="View through rate"
                value={formatPercent(totals.viewThruRate)}
                estimate={`Bench ${formatPercent(campaign.benchmarks.viewThruRate)}`}
              />
              <StatCard title="Clicks" value={totals.clicks.toLocaleString('en-US')} />
              <StatCard
                title="Click through rate"
                value={`${(totals.clickThruRate * 100).toFixed(2)}%`}
                estimate={`Bench ${(campaign.benchmarks.clickThruRate * 100).toFixed(2)}%`}
              />
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-violet-600 p-6">
            <h3 className="text-lg font-semibold">Delivery over time</h3>
            <p className="mt-1 text-xs text-violet-300">Impressions · views · reach</p>
            <TrendChart points={campaign.trend} />
          </section>

          <section className="mt-6 rounded-2xl border border-violet-600 p-6">
            <h3 className="text-lg font-semibold">By platform</h3>
            <PlatformBars platforms={platforms} />
          </section>

          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <RatePanel
              heading="View through rate by platform"
              platforms={platforms}
              valueKey="viewThruRate"
            />
            <RatePanel heading="View rate by platform" platforms={platforms} valueKey="viewRate" />
          </section>

          <section className="mt-10">
            <h3 className="text-lg font-semibold">Placements by performance</h3>
            {placements.length === 0 ? (
              <p className="mt-4 text-sm text-violet-300">No placements match these filters.</p>
            ) : (
              <div className="mt-4 overflow-x-auto rounded-2xl border border-violet-600">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-violet-300">
                      <th className="px-4 py-3 font-medium">Placement</th>
                      <th className="px-4 py-3 font-medium">Platform</th>
                      <th className="px-4 py-3 font-medium">Phase</th>
                      <th className="px-4 py-3 font-medium">Impressions</th>
                      <th className="px-4 py-3 font-medium">Views</th>
                      <th className="px-4 py-3 font-medium">VCR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placements
                      .slice()
                      .sort((a, b) => b.impressions - a.impressions)
                      .map((item) => (
                        <tr key={item.id} className="border-b border-white/5">
                          <td className="px-4 py-3 font-medium">{item.name}</td>
                          <td className="px-4 py-3">
                            <span
                              className="mr-2 inline-block h-2 w-2 rounded-full"
                              style={{ background: platformColors[item.platform] }}
                            />
                            {labelPlatform(item.platform)}
                          </td>
                          <td className="px-4 py-3 capitalize">{item.phase === 'pre' ? 'Pre-event' : item.phase}</td>
                          <td className="px-4 py-3 tabular-nums">{formatCompact(item.impressions)}</td>
                          <td className="px-4 py-3 tabular-nums">{formatCompact(item.views)}</td>
                          <td className="px-4 py-3 tabular-nums">{formatPercent(item.videoCompletionRate)}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { id: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="mb-1 text-[11px] uppercase tracking-wide text-violet-300">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={
              option.id === value
                ? 'rounded-full bg-[#841ECF] px-3 py-1 text-xs font-medium'
                : 'rounded-full border border-violet-500/50 px-3 py-1 text-xs text-violet-200 hover:border-violet-300'
            }
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  estimate,
}: {
  title: string;
  value: string;
  estimate?: string;
}) {
  return (
    <div className="rounded-2xl border border-violet-600 bg-gradient-to-br from-[#2a1d3d] to-[#16101f] p-4">
      <p className="text-[11px] font-bold uppercase tracking-wide text-violet-200">{title}</p>
      <p className="mt-3 text-2xl font-semibold tabular-nums md:text-3xl">{value}</p>
      {estimate ? <p className="mt-2 text-xs text-violet-300">{estimate}</p> : null}
    </div>
  );
}

function StatusPill({ status }: { status: CampaignFixture['status'] }) {
  const live = status === 'in-progress';
  return (
    <span
      className={
        live
          ? 'rounded-full bg-[#6ACE06]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#6ACE06]'
          : 'rounded-full bg-[#EF14A5]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#EF14A5]'
      }
    >
      {live ? 'In progress' : 'Complete'}
    </span>
  );
}

function TrendChart({ points }: { points: CampaignFixture['trend'] }) {
  const max = Math.max(...points.map((point) => point.impressions));
  return (
    <div className="mt-6 flex h-48 items-end gap-1.5">
      {points.map((point) => (
        <div key={point.date} className="flex min-w-0 flex-1 flex-col items-center gap-1">
          <div className="flex h-40 w-full items-end justify-center gap-0.5">
            <span
              className="w-1/3 rounded-t bg-[#C408E2]"
              style={{ height: `${Math.max(8, (point.impressions / max) * 100)}%` }}
              title={`Impressions ${formatCompact(point.impressions)}`}
            />
            <span
              className="w-1/3 rounded-t bg-[#1FD8B8]"
              style={{ height: `${Math.max(6, (point.views / max) * 100)}%` }}
              title={`Views ${formatCompact(point.views)}`}
            />
            <span
              className="w-1/3 rounded-t bg-[#1E7BF6]"
              style={{ height: `${Math.max(4, (point.reach / max) * 100)}%` }}
              title={`Reach ${formatCompact(point.reach)}`}
            />
          </div>
          <span className="text-[10px] text-violet-300">
            {new Date(point.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
        </div>
      ))}
    </div>
  );
}

function PlatformBars({ platforms }: { platforms: PlatformSlice[] }) {
  const max = Math.max(...platforms.map((item) => item.impressions), 1);
  return (
    <ul className="mt-6 space-y-3">
      {platforms.map((item) => (
        <li key={item.id}>
          <div className="mb-1 flex justify-between text-sm">
            <span>{item.name}</span>
            <span className="tabular-nums text-violet-200">{formatCompact(item.impressions)}</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.round((item.impressions / max) * 100)}%`,
                background: platformColors[item.id],
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

function RatePanel({
  heading,
  platforms,
  valueKey,
}: {
  heading: string;
  platforms: PlatformSlice[];
  valueKey: 'viewThruRate' | 'viewRate';
}) {
  return (
    <div className="rounded-2xl border border-violet-600 p-6">
      <h3 className="text-lg font-semibold">{heading}</h3>
      <ul className="mt-5 space-y-3">
        {platforms.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-sm">{item.name}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.round(item[valueKey] * 100)}%`,
                  background: platformColors[item.id],
                }}
              />
            </div>
            <span className="w-12 text-right text-sm tabular-nums">{formatPercent(item[valueKey])}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatDate(value: string) {
  return new Date(`${value}T12:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function labelPlatform(id: PlatformId) {
  const names: Record<PlatformId, string> = {
    youtube: 'YouTube',
    tiktok: 'TikTok',
    facebook: 'Facebook',
    instagram: 'Instagram',
    x: 'X',
    dv360: 'DV360',
  };
  return names[id];
}
