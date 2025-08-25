# AyurYog Backend Documentation

## 🏗️ Architecture Overview

This backend is built with **Next.js 15** using the App Router, **PostgreSQL** database with **Prisma ORM**, and **NextAuth.js** for authentication. The architecture follows a clean, scalable pattern with proper separation of concerns.

## 🗄️ Database Schema

### Core Models

#### User Management
- **User**: Complete user profiles with authentication, personal info, and Ayurvedic data
- **Account**: NextAuth.js OAuth account linking
- **Session**: User session management
- **VerificationToken**: Email verification tokens

#### Content Management
- **BlogPost**: Wellness articles and blog posts with SEO optimization
- **SavedArticle**: User bookmarks and saved content
- **WellnessProgram**: Yoga, Ayurveda, and meditation programs
- **ProgramModule**: Individual lessons within programs

#### User Experience
- **ChatMessage**: Chatbot conversation history
- **WellnessProgress**: User activity and progress tracking
- **ProgramEnrollment**: User participation in wellness programs
- **UserPreferences**: Personalized settings and preferences

### Key Features

- **Role-based Access Control**: USER, TUTOR, MODERATOR, ADMIN roles
- **Dosha Type Integration**: Vata, Pitta, Kapha, and combinations
- **Comprehensive Wellness Tracking**: Progress, mood, energy levels
- **Flexible Content System**: Tags, categories, difficulty levels
- **User Personalization**: Goals, preferences, accessibility settings

## 🚀 Setup Instructions

### 1. Environment Configuration

Copy `env.example` to `.env.local` and configure:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ayuryog_db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# JWT
JWT_SECRET="your-jwt-secret-key-here"

# Email (for OTP and notifications)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# OpenAI (for chatbot)
OPENAI_API_KEY="your-openai-api-key"

# Rate Limiting
RATE_LIMIT_MAX="100"
RATE_LIMIT_WINDOW="900000"
```

### 2. Database Setup

#### PostgreSQL Installation
```bash
# macOS (using Homebrew)
brew install postgresql
brew services start postgresql

# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql

# Windows
# Download from https://www.postgresql.org/download/windows/
```

#### Create Database
```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE ayuryog_db;
CREATE USER ayuryog_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE ayuryog_db TO ayuryog_user;
\q
```

### 3. Database Migration

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# Seed database with sample data
npx prisma db seed
```

### 4. Development Server

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔐 Authentication System

### NextAuth.js Configuration

- **Credentials Provider**: Email/password authentication
- **Google OAuth**: Social login integration
- **JWT Strategy**: Secure token-based sessions
- **Role-based Access**: Granular permission control

### API Protection

All protected endpoints require valid JWT tokens in the Authorization header:

```typescript
headers: {
  'Authorization': 'Bearer your-jwt-token-here'
}
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `GET/POST /api/auth/[...nextauth]` - NextAuth.js routes

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Content
- `GET /api/blog` - List blog posts
- `POST /api/blog` - Create blog post (Admin/Moderator)
- `GET /api/wellness` - List wellness programs
- `POST /api/wellness` - Create wellness program (Admin/Tutor)

### Chat
- `GET /api/chat` - Get chat history
- `POST /api/chat` - Store chat message

## 🛡️ Security Features

### Rate Limiting
- **API Endpoints**: 100 requests per 15 minutes
- **Authentication**: 5 requests per 5 minutes
- **Chat**: 20 requests per minute

### Input Validation
- **Zod Schemas**: Type-safe validation for all inputs
- **SQL Injection Protection**: Prisma ORM with parameterized queries
- **XSS Prevention**: Input sanitization and proper output encoding

### Authentication Security
- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure token generation and validation
- **Session Management**: Secure session handling with NextAuth.js

## 🗃️ Database Operations

### Prisma Client Usage

```typescript
import { prisma } from '@/lib/prisma'

// Create user
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    name: 'John Doe',
    password: hashedPassword,
  }
})

// Query with relations
const userWithProfile = await prisma.user.findUnique({
  where: { id: userId },
  include: {
    userPreferences: true,
    wellnessProgress: true,
  }
})
```

### Database Migrations

```bash
# Create new migration
npx prisma migrate dev --name add_new_feature

# Deploy to production
npx prisma migrate deploy

# Reset database (development only)
npx prisma migrate reset
```

## 🔄 Data Flow

### User Registration Flow
1. User submits registration form
2. Input validation with Zod
3. Password hashing with bcrypt
4. User creation in database
5. Default preferences creation
6. Success response with user data

### Authentication Flow
1. User submits credentials
2. NextAuth.js validates credentials
3. JWT token generation
4. Session establishment
5. Protected route access

### Chat Storage Flow
1. User sends message to chatbot
2. AI generates response
3. Message and response stored in database
4. Chat history retrieval for user

## 📊 Performance Optimization

### Database Indexing
- **Primary Keys**: Auto-indexed by Prisma
- **Foreign Keys**: Automatic indexing
- **Search Fields**: Full-text search optimization
- **User Queries**: Indexed by userId and timestamp

### Query Optimization
- **Selective Fields**: Only fetch required data
- **Pagination**: Efficient large dataset handling
- **Relation Loading**: Optimized include/exclude patterns
- **Connection Pooling**: Prisma client connection management

## 🧪 Testing

### Database Testing
```bash
# Test database connection
npx prisma db push --preview-feature

# Validate schema
npx prisma validate

# Generate types
npx prisma generate
```

### API Testing
```bash
# Test endpoints with curl
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'
```

## 🚀 Production Deployment

### Environment Variables
- Set `NODE_ENV=production`
- Use strong, unique secrets
- Configure production database URL
- Set up proper CORS origins

### Database Considerations
- **Connection Pooling**: Optimize for production load
- **Backup Strategy**: Regular automated backups
- **Monitoring**: Database performance monitoring
- **Scaling**: Read replicas for high-traffic scenarios

### Security Hardening
- **HTTPS Only**: Enforce secure connections
- **CORS Configuration**: Restrict allowed origins
- **Rate Limiting**: Production-appropriate limits
- **Input Sanitization**: Comprehensive validation

## 🔧 Maintenance

### Regular Tasks
- **Database Backups**: Daily automated backups
- **Log Monitoring**: Error and performance monitoring
- **Security Updates**: Regular dependency updates
- **Performance Review**: Query optimization and indexing

### Troubleshooting

#### Common Issues
1. **Database Connection**: Check DATABASE_URL and network
2. **Authentication Errors**: Verify JWT_SECRET and NextAuth config
3. **Migration Issues**: Ensure schema compatibility
4. **Rate Limiting**: Check request frequency and limits

#### Debug Commands
```bash
# Check Prisma status
npx prisma status

# View database in Prisma Studio
npx prisma studio

# Reset and reseed database
npx prisma migrate reset
npx prisma db seed
```

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

## 🤝 Contributing

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **JSDoc**: Comprehensive documentation

### Development Workflow
1. Create feature branch
2. Implement changes with tests
3. Update documentation
4. Submit pull request
5. Code review and merge

---

**Built with ❤️ for the AyurYog community**

For support and questions, please refer to the project documentation or create an issue in the repository.
