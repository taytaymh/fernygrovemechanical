// Pulls live Google reviews at build time (Places API "New").
// Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in .env, then rebuild (e.g. nightly via a deploy hook).
// Note: Google only returns up to 5 reviews per request. For a bigger wall, use a
// reviews service (e.g. a Make.com scenario that caches them) and swap the fetch below.
import { sampleReviews, sampleSummary, type Review } from '../data/reviews';

export interface ReviewData {
  rating: number;
  count: number;
  reviews: Review[];
  mapsUrl: string;
  isSample: boolean;
}

export async function getReviews(): Promise<ReviewData> {
  const key = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;
  const fallback = { ...sampleSummary, reviews: sampleReviews, isSample: false }; // hand-copied real reviews
  if (!key || !placeId) return fallback;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri',
      },
    });
    if (!res.ok) throw new Error(`Places API ${res.status}`);
    const d = await res.json();
    return {
      rating: d.rating,
      count: d.userRatingCount,
      mapsUrl: d.googleMapsUri,
      isSample: false,
      reviews: (d.reviews ?? []).map((r: any) => ({
        name: r.authorAttribution?.displayName ?? 'Google user',
        photo: r.authorAttribution?.photoUri,
        rating: r.rating,
        when: r.relativePublishTimeDescription,
        text: r.text?.text ?? '',
      })),
    };
  } catch (e) {
    console.warn('[reviews] falling back to sample data:', e);
    return fallback;
  }
}
