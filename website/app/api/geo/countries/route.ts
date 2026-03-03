import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://countriesnow.space/api/v0.1/countries", {
      next: { revalidate: 86400 }, // cache 24 hours — zero repeated network cost
    });
    const json = await res.json();
    const names: string[] = json.data
      .map((c: { country: string }) => c.country)
      .sort();
    return NextResponse.json(names);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}