export type PlatformKpi = {
  id: string;
  name: string;
  impressions: number;
  engagements: number;
  completionRate: number;
  spend: number;
};

export type CampaignKpis = {
  campaign: string;
  updatedAt: string;
  impressions: number;
  completions: number;
  engagementRate: number;
  platforms: PlatformKpi[];
};

export const mockKpis: CampaignKpis = {
  campaign: 'Sample live campaign (anonymized)',
  updatedAt: '2025-05-14T18:42:00.000Z',
  impressions: 2_412_880,
  completions: 0.64,
  engagementRate: 0.081,
  platforms: [
    {
      id: 'yt',
      name: 'YouTube',
      impressions: 980_120,
      engagements: 74_200,
      completionRate: 0.71,
      spend: 42_500,
    },
    {
      id: 'tt',
      name: 'TikTok',
      impressions: 640_340,
      engagements: 81_110,
      completionRate: 0.58,
      spend: 28_900,
    },
    {
      id: 'meta',
      name: 'Meta',
      impressions: 410_200,
      engagements: 22_440,
      completionRate: 0.62,
      spend: 19_750,
    },
    {
      id: 'x',
      name: 'X',
      impressions: 210_020,
      engagements: 9_880,
      completionRate: 0.44,
      spend: 8_200,
    },
    {
      id: 'dv360',
      name: 'DV360',
      impressions: 172_200,
      engagements: 6_410,
      completionRate: 0.67,
      spend: 15_400,
    },
  ],
};

export function formatCompact(value: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatPercent(value: number) {
  return `${Math.round(value * 100)}%`;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}
