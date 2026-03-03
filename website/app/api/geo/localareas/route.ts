// Uses Google Maps Places API (Nearby Search) for local areas.
// Requires: GOOGLE_MAPS_API_KEY in your .env.local
// Free tier: 28,500 requests/month — more than enough.

import { NextResponse } from "next/server";

interface PlacesResult {
  name: string;
  vicinity?: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city    = searchParams.get("city")    ?? "";
  const country = searchParams.get("country") ?? "";
  if (!city) return NextResponse.json([]);

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    // Graceful fallback — return generic zones so the field still works
    return NextResponse.json(genericLocalAreas(city));
  }

  try {
    // Step 1 — Geocode city to lat/lng
    const geoRes = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(`${city}, ${country}`)}&key=${apiKey}`
    );
    const geoJson = await geoRes.json();
    const location = geoJson.results?.[0]?.geometry?.location;
    if (!location) return NextResponse.json(genericLocalAreas(city));

    // Step 2 — Nearby Search (neighborhoods / sublocalities)
    const placesRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json` +
      `?location=${location.lat},${location.lng}&radius=15000&type=sublocality&key=${apiKey}`
    );
    const placesJson = await placesRes.json();
    const areas: string[] = (placesJson.results ?? [])
      .map((p: PlacesResult) => p.name)
      .filter((name: string) => name && name.toLowerCase() !== city.toLowerCase())
      .sort();

    return NextResponse.json(areas.length > 0 ? areas : genericLocalAreas(city));
  } catch {
    return NextResponse.json(genericLocalAreas(city));
  }
}

function genericLocalAreas(city: string): string[] {
  return [
    `${city} City Center`,
    `${city} North`,
    `${city} South`,
    `${city} East`,
    `${city} West`,
    `${city} Old Town`,
    `${city} New Town`,
    `${city} Industrial Area`,
    `${city} Commercial Zone`,
    `${city} Tech Park`,
  ];
}