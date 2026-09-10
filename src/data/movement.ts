export type MovementUser = {
  email: string;
  username: string;
  zip: string;
  dob: string;
  artist: string;
  sipping: string;
  referralKey: string;
  referredBy?: string;
};

export type MovementSession = {
  id: string;
  title: string;
  duration: string;
  tag: string;
  image: string;
};

export type MovementMerch = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export const movementHero =
  'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/MU_WebImage.png';

export const movementVideo =
  'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/MICHELOB_BRANDED_CONTENT__Inno.mp4';

export const movementEvent = {
  name: 'Movement Live',
  brand: 'Michelob Ultra',
  date: 'Saturday, August 16',
  location: 'Brooklyn, NY',
  overlayCode: 'ULTRA-MOVE',
  overlayCopy: 'Live giveaway — 20% off merch',
};

export const movementArtists = [
  'Sunrise Ride with Maya Chen',
  'Main Stage DJ set',
  'Recovery flow with Jordan Hale',
];

export const movementSipping = ['Ultra', 'Pure Gold', 'Organic Seltzer'];

export const movementSessions: MovementSession[] = [
  {
    id: 'ride',
    title: 'Sunrise ride',
    duration: '32 min',
    tag: 'Cycling',
    image: '/demos/movement/movement-ride.png',
  },
  {
    id: 'core',
    title: 'Core reset',
    duration: '18 min',
    tag: 'Strength',
    image: '/demos/movement/movement-core.png',
  },
  {
    id: 'flow',
    title: 'Recovery flow',
    duration: '24 min',
    tag: 'Mobility',
    image: '/demos/movement/movement-flow.png',
  },
];

export const movementMerch: MovementMerch[] = [
  {
    id: 'cap',
    name: 'Movement cap',
    price: '$32',
    image: '/demos/movement/movement-cap.png',
  },
  {
    id: 'tank',
    name: 'Training tank',
    price: '$54',
    image: '/demos/movement/movement-tank.png',
  },
];

export const seedUsers: MovementUser[] = [
  {
    email: 'alex@movement.demo',
    username: 'AlexRuns',
    zip: '11215',
    dob: '1994-03-12',
    artist: movementArtists[0],
    sipping: 'Ultra',
    referralKey: 'ALEXRUNS',
  },
];

export function makeReferralKey(username: string) {
  return username.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 12) || 'MOVE';
}
