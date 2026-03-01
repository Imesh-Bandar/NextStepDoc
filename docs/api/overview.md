# API Overview

The NextStep platform exposes approximately **~100 RESTful API endpoints** organized across functional domains. This section provides the complete API specification cross-referenced with the corresponding UI pages and components.

## Base URL & Versioning

```text
Base URL: https://api.nextstep.lk/api
Version:  v1 (prefix all routes with /api)
Content-Type: application/json
Authorization: Bearer <JWT Token>
```

## Authentication Model

All protected endpoints require a `Bearer` JWT token in the `Authorization` header. Tokens are issued via **Firebase Authentication** on login and expire after **24 hours**. Role-based access control (RBAC) is enforced server-side.

| Role | Token Scope | Description |
| ------------ | ----------------------------------------------------------------- | -------- |
| Public | No token | Landing, Login, Register, Notice Board, Complaint tracking |
| Student | `role=student` | Browse jobs, apply, quizzes/exams, freelance, appointments, CV, campaigns |
| Company | `role=company` | Post jobs, manage applicants, create quizzes/exams, freelance projects |
| Consultant | `role=consultant` | Manage appointments, sessions, view ratings |
| Admin | `role=admin` | Full access — user management, approvals, audits, reports, system settings |

## Standard Response Format

::: code-group
```json [Success]
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

```json [Error]
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email already exists",
    "details": [ ... ]
  }
}
```
:::

## HTTP Status Codes

| Code | Status | Usage |
| ------------ | ----------------------------------------------------------------- | -------- |
| `200` | OK | Successful GET / PATCH / PUT |
| `201` | Created | Successful POST |
| `400` | Bad Request | Validation errors |
| `401` | Unauthorized | Missing or invalid token |
| `403` | Forbidden | Insufficient role permissions |
| `404` | Not Found | Resource does not exist |
| `409` | Conflict | Duplicate resource (email, etc.) |
| `500` | Server Error | Unexpected server error |

## API Module Summary

| Module | Endpoints | Description |
| ------------ | ----------------------------------------------------------------- | -------- |
| [Authentication](/api/authentication) | 6 | Register, login, logout, password management |
| [User Management](/api/users) | 6 | Admin user management |
| [Profiles](/api/profiles) | 8+ | Role-specific profile CRUD |
| [Job Vacancies](/api/jobs) | 8 | Job posting, approval, browsing |
| [Applications](/api/applications) | 5 | Apply, track, review applications |
| [Quiz](/api/quiz) | 8 | Quiz creation, attempts, grading |
| [Mock Examination](/api/mock-exam) | 8 | Exam creation, proctoring, shortlisting |
| [Freelance Projects](/api/freelance) | 10 | Project posting, proposals, contracts |
| [Milestones](/api/milestones) | 5 | Milestone lifecycle management |
| [Payments](/api/payments) | 5 | Payment initiation, webhooks, refunds |
| [Appointments](/api/appointments) | 10 | Booking, management, ratings |
| [CV Builder](/api/cv-builder) | 6 | CV creation, templates, PDF export |
| [Event Campaigns](/api/campaigns) | 8 | Campaign creation, contributions, approval |
| [Notice Board](/api/notices) | 9 | Notice CRUD, targeting, read receipts |
| [Complaints](/api/complaints) | 9 | Submission, tracking, resolution |
| [Password Reset](/api/password-reset) | 4 | Admin-managed password resets |
| [Audit & Reports](/api/audit) | 2 | Audit logs, analytics exports |
