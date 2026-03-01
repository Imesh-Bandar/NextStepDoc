# Quick Start

## Operating Environment

- The system operates on modern web browsers: **Chrome**, **Firefox**, **Safari**, **Edge**
- Fully responsive across desktop, tablet, and mobile devices
- Backend hosted on cloud-based server infrastructure
- Database uses a relational DBMS (PostgreSQL / MySQL)

## Design & Implementation Constraints

| Constraint | Detail |
|---|---|
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

```
https://api.nextstep.lk/api
```

Content type is `application/json` and all protected endpoints require a `Bearer` JWT token:

```http
Authorization: Bearer <JWT Token>
```

::: tip
Tokens are issued on login via `POST /api/auth/login` and expire after **24 hours**.
:::

Jump to the [API Overview](/api/overview) to explore all endpoints.
