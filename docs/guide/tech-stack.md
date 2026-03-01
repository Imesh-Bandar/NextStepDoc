# Technology Stack

## Recommended Stack

| Layer | Technology | Purpose |
| ----- | ---------- | ------- |
| **Frontend** | Next.js 14+ (App Router) | Full-stack React framework with SSR and API routes |
| **Backend** | Next.js API Routes | RESTful API endpoints for business logic and authentication |
| **Database** | Neon PostgreSQL | Serverless PostgreSQL with auto-scaling and branching |
| **ORM** | Prisma / Drizzle ORM | Type-safe database queries and migrations |
| **Authentication** | Firebase Authentication + JWT | Secure authentication with Firebase, JWT tokens for API authorization |
| **Payment Gateway** | Stripe API | Secure third-party payment processing for freelance milestones |
| **File Storage** | AWS S3 / Vercel Blob | User documents, resumes, and work agreements |
| **Notifications** | Firebase Cloud Messaging | Push notifications and real-time in-app notifications |
| **Hosting** | Vercel | Serverless deployment with automatic scaling |

## System Architecture

NextStep follows a **modern full-stack architecture**:

1. **Presentation Layer** — Next.js frontend with React components
2. **API Layer** — Next.js API Routes (serverless functions)
3. **Data Layer** — Neon PostgreSQL with Prisma ORM

The system adopts a **RESTful API** design pattern to enable clean separation between frontend and backend, supporting future mobile application development.

## Production Deployment

**Live Application**: [Go to Live Doc](https://nextstep-docv3.vercel.app/)

## External Interfaces

| Interface | Description | Protocol |
| --------- | ----------- | -------- |
| Firebase Authentication | User authentication and authorization | Firebase SDK |
| Payment Gateway | Stripe for milestone-based freelance payments | HTTPS REST API |
| Cloud Storage | AWS S3 / Vercel Blob for document storage | HTTPS SDK |
| Push Notifications | Firebase Cloud Messaging for real-time in-app notifications | Firebase SDK |

## Communication Interfaces

- All client-server communication uses **HTTPS**
- Real-time features (notifications, chat) use **WebSocket** connections
- API communication uses **JSON** data format
- Email notifications support **HTML** formatted messages

## Design Constraints

- Microservices-friendly architecture for modular development
- All API endpoints follow **RESTful conventions** with proper HTTP status codes
- Database schema normalized to at least **Third Normal Form (3NF)**
- Database migrations for version-controlled schema changes
- Code follows established standards with **≥ 70% unit test coverage**
