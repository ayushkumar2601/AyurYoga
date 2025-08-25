import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

// Validation schema for user registration
const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  dateOfBirth: z.string().optional(),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY']).optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  timezone: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = registerSchema.parse(body)
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      )
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 12)
    
    // Create user
    const user = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
        dateOfBirth: validatedData.dateOfBirth ? new Date(validatedData.dateOfBirth) : null,
        gender: validatedData.gender,
        phone: validatedData.phone,
        address: validatedData.address,
        city: validatedData.city,
        country: validatedData.country,
        timezone: validatedData.timezone,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      }
    })
    
    // Create default user preferences
    await prisma.userPreferences.create({
      data: {
        userId: user.id,
        notificationSettings: {
          email: true,
          push: true,
          sms: false,
        },
        privacySettings: {
          profileVisibility: 'public',
          dataSharing: 'minimal',
        },
        wellnessGoals: [],
        preferredCategories: [],
        timePreferences: {
          morning: true,
          afternoon: true,
          evening: true,
        },
        accessibilitySettings: {
          fontSize: 'medium',
          contrast: 'normal',
        },
      }
    })
    
    return NextResponse.json(
      { 
        message: 'User registered successfully',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
      { status: 201 }
    )
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
