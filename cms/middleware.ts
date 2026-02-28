import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyTokenEdge } from '@/lib/jwt-edge';
import { getTokenFromRequest } from '@/lib/cookies';


/**
 * Middleware to protect admin routes
 * Runs on every request matching the config
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for login page
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }
  
  // Check for admin routes
 if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    // Get token from cookie
    const token = getTokenFromRequest(request);
    
    // No token - redirect to login
    if (!token) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    // Verify token
  const payload = await verifyTokenEdge(token);
    
    // Invalid or expired token - redirect to login
    if (!payload) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      loginUrl.searchParams.set('error', 'session_expired');
      
      // Clear invalid cookie
      const response = NextResponse.redirect(loginUrl);
      response.headers.set(
        'Set-Cookie',
        'auth_token=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax'
      );
      return response;
    }
    
    // Token valid - add user info to headers for API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', payload.userId);
    requestHeaders.set('x-user-email', payload.email);
    requestHeaders.set('x-user-role', payload.role);
    
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
  
  return NextResponse.next();
}

/**
 * Configure which routes the middleware should run on
 */
export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/blogs/:path*',
  ],
};
