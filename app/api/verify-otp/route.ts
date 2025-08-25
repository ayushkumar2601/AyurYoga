// import { NextRequest, NextResponse } from 'next/server';
// import { connectDB, User, OTP } from '@/lib/db';
// import { otpUtils } from '@/lib/otpUtils';
// import { jwtUtils } from '@/lib/jwt';

// export async function POST(request: NextRequest) {
//   try {
//     // Connect to database
//     await connectDB();

//     // Parse request body
//     const { email, otp } = await request.json();

//     // Validate input
//     if (!email || !otp) {
//       return NextResponse.json(
//         { error: 'Email and OTP are required' },
//         { status: 400 }
//       );
//     }

//     // Find user
//     const user = await User.findOne({ email: email.toLowerCase() });
//     if (!user) {
//       return NextResponse.json(
//         { error: 'User not found' },
//         { status: 404 }
//       );
//     }

//     // Check if user is already verified
//     if (user.isEmailVerified) {
//       return NextResponse.json(
//         { error: 'Email is already verified' },
//         { status: 400 }
//       );
//     }

//     // Find OTP record
//     const otpRecord = await OTP.findOne({ 
//       email: email.toLowerCase(),
//       expiresAt: { $gt: new Date() } // Only find non-expired OTPs
//     });

//     if (!otpRecord) {
//       return NextResponse.json(
//         { error: 'Invalid or expired OTP. Please request a new one.' },
//         { status: 400 }
//       );
//     }

//     // Verify OTP
//     const isValidOTP = await otpUtils.verifyOTP(otp, otpRecord.otp);
//     if (!isValidOTP) {
//       return NextResponse.json(
//         { error: 'Invalid OTP. Please check your code and try again.' },
//         { status: 400 }
//       );
//     }

//     // Update user verification status
//     user.isEmailVerified = true;
//     user.updatedAt = new Date();
//     await user.save();

//     // Delete the used OTP
//     await OTP.findByIdAndDelete(otpRecord._id);

//     // Generate JWT token
//     const token = jwtUtils.generateToken({
//       userId: user._id.toString(),
//       email: user.email,
//       isEmailVerified: user.isEmailVerified,
//       hasCompletedQuiz: user.hasCompletedQuiz,
//       hasSeenWelcome: user.hasSeenWelcome,
//     });

//     // Set HTTP-only cookie
//     const response = NextResponse.json({
//       message: 'Email verified successfully!',
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         isEmailVerified: user.isEmailVerified,
//         hasCompletedQuiz: user.hasCompletedQuiz,
//         hasSeenWelcome: user.hasSeenWelcome,
//       },
//     }, { status: 200 });

//     // Set secure HTTP-only cookie
//     response.cookies.set('auth-token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       maxAge: 7 * 24 * 60 * 60, // 7 days
//       path: '/',
//     });

//     return response;

//   } catch (error) {
//     console.error('OTP verification error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error. Please try again.' },
//       { status: 500 }
//     );
//   }
// }
