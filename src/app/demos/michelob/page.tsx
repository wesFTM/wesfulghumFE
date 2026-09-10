import type { Metadata } from 'next';
import DemoShell from '@/components/demos/DemoShell';
import MovementPlatform from '@/components/demos/MovementPlatform';

export const metadata: Metadata = {
  title: 'Demo — Michelob Ultra Movement',
};

export default function MichelobDemoPage() {
  return (
    <DemoShell
      eyebrow="Sanitized platform UI"
      title="Movement Live"
      backHref="/projects/michelob"
      theme="light"
      note="Mock sessions and overlay chrome. Not the production Michelob app."
    >
      <MovementPlatform />
    </DemoShell>
  );
}
