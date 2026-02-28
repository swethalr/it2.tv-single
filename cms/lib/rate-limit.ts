import { RateLimitStore, RateLimitEntry } from '@/types';

// In-memory store for rate limiting
// For production with multiple instances, use Redis or similar
const rateLimitStore: RateLimitStore = {};

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

/**
 * Get rate limit configuration from environment
 */
function getRateLimitConfig(): RateLimitConfig {
  return {
    maxAttempts: parseInt(process.env.RATE_LIMIT_MAX_ATTEMPTS || '5', 10),
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 minutes
  };
}

/**
 * Clean up expired entries from rate limit store
 */
function cleanupExpiredEntries(): void {
  const now = Date.now();
  Object.keys(rateLimitStore).forEach((key) => {
    if (rateLimitStore[key].resetTime < now) {
      delete rateLimitStore[key];
    }
  });
}

/**
 * Check if IP/identifier is rate limited
 */
export function isRateLimited(identifier: string): boolean {
  const config = getRateLimitConfig();
  const now = Date.now();
  
  // Clean up old entries periodically
  if (Math.random() < 0.1) {
    cleanupExpiredEntries();
  }
  
  const entry = rateLimitStore[identifier];
  
  // No entry or expired - allow
  if (!entry || entry.resetTime < now) {
    return false;
  }
  
  // Check if limit exceeded
  return entry.count >= config.maxAttempts;
}

/**
 * Record an attempt for rate limiting
 */
export function recordAttempt(identifier: string): void {
  const config = getRateLimitConfig();
  const now = Date.now();
  
  const entry = rateLimitStore[identifier];
  
  // Create new entry or reset if expired
  if (!entry || entry.resetTime < now) {
    rateLimitStore[identifier] = {
      count: 1,
      resetTime: now + config.windowMs,
    };
  } else {
    // Increment existing entry
    entry.count += 1;
  }
}

/**
 * Get remaining attempts before rate limit
 */
export function getRemainingAttempts(identifier: string): number {
  const config = getRateLimitConfig();
  const now = Date.now();
  
  const entry = rateLimitStore[identifier];
  
  if (!entry || entry.resetTime < now) {
    return config.maxAttempts;
  }
  
  return Math.max(0, config.maxAttempts - entry.count);
}

/**
 * Get time until rate limit reset (in seconds)
 */
export function getResetTime(identifier: string): number {
  const now = Date.now();
  const entry = rateLimitStore[identifier];
  
  if (!entry || entry.resetTime < now) {
    return 0;
  }
  
  return Math.ceil((entry.resetTime - now) / 1000);
}

/**
 * Clear rate limit for identifier (useful for testing or admin override)
 */
export function clearRateLimit(identifier: string): void {
  delete rateLimitStore[identifier];
}
