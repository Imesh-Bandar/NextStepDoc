# Appointment APIs

Students browse consultants, book appointments, and join sessions via meeting links. Consultants confirm, reschedule, and complete sessions. Post-session ratings update the consultant's `average_rating`.

## Endpoints

| Method | Endpoint | Auth | UI Page |
| ------ | -------------------------------- | ------------ | -------------- |
| <span class="api-method get">GET</span> | `/api/consultants` | Student | Book Appointment |
| <span class="api-method get">GET</span> | `/api/consultants/:id` | Student | Book Appointment |
| <span class="api-method post">POST</span> | `/api/appointments` | Student | Book Appointment |
| <span class="api-method get">GET</span> | `/api/appointments/student` | Student | My Appointments |
| <span class="api-method get">GET</span> | `/api/appointments/consultant` | Consultant | Appointment Requests |
| <span class="api-method patch">PATCH</span> | `/api/appointments/:id/confirm` | Consultant | Appointment Requests |
| <span class="api-method patch">PATCH</span> | `/api/appointments/:id/reschedule` | Consultant | Appointment Requests |
| <span class="api-method patch">PATCH</span> | `/api/appointments/:id/complete` | Consultant | Session Management |
| <span class="api-method patch">PATCH</span> | `/api/appointments/:id/cancel` | Student / Consultant | My Appointments |
| <span class="api-method get">GET</span> | `/api/admin/appointments` | Admin | Appointment Oversight |

## Browse Consultants

<span class="api-method get">GET</span> `/api/consultants`

**UI Components:** `ConsultantGrid`, `ConsultantCard`, `StarRating`

## Consultant Detail

<span class="api-method get">GET</span> `/api/consultants/:id`

**UI Components:** `ConsultantCard`, `ExpertiseTags`, `AvailabilityCalendar`

## Book Appointment

<span class="api-method post">POST</span> `/api/appointments`

**UI Components:** `TimePicker`, `DurationSelect`, `BookButton`

**Request Body:**

```json
{
  "consultant_id": 5,
  "scheduled_datetime": "2026-03-20T14:00:00Z",
  "duration_minutes": 60,
  "notes": "Need help with interview preparation for FAANG"
}
```

## Confirm Appointment

<span class="api-method patch">PATCH</span> `/api/appointments/:id/confirm`

**UI Components:** `ConfirmBtn`, `MeetingLinkDisplay`

## Reschedule Appointment

<span class="api-method patch">PATCH</span> `/api/appointments/:id/reschedule`

**UI Components:** `RescheduleForm`, `DateTimePicker`

## Complete Session

<span class="api-method patch">PATCH</span> `/api/appointments/:id/complete`

**UI Components:** `MarkCompleteBtn`, `NotesTextarea`

## Cancel Appointment

<span class="api-method patch">PATCH</span> `/api/appointments/:id/cancel`

**UI Components:** `CancelModal`, `ConfirmModal`

---

## Ratings

| Method | Endpoint | Auth | UI Page |
| ------ | -------------------------------- | ------------ | -------------- |
| <span class="api-method post">POST</span> | `/api/ratings` | Student | My Appointments |
| <span class="api-method get">GET</span> | `/api/consultant/ratings` | Consultant | Ratings & Feedback |

### Submit Rating

<span class="api-method post">POST</span> `/api/ratings`

**UI Components:** `RatingModal`, `StarPicker`, `FeedbackTextarea`

### View Ratings

<span class="api-method get">GET</span> `/api/consultant/ratings`

**UI Components:** `AverageRatingCard`, `StarBreakdownChart`, `FeedbackList`
