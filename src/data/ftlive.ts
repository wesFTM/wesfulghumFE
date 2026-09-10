export const platformColors = {
  youtube: '#C408E2',
  tiktok: '#092EF2',
  facebook: '#6A2DEB',
  instagram: '#1FD8B8',
  x: '#1E7BF6',
  dv360: '#EA12A1',
} as const;

export type PlatformId = keyof typeof platformColors;

export type PhaseId = 'live' | 'pre' | 'replay';

export type PlatformSlice = {
  id: PlatformId;
  name: string;
  impressions: number;
  views: number;
  reach: number;
  watchtimeSecs: number;
  videoCompletes: number;
  clicks: number;
  viewability: number;
  viewRate: number;
  viewThruRate: number;
  clickThruRate: number;
  videoCompletionRate: number;
};

export type TrendPoint = {
  date: string;
  impressions: number;
  views: number;
  reach: number;
};

export type Placement = {
  id: string;
  name: string;
  platform: PlatformId;
  phase: PhaseId;
  impressions: number;
  views: number;
  videoCompletionRate: number;
};

export type CampaignFixture = {
  id: string;
  name: string;
  brand: string;
  client: string;
  start: string;
  end: string;
  status: 'in-progress' | 'complete';
  updatedAt: string;
  estimates: {
    impressions: number;
    reach: number;
    views: number;
  };
  benchmarks: {
    viewability: number;
    videoCompletionRate: number;
    viewRate: number;
    viewThruRate: number;
    clickThruRate: number;
  };
  platforms: PlatformSlice[];
  trend: TrendPoint[];
  placements: Placement[];
};

const summerTrend: TrendPoint[] = [
  { date: '2025-07-18', impressions: 148200, views: 91200, reach: 70400 },
  { date: '2025-07-19', impressions: 162400, views: 100100, reach: 76800 },
  { date: '2025-07-20', impressions: 171800, views: 108400, reach: 81200 },
  { date: '2025-07-21', impressions: 188600, views: 119200, reach: 88600 },
  { date: '2025-07-22', impressions: 214900, views: 138800, reach: 99200 },
  { date: '2025-07-23', impressions: 256400, views: 168200, reach: 118400 },
  { date: '2025-07-24', impressions: 301200, views: 201600, reach: 136800 },
  { date: '2025-07-25', impressions: 278500, views: 184100, reach: 128200 },
  { date: '2025-07-26', impressions: 241800, views: 156400, reach: 112600 },
  { date: '2025-07-27', impressions: 229400, views: 149800, reach: 108200 },
  { date: '2025-07-28', impressions: 218700, views: 141200, reach: 103400 },
  { date: '2025-07-29', impressions: 252100, views: 167900, reach: 119800 },
  { date: '2025-07-30', impressions: 287600, views: 192400, reach: 131200 },
  { date: '2025-07-31', impressions: 268900, views: 179900, reach: 124800 },
];

const holidayTrend: TrendPoint[] = [
  { date: '2024-12-02', impressions: 98200, views: 54100, reach: 42800 },
  { date: '2024-12-03', impressions: 110400, views: 61200, reach: 47600 },
  { date: '2024-12-04', impressions: 121800, views: 68400, reach: 52200 },
  { date: '2024-12-05', impressions: 138200, views: 79200, reach: 58600 },
  { date: '2024-12-06', impressions: 164800, views: 96800, reach: 70400 },
  { date: '2024-12-07', impressions: 188400, views: 112600, reach: 81200 },
  { date: '2024-12-08', impressions: 176200, views: 104800, reach: 76800 },
  { date: '2024-12-09', impressions: 152600, views: 88600, reach: 66200 },
  { date: '2024-12-10', impressions: 141200, views: 81400, reach: 61400 },
  { date: '2024-12-11', impressions: 158900, views: 93200, reach: 68800 },
  { date: '2024-12-12', impressions: 172400, views: 101800, reach: 74200 },
  { date: '2024-12-13', impressions: 149800, views: 87600, reach: 65400 },
];

