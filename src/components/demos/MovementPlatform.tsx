'use client';

import { useState } from 'react';

const sessions = [
  { id: 'am', title: 'Sunrise ride', duration: '32 min', tag: 'Cycling' },
  { id: 'mid', title: 'Core reset', duration: '18 min', tag: 'Strength' },
  { id: 'pm', title: 'Recovery flow', duration: '24 min', tag: 'Mobility' },
];

export default function MovementPlatform() {
  const [active, setActive] = useState(sessions[0]);
  const [codeOpen, setCodeOpen] = useState(true);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <div>
        <div className="relative overflow-hidden rounded-xl border border-border bg-zinc-900 aspect-video">
          <div className="flex h-full items-center justify-center text-white">
            <p className="text-sm">{active.title} · mock player</p>
          </div>
          {codeOpen && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-md bg-white/95 px-4 py-3 text-sm text-fg">
              <span>Giveaway overlay · code ULTRA-MOVE</span>
              <button type="button" className="font-medium underline" onClick={() => setCodeOpen(false)}>
                Dismiss
              </button>
            </div>
          )}
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {sessions.map((session) => (
            <li key={session.id}>
              <button
                type="button"
                onClick={() => {
                  setActive(session);
                  setCodeOpen(true);
                }}
                className={`w-full rounded-xl border p-4 text-left ${
                  active.id === session.id
                    ? 'border-accent bg-accent-soft'
                    : 'border-border bg-bg-elevated'
                }`}
              >
                <p className="text-xs uppercase tracking-wide text-fg-muted">{session.tag}</p>
                <p className="mt-1 font-semibold">{session.title}</p>
                <p className="text-sm text-fg-muted">{session.duration}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <aside className="rounded-xl border border-border bg-bg-elevated p-5">
        <h2 className="font-semibold">Merch drop</h2>
        <p className="mt-2 text-sm text-fg-muted">
          Content modules and the player share a shell. Overlays are UI, not burned-in video.
        </p>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="rounded-lg border border-border p-3">Movement cap · $32</li>
          <li className="rounded-lg border border-border p-3">Training tank · $54</li>
        </ul>
      </aside>
    </div>
  );
}
