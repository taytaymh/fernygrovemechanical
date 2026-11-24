// `part` = node in public/models/sonata.glb the hotspot pins to (see README). No `part` = list only, no hotspot.
// Service names follow FGM's Google listing + what customers mention in reviews.
export type Service = { id: string; part?: string; title: string; blurb: string };
export const services: Service[] = [
  { id: 'oil', part: 'Hyundai_Sonata_2016___Sko_183_3', title: 'Logbook servicing', blurb: 'Manufacturer-spec servicing, oil and filters, that keeps your new-car warranty intact. Same job as the dealer, without the dealer bill.' },
  { id: 'airbox', part: 'Hyundai_Sonata_2016___Sko_216', title: 'Diagnostics', blurb: 'Check-engine light on? We scan it, find the actual cause, and explain it before touching anything.' },
  { id: 'battery', part: 'Hyundai_Sonata_2016___Sko_174', title: 'Batteries & electrical', blurb: 'Testing, replacements and the gremlins in between. If your battery is fine, we’ll tell you.' },
  { id: 'brakes', part: 'Hyundai_Sonata_2016___Sko_178_1', title: 'Brakes', blurb: 'Pads, rotors and fluid. We show you the worn part and tell you honestly how long it has left.' },
  { id: 'tyres', part: 'Hyundai_Sonata_2016___Sko_259', title: 'Tyres & wheel alignment', blurb: 'New tyres and wheel alignments, so the car tracks straight and your tyres wear evenly.' },
  { id: 'suspension', part: 'Hyundai_Sonata_2016___Sko_259001', title: 'Steering & suspension', blurb: 'Shocks, bushes, steering and suspension repairs. Fixed properly, not just patched.' },
  { id: 'coolant', part: 'Hyundai_Sonata_2016___Sko_208_1', title: 'Cooling & radiators', blurb: 'Overheating, leaks, hoses, thermostats. Sorted before a small drip becomes a cooked engine.' },
  { id: 'belt', part: 'Hyundai_Sonata_2016___Sko_183_2', title: 'Belts, clutches & transmission', blurb: 'The big jobs, quoted up front. No surprises at pick-up.' },
  { id: 'aircon', part: 'Hyundai_Sonata_2016___Sko_186', title: 'Air-con', blurb: 'Re-gas and repairs, because Brisbane summers are not optional.' },
  { id: 'exhaust', title: 'Exhaust', blurb: 'Leaks, rattles and blowing mufflers, repaired or replaced properly.' },
  { id: 'engine', title: 'Engine repairs & major jobs', blurb: 'The jobs other shops send away, right up to pulling the engine out.' },
  { id: 'performance', title: 'Performance work', blurb: 'Weekend muscle car or tuned daily? Performance mods too, with the same honest advice.' },
  { id: 'washer', part: 'Hyundai_Sonata_2016___Sko_201_1', title: 'Safety certificates', blurb: 'Selling or rego-ing? We inspect, and only quote for what actually needs fixing to pass.' },
];
