# Pantri - System Architecture

## Overview
Pantri is a smart kitchen management platform consisting of an iOS mobile app, backend API services, AI processing pipeline, and data integrations.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         iOS App (React Native)                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │Inventory │ │ Recipe   │ │Shopping  │ │Analytics │           │
│  │  Screen  │ │  Screen  │ │   List   │ │  Screen  │           │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
└─────────────────────────────────────────────────────────────────┘
                            ↕ HTTPS/REST API
┌─────────────────────────────────────────────────────────────────┐
│                      API Gateway (Node.js/Express)               │
└─────────────────────────────────────────────────────────────────┘
                                  ↕
┌─────────────────────────────────────────────────────────────────┐
│                        Microservices Layer                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │   Auth   │ │Inventory │ │  Recipe  │ │  Price   │           │
│  │ Service  │ │ Service  │ │ Service  │ │Comparison│           │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                        │
│  │Household │ │   AI     │ │Notification                       │
│  │ Service  │ │ Service  │ │ Service  │                        │
│  └──────────┘ └──────────┘ └──────────┘                        │
└─────────────────────────────────────────────────────────────────┘
                                  ↕
┌─────────────────────────────────────────────────────────────────┐
│                      PostgreSQL Database                         │
│  users | households | inventory_items | recipes | prices         │
└─────────────────────────────────────────────────────────────────┘
                                  ↕
┌─────────────────────────────────────────────────────────────────┐
│                      External Services                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │ OpenAI   │ │OpenFood  │ │ Retailer │ │  APNs    │           │
│  │  (GPT)   │ │  Facts   │ │  APIs    │ │  Push    │           │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend
- **Framework:** React Native 0.73+ with TypeScript
- **State Management:** Redux Toolkit + RTK Query
- **Navigation:** React Navigation 6
- **Camera:** react-native-camera / react-native-vision-camera
- **Barcode:** react-native-camera-kit
- **Push Notifications:** @react-native-firebase/messaging
- **Storage:** AsyncStorage + MMKV
- **UI:** React Native Paper + custom components

### Backend
- **Runtime:** Node.js 20 LTS
- **Framework:** Express.js with TypeScript
- **API Documentation:** Swagger/OpenAPI 3.0
- **Authentication:** JWT + bcrypt
- **Validation:** Zod
- **ORM:** Prisma
- **Queue:** BullMQ with Redis
- **Caching:** Redis
- **File Storage:** AWS S3 / Cloudinary

### Database
- **Primary:** PostgreSQL 15+
- **Schema Management:** Prisma migrations
- **Backup:** Automated daily backups

### AI/ML Services
- **OCR:** Tesseract.js + Google Cloud Vision API (fallback)
- **Product Recognition:** TensorFlow Lite / MobileNet
- **Recipe Generation:** OpenAI GPT-4
- **NLP:** OpenAI for cooking assistant
- **Optimization:** Custom algorithms for basket optimization

### DevOps
- **Containerization:** Docker + Docker Compose
- **CI/CD:** GitHub Actions
- **Hosting:** AWS (ECS/EKS) or Railway
- **Monitoring:** Sentry + DataDog
- **Logs:** Winston + CloudWatch

## Service Breakdown

### 1. Auth Service
- User registration/login
- JWT token generation
- Apple Sign-In integration
- Password reset

### 2. Inventory Service
- CRUD operations for inventory items
- Barcode lookup integration
- Expiry tracking
- Duplicate detection

### 3. Recipe Service
- Recipe generation via AI
- Recipe storage
- Ingredient matching
- Nutrition calculation

### 4. Price Comparison Service
- Retailer price scraping/API integration
- Price history tracking
- Basket optimization algorithm
- Split-basket suggestions

### 5. Household Service
- Household management
- Member invitations
- Real-time sync
- Activity logs

### 6. AI Service
- OCR processing
- Product recognition
- Waste prediction
- Smart recommendations

### 7. Notification Service
- Expiry alerts
- Waste warnings
- Weekly reports
- APNs integration

## Database Schema Overview

**Core Tables:**
- users (id, email, password_hash, created_at)
- households (id, name, created_at)
- household_members (household_id, user_id, role)
- inventory_items (id, household_id, product_id, quantity, expiry_date, location)
- products (id, name, brand, barcode, category_id, nutrition)
- recipes (id, name, instructions, prep_time, servings, nutrition)
- shopping_lists (id, household_id)
- shopping_list_items (id, list_id, product_name, quantity, bought)
- retailers (id, name, logo_url)
- retailer_prices (id, product_id, retailer_id, price, updated_at)
- waste_events (id, household_id, product_id, reason, timestamp)

## API Structure

```
/api/v1
  /auth
    POST /register
    POST /login
    POST /refresh
    POST /logout
  /inventory
    GET    /items
    POST   /items
    PUT    /items/:id
    DELETE /items/:id
    POST   /items/scan
    POST   /items/ocr
  /recipes
    GET  /suggestions
    POST /generate
    GET  /:id
  /shopping
    GET  /list
    POST /list/items
    PUT  /list/items/:id
    GET  /prices/compare
  /households
    POST /create
    POST /invite
    GET  /members
  /analytics
    GET  /waste
    GET  /savings
    GET  /insights
```

## Security

- HTTPS only
- JWT with refresh tokens
- Rate limiting
- Input validation and sanitization
- SQL injection prevention (Prisma ORM)
- GDPR compliance
- Encrypted storage for sensitive data

## Scalability Considerations

- Horizontal scaling via load balancer
- Database connection pooling
- Redis caching for frequently accessed data
- Async job processing with BullMQ
- CDN for static assets
- Database read replicas for analytics

## Monitoring & Observability

- Application logs (Winston)
- Error tracking (Sentry)
- Performance metrics (DataDog)
- Uptime monitoring
- Database query performance
- API response times

## Deployment Strategy

1. **Development:** Local Docker Compose
2. **Staging:** AWS ECS with RDS
3. **Production:** AWS EKS with auto-scaling
4. **Mobile:** TestFlight → App Store

## Data Flow Examples

### Adding an Item via Barcode
1. User scans barcode in iOS app
2. App sends barcode to `/api/v1/inventory/items/scan`
3. Backend queries OpenFoodFacts API
4. Product info retrieved and saved to DB
5. OCR service extracts expiry date from photo
6. Item added to household inventory
7. Real-time sync to all household members

### Recipe Generation
1. User requests recipe suggestions
2. App calls `/api/v1/recipes/suggestions`
3. Backend queries inventory for available items
4. Prioritizes near-expiry items
5. Sends prompt to OpenAI GPT-4
6. Returns AI-generated recipe with nutrition
7. User can save or start cooking mode

### Price Comparison
1. User views shopping list
2. App calls `/api/v1/shopping/prices/compare`
3. Backend queries price database
4. Runs basket optimization algorithm
5. Returns best retailer per item + split suggestions
6. User sees total savings potential

## Future Enhancements

- Voice input for adding items
- AR scanning mode
- Smart fridge integration
- Carbon footprint tracking
- Meal prep scheduling
- Social sharing features
- Premium subscription tier
