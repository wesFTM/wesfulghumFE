import type { Metadata } from 'next';
import FtLiveApp from '@/components/demos/FtLiveApp';

export const metadata: Metadata = {
  title: 'Demo — FT Live Analytics',
};

export default function FtLiveDemoPage() {
  return <FtLiveApp />;
}
