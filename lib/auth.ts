import { NextRequest, NextResponse } from 'next/server';
import { jwtUtils, JWTPayload } from '@/lib/jwt';
import { connectDB, User } from '@/lib/db';

// Authentication middleware for API routes
export async function authenticateRequest(request: NextRequest): Promise<{
  user: JWTPayload | null;
  error: string | null;
}> {
  try {
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return { user: null, error: 'Authentication token not found' };
    }

    const decoded = jwtUtils.verifyToken(token);
    if (!decoded) {
      return { user: null, error: 'Invalid or expired token' };
    }

    // Verify user still exists in database
    await connectDB();
    const user = await User.findById(decoded.userId);
    if (!user) {
      return { user: null, error: 'User not found' };
    }

    // Update token with latest user data
    const updatedPayload: JWTPayload = {
      userId: user._id.toString(),
      email: user.email,
      isEmailVerified: user.isEmailVerified,
      hasCompletedQuiz: user.hasCompletedQuiz,
      hasSeenWelcome: user.hasSeenWelcome,
    };

    return { user: updatedPayload, error: null };
  } catch (error) {
    console.error('Authentication error:', error);
    return { user: null, error: 'Authentication failed' };
  }
}

// Route protection middleware
export function protectRoute(
  handler: (request: NextRequest, user: JWTPayload) => Promise<NextResponse>
) {
  return async (request: NextRequest) => {
    const { user, error } = await authenticateRequest(request);
    
    if (error || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return handler(request, user);
  };
}

// Quiz completion check middleware
export function requireQuizCompletion(
  handler: (request: NextRequest, user: JWTPayload) => Promise<NextResponse>
) {
  return async (request: NextRequest) => {
    const { user, error } = await authenticateRequest(request);
    
    if (error || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!user.isEmailVerified) {
      return NextResponse.json({ error: 'Email verification required' }, { status: 403 });
    }

    if (!user.hasCompletedQuiz) {
      return NextResponse.json({ error: 'Quiz completion required' }, { status: 403 });
    }

    return handler(request, user);
  };
}

// Welcome page check middleware
export function requireWelcomeCompletion(
  handler: (request: NextRequest, user: JWTPayload) => Promise<NextResponse>
) {
  return async (request: NextRequest) => {
    const { user, error } = await authenticateRequest(request);
    
    if (error || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!user.isEmailVerified) {
      return NextResponse.json({ error: 'Email verification required' }, { status: 403 });
    }

    if (!user.hasCompletedQuiz) {
      return NextResponse.json({ error: 'Quiz completion required' }, { status: 403 });
    }

    if (!user.hasSeenWelcome) {
      return NextResponse.json({ error: 'Welcome page completion required' }, { status: 403 });
    }

    return handler(request, user);
  };
}

// Client-side authentication hook helper
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  
  // Get token from localStorage (for client-side use)
  return localStorage.getItem('auth-token');
}

export function setAuthToken(token: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('auth-token', token);
}

export function removeAuthToken(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('auth-token');
}

export function isAuthenticated(): boolean {
  const token = getAuthToken();
  if (!token) return false;
  
  const decoded = jwtUtils.decodeToken(token);
  return decoded !== null && decoded.isEmailVerified;
}

export function canAccessQuiz(): boolean {
  const token = getAuthToken();
  if (!token) return false;
  
  const decoded = jwtUtils.decodeToken(token);
  return decoded !== null && decoded.isEmailVerified;
}

export function canAccessWelcome(): boolean {
  const token = getAuthToken();
  if (!token) return false;
  
  const decoded = jwtUtils.decodeToken(token);
  return decoded !== null && decoded.isEmailVerified && decoded.hasCompletedQuiz;
}

export function canAccessDashboard(): boolean {
  const token = getAuthToken();
  if (!token) return false;
  
  const decoded = jwtUtils.decodeToken(token);
  return decoded !== null && decoded.isEmailVerified && decoded.hasCompletedQuiz && decoded.hasSeenWelcome;
}
