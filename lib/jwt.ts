import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// JWT payload interface
export interface JWTPayload {
  userId: string;
  email: string;
  isEmailVerified: boolean;
  hasCompletedQuiz: boolean;
  hasSeenWelcome: boolean;
  iat?: number;
  exp?: number;
}

// JWT utility functions
export const jwtUtils = {
  // Generate JWT token
  generateToken(payload: Omit<JWTPayload, 'iat' | 'exp'>): string {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
      issuer: 'ayuryog',
      audience: 'ayuryog-users',
    });
  },

  // Verify JWT token
  verifyToken(token: string): JWTPayload | null {
    try {
      const decoded = jwt.verify(token, JWT_SECRET, {
        issuer: 'ayuryog',
        audience: 'ayuryog-users',
      }) as JWTPayload;
      
      return decoded;
    } catch (error) {
      console.error('JWT verification failed:', error);
      return null;
    }
  },

  // Decode JWT token without verification (for client-side use)
  decodeToken(token: string): JWTPayload | null {
    try {
      return jwt.decode(token) as JWTPayload;
    } catch (error) {
      console.error('JWT decode failed:', error);
      return null;
    }
  },

  // Refresh token with updated payload
  refreshToken(token: string, updates: Partial<JWTPayload>): string | null {
    try {
      const decoded = jwt.verify(token, JWT_SECRET, {
        issuer: 'ayuryog',
        audience: 'ayuryog-users',
      }) as JWTPayload;
      
      const newPayload: Omit<JWTPayload, 'iat' | 'exp'> = {
        userId: decoded.userId,
        email: decoded.email,
        isEmailVerified: decoded.isEmailVerified,
        hasCompletedQuiz: decoded.hasCompletedQuiz,
        hasSeenWelcome: decoded.hasSeenWelcome,
        ...updates,
      };
      
      return this.generateToken(newPayload);
    } catch (error) {
      console.error('JWT refresh failed:', error);
      return null;
    }
  },
};

export default jwtUtils;
