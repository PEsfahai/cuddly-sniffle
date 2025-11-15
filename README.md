# Pantri - Smart Food Management Platform

![Pantri Logo](https://via.placeholder.com/800x200/4CAF50/FFFFFF?text=PANTRI+-+Smart+Food+Management)

Pantri is an intelligent iOS-based food management platform that helps households track their kitchen inventory, reduce food waste, maximize savings, improve nutrition, and simplify cooking through AI-powered features.

## Features

### Core Functionality
- **Smart Inventory Management** - Track all food items with barcode scanning, OCR expiry detection, and AI product recognition
- **Expiry Alerts** - Real-time notifications before items expire to minimize waste
- **AI Recipe Generation** - Get personalized recipes based on available ingredients
- **Shopping List** - Auto-generated smart shopping lists with price comparison
- **Multi-Retailer Price Comparison** - Compare prices across major UK supermarkets (Tesco, Sainsbury's, Asda, M&S, Waitrose, Ocado)
- **Household Collaboration** - Share inventory and shopping lists with family members
- **Waste & Savings Analytics** - Track waste reduction and money saved

## Tech Stack

### Backend
- **Runtime:** Node.js 20 + TypeScript
- **Framework:** Express.js
- **Database:** PostgreSQL 15 with Prisma ORM
- **Cache:** Redis
- **Queue:** BullMQ
- **AI/ML:** OpenAI GPT-4, Tesseract.js (OCR), Google Cloud Vision

### Frontend
- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **State Management:** Redux Toolkit
- **UI Library:** React Native Paper
- **Navigation:** React Navigation

### DevOps
- **Containerization:** Docker & Docker Compose
- **Deployment:** AWS ECS/EKS
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry + DataDog

## Project Structure

```
pantri/
├── backend/                 # Node.js backend API
│   ├── prisma/             # Database schema & migrations
│   ├── src/
│   │   ├── config/         # Configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── services/       # Business logic
│   │   ├── models/         # Data models
│   │   ├── middleware/     # Express middleware
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utilities
│   │   └── index.ts        # Entry point
│   ├── Dockerfile
│   └── package.json
├── mobile/                  # React Native iOS app
│   ├── src/
│   │   ├── screens/        # App screens
│   │   ├── components/     # Reusable components
│   │   ├── navigation/     # Navigation config
│   │   ├── redux/          # State management
│   │   ├── services/       # API services
│   │   └── utils/          # Utilities
│   ├── App.tsx             # Root component
│   └── package.json
├── docs/                    # Documentation
├── docker-compose.yml       # Local development setup
├── ARCHITECTURE.md          # System architecture
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 20+ and npm/yarn
- Docker & Docker Compose
- PostgreSQL 15+ (or use Docker)
- iOS simulator (Xcode) or physical iOS device
- OpenAI API key (for AI features)

### Quick Start

```bash
# 1. Clone repository
git clone https://github.com/yourusername/pantri.git
cd pantri

# 2. Start services with Docker
docker-compose up -d

# 3. Setup backend
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npx prisma generate
npx prisma migrate dev
npm run dev

# 4. Setup mobile app (new terminal)
cd mobile
npm install
npm start
```

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed setup instructions.

## API Documentation

### Authentication

```bash
POST /api/v1/auth/register
POST /api/v1/auth/login
GET  /api/v1/auth/me
POST /api/v1/auth/refresh
POST /api/v1/auth/logout
```

### Inventory

```bash
GET    /api/v1/inventory/items
POST   /api/v1/inventory/items
PUT    /api/v1/inventory/items/:id
DELETE /api/v1/inventory/items/:id
POST   /api/v1/inventory/items/scan
POST   /api/v1/inventory/items/ocr
```

### Recipes

```bash
GET  /api/v1/recipes/suggestions
POST /api/v1/recipes/generate
GET  /api/v1/recipes/:id
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for complete API documentation.

## Development

### Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd mobile
npm test
```

### Database Management

```bash
cd backend

# Open Prisma Studio
npx prisma studio

# Create new migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset
```

## Deployment

### Docker Production

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Mobile App

```bash
cd mobile

# Build for iOS
eas build --platform ios

# Submit to App Store
eas submit --platform ios
```

## Roadmap

### Phase 1 (MVP) - Current
- ✅ User authentication
- ✅ Basic inventory management
- ✅ Shopping list
- ⏳ Barcode scanning
- ⏳ Recipe suggestions

### Phase 2
- AI recipe generation
- OCR expiry date extraction
- Price comparison
- Household collaboration

### Phase 3
- Waste analytics
- Nutrition tracking
- Voice input
- AR scanning mode

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is licensed under the MIT License.

## Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/pantri/issues)
- **Email:** support@pantri.app

---

Made with ❤️ by the Pantri Team
