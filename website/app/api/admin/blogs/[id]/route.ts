import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/database';
import Blog from '@/models/Blogs';
import { blogSchema, blogIdSchema } from '@/lib/validations';
import {
  successResponse,
  errorResponse,
  handleApiError,
} from '@/lib/api-helpers';
import { sanitizeHTML } from '@/lib/sanitize';
import { generateUniqueSlug } from '@/lib/slug';

// GET single blog
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Validate ID
    const { id } = blogIdSchema.parse({ id: params.id });
    
    // Connect to database
    await connectDB();
    
    // Get blog
    const blog = await Blog.findById(id).lean();
    
    if (!blog) {
      return errorResponse('Blog not found', 404);
    }
    
    return successResponse(blog);
  } catch (error) {
    return handleApiError(error);
  }
}

// PUT update blog
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Validate ID
    const { id } = blogIdSchema.parse({ id: params.id });
    
    // Parse and validate request body
    const body = await request.json();
    
    // Connect to database
    await connectDB();
    
    // Check if blog exists
    const existingBlog = await Blog.findById(id);
    
    if (!existingBlog) {
      return errorResponse('Blog not found', 404);
    }
    
    // If slug is being changed, ensure it's unique
    if (body.slug && body.slug !== existingBlog.slug) {
      body.slug = await generateUniqueSlug(body.slug, id);
    } else if (!body.slug) {
      body.slug = existingBlog.slug;
    }
    
    const validatedData = blogSchema.parse(body);
    
    // Sanitize HTML content
    const sanitizedContent = sanitizeHTML(validatedData.content);
    
    // Update blog
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title: validatedData.title,
        slug: validatedData.slug,
        content: sanitizedContent,
        excerpt: validatedData.excerpt,
        status: validatedData.status,
        seoMeta: validatedData.seoMeta || {},
      },
      { new: true, runValidators: true }
    );
    
    return successResponse(
      {
        id: updatedBlog!._id.toString(),
        title: updatedBlog!.title,
        slug: updatedBlog!.slug,
        status: updatedBlog!.status,
      },
      'Blog updated successfully'
    );
  } catch (error) {
    return handleApiError(error);
  }
}

// DELETE blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Validate ID
    const { id } = blogIdSchema.parse({ id: params.id });
    
    // Connect to database
    await connectDB();
    
    // Delete blog
    const deletedBlog = await Blog.findByIdAndDelete(id);
    
    if (!deletedBlog) {
      return errorResponse('Blog not found', 404);
    }
    
    return successResponse(null, 'Blog deleted successfully');
  } catch (error) {
    return handleApiError(error);
  }
}