export const ftliveCampaigns: CampaignFixture[] = [
  {
    id: 'summer-live',
    name: 'Summer Live Series',
    brand: 'Northstar Audio',
    client: 'Horizon Media (demo)',
    start: '2025-07-18',
    end: '2025-08-08',
    status: 'in-progress',
    updatedAt: '2025-07-31T18:42:00.000Z',
    estimates: {
      impressions: 3_800_000,
      reach: 1_650_000,
      views: 2_400_000,
    },
    benchmarks: {
      viewability: 0.72,
      videoCompletionRate: 0.58,
      viewRate: 0.62,
      viewThruRate: 0.41,
      clickThruRate: 0.012,
    },
    platforms: [
      {
        id: 'youtube',
        name: 'YouTube',
        impressions: 1_182_400,
        views: 841_200,
        reach: 612_800,
        watchtimeSecs: 2_184_000,
        videoCompletes: 598_400,
        clicks: 12_480,
        viewability: 0.81,
        viewRate: 0.71,
        viewThruRate: 0.51,
        clickThruRate: 0.0106,
        videoCompletionRate: 0.71,
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        impressions: 784_200,
        views: 621_800,
        reach: 418_600,
        watchtimeSecs: 968_400,
        videoCompletes: 312_200,
        clicks: 18_240,
        viewability: 0.74,
        viewRate: 0.79,
        viewThruRate: 0.4,
        clickThruRate: 0.0233,
        videoCompletionRate: 0.5,
      },
      {
        id: 'facebook',
        name: 'Facebook',
        impressions: 421_600,
        views: 214_400,
        reach: 182_200,
        watchtimeSecs: 428_800,
        videoCompletes: 141_600,
        clicks: 4_180,
        viewability: 0.69,
        viewRate: 0.51,
        viewThruRate: 0.34,
        clickThruRate: 0.0099,
        videoCompletionRate: 0.66,
      },
      {
        id: 'instagram',
        name: 'Instagram',
        impressions: 318_400,
        views: 192_600,
        reach: 154_800,
        watchtimeSecs: 312_200,
        videoCompletes: 96_400,
        clicks: 3_840,
        viewability: 0.71,
        viewRate: 0.6,
        viewThruRate: 0.3,
        clickThruRate: 0.0121,
        videoCompletionRate: 0.5,
      },
      {
        id: 'x',
        name: 'X',
        impressions: 186_200,
        views: 64_800,
        reach: 54_400,
        watchtimeSecs: 92_400,
        videoCompletes: 22_800,
        clicks: 2_140,
        viewability: 0.58,
        viewRate: 0.35,
        viewThruRate: 0.12,
        clickThruRate: 0.0115,
        videoCompletionRate: 0.35,
      },
      {
        id: 'dv360',
        name: 'DV360',
        impressions: 288_600,
        views: 176_200,
        reach: 141_800,
        watchtimeSecs: 384_600,
        videoCompletes: 118_200,
        clicks: 1_920,
        viewability: 0.78,
        viewRate: 0.61,
        viewThruRate: 0.41,
        clickThruRate: 0.0067,
        videoCompletionRate: 0.67,
      },
    ],
    trend: summerTrend,
    placements: [
      {
        id: 'p1',
        name: 'YouTube Live — Main Stage',
        platform: 'youtube',
        phase: 'live',
        impressions: 642_800,
        views: 481_200,
        videoCompletionRate: 0.74,
      },
      {
        id: 'p2',
        name: 'TikTok Live Look-in',
        platform: 'tiktok',
        phase: 'live',
        impressions: 418_600,
        views: 338_400,
        videoCompletionRate: 0.52,
      },
      {
        id: 'p3',
        name: 'YouTube Pre-roll',
        platform: 'youtube',
        phase: 'pre',
        impressions: 312_400,
        views: 214_800,
        videoCompletionRate: 0.68,
      },
      {
        id: 'p4',
        name: 'DV360 Programmatic Live',
        platform: 'dv360',
        phase: 'live',
        impressions: 288_600,
        views: 176_200,
        videoCompletionRate: 0.67,
      },
      {
        id: 'p5',
        name: 'Instagram Stories Tune-in',
        platform: 'instagram',
        phase: 'pre',
        impressions: 198_200,
        views: 121_400,
        videoCompletionRate: 0.48,
      },
      {
        id: 'p6',
        name: 'Facebook Replay Cutdowns',
        platform: 'facebook',
        phase: 'replay',
        impressions: 186_400,
        views: 94_200,
        videoCompletionRate: 0.64,
      },
      {
        id: 'p7',
        name: 'X In-stream Promos',
        platform: 'x',
        phase: 'pre',
        impressions: 124_800,
        views: 41_200,
        videoCompletionRate: 0.32,
      },
      {
        id: 'p8',
        name: 'TikTok Replay Clips',
        platform: 'tiktok',
        phase: 'replay',
        impressions: 218_400,
        views: 168_200,
        videoCompletionRate: 0.47,
      },
    ],
  },
  {
    id: 'holiday-stream',
    name: 'Holiday Stream Week',
    brand: 'Harbor Athletic',
    client: 'Horizon Media (demo)',
    start: '2024-12-02',
    end: '2024-12-13',
    status: 'complete',
    updatedAt: '2024-12-14T09:18:00.000Z',
    estimates: {
      impressions: 2_100_000,
      reach: 920_000,
      views: 1_200_000,
    },
    benchmarks: {
      viewability: 0.7,
      videoCompletionRate: 0.55,
      viewRate: 0.58,
      viewThruRate: 0.38,
      clickThruRate: 0.01,
    },
    platforms: [
      {
        id: 'youtube',
        name: 'YouTube',
        impressions: 612_400,
        views: 401_200,
        reach: 288_600,
        watchtimeSecs: 1_142_000,
        videoCompletes: 268_400,
        clicks: 6_840,
        viewability: 0.79,
        viewRate: 0.66,
        viewThruRate: 0.44,
        clickThruRate: 0.0112,
        videoCompletionRate: 0.67,
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        impressions: 498_200,
        views: 364_800,
        reach: 241_200,
        watchtimeSecs: 612_400,
        videoCompletes: 168_200,
        clicks: 11_240,
        viewability: 0.72,
        viewRate: 0.73,
        viewThruRate: 0.34,
        clickThruRate: 0.0226,
        videoCompletionRate: 0.46,
      },
      {
        id: 'instagram',
        name: 'Instagram',
        impressions: 286_400,
        views: 168_200,
        reach: 132_800,
        watchtimeSecs: 248_600,
        videoCompletes: 78_400,
        clicks: 3_120,
        viewability: 0.68,
        viewRate: 0.59,
        viewThruRate: 0.27,
        clickThruRate: 0.0109,
        videoCompletionRate: 0.47,
      },
      {
        id: 'facebook',
        name: 'Facebook',
        impressions: 214_800,
        views: 98_400,
        reach: 86_200,
        watchtimeSecs: 186_400,
        videoCompletes: 62_800,
        clicks: 1_840,
        viewability: 0.66,
        viewRate: 0.46,
        viewThruRate: 0.29,
        clickThruRate: 0.0086,
        videoCompletionRate: 0.64,
      },
      {
        id: 'dv360',
        name: 'DV360',
        impressions: 162_200,
        views: 94_600,
        reach: 78_400,
        watchtimeSecs: 198_200,
        videoCompletes: 61_200,
        clicks: 980,
        viewability: 0.76,
        viewRate: 0.58,
        viewThruRate: 0.38,
        clickThruRate: 0.006,
        videoCompletionRate: 0.65,
      },
    ],
    trend: holidayTrend,
    placements: [
      {
        id: 'h1',
        name: 'YouTube Live — Studio',
        platform: 'youtube',
        phase: 'live',
        impressions: 348_200,
        views: 241_800,
        videoCompletionRate: 0.7,
      },
      {
        id: 'h2',
        name: 'TikTok Countdown',
        platform: 'tiktok',
        phase: 'pre',
        impressions: 214_600,
        views: 158_400,
        videoCompletionRate: 0.44,
      },
      {
        id: 'h3',
        name: 'YouTube Replay',
        platform: 'youtube',
        phase: 'replay',
        impressions: 186_400,
        views: 112_200,
        videoCompletionRate: 0.62,
      },
      {
        id: 'h4',
        name: 'Instagram Live Look-in',
        platform: 'instagram',
        phase: 'live',
        impressions: 168_200,
        views: 102_400,
        videoCompletionRate: 0.49,
      },
      {
        id: 'h5',
        name: 'DV360 VAST Wrapper',
        platform: 'dv360',
        phase: 'live',
        impressions: 162_200,
        views: 94_600,
        videoCompletionRate: 0.65,
      },
      {
        id: 'h6',
        name: 'Facebook Highlight Pack',
        platform: 'facebook',
        phase: 'replay',
        impressions: 128_400,
        views: 58_200,
        videoCompletionRate: 0.61,
      },
    ],
  },
];

