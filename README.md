# Plura - SAAS Website Builder

Plura is a comprehensive SaaS platform designed for agencies to manage their clients, subaccounts, and digital marketing operations efficiently.

## App Link :- https://saas-website-builder.vercel.app/

![Plura Logo](public/assests/preview.png)

## 🚀 Technologies Used

### Frontend
- **Next.js** - React framework for production
- **TypeScript** - For type-safe code
- **Tailwind CSS** - For styling
- **Shadcn UI** - Component library
- **uploadthing** - For file uploads
- **Mermaid** - For generating diagrams

### Backend
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **Stripe** - Payment processing
- **API Routes** - Next.js API routes for backend functionality

### Authentication & Authorization
- Custom authentication system with role-based access control
- Middleware for protected routes

## 🎯 Features

### Agency Management
- Create and manage agency profiles
- Handle multiple subaccounts
- Team member management
- Role-based access control

### Client Management
- Subaccount creation and management
- Custom domain support
- Client-specific dashboards

### Media Management
- File upload system
- Media library
- Asset organization

### Funnel Building
- Custom funnel creation
- Pipeline management
- Landing page builder
- Contact form integration

### Billing & Subscriptions
- Stripe integration
- Subscription management
- Payment processing
- Usage tracking

### Analytics & Reporting
- Pipeline value tracking
- Funnel performance metrics
- Custom charts and analytics
- Subaccount performance monitoring

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Run database migrations
bunx prisma generate
bunxx prisma migrate dev

# Start development server
bun run dev