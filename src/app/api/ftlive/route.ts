import { NextResponse } from 'next/server';
import { ftliveCampaigns } from '@/data/ftlive';

export async function GET() {
  return NextResponse.json(
    { campaigns: ftliveCampaigns },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  );
}
