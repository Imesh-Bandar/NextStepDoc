# Application APIs

Students submit applications with an attached CV. Companies review, shortlist, and update statuses.

## Application Status Flow

```
Submitted → Shortlisted → Quiz → Interview → Hired
                ↓                      ↓
             Rejected              Rejected
```

## Endpoints

| Method | Endpoint | Auth | UI Page |
| ------ | -------------------------------- | ------------ | -------------- |
| <span class="api-method post">POST</span> | `/api/applications` | Student | Job Detail |
| <span class="api-method get">GET</span> | `/api/applications` | Student | My Applications |
| <span class="api-method get">GET</span> | `/api/jobs/:id/applications` | Company | Applicants List |
| <span class="api-method patch">PATCH</span> | `/api/applications/:id/status` | Company | Applicants List |
| <span class="api-method get">GET</span> | `/api/applications/:id/cv` | Company | Applicants List |

## Submit Application

<span class="api-method post">POST</span> `/api/applications`

Student submits an application with an attached CV.

**UI Components:** `CVSelector`, `ApplyButton`, `AlertBanner`

## My Applications

<span class="api-method get">GET</span> `/api/applications`

Returns all applications for the authenticated student.

**UI Components:** `ApplicationTable`, `StatusBadge`, `FilterTabs`

## List Applicants for Job

<span class="api-method get">GET</span> `/api/jobs/:id/applications`

Returns all applicants for a specific job vacancy. Company access.

**UI Components:** `ApplicantTable`, `CVPreviewDrawer`, `FilterTabs`

## Update Application Status

<span class="api-method patch">PATCH</span> `/api/applications/:id/status`

Company updates an applicant's status (shortlist, hire, reject).

**UI Components:** `StatusDropdown`, `ShortlistBtn`, `HireBtn`, `RejectBtn`

## Preview Applicant CV

<span class="api-method get">GET</span> `/api/applications/:id/cv`

Returns the CV attached to a specific application.

**UI Components:** `CVPreviewDrawer`, `DownloadPDF`
