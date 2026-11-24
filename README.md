# Ferny Grove Mechanical — homepage

Astro + Tailwind v4 + three.js.

```bash
npm install
npm run dev      # local dev
npm run build    # → dist/
```

Deployed on Netlify (`netlify.toml`: `npm run build` → `dist`).

## Where things live
- **Business details / TBCs:** `src/data/business.ts` (ABN, licence, warranty, photos, team…). `null` shows a visible "TBC" tag.
- **Services + engine hotspots:** `src/data/services.ts` (`part` = node name in the 3D model).
- **Reviews:** `src/data/reviews.ts` (hand-copied from Google). Optional live data: set `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID`.
- **Booking form:** set `PUBLIC_BOOKING_WEBHOOK` (e.g. a Make.com webhook) to switch on online requests.
- **3D hero:** `src/components/HoodScroll.astro`, model `public/models/sonata.glb`, loader `src/lib/car.ts`.
- **Photos:** `public/photos/`.
