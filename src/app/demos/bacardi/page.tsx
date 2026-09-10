import type { Metadata } from 'next';
import DemoShell from '@/components/demos/DemoShell';
import BacardiExperience from '@/components/demos/BacardiExperience';

export const metadata: Metadata = {
  title: 'Demo — Casa Bacardi Live',
};

export default function BacardiDemoPage() {
  return (
    <DemoShell
      eyebrow="Restored microsite"
      title="Casa Bacardi Live"
      backHref="/projects/bacardi"
    >
      <BacardiExperience />
    </DemoShell>
  );
}
