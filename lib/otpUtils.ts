import bcrypt from 'bcryptjs';

// OTP utility functions
export const otpUtils = {
  // Generate a random 6-digit OTP
  generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  },

  // Hash OTP for secure storage
  async hashOTP(otp: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(otp, saltRounds);
  },

  // Verify OTP against hash
  async verifyOTP(otp: string, hash: string): Promise<boolean> {
    return bcrypt.compare(otp, hash);
  },

  // Calculate OTP expiration time (5 minutes from now)
  getExpirationTime(): Date {
    const now = new Date();
    return new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes
  },

  // Check if OTP is expired
  isExpired(expiresAt: Date): boolean {
    return new Date() > expiresAt;
  },

  // Generate resend cooldown time (30 seconds from now)
  getResendCooldownTime(): Date {
    const now = new Date();
    return new Date(now.getTime() + 30 * 1000); // 30 seconds
  },

  // Check if resend cooldown is active
  isResendCooldownActive(lastSentAt: Date): boolean {
    const cooldownEnd = new Date(lastSentAt.getTime() + 30 * 1000);
    return new Date() < cooldownEnd;
  },

  // Get remaining time for OTP expiration (in seconds)
  getRemainingTime(expiresAt: Date): number {
    const now = new Date();
    const remaining = expiresAt.getTime() - now.getTime();
    return Math.max(0, Math.floor(remaining / 1000));
  },

  // Get remaining time for resend cooldown (in seconds)
  getResendCooldownRemaining(lastSentAt: Date): number {
    const cooldownEnd = new Date(lastSentAt.getTime() + 30 * 1000);
    const now = new Date();
    const remaining = cooldownEnd.getTime() - now.getTime();
    return Math.max(0, Math.floor(remaining / 1000));
  },
};

export default otpUtils;
