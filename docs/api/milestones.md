# Milestone APIs

Milestone lifecycle management for freelance projects.

## Milestone Status Flow

```
Pending → InProgress → Submitted → Approved → Paid
                            ↓
                    (Revision Requested)
                            ↓
                       InProgress
```

## Endpoints

| Method | Endpoint | Auth | UI Page |
| ------ | -------------------------------- | ------------ | -------------- |
| <span class="api-method get">GET</span> | `/api/freelance/projects/:id/milestones` | Student / Company | My Freelance Projects |
| <span class="api-method post">POST</span> | `/api/freelance/projects/:id/milestones` | Company | Post Project |
| <span class="api-method patch">PATCH</span> | `/api/milestones/:id/submit` | Student | My Freelance Projects |
| <span class="api-method patch">PATCH</span> | `/api/milestones/:id/approve` | Company | Milestone Review |
| <span class="api-method patch">PATCH</span> | `/api/milestones/:id/revision` | Company | Milestone Review |

## List Milestones

<span class="api-method get">GET</span> `/api/freelance/projects/:id/milestones`

**UI Components:** `MilestoneTimeline`, `StatusBadge`

## Create Milestone

<span class="api-method post">POST</span> `/api/freelance/projects/:id/milestones`

**UI Components:** `MilestonesBuilder`, `DueDatePicker`

## Submit Milestone

<span class="api-method patch">PATCH</span> `/api/milestones/:id/submit`

Student submits a completed milestone for company review.

**UI Components:** `SubmitMilestoneBtn`, `ConfirmModal`

## Approve Milestone

<span class="api-method patch">PATCH</span> `/api/milestones/:id/approve`

Company approves the milestone, triggering payment processing.

**UI Components:** `ApproveBtn`, `PaymentStatus`

## Request Revision

<span class="api-method patch">PATCH</span> `/api/milestones/:id/revision`

Company requests changes before approval.

**UI Components:** `RequestRevisionBtn`, `RevisionNoteInput`
