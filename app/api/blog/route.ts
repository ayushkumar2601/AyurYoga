import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getUserFromRequest } from '@/lib/auth'
import { z } from 'zod'

// Validation schema for blog posts
const blogPostSchema = z.object({
  title: z.string().min(1, 'Title cannot be empty'),
  content: z.string().min(1, 'Content cannot be empty'),
  excerpt: z.string().optional(),
  slug: z.string().min(1, 'Slug cannot be empty'),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  tags: z.array(z.string()).default([]),
  category: z.string().optional(),
  featuredImage: z.string().optional(),
})

// Get all blog posts (public)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')
    const tag = searchParams.get('tag')
    const search = searchParams.get('search')
    const status = searchParams.get('status') || 'PUBLISHED'
    
    const skip = (page - 1) * limit
    
    // Build where clause
    const where: any = { status: status as any }
    
    if (category) {
      where.category = category
    }
    
    if (tag) {
      where.tags = { has: tag }
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
      ]
    }
    
    const [blogPosts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { publishedAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          title: true,
          excerpt: true,
          slug: true,
          status: true,
          publishedAt: true,
          createdAt: true,
          updatedAt: true,
          tags: true,
          category: true,
          featuredImage: true,
          viewCount: true,
          likeCount: true,
          shareCount: true,
          author: {
            select: {
              id: true,
              name: true,
              image: true,
            }
          }
        }
      }),
      prisma.blogPost.count({ where })
    ])
    
    return NextResponse.json({
      posts: blogPosts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    })
    
  } catch (error) {
    console.error('Get blog posts error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Create a new blog post
export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Only admins and moderators can create blog posts
    if (!['ADMIN', 'MODERATOR'].includes(user.role)) {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }
    
    const body = await request.json()
    const validatedData = blogPostSchema.parse(body)
    
    // Check if slug already exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug: validatedData.slug }
    })
    
    if (existingPost) {
      return NextResponse.json(
        { error: 'Slug already exists' },
        { status: 409 }
      )
    }
    
    const blogPost = await prisma.blogPost.create({
      data: {
        ...validatedData,
        authorId: user.id,
        publishedAt: validatedData.status === 'PUBLISHED' ? new Date() : null,
      },
      select: {
        id: true,
        title: true,
        slug: true,
        status: true,
        createdAt: true,
      }
    })
    
    return NextResponse.json(blogPost, { status: 201 })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Create blog post error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
