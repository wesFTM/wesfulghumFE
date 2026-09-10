import { NextResponse } from 'next/server';
import { mockKpis } from '@/data/kpis';

export async function GET() {
  return NextResponse.json(mockKpis, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}
