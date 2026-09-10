import type { Metadata } from 'next';
import DemoShell from '@/components/demos/DemoShell';
import DashboardApp from '@/components/demos/DashboardApp';

export const metadata: Metadata = {
  title: 'Demo — FT Live Analytics',
};

export default function FtLiveDemoPage() {
  return (
    <DemoShell
      eyebrow="Mock dashboard"
      title="FT Live Analytics"
      backHref="/projects/ftlive"
      theme="light"
      note="Sanitized UI with fixture JSON from GET /api/kpis. No aggregator credentials."
    >
      <DashboardApp />
    </DemoShell>
  );
}
