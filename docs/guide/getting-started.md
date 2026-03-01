# Quick Start

## Links

**Repository**: [https://github.com/Imesh-Bandar/NextStepDoc.git](https://github.com/Imesh-Bandar/NextStepDoc.git)
**Live Application**: [https://nextstepdocv1.vercel.app/](https://nextstepdocv1.vercel.app/)

## Operating Environment

- The system operates on modern web browsers: **Chrome**, **Firefox**, **Safari**, **Edge**
- Fully responsive across desktop, tablet, and mobile devices
- Backend hosted on Vercel / AWS infrastructure
- Database uses **Neon PostgreSQL** (serverless PostgreSQL)

## Design & Implementation Constraints

| Constraint | Detail |
| ------------------- | --------------------------------------------------------- |
| Data Protection | Must comply with institutional data protection and privacy policies |
| Payment Processing | Must integrate with approved third-party payment gateways |
| Concurrent Users | Must support at least **500 simultaneous users** |
| Encryption | All communications encrypted using **TLS 1.2+** |
| Responsive Design | Must follow responsive web design principles |

## Assumptions & Dependencies

- Users have access to stable internet connectivity
- Companies will provide accurate and verifiable registration information
- The institution provides administrative support for platform moderation
- Third-party payment gateway APIs remain available and stable
- Students have valid institutional email addresses for registration

## API Quick Start

All API requests use the base URL:

```text
https://api.nextstep.lk/api
```

Content type is `application/json` and all protected endpoints require a JWT Bearer token:

```http
Authorization: Bearer <JWT Token>
```

::: tip
JWT tokens are issued via Firebase Authentication on login and expire after **24 hours**. Role-based access control (RBAC) is enforced server-side.
:::

Jump to the [API Overview](/api/overview) to explore all endpoints.
