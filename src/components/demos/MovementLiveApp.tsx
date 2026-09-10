'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  movementHero,
  movementVideo,
  type MovementMerch,
  type MovementSession,
  type MovementUser,
} from '@/data/movement';

type Catalog = {
  event: {
    name: string;
    brand: string;
    date: string;
    location: string;
    overlayCode: string;
    overlayCopy: string;
  };
  sessions: MovementSession[];
  merch: MovementMerch[];
  artists: string[];
  sipping: string[];
  lookupHint: string;
};

type View = 'rsvp' | 'lookup' | 'hub';
type HubTab = 'live' | 'sessions' | 'merch';

const storageKey = 'movement-demo-user';

export default function MovementLiveApp() {
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<View>('rsvp');
  const [user, setUser] = useState<MovementUser | null>(null);
  const [tab, setTab] = useState<HubTab>('live');
  const [activeSession, setActiveSession] = useState<MovementSession | null>(null);
  const [overlayOpen, setOverlayOpen] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/movement')
      .then(async (response) => {
        if (!response.ok) throw new Error('Could not load Movement Live');
        return response.json() as Promise<Catalog>;
      })
      .then((json) => {
        if (cancelled) return;
        setCatalog(json);
        setActiveSession(json.sessions[0] ?? null);
        try {
          const saved = sessionStorage.getItem(storageKey);
          if (saved) {
            const parsed = JSON.parse(saved) as MovementUser;
            setUser(parsed);
            setView('hub');
          }
        } catch {
          /* ignore */
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  function persist(next: MovementUser) {
    setUser(next);
    sessionStorage.setItem(storageKey, JSON.stringify(next));
    setView('hub');
    setTab('live');
    setOverlayOpen(true);
  }

  if (error) {
    return (
      <p className="bg-black p-8 text-sm text-red-300" role="alert">
        {error}
      </p>
    );
  }

  if (!catalog || !activeSession) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-sm text-zinc-400">
        Loading Movement Live…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-zinc-950 px-4 py-2.5 text-xs text-zinc-400">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <p>Portfolio demo · fixture JSON from GET/POST /api/movement · no Firebase or Sendgrid writes</p>
          <Link href="/projects/michelob" className="underline underline-offset-4 hover:text-white">
            Back to case study
          </Link>
        </div>
      </div>

      {view === 'hub' && user ? (
        <Hub
          catalog={catalog}
          user={user}
          tab={tab}
          setTab={setTab}
          activeSession={activeSession}
          setActiveSession={setActiveSession}
          overlayOpen={overlayOpen}
          setOverlayOpen={setOverlayOpen}
          onSignOut={() => {
            sessionStorage.removeItem(storageKey);
            setUser(null);
            setView('rsvp');
          }}
        />
      ) : view === 'lookup' ? (
        <Lookup
          hint={catalog.lookupHint}
          onBack={() => setView('rsvp')}
          onFound={persist}
        />
      ) : (
        <Landing catalog={catalog} onRegistered={persist} onLookup={() => setView('lookup')} />
      )}
    </div>
  );
}

function Landing({
  catalog,
  onRegistered,
  onLookup,
}: {
  catalog: Catalog;
  onRegistered: (user: MovementUser) => void;
  onLookup: () => void;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5d52a]">
            {catalog.event.brand}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{catalog.event.name}</h1>
          <p className="mt-3 text-lg text-zinc-300">
            {catalog.event.date} · {catalog.event.location}
          </p>
          <p className="mt-4 max-w-xl text-zinc-400">
            RSVP for the live stream, then come back to workouts, merch, and in-stream codes. Returning?
            Look up your registration — nothing is written to Firebase in this demo.
          </p>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={movementHero}
              alt="Michelob Ultra Movement Live"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
        </div>
        <RsvpForm
          artists={catalog.artists}
          sipping={catalog.sipping}
          onRegistered={onRegistered}
          onLookup={onLookup}
        />
      </div>
    </div>
  );
}

function RsvpForm({
  artists,
  sipping,
  onRegistered,
  onLookup,
}: {
  artists: string[];
  sipping: string[];
  onRegistered: (user: MovementUser) => void;
  onLookup: () => void;
}) {
  const [form, setForm] = useState({
    email: '',
    username: '',
    zip: '',
    dob: '',
    artist: artists[0] ?? '',
    sipping: sipping[0] ?? '',
  });
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage(null);
    try {
      const response = await fetch('/api/movement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = (await response.json()) as { user?: MovementUser; error?: string; existing?: boolean };
      if (!response.ok || !json.user) {
        setMessage(json.error ?? 'Could not register.');
        return;
      }
      onRegistered(json.user);
    } catch {
      setMessage('Network error. Try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-white/10 bg-zinc-950 p-6"
    >
      <h2 className="text-xl font-semibold">RSVP</h2>
      <p className="mt-1 text-sm text-zinc-400">Client-validated, then POST /api/movement.</p>
      <div className="mt-5 grid gap-3">
        <Field
          label="Email"
          type="email"
          value={form.email}
          onChange={(value) => setForm({ ...form, email: value })}
        />
        <Field
          label="Username"
          value={form.username}
          onChange={(value) => setForm({ ...form, username: value })}
        />
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="ZIP"
            value={form.zip}
            onChange={(value) => setForm({ ...form, zip: value })}
          />
          <Field
            label="Date of birth"
            type="date"
            value={form.dob}
            onChange={(value) => setForm({ ...form, dob: value })}
          />
        </div>
        <label className="text-sm">
          Session
          <select
            className="mt-1 w-full rounded-md border border-white/15 bg-black px-3 py-2"
            value={form.artist}
            onChange={(event) => setForm({ ...form, artist: event.target.value })}
          >
            {artists.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          Sipping
          <select
            className="mt-1 w-full rounded-md border border-white/15 bg-black px-3 py-2"
            value={form.sipping}
            onChange={(event) => setForm({ ...form, sipping: event.target.value })}
          >
            {sipping.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      {message ? (
        <p className="mt-3 text-sm text-red-300" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={busy}
        className="mt-5 w-full rounded-full bg-[#c5d52a] px-4 py-2.5 text-sm font-semibold text-black disabled:opacity-60"
      >
        {busy ? 'Registering…' : 'Register'}
      </button>
      <button
        type="button"
        onClick={onLookup}
        className="mt-3 w-full text-sm text-zinc-400 underline underline-offset-4 hover:text-white"
      >
        Look up a previous RSVP
      </button>
    </form>
  );
}

function Lookup({
  hint,
  onBack,
  onFound,
}: {
  hint: string;
  onBack: () => void;
  onFound: (user: MovementUser) => void;
}) {
  const [email, setEmail] = useState(hint);
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage(null);
    try {
      const response = await fetch(`/api/movement?email=${encodeURIComponent(email)}`);
      const json = (await response.json()) as { user?: MovementUser; error?: string };
      if (!response.ok || !json.user) {
        setMessage(json.error ?? 'Not found.');
        return;
      }
      onFound(json.user);
    } catch {
      setMessage('Network error. Try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-semibold">Find your RSVP</h1>
      <p className="mt-2 text-sm text-zinc-400">
        Seed registration: <span className="text-zinc-200">{hint}</span>
      </p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <Field label="Email" type="email" value={email} onChange={setEmail} />
        {message ? (
          <p className="text-sm text-red-300" role="alert">
            {message}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-full bg-[#c5d52a] px-4 py-2.5 text-sm font-semibold text-black"
        >
          {busy ? 'Looking up…' : 'Look up'}
        </button>
        <button type="button" onClick={onBack} className="w-full text-sm text-zinc-400 underline">
          Back to RSVP
        </button>
      </form>
    </div>
  );
}

function Hub({
  catalog,
  user,
  tab,
  setTab,
  activeSession,
  setActiveSession,
  overlayOpen,
  setOverlayOpen,
  onSignOut,
}: {
  catalog: Catalog;
  user: MovementUser;
  tab: HubTab;
  setTab: (tab: HubTab) => void;
  activeSession: MovementSession;
  setActiveSession: (session: MovementSession) => void;
  overlayOpen: boolean;
  setOverlayOpen: (open: boolean) => void;
  onSignOut: () => void;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5d52a]">Welcome back</p>
          <h1 className="mt-1 text-3xl font-semibold">{user.username}</h1>
          <p className="mt-1 text-sm text-zinc-400">
            {user.artist} · sipping {user.sipping} · referral /r/{user.referralKey}
          </p>
        </div>
        <button type="button" onClick={onSignOut} className="text-sm text-zinc-400 underline">
          Sign out
        </button>
      </header>

      <nav className="mt-8 flex gap-2">
        {(
          [
            ['live', 'Live'],
            ['sessions', 'Sessions'],
            ['merch', 'Merch'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={
              tab === id
                ? 'rounded-full bg-[#c5d52a] px-4 py-1.5 text-sm font-semibold text-black'
                : 'rounded-full border border-white/15 px-4 py-1.5 text-sm text-zinc-300'
            }
          >
            {label}
          </button>
        ))}
      </nav>

      {tab === 'live' ? (
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <video
              className="aspect-video w-full object-cover"
              src={movementVideo}
              poster={activeSession.image}
              controls
              playsInline
            />
            {overlayOpen ? (
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-lg bg-black/85 px-4 py-3 text-sm">
                <span>
                  {catalog.event.overlayCopy} · <span className="font-semibold text-[#c5d52a]">{catalog.event.overlayCode}</span>
                </span>
                <span className="flex gap-2">
                  <button
                    type="button"
                    className="underline"
                    onClick={() => {
                      setTab('merch');
                      setOverlayOpen(false);
                    }}
                  >
                    Shop
                  </button>
                  <button type="button" className="text-zinc-400 underline" onClick={() => setOverlayOpen(false)}>
                    Dismiss
                  </button>
                </span>
              </div>
            ) : null}
          </div>
          <p className="mt-3 text-sm text-zinc-400">
            Overlay is DOM on the player, not burned into the video. Now playing {activeSession.title}.
          </p>
        </div>
      ) : null}

      {tab === 'sessions' ? (
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {catalog.sessions.map((session) => (
            <li key={session.id}>
              <button
                type="button"
                onClick={() => {
                  setActiveSession(session);
                  setTab('live');
                  setOverlayOpen(true);
                }}
                className="w-full overflow-hidden rounded-2xl border border-white/10 text-left hover:border-[#c5d52a]"
              >
                <span className="relative block aspect-[16/10]">
                  <Image src={session.image} alt={session.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </span>
                <span className="block p-4">
                  <span className="text-xs uppercase tracking-wide text-zinc-400">{session.tag}</span>
                  <span className="mt-1 block font-semibold">{session.title}</span>
                  <span className="text-sm text-zinc-400">{session.duration}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {tab === 'merch' ? (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {catalog.merch.map((item) => (
            <li key={item.id} className="overflow-hidden rounded-2xl border border-white/10">
              <div className="relative aspect-square bg-zinc-900">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="flex items-center justify-between p-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-[#c5d52a]">{item.price}</p>
              </div>
              <p className="px-4 pb-4 text-xs text-zinc-500">
                Demo checkout — code {catalog.event.overlayCode} would apply in production.
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block text-sm">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-md border border-white/15 bg-black px-3 py-2"
      />
    </label>
  );
}
