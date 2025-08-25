import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getUserFromRequest } from '@/lib/auth'
import { z } from 'zod'

// Validation schema for chat messages
const chatMessageSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
  botReply: z.string().min(1, 'Bot reply cannot be empty'),
  messageType: z.enum(['TEXT', 'IMAGE', 'AUDIO', 'VIDEO']).default('TEXT'),
  metadata: z.record(z.any()).optional(),
})

// Get chat history for a user
export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const skip = (page - 1) * limit
    
    const chatMessages = await prisma.chatMessage.findMany({
      where: { userId: user.id },
      orderBy: { timestamp: 'desc' },
      skip,
      take: limit,
      select: {
        id: true,
        message: true,
        botReply: true,
        timestamp: true,
        messageType: true,
        metadata: true,
      }
    })
    
    const total = await prisma.chatMessage.count({
      where: { userId: user.id }
    })
    
    return NextResponse.json({
      messages: chatMessages,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    })
    
  } catch (error) {
    console.error('Get chat history error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Store a new chat message
export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const body = await request.json()
    const validatedData = chatMessageSchema.parse(body)
    
    const chatMessage = await prisma.chatMessage.create({
      data: {
        userId: user.id,
        message: validatedData.message,
        botReply: validatedData.botReply,
        messageType: validatedData.messageType,
        metadata: validatedData.metadata || {},
      },
      select: {
        id: true,
        message: true,
        botReply: true,
        timestamp: true,
        messageType: true,
        metadata: true,
      }
    })
    
    return NextResponse.json(chatMessage, { status: 201 })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Store chat message error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
