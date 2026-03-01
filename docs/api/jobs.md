# Job Vacancy APIs

Companies post jobs which go through admin approval before becoming visible to students. Jobs can optionally have a Quiz and/or Mock Examination attached.

## Endpoints

| Method | Endpoint | Auth | UI Page |
| ------ | -------------------------------- | ------------ | -------------- |
| <span class="api-method get">GET</span> | `/api/jobs` | Public | Browse Jobs |
| <span class="api-method get">GET</span> | `/api/jobs/:id` | Public | Job Detail |
| <span class="api-method post">POST</span> | `/api/jobs` | Company | Post Job |
| <span class="api-method put">PUT</span> | `/api/jobs/:id` | Company | Post Job (Edit) |
| <span class="api-method patch">PATCH</span> | `/api/jobs/:id/close` | Company | Job Vacancies |
| <span class="api-method get">GET</span> | `/api/admin/jobs/pending` | Admin | Job Approval |
| <span class="api-method patch">PATCH</span> | `/api/admin/jobs/:id/approve` | Admin | Job Approval |
| <span class="api-method patch">PATCH</span> | `/api/admin/jobs/:id/reject` | Admin | Job Approval |

## Browse Jobs

<span class="api-method get">GET</span> `/api/jobs`

Returns paginated, searchable job listings. Public access.

**UI Components:** `JobSearchBar`, `FilterSidebar`, `JobCard`, `Pagination`

## Get Job Detail

<span class="api-method get">GET</span> `/api/jobs/:id`

Returns full details for a single job posting.

**UI Components:** `JobHeader`, `CompanyInfo`, `JobDescription`, `ApplyButton`

## Create Job

<span class="api-method post">POST</span> `/api/jobs`

Creates a new job posting. Requires company role. Job enters pending status for admin approval.

**UI Components:** `JobTitleInput`, `DescriptionEditor`, `SaveDraftBtn`, `SubmitBtn`

**Request Body:**

```json
{
  "title": "Software Engineer Intern",
  "description": "We are looking for...",
  "required_skills": "React, Node.js, MySQL",
  "qualifications": "Undergraduate CS student",
  "salary": 45000.00,
  "location": "Colombo",
  "job_type": "Internship",
  "deadline": "2026-04-30T23:59:59Z",
  "has_quiz": true,
  "has_mock_exam": false
}
```

::: tip Job Types
Accepted values for `job_type`: `Full-time`, `Part-time`, `Internship`
:::

## Update Job

<span class="api-method put">PUT</span> `/api/jobs/:id`

Updates an existing job posting.

**UI Components:** `JobTitleInput`, `DescriptionEditor`, `SaveButton`

## Close Job

<span class="api-method patch">PATCH</span> `/api/jobs/:id/close`

Closes a job vacancy, preventing further applications.

**UI Components:** `CloseJobBtn`, `ConfirmModal`, `StatusBadge`

## Admin: List Pending Jobs

<span class="api-method get">GET</span> `/api/admin/jobs/pending`

Returns all jobs awaiting admin approval.

**UI Components:** `PendingJobsTable`, `JobPreview`

## Admin: Approve Job

<span class="api-method patch">PATCH</span> `/api/admin/jobs/:id/approve`

Approves a pending job, making it visible to students.

**UI Components:** `ApproveBtn`, `StatusBadge`, `AlertBanner`

## Admin: Reject Job

<span class="api-method patch">PATCH</span> `/api/admin/jobs/:id/reject`

Rejects a pending job with a reason.

**UI Components:** `RejectBtn`, `ReasonInput`
