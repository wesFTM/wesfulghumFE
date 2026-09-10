'use client';

import { useRef, useState } from 'react';

export default function PhotoBooth() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  function drawFrame(image: HTMLImageElement) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 720;
    canvas.width = size;
    canvas.height = size;

    ctx.fillStyle = '#08120f';
    ctx.fillRect(0, 0, size, size);

    const scale = Math.max(size / image.width, size / image.height);
    const w = image.width * scale;
    const h = image.height * scale;
    ctx.drawImage(image, (size - w) / 2, (size - h) / 2, w, h);

    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 18;
    ctx.strokeRect(18, 18, size - 36, size - 36);

    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(0, size - 88, size, 88);
    ctx.fillStyle = '#ecfdf5';
    ctx.font = '600 28px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText('CASA BACARDI LIVE', 40, size - 42);
    ctx.font = '400 16px ui-sans-serif, system-ui, sans-serif';
    ctx.fillStyle = '#6ee7b7';
    ctx.fillText('Restored photobooth demo', 40, size - 18);

    setReady(true);
  }

  function onFile(file: File | undefined) {
    if (!file || !file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      drawFrame(image);
      URL.revokeObjectURL(url);
    };
    image.src = url;
  }

  function download() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'bacardi-photobooth-demo.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_280px]">
      <canvas
        ref={canvasRef}
        className="aspect-square w-full rounded-xl border border-white/10 bg-black"
        aria-label="Photobooth canvas"
      />
      <div className="space-y-4">
        <p className="text-sm text-zinc-400">
          Canvas composite: your image, a brand frame, export as PNG. Nothing is uploaded.
        </p>
        <label className="block">
          <span className="text-sm font-medium">Choose a photo</span>
          <input
            type="file"
            accept="image/*"
            className="mt-2 block w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-emerald-400 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-black"
            onChange={(event) => onFile(event.target.files?.[0])}
          />
        </label>
        <button
          type="button"
          onClick={download}
          disabled={!ready}
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-40"
        >
          Download PNG
        </button>
      </div>
    </div>
  );
}
