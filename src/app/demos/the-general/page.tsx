import type { Metadata } from 'next';
import DemoShell from '@/components/demos/DemoShell';
import SweepstakesForm from '@/components/demos/SweepstakesForm';
import VastPlayer from '@/components/demos/VastPlayer';

export const metadata: Metadata = {
  title: 'Demo — The General Sound Studio',
};

export default function TheGeneralDemoPage() {
  return (
    <DemoShell
      eyebrow="Restored microsite"
      title="The General Sound Studio Live"
      backHref="/projects/the-general"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <VastPlayer />
        <div>
          <h2 className="text-xl font-semibold">Enter to win</h2>
          <p className="mt-2 mb-6 text-sm text-zinc-400">
            Original surface: HTML/CSS/JS landing page with Mailchimp as the list store. This
            reconstruction keeps validation and the success state — it does not POST.
          </p>
          <SweepstakesForm />
        </div>
      </div>
    </DemoShell>
  );
}