export type CampaignTotals = {
  impressions: number;
  views: number;
  reach: number;
  watchtimeSecs: number;
  videoCompletes: number;
  clicks: number;
  viewability: number;
  viewRate: number;
  viewThruRate: number;
  clickThruRate: number;
  videoCompletionRate: number;
};

export function sumPlatforms(platforms: PlatformSlice[]): CampaignTotals {
  const impressions = platforms.reduce((sum, item) => sum + item.impressions, 0);
  const views = platforms.reduce((sum, item) => sum + item.views, 0);
  const reach = platforms.reduce((sum, item) => sum + item.reach, 0);
  const watchtimeSecs = platforms.reduce((sum, item) => sum + item.watchtimeSecs, 0);
  const videoCompletes = platforms.reduce((sum, item) => sum + item.videoCompletes, 0);
  const clicks = platforms.reduce((sum, item) => sum + item.clicks, 0);
  const weight = impressions || 1;

  return {
    impressions,
    views,
    reach,
    watchtimeSecs,
    videoCompletes,
    clicks,
    viewability: platforms.reduce((sum, item) => sum + item.viewability * item.impressions, 0) / weight,
    viewRate: impressions ? views / impressions : 0,
    viewThruRate: views ? videoCompletes / views : 0,
    clickThruRate: impressions ? clicks / impressions : 0,
    videoCompletionRate: views ? videoCompletes / views : 0,
  };
}
