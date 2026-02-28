import { NextRequest } from 'next/server';
import { getTokenFromRequest } from '@/lib/cookies';
import { verifyToken } from '@/lib/jwt';
import { errorResponse, successResponse } from '@/lib/api-helpers';

export async function GET(request: NextRequest) {
  try {
    // Get token from cookie
    const token = getTokenFromRequest(request);
    
    if (!token) {
      return errorResponse('Not authenticated', 401);
    }
    
    // Verify token
    const payload = verifyToken(token);
    
    if (!payload) {
      return errorResponse('Invalid or expired token', 401);
    }
    
    // Return user data
    return successResponse({
      user: {
        id: payload.userId,
        email: payload.email,
        role: payload.role,
      },
    });
  } catch (error) {
    return errorResponse('Authentication failed', 401);
  }
}
