import { NextRequest, NextResponse } from 'next/server';
import { connectDB, User, OTP } from '@/lib/db';
import { emailService } from '@/lib/emailService';
import { otpUtils } from '@/lib/otpUtils';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (user.isEmailVerified) {
      return NextResponse.json({ error: 'Email is already verified' }, { status: 400 });
    }

    const existingOTP = await OTP.findOne({ email: email.toLowerCase() });
    if (existingOTP) {
      if (otpUtils.isResendCooldownActive(existingOTP.createdAt)) {
        const remainingTime = otpUtils.getResendCooldownRemaining(existingOTP.createdAt);
        return NextResponse.json({ 
          error: `Please wait ${remainingTime} seconds before requesting a new OTP`,
          remainingTime 
        }, { status: 429 });
      }
      await OTP.findByIdAndDelete(existingOTP._id);
    }

    const newOTP = otpUtils.generateOTP();
    const hashedOTP = await otpUtils.hashOTP(newOTP);
    const expiresAt = otpUtils.getExpirationTime();

    const otpRecord = new OTP({
      email: email.toLowerCase().trim(),
      otp: hashedOTP,
      expiresAt,
    });

    await otpRecord.save();

    const emailSent = await emailService.sendOTP(email, newOTP, user.name);
    if (!emailSent) {
      await OTP.findByIdAndDelete(otpRecord._id);
      return NextResponse.json({ error: 'Failed to send verification email. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({
      message: 'New OTP sent successfully. Please check your email.',
      expiresAt: expiresAt.toISOString(),
      cooldownEndsAt: new Date(Date.now() + 30 * 1000).toISOString(),
    }, { status: 200 });

  } catch (error) {
    console.error('Resend OTP error:', error);
    return NextResponse.json({ error: 'Internal server error. Please try again.' }, { status: 500 });
  }
}
