import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: Request, { params }: { params: { filename: string } }) {
  const { filename } = params;

  // FIXED ABSOLUTE PATH: We hardcode the path to your it2.tv structure
  const uploadDir = "C:\\Users\\swetha\\it2.tv\\nextjs-cms\\public\\upload";
  const filePath = path.join(uploadDir, filename);

  // DEBUGGING: This prints to your terminal [1]
  console.log("-----------------------------------------");
  console.log("Senior Dev Debug - Checking Disk:");
  console.log("Looking in:", uploadDir);
  console.log("Full File Path:", filePath);
  console.log("Result:", fs.existsSync(filePath) ? "✅ FOUND" : "❌ NOT THERE");
  console.log("-----------------------------------------");

  if (!fs.existsSync(filePath)) {
    return new NextResponse("File not found on disk", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  const ext = path.extname(filename).toLowerCase();
  const mime = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': mime,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}