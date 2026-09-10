'use client';

import { KpiTable } from '@/components/KpiPreview';
import { useEffect, useState } from 'react';
import type { CampaignKpis } from '@/data/kpis';

export default function DashboardApp() {
  const [data, setData] = useState<CampaignKpis | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/kpis')
      .then(async (response) => {
        if (!response.ok) throw new Error('KPI request failed');
        return response.json() as Promise<CampaignKpis>;
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <p className="text-sm text-red-300" role="alert">
        {error}
      </p>
    );
  }

  if (!data) {
    return <p className="text-sm text-zinc-400">Fetching /api/kpis…</p>;
  }

  return (
    <div className="rounded-2xl border border-border bg-bg-elevated p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-accent">FT Live</p>
          <h2 className="text-2xl font-semibold">Campaign analytics</h2>
        </div>
        <p className="text-xs text-fg-muted">Mock JSON · no aggregator credentials</p>
      </div>
      <KpiTable data={data} />
    </div>
  );
}
