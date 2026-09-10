import { NextResponse } from 'next/server';
import {
  makeReferralKey,
  movementArtists,
  movementEvent,
  movementMerch,
  movementSessions,
  movementSipping,
  seedUsers,
  type MovementUser,
} from '@/data/movement';

const extras = new Map<string, MovementUser>(
  seedUsers.map((user) => [user.email.toLowerCase(), user]),
);

function findUser(email: string) {
  return extras.get(email.trim().toLowerCase()) ?? null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (email) {
    const user = findUser(email);
    if (!user) {
      return NextResponse.json({ error: 'No registration for that email.' }, { status: 404 });
    }
    return NextResponse.json({ user });
  }

  return NextResponse.json({
    event: movementEvent,
    sessions: movementSessions,
    merch: movementMerch,
    artists: movementArtists,
    sipping: movementSipping,
    lookupHint: seedUsers[0].email,
  });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<MovementUser> & { referredBy?: string };
  const email = body.email?.trim().toLowerCase() ?? '';
  const username = body.username?.trim() ?? '';
  const zip = body.zip?.trim() ?? '';
  const dob = body.dob ?? '';
  const artist = body.artist ?? '';
  const sipping = body.sipping ?? '';

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email.' }, { status: 400 });
  }
  if (username.length < 3) {
    return NextResponse.json({ error: 'Username needs at least 3 characters.' }, { status: 400 });
  }
  if (!/^\d{5}$/.test(zip)) {
    return NextResponse.json({ error: 'ZIP must be 5 digits.' }, { status: 400 });
  }
  const born = new Date(`${dob}T12:00:00`);
  if (Number.isNaN(born.getTime()) || Date.now() - born.getTime() < 18 * 365.25 * 24 * 60 * 60 * 1000) {
    return NextResponse.json({ error: 'Registrants must be 18 or older.' }, { status: 400 });
  }
  if (!movementArtists.includes(artist) || !movementSipping.includes(sipping)) {
    return NextResponse.json({ error: 'Pick a session artist and a sipping option.' }, { status: 400 });
  }

  const existing = findUser(email);
  if (existing) {
    return NextResponse.json({ user: existing, existing: true });
  }

  const user: MovementUser = {
    email,
    username,
    zip,
    dob,
    artist,
    sipping,
    referralKey: makeReferralKey(username),
    referredBy: body.referredBy,
  };
  extras.set(email, user);
  return NextResponse.json({ user, existing: false });
}
