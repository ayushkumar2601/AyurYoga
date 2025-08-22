import nodemailer from 'nodemailer';

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
};

// Create transporter
const transporter = nodemailer.createTransporter(emailConfig);

// Email templates
const emailTemplates = {
  otp: (otp: string, userName: string) => ({
    subject: 'Verify Your Email - AyurYog',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification - AyurYog</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .otp-box { background: #fff; border: 2px solid #667eea; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0; }
            .otp-code { font-size: 32px; font-weight: bold; color: #667eea; letter-spacing: 5px; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .warning { background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px; padding: 15px; margin: 20px 0; color: #856404; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🧘‍♀️ AyurYog</h1>
              <p>Your Journey to Holistic Wellness Begins Here</p>
            </div>
            <div class="content">
              <h2>Hello ${userName}!</h2>
              <p>Thank you for joining AyurYog. To complete your registration and begin your wellness journey, please verify your email address.</p>
              
              <div class="otp-box">
                <p>Your verification code is:</p>
                <div class="otp-code">${otp}</div>
                <p>This code will expire in 5 minutes.</p>
              </div>
              
              <div class="warning">
                <strong>⚠️ Security Notice:</strong> Never share this code with anyone. AyurYog will never ask for your verification code via phone, email, or text message.
              </div>
              
              <p>If you didn't create an account with AyurYog, please ignore this email.</p>
              
              <p>Welcome to the community! 🌿✨</p>
            </div>
            <div class="footer">
              <p>&copy; 2024 AyurYog. All rights reserved.</p>
              <p>This is an automated email, please do not reply.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Verify Your Email - AyurYog
      
      Hello ${userName}!
      
      Thank you for joining AyurYog. To complete your registration, please use this verification code:
      
      ${otp}
      
      This code will expire in 5 minutes.
      
      If you didn't create an account with AyurYog, please ignore this email.
      
      Welcome to the community!
      
      © 2024 AyurYog. All rights reserved.
    `,
  }),
};

// Email service functions
export const emailService = {
  // Send OTP email
  async sendOTP(email: string, otp: string, userName: string): Promise<boolean> {
    try {
      const mailOptions = {
        from: `"AyurYog" <${process.env.SMTP_USER}>`,
        to: email,
        ...emailTemplates.otp(otp, userName),
      };

      await transporter.sendMail(mailOptions);
      console.log(`OTP email sent successfully to ${email}`);
      return true;
    } catch (error) {
      console.error('Error sending OTP email:', error);
      return false;
    }
  },

  // Verify email configuration
  async verifyConnection(): Promise<boolean> {
    try {
      await transporter.verify();
      console.log('Email service connection verified');
      return true;
    } catch (error) {
      console.error('Email service connection failed:', error);
      return false;
    }
  },
};

export default emailService;
