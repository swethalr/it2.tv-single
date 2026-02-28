import { NextResponse } from 'next/server';
import { clearAuthCookie } from '@/lib/cookies';
import { successResponse } from '@/lib/api-helpers';

export async function POST() {
  // Create success response
  const response = successResponse(null, 'Logout successful');
  
  // Clear authentication cookie
  const cookie = clearAuthCookie();
  response.headers.set('Set-Cookie', cookie);
  
  return response;
}
