import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get("country");
  if (!country) return NextResponse.json([]);

  try {
    const res = await fetch(
      "https://countriesnow.space/api/v0.1/countries/states",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country }),
        next: { revalidate: 86400 },
      }
    );
    const json = await res.json();
    const stateNames: string[] = (json.data?.states ?? [])
      .map((s: { name: string }) => s.name)
      .sort();
    return NextResponse.json(stateNames);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}