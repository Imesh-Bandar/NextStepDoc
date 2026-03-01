# Complaint APIs

Any authenticated user can submit a complaint with a tracking ID for public tracking. Admins assign, investigate (audit trail), resolve, and close complaints.

## Endpoints

| Method | Endpoint | Auth | UI Page |
|---|---|---|---|
| <span class="api-method post">POST</span> | `/api/complaints` | Authenticated | Submit Complaint |
| <span class="api-method get">GET</span> | `/api/complaints/track/:tracking_id` | Public | Complaint Tracker |
| <span class="api-method get">GET</span> | `/api/complaints/my` | Authenticated | My Complaints |
| <span class="api-method get">GET</span> | `/api/admin/complaints` | Admin | Complaint Management |
| <span class="api-method get">GET</span> | `/api/admin/complaints/:id` | Admin | Complaint Detail |
| <span class="api-method patch">PATCH</span> | `/api/admin/complaints/:id/assign` | Admin | Complaint Management |
| <span class="api-method post">POST</span> | `/api/admin/complaints/:id/audit` | Admin | Complaint Management |
| <span class="api-method patch">PATCH</span> | `/api/admin/complaints/:id/resolve` | Admin | Complaint Management |
| <span class="api-method patch">PATCH</span> | `/api/admin/complaints/:id/close` | Admin | Complaint Management |

## Submit Complaint

<span class="api-method post">POST</span> `/api/complaints`

**UI Components:** `CategorySelect`, `SubjectInput`, `SubmitButton`, `TrackingIDDisplay`

**Request Body:**

```json
{
  "subject": "Payment not received for milestone #3",
  "description": "I completed and submitted milestone 3 on March 10...",
  "category": "Payment"
}
```

::: tip Complaint Categories
`Job`, `Freelance`, `Payment`, `Appointment`, `Other`
:::

**Response:**

```json
{
  "success": true,
  "data": {
    "complaint_id": 42,
    "tracking_id": "TRK-20260001",
    "status": "Open",
    "submitted_at": "2026-03-12T10:30:00Z"
  },
  "message": "Complaint submitted. Track with ID: TRK-20260001"
}
```

## Track Complaint (Public)

<span class="api-method get">GET</span> `/api/complaints/track/:tracking_id`

Public endpoint — anyone with the tracking ID can check complaint status.

**UI Components:** `ComplaintTracker`, `AuditTimeline`

## My Complaints

<span class="api-method get">GET</span> `/api/complaints/my`

**UI Components:** `ComplaintTracker`, `StatusBadge`

## Admin: List All Complaints

<span class="api-method get">GET</span> `/api/admin/complaints`

**UI Components:** `ComplaintTable`, `CategoryFilter`, `StatusFilter`

## Admin: Get Complaint Detail

<span class="api-method get">GET</span> `/api/admin/complaints/:id`

**UI Components:** `AuditTimeline`, `AddNoteForm`

## Admin: Assign Complaint

<span class="api-method patch">PATCH</span> `/api/admin/complaints/:id/assign`

**UI Components:** `AssignAdminDropdown`

## Admin: Add Audit Note

<span class="api-method post">POST</span> `/api/admin/complaints/:id/audit`

**UI Components:** `AddNoteForm`, `AuditTimeline`

## Admin: Resolve / Close Complaint

<span class="api-method patch">PATCH</span> `/api/admin/complaints/:id/resolve`

<span class="api-method patch">PATCH</span> `/api/admin/complaints/:id/close`

**UI Components:** `ResolveBtn` / `CloseBtn`, `StatusBadge`
