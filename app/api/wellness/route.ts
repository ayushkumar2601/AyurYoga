import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getUserFromRequest } from '@/lib/auth'
import { z } from 'zod'

// Validation schema for wellness programs
const wellnessProgramSchema = z.object({
  title: z.string().min(1, 'Title cannot be empty'),
  description: z.string().min(1, 'Description cannot be empty'),
  category: z.enum(['YOGA', 'AYURVEDA', 'MEDITATION', 'PRANAYAMA', 'MINDFULNESS', 'NUTRITION', 'LIFESTYLE']),
  difficulty: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'ALL_LEVELS']),
  duration: z.number().min(1, 'Duration must be at least 1 minute'),
  thumbnail: z.string().optional(),
  requirements: z.array(z.string()).default([]),
  benefits: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  isActive: z.boolean().default(true),
})

// Get all wellness programs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')
    const difficulty = searchParams.get('difficulty')
    const search = searchParams.get('search')
    const isActive = searchParams.get('isActive') !== 'false'
    
    const skip = (page - 1) * limit
    
    // Build where clause
    const where: any = { isActive }
    
    if (category) {
      where.category = category
    }
    
    if (difficulty) {
      where.difficulty = difficulty
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { tags: { has: search } },
      ]
    }
    
    const [programs, total] = await Promise.all([
      prisma.wellnessProgram.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          title: true,
          description: true,
          category: true,
          difficulty: true,
          duration: true,
          thumbnail: true,
          requirements: true,
          benefits: true,
          tags: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
          _count: {
            select: {
              modules: true,
              enrollments: true,
            }
          }
        }
      }),
      prisma.wellnessProgram.count({ where })
    ])
    
    return NextResponse.json({
      programs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    })
    
  } catch (error) {
    console.error('Get wellness programs error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Create a new wellness program
export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Only admins and tutors can create wellness programs
    if (!['ADMIN', 'TUTOR'].includes(user.role)) {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }
    
    const body = await request.json()
    const validatedData = wellnessProgramSchema.parse(body)
    
    const program = await prisma.wellnessProgram.create({
      data: validatedData,
      select: {
        id: true,
        title: true,
        category: true,
        difficulty: true,
        duration: true,
        createdAt: true,
      }
    })
    
    return NextResponse.json(program, { status: 201 })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Create wellness program error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
