// ─────────────────────────────────────────────────────────────────────────────
// Everything about the business in one place.
// `null` = not confirmed yet → the site shows a visible "TBC" placeholder.
// Fill these in with Jono, then rebuild. Never guess licence numbers or policies.
// ─────────────────────────────────────────────────────────────────────────────
export const business = {
  name: 'Ferny Grove Mechanical',
  phone: '0410 927 793',
  phoneHref: 'tel:+61410927793',
  address: 'Bldg 5, Unit 3/991 South Pine Rd, Everton Hills QLD 4053',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ferny+Grove+Mechanical+Everton+Hills',
  mapEmbed: 'https://www.google.com/maps?q=991+South+Pine+Rd,+Everton+Hills+QLD+4053&output=embed',
  hours: [['Mon–Fri', '8:00am – 5:00pm'], ['Sat–Sun', 'Closed']] as [string, string][],

  // Credentials (shown in the trust strip + footer)
  abn: null as string | null,                // e.g. '12 345 678 901'
  licence: null as string | null,            // QLD repairer / inspection station number(s)
  memberships: null as string[] | null,      // e.g. ['MTA Queensland']
  warranty: null as string | null,           // e.g. '12 months / 20,000 km on parts and labour'
  yearsInBusiness: null as string | null,    // e.g. '20+ years'
  payment: null as string | null,            // e.g. 'Cash, EFTPOS, Visa, Mastercard'

  // Getting there and back (shown under Find us). Set to false to hide a line once confirmed "no".
  loanCars: null as string | false | null,   // e.g. 'Free loan car, first in first served'
  pickup: null as string | false | null,     // e.g. 'Pick-up and drop-off within 10 minutes'

  // Team. Names come from Google reviews; roles/photos TBC.
  team: [
    { name: 'Jono', role: 'Owner', photo: '/photos/owner-holden.jpg' as string | null }, // placeholder pic, confirm it's Jono
    { name: 'Matt', role: null as string | null, photo: null as string | null },
  ],
  // Photos: drop files in /public/photos and put the paths here.
  photos: {
    workshop: '/photos/workshop-hoist.jpg' as string | null, // beside "Three steps"
    fleet: null as string | null,    // optional faint background behind the Fleet section (e.g. '/photos/ute-hoist.jpg')
    faq: '/photos/classics.jpg' as string | null,      // beside the FAQ heading
  },

  // Makes we've worked on, as named in reviews. Swap for Jono's full list.
  makesSeen: ['Toyota Prado', 'Suzuki Swift', 'Hyundai', 'Muscle cars', 'Work utes & fleet vans'],
  makesFull: null as string[] | null,
};

/** Booking requests are POSTed (JSON) here, e.g. a Make.com webhook that emails Jono. */
export const BOOKING_WEBHOOK = import.meta.env.PUBLIC_BOOKING_WEBHOOK as string | undefined;
