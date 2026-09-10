'use client';

import { useState } from 'react';
import OverlayStage from '@/components/demos/OverlayStage';
import PhotoBooth from '@/components/demos/PhotoBooth';
import MerchGrid from '@/components/demos/MerchGrid';
import PromoCode from '@/components/demos/PromoCode';
import SweepstakesForm from '@/components/demos/SweepstakesForm';

const tabs = [
  { id: 'watch', label: 'Watch' },
  { id: 'enter', label: 'Enter' },
  { id: 'shop', label: 'Merch' },
  { id: 'booth', label: 'Photobooth' },
] as const;

type Tab = (typeof tabs)[number]['id'];

export default function BacardiExperience() {
  const [tab, setTab] = useState<Tab>('watch');
  const [overlayMsg, setOverlayMsg] = useState('Click an overlay on the player.');

  function onOverlay(id: string) {
    if (id === 'shop') {
      setTab('shop');
      setOverlayMsg('Overlay routed to merch.');
    } else if (id === 'booth') {
      setTab('booth');
      setOverlayMsg('Overlay routed to photobooth.');
    } else {
      setOverlayMsg('Promo overlay fired — code is ready to copy.');
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={`rounded-full px-4 py-2 text-sm ${
              tab === item.id ? 'bg-emerald-400 text-black' : 'bg-white/10 text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tab === 'watch' && (
        <div className="space-y-4">
          <OverlayStage onSelect={onOverlay} />
          <p className="text-sm text-zinc-400">{overlayMsg}</p>
          <PromoCode code="CASA-LIVE" />
        </div>
      )}
      {tab === 'enter' && (
        <div className="max-w-md">
          <SweepstakesForm submitLabel="Enter festival sweeps" />
        </div>
      )}
      {tab === 'shop' && <MerchGrid />}
      {tab === 'booth' && <PhotoBooth />}
    </div>
  );
}
