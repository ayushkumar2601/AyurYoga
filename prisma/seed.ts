import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@ayuryog.com' },
    update: {},
    create: {
      email: 'admin@ayuryog.com',
      name: 'AyurYog Admin',
      password: adminPassword,
      role: 'ADMIN',
      doshaType: 'TRIDOSHA',
      healthGoals: ['Overall Wellness', 'Stress Management', 'Mind-Body Balance'],
      medicalHistory: 'No known medical conditions',
      allergies: [],
    },
  })

  // Create tutor user
  const tutorPassword = await bcrypt.hash('tutor123', 12)
  const tutor = await prisma.user.upsert({
    where: { email: 'tutor@ayuryog.com' },
    update: {},
    create: {
      email: 'tutor@ayuryog.com',
      name: 'Yoga Master',
      password: tutorPassword,
      role: 'TUTOR',
      doshaType: 'VATA_PITTA',
      healthGoals: ['Teaching Others', 'Personal Practice', 'Spiritual Growth'],
      medicalHistory: 'No known medical conditions',
      allergies: [],
    },
  })

  // Create sample user
  const userPassword = await bcrypt.hash('user123', 12)
  const user = await prisma.user.upsert({
    where: { email: 'user@ayuryog.com' },
    update: {},
    create: {
      email: 'user@ayuryog.com',
      name: 'Sample User',
      password: userPassword,
      role: 'USER',
      doshaType: 'VATA',
      healthGoals: ['Stress Relief', 'Better Sleep', 'Flexibility'],
      medicalHistory: 'No known medical conditions',
      allergies: [],
    },
  })

  // Create wellness programs
  const yogaProgram = await prisma.wellnessProgram.create({
    data: {
      title: 'Beginner Yoga Flow',
      description: 'A gentle introduction to yoga for beginners. Learn basic poses, breathing techniques, and mindfulness practices.',
      category: 'YOGA',
      difficulty: 'BEGINNER',
      duration: 45,
      thumbnail: '/yoga-beginner.jpg',
      requirements: ['Yoga mat', 'Comfortable clothing', 'Quiet space'],
      benefits: ['Improved flexibility', 'Stress reduction', 'Better posture', 'Mind-body awareness'],
      tags: ['yoga', 'beginner', 'flow', 'mindfulness'],
      isActive: true,
    },
  })

  const meditationProgram = await prisma.wellnessProgram.create({
    data: {
      title: 'Mindfulness Meditation',
      description: 'Learn the fundamentals of mindfulness meditation to reduce stress and improve mental clarity.',
      category: 'MEDITATION',
      difficulty: 'BEGINNER',
      duration: 20,
      thumbnail: '/meditation.jpg',
      requirements: ['Quiet space', 'Comfortable seating', 'Timer'],
      benefits: ['Reduced stress', 'Better focus', 'Emotional balance', 'Improved sleep'],
      tags: ['meditation', 'mindfulness', 'stress-relief', 'mental-health'],
      isActive: true,
    },
  })

  const ayurvedaProgram = await prisma.wellnessProgram.create({
    data: {
      title: 'Ayurvedic Daily Routine',
      description: 'Discover ancient Ayurvedic practices for daily wellness and balance.',
      category: 'AYURVEDA',
      difficulty: 'BEGINNER',
      duration: 30,
      thumbnail: '/ayurveda.jpg',
      requirements: ['Essential oils', 'Herbal teas', 'Daily planner'],
      benefits: ['Balanced energy', 'Better digestion', 'Improved sleep', 'Natural wellness'],
      tags: ['ayurveda', 'daily-routine', 'wellness', 'natural-healing'],
      isActive: true,
    },
  })

  // Create program modules
  await prisma.programModule.createMany({
    data: [
      {
        programId: yogaProgram.id,
        title: 'Introduction to Yoga',
        content: 'Learn about the history and philosophy of yoga, and prepare your mind and body for practice.',
        order: 1,
        duration: 10,
        videoUrl: 'https://example.com/yoga-intro.mp4',
      },
      {
        programId: yogaProgram.id,
        title: 'Basic Poses',
        content: 'Practice fundamental yoga poses including Mountain Pose, Child\'s Pose, and Downward Dog.',
        order: 2,
        duration: 20,
        videoUrl: 'https://example.com/basic-poses.mp4',
      },
      {
        programId: yogaProgram.id,
        title: 'Breathing and Relaxation',
        content: 'Learn proper breathing techniques and end with a guided relaxation session.',
        order: 3,
        duration: 15,
        videoUrl: 'https://example.com/breathing.mp4',
      },
      {
        programId: meditationProgram.id,
        title: 'Introduction to Mindfulness',
        content: 'Understanding what mindfulness is and how it can benefit your daily life.',
        order: 1,
        duration: 10,
        videoUrl: 'https://example.com/mindfulness-intro.mp4',
      },
      {
        programId: meditationProgram.id,
        title: 'Breathing Meditation',
        content: 'Practice focused breathing meditation to calm the mind and reduce stress.',
        order: 2,
        duration: 10,
        videoUrl: 'https://example.com/breathing-meditation.mp4',
      },
    ],
  })

  // Create sample blog posts
  const blogPost1 = await prisma.blogPost.create({
    data: {
      title: 'The Benefits of Daily Yoga Practice',
      content: 'Yoga is an ancient practice that has been used for thousands of years to promote physical, mental, and spiritual well-being. Regular practice can improve flexibility, strength, and balance while reducing stress and anxiety...',
      excerpt: 'Discover how daily yoga practice can transform your life and improve your overall well-being.',
      slug: 'benefits-daily-yoga-practice',
      authorId: tutor.id,
      status: 'PUBLISHED',
      publishedAt: new Date(),
      metaTitle: 'Daily Yoga Benefits - Transform Your Life',
      metaDescription: 'Learn about the amazing benefits of daily yoga practice and how it can improve your physical and mental health.',
      tags: ['yoga', 'wellness', 'health', 'mindfulness'],
      category: 'YOGA',
      featuredImage: '/yoga-benefits.jpg',
    },
  })

  const blogPost2 = await prisma.blogPost.create({
    data: {
      title: 'Understanding Your Dosha Type',
      content: 'Ayurveda, the ancient Indian system of medicine, recognizes three main dosha types: Vata, Pitta, and Kapha. Each dosha represents different elements and characteristics...',
      excerpt: 'Learn about the three dosha types in Ayurveda and how understanding yours can improve your health.',
      slug: 'understanding-dosha-types',
      authorId: admin.id,
      status: 'PUBLISHED',
      publishedAt: new Date(),
      metaTitle: 'Dosha Types in Ayurveda - Complete Guide',
      metaDescription: 'Comprehensive guide to understanding Vata, Pitta, and Kapha dosha types in Ayurvedic medicine.',
      tags: ['ayurveda', 'dosha', 'health', 'wellness'],
      category: 'AYURVEDA',
      featuredImage: '/dosha-types.jpg',
    },
  })

  // Create user preferences for all users
  await prisma.userPreferences.createMany({
    data: [
      {
        userId: admin.id,
        notificationSettings: {
          email: true,
          push: true,
          sms: false,
        },
        privacySettings: {
          profileVisibility: 'public',
          dataSharing: 'minimal',
        },
        wellnessGoals: ['Teaching Others', 'Personal Growth', 'Community Building'],
        preferredCategories: ['YOGA', 'AYURVEDA', 'MEDITATION'],
        timePreferences: {
          morning: true,
          afternoon: true,
          evening: false,
        },
        accessibilitySettings: {
          fontSize: 'medium',
          contrast: 'normal',
        },
      },
      {
        userId: tutor.id,
        notificationSettings: {
          email: true,
          push: true,
          sms: false,
        },
        privacySettings: {
          profileVisibility: 'public',
          dataSharing: 'moderate',
        },
        wellnessGoals: ['Teaching Excellence', 'Personal Practice', 'Student Development'],
        preferredCategories: ['YOGA', 'MEDITATION', 'PRANAYAMA'],
        timePreferences: {
          morning: true,
          afternoon: true,
          evening: true,
        },
        accessibilitySettings: {
          fontSize: 'medium',
          contrast: 'normal',
        },
      },
      {
        userId: user.id,
        notificationSettings: {
          email: true,
          push: false,
          sms: false,
        },
        privacySettings: {
          profileVisibility: 'private',
          dataSharing: 'minimal',
        },
        wellnessGoals: ['Stress Relief', 'Better Sleep', 'Flexibility'],
        preferredCategories: ['YOGA', 'MEDITATION'],
        timePreferences: {
          morning: false,
          afternoon: true,
          evening: true,
        },
        accessibilitySettings: {
          fontSize: 'medium',
          contrast: 'normal',
        },
      },
    ],
  })

  console.log('✅ Database seeding completed successfully!')
  console.log(`👥 Created ${3} users`)
  console.log(`🧘 Created ${3} wellness programs`)
  console.log(`📝 Created ${2} blog posts`)
  console.log(`⚙️ Created user preferences for all users`)
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
