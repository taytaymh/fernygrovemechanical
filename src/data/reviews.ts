// Real Google reviews, copied by hand from the Ferny Grove Mechanical listing (Nov 2026).
// Shown unedited. If GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID are set, live data replaces this at build.
// Re-copy now and then: the 50-review count and dates go stale.
export interface Review {
  name: string;
  photo?: string;
  rating: number;
  when: string;
  text: string;
  services?: string[];
  pull?: string; // short excerpt (verbatim) shown big on the featured card
}

export const sampleSummary = {
  rating: 5.0,
  count: 50,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ferny+Grove+Mechanical+Everton+Hills',
};

// Order = display order. First one is the big featured card.
export const sampleReviews: Review[] = [
  {
    name: 'daniel soh', rating: 5, when: 'Nov 2026',
    pull: 'Explained what needs to be fixed now versus what can wait without any pushy upselling',
    text: "Absolutely legend at Ferny Grove Mechanical for fixing and servicing our son's Suzuki Swift within days to let him commute to work for a fair price, super honest, great communication, explained what needs to be fixed now versus what can wait without any pushy upselling, highly recommended.",
  },
  {
    name: 'Natalie McGowan', rating: 5, when: 'Nov 2026',
    text: "Jono is a true blue Aussie bloke, who tells it how it is. We have a new car under warranty and an older car that has a few issues. Jono is always willing to find a solution to fit our budget. For the first time in my history of dealing with mechanics, I feel extremely confident that my car is being looked after and I'm not being ripped off. Highly recommend.",
    services: ['Transmission', 'Electrical', 'Diagnostics', 'Brakes', 'Air-con', 'Battery'],
  },
  {
    name: 'michael hohenhaus', rating: 5, when: 'Nov 2026',
    text: "Hands down the best mechanic I've ever been to. Johnno and his team are very honest and transparent about pricing. They never try to unsell me on anything I don't need. Communication is amazing! Honest mechanics are hard to find and these guys are the real deal! Highly recommend!!!",
  },
  {
    name: 'Asha', rating: 5, when: 'Aug 2026',
    text: "If I could give Ferny Grove Mechanical more than 5 stars, I absolutely would! This is the only place we trust with our Prado: she's our baby, and we wouldn't let anyone else work on her (except my tinkering of course!).\n\nJono and his team are genuinely outstanding. When she blew a radiator hose overnight, they went above and beyond to fit us in at extremely short notice and had the radiator replaced without any fuss. Their professionalism, honesty, and quality of work are second to none.\n\nTo have a mechanic you know you can rely on, especially when something unexpected happens, is incredible and not something often seen these days. The team always takes great care of our car and treats it as if it were their own. We couldn't recommend Ferny Grove Mechanical highly enough. Thanks again to Jono and the whole team, you've got customers for life!",
  },
  {
    name: 'Dave Rogers', rating: 5, when: 'Nov 2026',
    text: "Always a great experience. Go and see the team at Ferny Grove Mechanical, you won't regret it. We have been going to them for the last few years since they were able to diagnose and repair an obscure issue that Hyundai wanted hundreds for with no guarantee of resolution. Super knowledgeable and keep you updated so there's no big surprises on pickup. Highly recommended.",
    services: ['Filters', 'Diagnostics', 'Oil change'],
  },
  {
    name: 'Laura Walker', rating: 5, when: 'Sep 2026',
    text: "A huge thank you to Matt and the entire team at Ferny Grove Mechanical! The customer service was fantastic from start to finish. Matt clearly explained the expected timeframes and went above and beyond to make sure I was back on the road and able to get to work on time.\n\nThe team also identified a few issues that had been overlooked by my previous mechanic, where corners had clearly been cut. I really appreciate the team taking the time to bring these issues to my attention and, most importantly, fixing them properly.\n\nI'll definitely be back and will be recommending Ferny Grove Mechanical to all my friends and family. Thanks again, Matt and the team! 😊",
    services: ['Transmission', 'Brakes', 'Oil change'],
  },
  {
    name: 'Glen Stalley', rating: 5, when: 'Nov 2026',
    text: "Jono has worked on every car I've owned for the past 20 years. Whether it's regular servicing or tyres on my daily driver or performance modifications on my muscle car, I always have complete trust in the advice and workmanship from Ferny Grove Mechanical. I simply won't go anywhere else.",
  },
  {
    name: 'Graham Hodgson', rating: 5, when: 'Nov 2026',
    text: "We've been taking both our cars to Ferny Grove Mechanical for over two years now and couldn't be happier with the service. Owner Jono is an excellent operator whom we cannot recommend highly enough.\n\nHe took on a major job involving the removal of our car's engine when other mechanics considered it too difficult. He and his team have also gone out of their way to help us on several occasions at very short notice.\n\nThey're friendly, approachable and honest in their communication, and we've always felt confident in the servicing and advice they provide. Highly recommended!",
  },
  {
    name: 'Joshua Williamson', rating: 5, when: 'Nov 2026',
    text: "We've trusted Jono to service and maintain our business fleet since day 1. If it's a routine service or an unexpected breakdown that arrives on a tow truck, we know the vehicles are in good hands. Communication is excellent, pricing is fair and reasonable, and we always have confidence in the team at FGM to get the job done right.\n\nIt's great to deal with a mechanic thats reliable, honest and genuinely looks after their customers!",
  },
  {
    name: 'Chanelle Barnes', rating: 5, when: 'Nov 2026',
    text: "Highly recommend Ferny Grove Mechanical! Jono went above and beyond with my car service and provided amazing customer service from start to finish. He was friendly, professional, honest and genuinely cared about making sure everything was taken care of. It's so refreshing to find a trustworthy mechanic who is upfront, honest and goes the extra mile for their customers. Really appreciate the fantastic service and will definitely be back!",
    services: ['Tyres', 'Wheel alignment', 'Oil change'],
  },
  {
    name: 'James Carolan', rating: 5, when: 'Nov 2026',
    text: "Jonno has been serving my fleet of All Fix Plumbing vehicles for the last 5 years. I'm extremely happy with the professionalism and the pricing of the servicing and they are always helpful.",
  },
  {
    name: 'Cameron Proudlove', rating: 5, when: 'Nov 2026',
    text: "Fantastic service from the team at Ferny Grove Mechanical! Honest, friendly and great prices. They've got my cars sorted quickly and explained everything clearly. Easily my go-to local mechanic- Highly recommend.!",
  },
];
