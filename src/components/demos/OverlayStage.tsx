'use client';

import { useState } from 'react';

const overlays = [
  { id: 'shop', label: 'Shop the drop', x: '12%', y: '72%' },
  { id: 'code', label: 'Grab code', x: '58%', y: '18%' },
  { id: 'booth', label: 'Photobooth', x: '70%', y: '68%' },
];

export default function OverlayStage({ onSelect }: { onSelect: (id: string) => void }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-emerald-950 via-black to-zinc-900">
      <p className="absolute left-4 top-4 text-xs uppercase tracking-[0.18em] text-white/50">
        Live player
      </p>
      {overlays.map((overlay) => (
        <button
          key={overlay.id}
          type="button"
          onClick={() => {
            setActive(overlay.id);
            onSelect(overlay.id);
          }}
          className={`absolute rounded-md border px-3 py-1.5 text-xs font-semibold backdrop-blur ${
            active === overlay.id
              ? 'border-emerald-300 bg-emerald-400 text-black'
              : 'border-white/30 bg-black/50 text-white hover:bg-black/70'
          }`}
          style={{ left: overlay.x, top: overlay.y }}
        >
          {overlay.label}
        </button>
      ))}
    </div>
  );
}
