import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import User from '@/models/User';
import { loginSchema } from '@/lib/validations';
import { generateToken } from '@/lib/jwt';
import { setAuthCookie } from '@/lib/cookies';

import {
  errorResponse,
  successResponse,
  handleApiError,
  getClientIP,
  
} from '@/lib/api-helpers';
import {
  isRateLimited,
  recordAttempt,
  getRemainingAttempts,
  getResetTime,
  
} from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);
    const rateLimitKey = `login:${clientIP}`;
    
    // Check rate limit
    if (isRateLimited(rateLimitKey)) {
      const resetTime = getResetTime(rateLimitKey);
      return errorResponse(
        `Too many login attempts. Please try again in ${Math.ceil(resetTime / 60)} minutes`,
        429
      );
    }
    
    // Parse and validate request body
    const body = await request.json();
    const validatedData = loginSchema.parse(body);
    
    // Connect to database
    await connectDB();
    
    // Find user with password field
    const user = await User.findOne({ email: validatedData.email }).select('+password');
    
    if (!user) {
      // Record failed attempt
      recordAttempt(rateLimitKey);
      const remaining = getRemainingAttempts(rateLimitKey);
      
      return errorResponse(
        `Invalid credentials. ${remaining} attempts remaining`,
        401
      );
    }
    
    // Verify password
   const bcrypt = require('bcryptjs'); // Ensure you use bcryptjs
const isPasswordValid = await bcrypt.compare(validatedData.password, user.password);

console.log("Password Attempt:", validatedData.password);
console.log("Match Result:", isPasswordValid);
    
    if (!isPasswordValid) {
      // Record failed attempt
      recordAttempt(rateLimitKey);
      const remaining = getRemainingAttempts(rateLimitKey);
      
      return errorResponse(
        `Invalid credentials. ${remaining} attempts remaining`,
        401
      );
    }
    
    // Generate JWT token
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });
    
    // Create response with HTTP-only cookie
    const response = successResponse(
      {
        user: {
          id: user._id.toString(),
          email: user.email,
          role: user.role,
        },
      },
      'Login successful'
    );
    
    // Set authentication cookie
    const cookie = setAuthCookie(token);
    response.headers.set('Set-Cookie', cookie);
    
    return response;
  } catch (error) {
    return handleApiError(error);
  }
}
