'use client';

import { useState } from 'react';

const items = [
  { id: 'tee', name: 'Festival tee', price: '$48' },
  { id: 'hat', name: 'Live hat', price: '$32' },
  { id: 'tote', name: 'Stream tote', price: '$24' },
];

export default function MerchGrid() {
  const [active, setActive] = useState<string | null>(null);
  const selected = items.find((item) => item.id === active);

  return (
    <div>
      <ul className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActive(item.id)}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-left hover:border-emerald-400/60"
            >
              <span className="block aspect-[4/3] rounded-md bg-gradient-to-br from-emerald-900 to-black" />
              <span className="mt-3 block font-medium">{item.name}</span>
              <span className="text-sm text-zinc-400">{item.price}</span>
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="merch-title"
        >
          <div className="w-full max-w-md rounded-xl bg-zinc-950 p-6">
            <h3 id="merch-title" className="text-xl font-semibold">
              {selected.name}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              In-stream shop pattern: overlay click opens this panel. Checkout is stubbed — no
              payments in the demo.
            </p>
            <p className="mt-4 text-lg">{selected.price}</p>
            <button
              type="button"
              className="mt-6 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black"
              onClick={() => setActive(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
