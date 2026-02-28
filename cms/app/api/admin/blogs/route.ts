import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/database';
import Blog from '@/models/Blog';
import { paginationSchema } from '@/lib/validations';
import { successResponse, handleApiError, errorResponse } from '@/lib/api-helpers';
import { escapeRegex } from '@/lib/sanitize';
import { PaginatedResponse, IBlog } from '@/types';

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const status = searchParams.get('status') || 'all';
    const search = searchParams.get('search') || '';
    
    // Validate pagination params 
    const validatedParams = paginationSchema.parse({
      page,
      limit,
      status: status as 'draft' | 'published' | 'all',
      search,
    });
    
    // Connect to database
    await connectDB();
    
    // Build query
    const query: Record<string, unknown> = {};
    
    // Filter by status
    if (validatedParams.status && validatedParams.status !== 'all') {
      query.status = validatedParams.status;
    }
    
    // Search functionality
    if (validatedParams.search) {
      const escapedSearch = escapeRegex(validatedParams.search);
      query.$or = [
        { title: { $regex: escapedSearch, $options: 'i' } },
        { content: { $regex: escapedSearch, $options: 'i' } },
      ];
    }
    
    // Calculate pagination
    const skip = (validatedParams.page - 1) * validatedParams.limit;
    
    // Get total count
    const totalItems = await Blog.countDocuments(query);
    const totalPages = Math.ceil(totalItems / validatedParams.limit);
    
    // Get blogs with pagination
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(validatedParams.limit)
      .select('-content') // Exclude content for list view
      .lean();
    
    // Build response
    const response: PaginatedResponse<IBlog> = {
      data: blogs as unknown as IBlog[],
      pagination: {
        currentPage: validatedParams.page,
        totalPages,
        totalItems,
        itemsPerPage: validatedParams.limit,
        hasNextPage: validatedParams.page < totalPages,
        hasPrevPage: validatedParams.page > 1,
      },
    };
    
    return successResponse(response);
  } catch (error) {
    return handleApiError(error);
  }
}
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    // LOG THE DATA: Check your terminal after clicking Save!
    console.log("--- DATA ATTEMPTING TO SAVE ---", body);

    if (!body.title || !body.slug) {
      return errorResponse('Title and Slug are required', 400);
    }

    // Ensure mainImage is not a blob URL before saving
    if (body.mainImage && body.mainImage.startsWith('blob:')) {
       return errorResponse('Image upload in progress, please wait.', 400);
    }

    const newBlog = await Blog.create({
      title: body.title,
      slug: body.slug,
      content: body.content || '',
      mainImage: body.mainImage || '',
      excerpt: body.excerpt || '',
      status: body.status || 'draft',
      seoMeta: body.seoMeta || {
        title: body.title, // Fallback for SEO
        description: body.excerpt || ''
      },
      author: 'Admin',
    });

    return successResponse(newBlog);
  } catch (error: any) {
    console.error("DETAILED API ERROR:", error); // This is your best friend right now
    
    if (error.code === 11000) {
      return errorResponse('A post with this slug already exists', 409);
    }
    
    // If it's a Mongoose validation error, return the specific message
    if (error.name === 'ValidationError') {
      return errorResponse(error.message, 400);
    }

    return handleApiError(error);
  }
}