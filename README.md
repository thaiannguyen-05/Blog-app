# Blog-Andev Backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

## 📋 Mục lục

- [✨ Tính năng](#-tính-năng)
- [🏗️ Kiến trúc hệ thống](#️-kiến-trúc-hệ-thống)
- [💻 Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [🚀 Cài đặt & Thiết lập](#-cài-đặt--thiết-lập)
- [⚙️ Cấu hình](#️-cấu-hình)
- [🎯 Sử dụng](#-sử-dụng)
- [📖 API Documentation](#-api-documentation)
- [🔄 Workflow](#-workflow)
- [🚢 Deployment](#-deployment)
- [🤝 Đóng góp](#-đóng-góp)
- [📞 Support](#-support)
- [📄 License](#-license)

## ✨ Tính năng

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (RBAC)
- Social login integration
- Password reset functionality

### 👤 User Management
- User registration and profile management
- Avatar upload and management
- User preferences and settings

### 📝 Blog & Content Management
- Create, read, update, delete blog posts
- Rich text editor support
- Post categorization and tagging
- Draft and publish workflow

### 💬 Comments & Interaction
- Nested comments system
- Comment moderation
- Real-time notifications

### 💬 Real-time Chat
- WebSocket-based chat system
- Private messaging
- Chat history and persistence

### 📧 Email Service
- Email notifications
- Template-based emails
- Queue-based email processing
- SMTP integration

### 📁 File Management
- File upload and storage
- Image optimization
- Local and cloud storage support (S3 ready)

### 📊 Logging & Monitoring
- Structured logging with Winston
- Request/response logging
- Error tracking and monitoring

### ⚡ Caching
- Custom cache implementation
- Redis integration ready
- Query result caching

### 🕒 Task Scheduling
- Cron job support
- Background task processing
- Email queue management

### 🔍 GraphQL API
- Auto-generated GraphQL schema
- Type-safe resolvers
- GraphQL Playground integration

## 🏗️ Kiến trúc hệ thống

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL với Prisma ORM
- **Authentication**: Passport.js + JWT
- **Package Manager**: pnpm
- **API**: GraphQL + REST
- **Real-time**: WebSocket
- **Logging**: Winston
- **Queue**: Bull (Redis-based)

### Cấu trúc dự án

```
backend/
├── 📁 src/
│   ├── 📄 main.ts                    # Application entry point
│   ├── 📄 app.module.ts              # Root module
│   ├── 📄 schema.gql                 # Generated GraphQL schema
│   ├── 📁 common/                    # Shared utilities
│   │   ├── 📁 decorator/             # Custom decorators
│   │   ├── 📁 func/                  # Utility functions
│   │   └── 📁 roles/                 # Role definitions
│   ├── 📁 email/                     # Email service
│   │   ├── 📄 email.service.ts       # Email service
│   │   ├── 📄 email.consumer.ts      # Queue consumer
│   │   ├── 📄 email.producer.ts      # Queue producer
│   │   └── 📁 templates/             # Email templates
│   ├── 📁 modules/                   # Feature modules
│   │   ├── 📁 auth/                  # Authentication
│   │   ├── 📁 user/                  # User management
│   │   ├── 📁 post/                  # Blog posts
│   │   ├── 📁 comment/               # Comments
│   │   ├── 📁 chat/                  # Real-time chat
│   │   ├── 📁 files/                 # File management
│   │   ├── 📁 logger/                # Logging service
│   │   ├── 📁 custom-cache/          # Caching service
│   │   └── 📁 tasks/                 # Scheduled tasks
│   └── 📁 prisma/                    # Database service
│       ├── 📄 prisma.module.ts
│       └── 📄 prisma.service.ts
├── 📁 prisma/                        # Database schema
│   ├── 📁 schema/                    # Prisma schema files
│   │   ├── 📄 schema.prisma          # Main schema
│   │   ├── 📄 auth.prisma            # Auth models
│   │   ├── 📄 user.prisma            # User models
│   │   ├── 📄 chat.prisma            # Chat models
│   │   ├── 📄 owner.prisma           # Owner models
│   │   └── 📄 social.prisma          # Social models
│   └── 📁 generated/                 # Generated Prisma client
├── 📁 test/                          # Test files
├── 📁 typings/                       # Type definitions
├── 📁 log/                           # Log files
├── 📁 uploads/                       # Uploaded files
└── 📄 pnpm-workspace.yaml            # pnpm workspace config
```

## 💻 Yêu cầu hệ thống

- **Node.js**: 18.x hoặc cao hơn
- **PostgreSQL**: 14.x hoặc cao hơn
- **pnpm**: 8.x hoặc cao hơn
- **Redis**: 6.x hoặc cao hơn (tùy chọn, cho caching và queue)

## 🚀 Cài đặt & Thiết lập

### Clone & Install

```bash
git clone <repository-url>
cd blog-app/backend
pnpm install
```

### Cấu hình môi trường

```bash
# Sao chép file cấu hình mẫu
cp .env.example .env

# Chỉnh sửa các biến môi trường
nano .env
```

### Cấu hình database

```bash
# Generate Prisma client
pnpm prisma generate

# Push schema to database
pnpm run db:push

# Run migrations (production)
pnpm prisma migrate deploy

# Seed database (optional)
pnpm prisma db seed
```

## ⚙️ Cấu hình

### Biến môi trường (.env)

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/blog_db"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# Email Service
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
FROM_EMAIL="noreply@yourdomain.com"

# File Upload
UPLOAD_DEST="./uploads"
MAX_FILE_SIZE=5242880

# Redis (optional)
REDIS_HOST="localhost"
REDIS_PORT=6379
REDIS_PASSWORD=""

# App Configuration
PORT=3000
NODE_ENV="development"
```

### Database Schema

Hệ thống sử dụng Prisma với các model chính:

- **User**: Thông tin người dùng, authentication
- **Post**: Blog posts và content
- **Comment**: Bình luận cho posts
- **Chat**: Tin nhắn real-time
- **File**: Quản lý file upload
- **Task**: Scheduled tasks

## 🎯 Sử dụng

### Scripts có sẵn

```bash
# Development
pnpm run start              # Start server
pnpm run start:dev          # Start with hot reload
pnpm run start:debug        # Start with debug mode

# Production
pnpm run build              # Build for production
pnpm run start:prod         # Start production server

# Database
pnpm run db:push            # Push schema to database
pnpm prisma studio          # Open Prisma Studio
pnpm prisma migrate dev     # Run migrations
pnpm prisma generate        # Generate Prisma client

# Code Quality
pnpm run lint               # ESLint check
pnpm run lint:fix           # Auto-fix ESLint issues
pnpm run format             # Format code with Prettier

# Testing
pnpm run test               # Run unit tests
pnpm run test:watch         # Run tests in watch mode
pnpm run test:e2e           # Run e2e tests
pnpm run test:cov           # Run tests with coverage
```

### Khởi chạy development server

```bash
# Start development server
pnpm run start:dev

# Server will run on http://localhost:3000
# GraphQL Playground: http://localhost:3000/graphql
```

## 📖 API Documentation

### GraphQL API

- **Endpoint**: `/graphql`
- **Playground**: `http://localhost:3000/graphql` (development only)
- **Schema**: Auto-generated from resolvers

### Main GraphQL Operations

```graphql
# User Operations
mutation Register {
  register(input: { email: "user@example.com", password: "password" }) {
    user { id email }
    token
  }
}

mutation Login {
  login(input: { email: "user@example.com", password: "password" }) {
    user { id email }
    token
  }
}

# Post Operations
query GetPosts {
  posts {
    id
    title
    content
    author { name }
    comments { id content }
  }
}

mutation CreatePost {
  createPost(input: { title: "New Post", content: "Content here" }) {
    id
    title
    createdAt
  }
}
```

### REST Endpoints

```
GET    /health              # Health check
POST   /auth/login          # Login
POST   /auth/register       # Register
POST   /files/upload        # File upload
GET    /files/:id           # Get file
```

## 🔄 Workflow

### Development Process

1. **Feature Development**
   ```bash
   git checkout -b feature/new-feature
   pnpm run start:dev
   # Develop feature
   pnpm run test
   ```

2. **Code Quality**
   ```bash
   pnpm run lint:fix
   pnpm run format
   pnpm run test:cov
   ```

3. **Database Changes**
   ```bash
   # Modify schema in prisma/schema/
   pnpm prisma generate
   pnpm run db:push
   ```

4. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/new-feature
   ```

## 🚢 Deployment

### Sử dụng Docker

```bash
# Development
docker-compose -f docker-compose.dev.yml up --build

# Production
docker-compose up --build
```

### Manual Deployment

```bash
# Build
pnpm run build

# Set production environment
export NODE_ENV=production

# Run migrations
pnpm prisma migrate deploy

# Start production server
pnpm run start:prod
```

### Deploy với PM2

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start dist/main.js --name blog-backend

# Save PM2 configuration
pm2 save
pm2 startup
```

## 🧪 Testing

### Test Structure

```
test/
├── app.e2e-spec.ts         # E2E tests
├── jest-e2e.json           # E2E Jest config
└── unit/                   # Unit tests (in src/ alongside modules)
```

### Running Tests

```bash
# Unit tests
pnpm run test

# E2E tests
pnpm run test:e2e

# Coverage report
pnpm run test:cov

# Watch mode
pnpm run test:watch
```

## 🤝 Đóng góp

### Development Guidelines

1. Fork repository
2. Create feature branch
3. Follow coding standards
4. Write tests for new features
5. Update documentation
6. Submit pull request

### Code Standards

- Use TypeScript strict mode
- Follow NestJS conventions
- Write meaningful commit messages
- Add JSDoc comments
- Maintain test coverage > 80%

## 📞 Support

- **Author**: Thai An The Dev
- **Email**: thaianthedev@gmail.com
- **Issues**: Create issue on GitHub
- **Discord**: [https://discord.gg/G7Qnnhy](https://discord.gg/G7Qnnhy)

### Getting Help

1. Check existing issues
2. Read documentation
3. Ask in Discord community
4. Create detailed bug report

## 📄 License

This project is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="mailto:thaianthedev@gmail.com">Thai An The Dev</a>
</p>
