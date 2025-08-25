import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getUserFromRequest } from '@/lib/auth'
import { z } from 'zod'

// Validation schema for user profile updates
const profileUpdateSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  dateOfBirth: z.string().optional(),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY']).optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  timezone: z.string().optional(),
  doshaType: z.enum(['VATA', 'PITTA', 'KAPHA', 'VATA_PITTA', 'VATA_KAPHA', 'PITTA_KAPHA', 'TRIDOSHA']).optional(),
  healthGoals: z.array(z.string()).optional(),
  medicalHistory: z.string().optional(),
  allergies: z.array(z.string()).optional(),
})

// Get user profile
export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const userProfile = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: true,
        dateOfBirth: true,
        gender: true,
        phone: true,
        address: true,
        city: true,
        country: true,
        timezone: true,
        doshaType: true,
        healthGoals: true,
        medicalHistory: true,
        allergies: true,
        createdAt: true,
        updatedAt: true,
        userPreferences: {
          select: {
            notificationSettings: true,
            privacySettings: true,
            wellnessGoals: true,
            preferredCategories: true,
            timePreferences: true,
            accessibilitySettings: true,
          }
        }
      }
    })
    
    if (!userProfile) {
      return NextResponse.json(
        { error: 'User profile not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(userProfile)
    
  } catch (error) {
    console.error('Get user profile error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Update user profile
export async function PUT(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const body = await request.json()
    const validatedData = profileUpdateSchema.parse(body)
    
    // Prepare update data
    const updateData: any = { ...validatedData }
    
    // Convert date string to Date object if provided
    if (validatedData.dateOfBirth) {
      updateData.dateOfBirth = new Date(validatedData.dateOfBirth)
    }
    
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: true,
        dateOfBirth: true,
        gender: true,
        phone: true,
        address: true,
        city: true,
        country: true,
        timezone: true,
        doshaType: true,
        healthGoals: true,
        medicalHistory: true,
        allergies: true,
        updatedAt: true,
      }
    })
    
    return NextResponse.json({
      message: 'Profile updated successfully',
      user: updatedUser
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Update user profile error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
