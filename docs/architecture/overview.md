# System Architecture Overview

## Modern Full-Stack Architecture

NextStep follows a modern full-stack architecture with Next.js as both frontend and backend:

```
┌─────────────────────────────────────────────────┐
│              Presentation Layer                  │
│           Next.js 14+ (App Router)               │
│              React Server Components             │
└──────────────────────┬──────────────────────────┘
                       │ HTTPS / REST / WebSocket
┌──────────────────────▼──────────────────────────┐
│                  API Layer                       │
│          Next.js API Routes (Serverless)         │
│   ┌──────────┬───────────┬──────────────────┐   │
│   │   Auth   │   RBAC    │  Business Rules  │   │
│   │(Firebase)│           │                  │   │
│   └──────────┴───────────┴──────────────────┘   │
└──────────────────────┬──────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────┐
│                 Data Layer                       │
│   ┌──────────────┐  ┌───────────────────────┐   │
│   │    Neon      │  │  AWS S3 / Vercel      │   │
│   │  PostgreSQL  │  │  Blob Storage         │   │
│   └──────────────┘  └───────────────────────┘   │
└─────────────────────────────────────────────────┘
```

## External Service Integrations

```
┌──────────────┐    ┌──────────────────┐    ┌──────────────┐
│   Firebase   │    │     Stripe       │    │   Firebase   │
│     Auth     │    │   (Payments)     │    │  Cloud FCM   │
│              │    │                  │    │(Notifications)│
└──────┬───────┘    └────────┬─────────┘    └──────┬───────┘
       │                     │                      │
       └─────────────────────┼──────────────────────┘
                             │
                    HTTPS REST API / SDK
                             │
               ┌─────────────▼─────────────┐
               │     NextStep Backend       │
               │   (Next.js API Routes)     │
               └───────────────────────────┘
```

## Design Principles

| Principle | Implementation |
| ------------ | ---------------------------------------------------------------------------- |
| **RESTful API** | Clean separation between frontend and backend; supports future mobile apps |
| **Microservices-ready** | Modular architecture for independent development and deployment |
| **Normalized Data** | Database schema in Third Normal Form (3NF) |
| **Version-controlled Schema** | Database migrations for all schema changes |
| **Test Coverage** | Minimum 70% unit test coverage |
| **Security First** | TLS 1.2+, bcrypt hashing, CSRF protection, input sanitization |

## Scalability Strategy

- **Horizontal scaling** of serverless functions on Vercel
- **Database partitioning** and read replicas with Neon PostgreSQL
- Designed to accommodate **10,000+ registered users** without architectural changes
- Cloud-native deployment on **Vercel**
- Production deployment: [https://nextstepdocv1.vercel.app/](https://nextstepdocv1.vercel.app/)
