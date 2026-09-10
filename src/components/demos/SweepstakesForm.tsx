'use client';

import { useState, type FormEvent } from 'react';

type SweepstakesFormProps = {
  eligibility?: string;
  submitLabel?: string;
};

type Errors = {
  name?: string;
  email?: string;
  zip?: string;
};

export default function SweepstakesForm({
  eligibility = 'Demo only — nothing is stored or emailed.',
  submitLabel = 'Enter sweepstakes',
}: SweepstakesFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = 'Enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email.';
    if (!/^\d{5}(-\d{4})?$/.test(zip)) next.zip = 'Enter a 5-digit ZIP.';
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setDone(true);
    }
  }

  if (done) {
    return (
      <div
        className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-6"
        role="status"
      >
        <p className="font-semibold text-emerald-200">Entry recorded locally.</p>
        <p className="mt-2 text-sm text-zinc-300">
          This demo never posts to Mailchimp or a campaign API. Refresh to try the validation path
          again.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <p className="text-sm text-zinc-400">{eligibility}</p>
      <Field
        label="Name"
        name="name"
        value={name}
        error={errors.name}
        onChange={setName}
        autoComplete="name"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        value={email}
        error={errors.email}
        onChange={setEmail}
        autoComplete="email"
      />
      <Field
        label="ZIP"
        name="zip"
        value={zip}
        error={errors.zip}
        onChange={setZip}
        autoComplete="postal-code"
        inputMode="numeric"
      />
      <button
        type="submit"
        className="w-full rounded-md bg-emerald-400 px-4 py-3 text-sm font-semibold text-black hover:bg-emerald-300"
      >
        {submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-zinc-200">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none ring-emerald-400 focus:ring-2"
      />
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
