'use client';

import { useEffect, useState } from 'react';
import Container from '@/components/ui/Container';
import {
  formatCompact,
  formatCurrency,
  formatPercent,
  type CampaignKpis,
} from '@/data/kpis';

export default function KpiPreview() {
  const [data, setData] = useState<CampaignKpis | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/kpis')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Could not load KPIs');
        }
        return response.json() as Promise<CampaignKpis>;
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Request failed');
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Container className="pb-20">
      <div className="rounded-xl border border-border bg-bg-elevated p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          Live JSON widget
        </p>
        <p className="mt-2 text-sm text-fg-muted">
          This block fetches <code className="text-fg">GET /api/kpis</code> — a fixture that stands in
          for aggregator REST. No production credentials.
        </p>
        {error && (
          <p className="mt-4 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}
        {!data && !error && <p className="mt-4 text-sm text-fg-muted">Loading campaign KPIs…</p>}
        {data && <KpiTable data={data} />}
      </div>
    </Container>
  );
}

export function KpiTable({ data }: { data: CampaignKpis }) {
  const maxImpressions = Math.max(...data.platforms.map((p) => p.impressions));

  return (
    <div className="mt-6">
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Impressions" value={formatCompact(data.impressions)} />
        <Stat label="Completion" value={formatPercent(data.completions)} />
        <Stat label="Engagement" value={formatPercent(data.engagementRate)} />
      </div>
      <p className="mt-6 text-xs text-fg-muted">
        {data.campaign} · updated {new Date(data.updatedAt).toLocaleString('en-US')}
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wide text-fg-muted">
              <th className="py-2 pr-3 font-medium">Platform</th>
              <th className="py-2 pr-3 font-medium">Impressions</th>
              <th className="py-2 pr-3 font-medium">Engagements</th>
              <th className="py-2 pr-3 font-medium">Completion</th>
              <th className="py-2 font-medium">Spend</th>
            </tr>
          </thead>
          <tbody>
            {data.platforms.map((platform) => (
              <tr key={platform.id} className="border-b border-border/70">
                <td className="py-3 pr-3">
                  <span className="font-medium">{platform.name}</span>
                  <span
                    className="mt-1 block h-1.5 max-w-40 rounded-full bg-accent-soft"
                    aria-hidden
                  >
                    <span
                      className="block h-1.5 rounded-full bg-accent"
                      style={{
                        width: `${Math.round((platform.impressions / maxImpressions) * 100)}%`,
                      }}
                    />
                  </span>
                </td>
                <td className="py-3 pr-3 tabular-nums">{formatCompact(platform.impressions)}</td>
                <td className="py-3 pr-3 tabular-nums">{formatCompact(platform.engagements)}</td>
                <td className="py-3 pr-3 tabular-nums">{formatPercent(platform.completionRate)}</td>
                <td className="py-3 tabular-nums">{formatCurrency(platform.spend)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <p className="text-xs uppercase tracking-wide text-fg-muted">{label}</p>
      <p className="mt-1 text-2xl font-semibold tabular-nums">{value}</p>
    </div>
  );
}
