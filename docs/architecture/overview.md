# System Architecture Overview

## Three-Tier Architecture

NextStep follows a three-tier architecture with clean separation of concerns:

```
┌─────────────────────────────────────────────────┐
│              Presentation Layer                  │
│          React.js / Next.js (SPA + SSR)          │
└──────────────────────┬──────────────────────────┘
                       │ HTTPS / REST / WebSocket
┌──────────────────────▼──────────────────────────┐
│             Business Logic Layer                 │
│          Spring Boot (RESTful API Server)         │
│   ┌──────────┬───────────┬──────────────────┐   │
│   │   Auth   │   RBAC    │  Business Rules  │   │
│   │  (JWT)   │           │                  │   │
│   └──────────┴───────────┴──────────────────┘   │
└──────────────────────┬──────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────┐
│                 Data Layer                        │
│   ┌──────────────┐  ┌───────────────────────┐   │
│   │ PostgreSQL /  │  │  AWS S3 / Cloud       │   │
│   │ MySQL (RDBMS) │  │  Storage (Files)      │   │
│   └──────────────┘  └───────────────────────┘   │
└─────────────────────────────────────────────────┘
```

## External Service Integrations

```
┌──────────────┐    ┌──────────────────┐    ┌──────────────┐
│   Stripe /   │    │   SendGrid /     │    │   Twilio     │
│   PayPal     │    │   Firebase FCM   │    │   (SMS/OTP)  │
│  (Payments)  │    │ (Email + Push)   │    │              │
└──────┬───────┘    └────────┬─────────┘    └──────┬───────┘
       │                     │                      │
       └─────────────────────┼──────────────────────┘
                             │
                    HTTPS REST API / SDK
                             │
               ┌─────────────▼─────────────┐
               │     NextStep Backend       │
               │      (Spring Boot)         │
               └───────────────────────────┘
```

## Design Principles

| Principle | Implementation |
|---|---|
| **RESTful API** | Clean separation between frontend and backend; supports future mobile apps |
| **Microservices-ready** | Modular architecture for independent development and deployment |
| **Normalized Data** | Database schema in Third Normal Form (3NF) |
| **Version-controlled Schema** | Database migrations for all schema changes |
| **Test Coverage** | Minimum 70% unit test coverage |
| **Security First** | TLS 1.2+, bcrypt hashing, CSRF protection, input sanitization |

## Scalability Strategy

- **Horizontal scaling** of application servers
- **Database partitioning** and read replicas
- Designed to accommodate **10,000+ registered users** without architectural changes
- Cloud-native deployment on **AWS / Azure / GCP**
