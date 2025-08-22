import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB, User, OTP } from '@/lib/db';
import { emailService } from '@/lib/emailService';
import { otpUtils } from '@/lib/otpUtils';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const user = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      isEmailVerified: false,
      hasCompletedQuiz: false,
      hasSeenWelcome: false,
    });

    await user.save();

    // Generate OTP
    const otp = otpUtils.generateOTP();
    const hashedOTP = await otpUtils.hashOTP(otp);
    const expiresAt = otpUtils.getExpirationTime();

    // Save OTP to database
    const otpRecord = new OTP({
      email: email.toLowerCase().trim(),
      otp: hashedOTP,
      expiresAt,
    });

    await otpRecord.save();

    // Send OTP email
    const emailSent = await emailService.sendOTP(email, otp, name);
    if (!emailSent) {
      // If email fails, delete the user and OTP
      await User.findByIdAndDelete(user._id);
      await OTP.findByIdAndDelete(otpRecord._id);
      
      return NextResponse.json(
        { error: 'Failed to send verification email. Please try again.' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({
      message: 'User registered successfully. Please check your email for verification code.',
      userId: user._id,
      email: user.email,
    }, { status: 201 });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
