import type { Metadata } from 'next';
import MovementLiveApp from '@/components/demos/MovementLiveApp';

export const metadata: Metadata = {
  title: 'Demo — Michelob Ultra Movement Live',
};

export default function MichelobDemoPage() {
  return <MovementLiveApp />;
}
