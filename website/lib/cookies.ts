import { serialize, parse } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';

const TOKEN_NAME = 'auth_token';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  maxAge?: number;
  path?: string;
}

/**
 * Get default cookie options based on environment
 */
function getDefaultOptions(): CookieOptions {
  const isProduction = process.env.NODE_ENV === 'production';
  
  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'lax',
    maxAge: MAX_AGE,
    path: '/',
  };
}

/**
 * Set authentication token cookie
 */
export function setAuthCookie(token: string): string {
  const options = getDefaultOptions();
  
  return serialize(TOKEN_NAME, token, options);
}

/**
 * Clear authentication token cookie
 */
export function clearAuthCookie(): string {
  return serialize(TOKEN_NAME, '', {
    ...getDefaultOptions(),
    maxAge: 0,
  });
}

/**
 * Get token from cookie string
 */
export function getTokenFromCookie(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  
  const cookies = parse(cookieHeader);
  return cookies[TOKEN_NAME] || null;
}

/**
 * Get token from Next.js request
 */
export function getTokenFromRequest(request: NextRequest): string | null {
  const cookieHeader = request.headers.get('cookie');
  return getTokenFromCookie(cookieHeader);
}

/**
 * Set cookie on Next.js response
 */
export function setResponseCookie(
  response: NextResponse,
  token: string
): NextResponse {
  const cookie = setAuthCookie(token);
  response.headers.set('Set-Cookie', cookie);
  return response;
}

/**
 * Clear cookie on Next.js response
 */
export function clearResponseCookie(response: NextResponse): NextResponse {
  const cookie = clearAuthCookie();
  response.headers.set('Set-Cookie', cookie);
  return response;
}
