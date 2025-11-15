# Pantri - Complete Setup Guide

This guide will help you set up Pantri for development on your local machine.

## Quick Start (5 minutes)

### Option 1: Docker (Recommended)

```bash
# 1. Clone repository
git clone https://github.com/yourusername/pantri.git
cd pantri

# 2. Start services
docker-compose up -d

# 3. Run migrations
cd backend
npm install
npx prisma migrate dev

# 4. Start mobile app
cd ../mobile
npm install
npm start
```

### Option 2: Manual Setup

Follow the detailed steps below.

## Detailed Setup Instructions

### 1. System Requirements

#### macOS/Linux
```bash
# Check Node.js version (should be 20+)
node --version

# Check Docker
docker --version
docker-compose --version

# Check PostgreSQL (if not using Docker)
psql --version
```

#### Required Software
- Node.js 20+ ([Download](https://nodejs.org/))
- Docker Desktop ([Download](https://www.docker.com/products/docker-desktop))
- Xcode (for iOS development)
- Git

### 2. Database Setup

#### Option A: Using Docker (Recommended)

```bash
# Start PostgreSQL and Redis
docker-compose up -d postgres redis

# Verify services are running
docker-compose ps
```

#### Option B: Local PostgreSQL

```bash
# macOS (using Homebrew)
brew install postgresql@15
brew services start postgresql@15

# Create database
createdb pantri

# Ubuntu/Debian
sudo apt-get install postgresql-15
sudo systemctl start postgresql
sudo -u postgres createdb pantri
```

### 3. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
```

#### Configure .env file

Edit `backend/.env`:

```env
# Required
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://postgres:password@localhost:5432/pantri?schema=public
JWT_SECRET=my-super-secret-key-change-this
JWT_REFRESH_SECRET=my-refresh-secret-key-change-this

# Optional (for full features)
OPENAI_API_KEY=sk-...your-key-here
REDIS_HOST=localhost
REDIS_PORT=6379

# Optional (for production features)
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_S3_BUCKET=
GOOGLE_CLOUD_VISION_KEY=
```

#### Initialize Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed database (optional)
npx prisma db seed

# Open Prisma Studio to view data
npx prisma studio
```

#### Start Backend Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm run build
npm start
```

Verify backend is running:
```bash
curl http://localhost:3000/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "environment": "development"
}
```

### 4. Mobile App Setup

```bash
cd mobile

# Install dependencies
npm install

# iOS specific (macOS only)
cd ios
pod install
cd ..
```

#### Install Expo CLI globally (if not already installed)

```bash
npm install -g expo-cli
```

#### Configure API endpoint

Edit `mobile/src/services/api.ts` if your backend is not on localhost:3000

```typescript
const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api/v1'  // Change this if needed
  : 'https://api.pantri.app/api/v1';
```

#### Start Mobile App

```bash
# Start Expo dev server
npm start

# Open in iOS Simulator
npm run ios

# Open in Android Emulator
npm run android

# Or scan QR code with Expo Go app on your phone
```

### 5. Verify Installation

#### Test Backend API

```bash
# Register a test user
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "firstName": "Test",
    "lastName": "User"
  }'

# Login
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

#### Test Mobile App

1. Launch the app on iOS simulator
2. You should see the Login screen
3. Tap "Don't have an account? Register"
4. Create a test account
5. You should be logged in and see the Inventory screen

### 6. Optional: AI Services Setup

#### OpenAI (for Recipe Generation)

1. Get API key from [OpenAI Platform](https://platform.openai.com/)
2. Add to `backend/.env`:
   ```env
   OPENAI_API_KEY=sk-your-key-here
   ```

#### Google Cloud Vision (for Advanced OCR)

1. Create project in [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Vision API
3. Create service account and download key
4. Add to `backend/.env`:
   ```env
   GOOGLE_CLOUD_VISION_KEY=/path/to/service-account-key.json
   ```

### 7. Development Tools

#### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "prisma.prisma",
    "ms-azuretools.vscode-docker",
    "expo.vscode-expo-tools"
  ]
}
```

#### Useful Commands

```bash
# Backend
npm run dev           # Start dev server
npm run build         # Build for production
npm test              # Run tests
npm run lint          # Lint code
npx prisma studio     # Open database GUI

# Mobile
npm start             # Start Expo
npm run ios           # Run on iOS
npm run android       # Run on Android
npm test              # Run tests

# Docker
docker-compose up -d          # Start all services
docker-compose down           # Stop all services
docker-compose logs -f        # View logs
docker-compose ps             # List services
```

## Troubleshooting

### Backend won't start

**Error:** "Cannot connect to database"
```bash
# Check PostgreSQL is running
docker-compose ps
# or
brew services list

# Check DATABASE_URL in .env is correct
cat backend/.env | grep DATABASE_URL
```

**Error:** "Port 3000 already in use"
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or change PORT in .env
```

### Mobile app won't connect to backend

**Issue:** API calls fail with network error

**Solution 1:** Update API URL in `mobile/src/services/api.ts`
```typescript
// Use your computer's IP instead of localhost
const API_BASE_URL = 'http://192.168.1.100:3000/api/v1';
```

**Solution 2:** Run on iOS simulator instead of physical device
```bash
npm run ios
```

### Database migration errors

```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Or manually drop and recreate
dropdb pantri
createdb pantri
npx prisma migrate dev
```

### iOS build errors

```bash
# Clean and reinstall pods
cd mobile/ios
rm -rf Pods Podfile.lock
pod install
cd ..
npm run ios
```

## Next Steps

1. ✅ Complete setup following this guide
2. 📖 Read [ARCHITECTURE.md](./ARCHITECTURE.md) to understand the system
3. 🎨 Explore the codebase
4. 🧪 Run tests: `npm test`
5. 💻 Start developing!

## Getting Help

- Check existing issues: [GitHub Issues](https://github.com/yourusername/pantri/issues)
- Ask questions: [GitHub Discussions](https://github.com/yourusername/pantri/discussions)
- Read docs: [Documentation](./docs/)

## Development Workflow

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes
3. Run tests: `npm test`
4. Commit: `git commit -m "Add my feature"`
5. Push: `git push origin feature/my-feature`
6. Create Pull Request

Happy coding! 🚀
