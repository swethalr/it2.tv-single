import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Cloudinary config is automatically handled by the CLOUDINARY_URL in your .env
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // 1. Convert file to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 2. Clean the filename for Cloudinary (SEO Friendly)
    const cleanName = file.name
      .split('.')
      .slice(0, -1)
      .join('.')
      .replace(/\s+/g, '-')
      .toLowerCase();

    // 3. Upload to Cloudinary
    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { 
          folder: 'it2_tv_production',
          public_id: `${Date.now()}-${cleanName}`, // Professional naming
          resource_type: 'auto' 
        }, 
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    }) as any;

    // 4. Return the CLOUD URL, not the local path!
    // This URL looks like: https://res.cloudinary.com/...
    return NextResponse.json({ url: uploadResponse.secure_url });

  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return NextResponse.json({ error: "Upload to cloud failed" }, { status: 500 });
  }
}