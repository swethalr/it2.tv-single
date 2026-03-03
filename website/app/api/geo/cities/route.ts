import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get("country");
  const state   = searchParams.get("state");
  if (!country || !state) return NextResponse.json([]);

  try {
    const res = await fetch(
      "https://countriesnow.space/api/v0.1/countries/state/cities",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country, state }),
        next: { revalidate: 86400 },
      }
    );
    const json = await res.json();
    const cityNames: string[] = (json.data ?? []).sort();
    return NextResponse.json(cityNames);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}