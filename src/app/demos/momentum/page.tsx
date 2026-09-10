import type { Metadata } from 'next';
import DemoShell from '@/components/demos/DemoShell';
import MomentumApp from '@/components/demos/MomentumApp';

export const metadata: Metadata = {
  title: 'Demo — Live music application patterns',
};

export default function MomentumDemoPage() {
  return (
    <DemoShell
      eyebrow="NDA-safe pattern demo"
      title="Live music application"
      backHref="/projects/momentum"
      theme="light"
      note="Architecture only: auth, Context, forms, media shell. No product name, branding, or production APIs."
    >
      <MomentumApp />
    </DemoShell>
  );
}
