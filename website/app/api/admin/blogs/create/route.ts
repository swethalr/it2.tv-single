import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/database';
import Blog from '@/models/Blogs';
import { blogSchema } from '@/lib/validations';
import { successResponse, handleApiError } from '@/lib/api-helpers';
import { sanitizeHTML } from '@/lib/sanitize';
import { generateUniqueSlug } from '@/lib/slug';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const headersList = headers();
    const userEmail = headersList.get('x-user-email') || 'admin@test.com';
     
    console.log("Debug - userEmail from headers:", userEmail);
    
   if (!userEmail) {
       // If it's still null, the middleware didn't set it correctly
       return Response.json({ error: 'User not authenticated' }, { status: 401 });
    }
    // Parse and validate request body
    const body = await request.json();
    
    // Generate slug if not provided
    if (!body.slug) {
      body.slug = await generateUniqueSlug(body.title);
    }
    
    const validatedData = blogSchema.parse(body);
    
    // Connect to database
    await connectDB();
    
    // Sanitize HTML content
    const sanitizedContent = sanitizeHTML(validatedData.content);
    
    // Create blog
    const blog = await Blog.create({
      title: validatedData.title,
      slug: validatedData.slug,
      content: sanitizedContent,
      excerpt: validatedData.excerpt,
      status: validatedData.status,
      author: userEmail,
      seoMeta: validatedData.seoMeta || {},
    });
    
    return successResponse(
      {
        id: blog._id.toString(),
        title: blog.title,
        slug: blog.slug,
        status: blog.status,
      },
      'Blog created successfully',
      201
    );
  } catch (error) {
    return handleApiError(error);
  }
}
