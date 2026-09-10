'use client';

import { useState } from 'react';

export default function PromoCode({ code = 'VERANO-LIVE' }: { code?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Promo code</p>
        <p className="font-mono text-lg tracking-wide">{code}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="rounded-md bg-emerald-400 px-3 py-2 text-sm font-semibold text-black"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}
