# Profile APIs

Each user role has a dedicated profile endpoint. Students have academic details, companies have business info, consultants have expertise and ratings, and admins have department details.

## Role Profile Endpoints

| Method | Endpoint | Auth | UI Page |
|---|---|---|---|
| <span class="api-method get">GET</span> | `/api/student/profile` | Student | Student Profile |
| <span class="api-method put">PUT</span> | `/api/student/profile` | Student | Student Profile |
| <span class="api-method get">GET</span> | `/api/company/profile` | Company | Company Profile |
| <span class="api-method put">PUT</span> | `/api/company/profile` | Company | Company Profile |
| <span class="api-method get">GET</span> | `/api/consultant/profile` | Consultant | Consultant Profile |
| <span class="api-method put">PUT</span> | `/api/consultant/profile` | Consultant | Consultant Profile |
| <span class="api-method get">GET</span> | `/api/admin/profile` | Admin | Admin Profile |
| <span class="api-method put">PUT</span> | `/api/admin/profile` | Admin | Admin Profile |

## Student Profile

<span class="api-method get">GET</span> `/api/student/profile`

**UI Components:** `ProfileForm`, `AvatarUploader`

<span class="api-method put">PUT</span> `/api/student/profile`

**UI Components:** `ProfileForm`, `SkillTags`, `SaveButton`

## Company Profile

<span class="api-method get">GET</span> `/api/company/profile`

**UI Components:** `CompanyNameInput`, `LogoUploader`

<span class="api-method put">PUT</span> `/api/company/profile`

**UI Components:** `CompanyInfoForm`, `VerificationBadge`, `SaveButton`

## Consultant Profile

<span class="api-method get">GET</span> `/api/consultant/profile`

**UI Components:** `BioEditor`, `ExpertiseTags`, `RatingDisplay`

<span class="api-method put">PUT</span> `/api/consultant/profile`

**UI Components:** `BioEditor`, `QualificationsInput`, `SaveButton`

## Admin Profile

<span class="api-method get">GET</span> `/api/admin/profile`

**UI Components:** `NameInput`, `DepartmentInput`

<span class="api-method put">PUT</span> `/api/admin/profile`

**UI Components:** `ProfileForm`, `SaveButton`

---

## Company Verification (Admin)

| Method | Endpoint | Auth | UI Page |
|---|---|---|---|
| <span class="api-method get">GET</span> | `/api/admin/companies/pending` | Admin | Company Verification |
| <span class="api-method patch">PATCH</span> | `/api/admin/companies/:id/verify` | Admin | Company Verification |
| <span class="api-method patch">PATCH</span> | `/api/admin/companies/:id/reject` | Admin | Company Verification |

### List Pending Companies

<span class="api-method get">GET</span> `/api/admin/companies/pending`

**UI Components:** `CompanyDetailCard`, `VerificationStatusBadge`

### Verify Company

<span class="api-method patch">PATCH</span> `/api/admin/companies/:id/verify`

**UI Components:** `ApproveBtn`, `DocumentViewer`

### Reject Company

<span class="api-method patch">PATCH</span> `/api/admin/companies/:id/reject`

**UI Components:** `RejectBtn`, `RejectionReasonInput`
