import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { ApiResponse } from '@/types';

/**
 * Standard API error response
 */
export function errorResponse(
  message: string,
  status: number = 500
): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status }
  );
}

/**
 * Standard API success response
 */
export function successResponse<T>(
  data: T,
  message?: string,
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      ...(message && { message }),
    },
    { status }
  );
}

/**
 * Handle Zod validation errors
 */
export function handleZodError(error: ZodError): NextResponse<ApiResponse> {
  const errors = error.errors.map((err) => ({
    field: err.path.join('.'),
    message: err.message,
  }));
  
  return NextResponse.json(
    {
      success: false,
      error: 'Validation failed',
      data: errors,
    },
    { status: 400 }
  );
}

/**
 * Handle MongoDB duplicate key error
 */
export function handleDuplicateKeyError(error: Error & { keyValue?: Record<string, unknown> }): NextResponse<ApiResponse> {
  const field = error.keyValue ? Object.keys(error.keyValue)[0] : 'field';
  const value = error.keyValue ? error.keyValue[field] : '';
  
  return errorResponse(
    `${field.charAt(0).toUpperCase() + field.slice(1)} '${value}' already exists`,
    409
  );
}

/**
 * Handle MongoDB validation error
 */
export function handleValidationError(error: Error & { errors?: Record<string, { message: string }> }): NextResponse<ApiResponse> {
  if (error.errors) {
    const messages = Object.values(error.errors).map((err) => err.message);
    return errorResponse(messages.join(', '), 400);
  }
  
  return errorResponse('Validation error', 400);
}

/**
 * Centralized error handler for API routes
 */
export function handleApiError(error: unknown): NextResponse<ApiResponse> {
  console.error('API Error:', error);
  
  // Zod validation error
  if (error instanceof ZodError) {
    return handleZodError(error);
  }
  
  // MongoDB errors
  if (error && typeof error === 'object' && 'name' in error) {
    const mongoError = error as Error & { 
      name: string; 
      code?: number;
      keyValue?: Record<string, unknown>;
      errors?: Record<string, { message: string }>;
    };
    
    // Duplicate key error
    if (mongoError.code === 11000) {
      return handleDuplicateKeyError(mongoError);
    }
    
    // Validation error
    if (mongoError.name === 'ValidationError') {
      return handleValidationError(mongoError);
    }
    
    // Cast error (invalid ObjectId)
    if (mongoError.name === 'CastError') {
      return errorResponse('Invalid ID format', 400);
    }
  }
  
  // Standard Error object
  if (error instanceof Error) {
    return errorResponse(error.message, 500);
  }
  
  // Unknown error
  return errorResponse('Internal server error', 500);
}

/**
 * Get client IP address from request
 */
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP.trim();
  }
  
  return 'unknown';
}
