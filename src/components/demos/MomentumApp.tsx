'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type Session = { email: string } | null;

type SessionContextValue = {
  session: Session;
  signIn: (email: string) => void;
  signOut: () => void;
};

const SessionContext = createContext<SessionContextValue | null>(null);

function useSession() {
  const value = useContext(SessionContext);
  if (!value) {
    throw new Error('useSession must run inside SessionProvider');
  }
  return value;
}

export default function MomentumApp() {
  const [session, setSession] = useState<Session>(null);
  const value = useMemo<SessionContextValue>(
    () => ({
      session,
      signIn: (email) => setSession({ email }),
      signOut: () => setSession(null),
    }),
    [session],
  );

  return (
    <SessionContext.Provider value={value}>
      {session ? <AppShell /> : <SignIn />}
    </SessionContext.Provider>
  );
}

function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      className="mx-auto max-w-sm space-y-4 rounded-xl border border-border bg-bg-elevated p-6"
      onSubmit={(event) => {
        event.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 6) {
          setError('Use a valid email and a password of at least 6 characters. No network call.');
          return;
        }
        setError(null);
        signIn(email);
      }}
    >
      <h2 className="text-lg font-semibold">Sign in</h2>
      <p className="text-sm text-fg-muted">
        Fake session via React Context. Any valid-looking email works. Nothing is sent.
      </p>
      <label className="block text-sm">
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2"
          autoComplete="username"
        />
      </label>
      <label className="block text-sm">
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2"
          autoComplete="current-password"
        />
      </label>
      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="w-full rounded-md bg-accent px-4 py-2 text-sm font-medium text-white">
        Continue
      </button>
    </form>
  );
}

function AppShell() {
  const { session, signOut } = useSession();
  const [rsvpName, setRsvpName] = useState('');
  const [party, setParty] = useState('1');
  const [rsvpError, setRsvpError] = useState<string | null>(null);
  const [rsvpDone, setRsvpDone] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-xl border border-border bg-bg-elevated p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-accent">Media</p>
            <h2 className="mt-1 text-xl font-semibold">Session player</h2>
          </div>
          <p className="text-xs text-fg-muted">{session?.email}</p>
        </div>
        <div className="mt-6 flex aspect-video items-center justify-center rounded-lg bg-zinc-900 text-white">
          <button
            type="button"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
            onClick={() => setPlaying((value) => !value)}
            aria-pressed={playing}
          >
            {playing ? 'Pause' : 'Play'}
          </button>
        </div>
        <p className="mt-3 text-sm text-fg-muted">
          Player shell with explicit play/pause state. Buffering and error states would wrap the real
          media element in production.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-bg-elevated p-6">
        <h2 className="text-xl font-semibold">Hold a spot</h2>
        {rsvpDone ? (
          <p className="mt-4 text-sm" role="status">
            RSVP stored in component state for {rsvpName} · party of {party}.
          </p>
        ) : (
          <form
            className="mt-4 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              if (rsvpName.trim().length < 2) {
                setRsvpError('Name is required.');
                return;
              }
              setRsvpError(null);
              setRsvpDone(true);
            }}
          >
            <label className="block text-sm">
              Name
              <input
                value={rsvpName}
                onChange={(event) => setRsvpName(event.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              Party size
              <select
                value={party}
                onChange={(event) => setParty(event.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2"
              >
                {['1', '2', '3', '4'].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            {rsvpError && (
              <p className="text-sm text-red-700" role="alert">
                {rsvpError}
              </p>
            )}
            <button type="submit" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white">
              Submit
            </button>
          </form>
        )}
        <button type="button" onClick={signOut} className="mt-6 text-sm underline">
          Sign out
        </button>
      </section>
    </div>
  );
}
