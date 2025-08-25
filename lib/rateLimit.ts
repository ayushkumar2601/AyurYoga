import { NextRequest, NextResponse } from 'next/server'

interface RateLimitConfig {
  maxRequests: number
  windowMs: number
}

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

// In-memory store for rate limiting (use Redis in production)
const rateLimitStore: RateLimitStore = {}

/**
 * Rate limiting middleware
 */
export function rateLimit(config: RateLimitConfig = { maxRequests: 100, windowMs: 900000 }) {
  return function(handler: (request: NextRequest) => Promise<NextResponse>) {
    return async (request: NextRequest) => {
      const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
      const key = `rate_limit:${ip}`
      
      const now = Date.now()
      const windowStart = now - config.windowMs
      
      // Clean up expired entries
      if (rateLimitStore[key] && rateLimitStore[key].resetTime < now) {
        delete rateLimitStore[key]
      }
      
      // Initialize or get current rate limit data
      if (!rateLimitStore[key]) {
        rateLimitStore[key] = {
          count: 0,
          resetTime: now + config.windowMs
        }
      }
      
      // Check if rate limit exceeded
      if (rateLimitStore[key].count >= config.maxRequests) {
        const retryAfter = Math.ceil((rateLimitStore[key].resetTime - now) / 1000)
        
        return NextResponse.json(
          { 
            error: 'Too many requests',
            retryAfter,
            message: `Rate limit exceeded. Try again in ${retryAfter} seconds.`
          },
          { 
            status: 429,
            headers: {
              'Retry-After': retryAfter.toString(),
              'X-RateLimit-Limit': config.maxRequests.toString(),
              'X-RateLimit-Remaining': '0',
              'X-RateLimit-Reset': rateLimitStore[key].resetTime.toString(),
            }
          }
        )
      }
      
      // Increment request count
      rateLimitStore[key].count++
      
      // Add rate limit headers
      const response = await handler(request)
      response.headers.set('X-RateLimit-Limit', config.maxRequests.toString())
      response.headers.set('X-RateLimit-Remaining', (config.maxRequests - rateLimitStore[key].count).toString())
      response.headers.set('X-RateLimit-Reset', rateLimitStore[key].resetTime.toString())
      
      return response
    }
  }
}

/**
 * Apply rate limiting to specific endpoints
 */
export const apiRateLimit = rateLimit({
  maxRequests: parseInt(process.env.RATE_LIMIT_MAX || '100'),
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW || '900000')
})

/**
 * Stricter rate limiting for authentication endpoints
 */
export const authRateLimit = rateLimit({
  maxRequests: 5,
  windowMs: 300000 // 5 minutes
})

/**
 * Rate limiting for chat endpoints
 */
export const chatRateLimit = rateLimit({
  maxRequests: 20,
  windowMs: 60000 // 1 minute
})
