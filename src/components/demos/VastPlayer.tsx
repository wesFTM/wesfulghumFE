'use client';

import { useState } from 'react';

export default function VastPlayer() {
  const [log, setLog] = useState<string[]>(['loaded', 'impression']);
  const [playing, setPlaying] = useState(false);

  function fire(next: string) {
    setLog((current) => [...current, next].slice(-8));
  }

  function play() {
    setPlaying(true);
    fire('start');
    window.setTimeout(() => fire('firstQuartile'), 400);
    window.setTimeout(() => fire('midpoint'), 800);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="relative flex aspect-video items-center justify-center bg-zinc-900">
        <p className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-[10px] uppercase tracking-wide text-zinc-300">
          VAST unit · live
        </p>
        {!playing ? (
          <button
            type="button"
            onClick={play}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            Request ad
          </button>
        ) : (
          <p className="text-sm text-zinc-400">Simulated live creative playing…</p>
        )}
      </div>
      <div className="bg-black px-4 py-3 font-mono text-xs text-emerald-300">
        <p className="mb-1 text-zinc-500">Beacon log</p>
        {log.map((entry, index) => (
          <p key={`${entry}-${index}`}>{entry}</p>
        ))}
      </div>
    </div>
  );
}
