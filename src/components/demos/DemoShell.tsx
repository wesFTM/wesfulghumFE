import Link from 'next/link';

type DemoShellProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  backHref: string;
  note?: string;
  theme?: 'dark' | 'light';
};

export default function DemoShell({
  eyebrow,
  title,
  children,
  backHref,
  note = 'Restored demo. No live campaign data, list writes, or credentials.',
  theme = 'dark',
}: DemoShellProps) {
  const dark = theme === 'dark';

  return (
    <div className={dark ? 'min-h-screen bg-[#0b0d0c] text-zinc-100' : 'min-h-screen bg-bg text-fg'}>
      <div
        className={
          dark
            ? 'border-b border-white/10 bg-black/40 px-4 py-3 text-xs text-zinc-400'
            : 'border-b border-border bg-bg-elevated px-4 py-3 text-xs text-fg-muted'
        }
      >
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2">
          <p>{note}</p>
          <Link
            href={backHref}
            className={
              dark
                ? 'underline underline-offset-4 hover:text-white'
                : 'underline underline-offset-4 hover:text-fg'
            }
          >
            Back to case study
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <p
          className={
            dark
              ? 'text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90'
              : 'text-xs font-semibold uppercase tracking-[0.2em] text-accent'
          }
        >
          {eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
}
