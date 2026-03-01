# Freelance Project APIs

Companies post freelance projects with milestone-based payment structures. Students submit proposals and, once accepted, a Work Agreement is generated automatically.

## Endpoints

| Method | Endpoint | Auth | UI Page |
|---|---|---|---|
| <span class="api-method get">GET</span> | `/api/freelance/projects` | Public | Browse Freelance |
| <span class="api-method get">GET</span> | `/api/freelance/projects/:id` | Public | Project Detail |
| <span class="api-method post">POST</span> | `/api/freelance/projects` | Company | Post Project |
| <span class="api-method put">PUT</span> | `/api/freelance/projects/:id` | Company | Post Project (Edit) |
| <span class="api-method post">POST</span> | `/api/freelance/projects/:id/apply` | Student | Project Detail |
| <span class="api-method get">GET</span> | `/api/freelance/projects/:id/proposals` | Company | Freelance Proposals |
| <span class="api-method patch">PATCH</span> | `/api/freelance/applications/:id/accept` | Company | Freelance Proposals |
| <span class="api-method patch">PATCH</span> | `/api/freelance/applications/:id/reject` | Company | Freelance Proposals |
| <span class="api-method get">GET</span> | `/api/freelance/projects/my` | Student | My Freelance Projects |
| <span class="api-method get">GET</span> | `/api/freelance/projects/company` | Company | Freelance Projects |

## Browse Projects

<span class="api-method get">GET</span> `/api/freelance/projects`

**UI Components:** `ProjectSearchBar`, `ProjectCard`, `StatusFilter`

## Get Project Detail

<span class="api-method get">GET</span> `/api/freelance/projects/:id`

**UI Components:** `ProjectHeader`, `MilestoneList`, `BudgetBreakdown`

## Create Project

<span class="api-method post">POST</span> `/api/freelance/projects`

**UI Components:** `ProjectTitleInput`, `BudgetInput`, `MilestonesBuilder`

## Apply for Project

<span class="api-method post">POST</span> `/api/freelance/projects/:id/apply`

**UI Components:** `CoverNoteTextarea`, `ApplyButton`

## View Proposals

<span class="api-method get">GET</span> `/api/freelance/projects/:id/proposals`

**UI Components:** `ProposalCard`, `StudentPortfolio`, `AcceptBtn`

## Accept / Reject Proposal

<span class="api-method patch">PATCH</span> `/api/freelance/applications/:id/accept`

<span class="api-method patch">PATCH</span> `/api/freelance/applications/:id/reject`

**UI Components:** `AcceptBtn` / `RejectBtn`, `ConfirmModal`

## My Freelance Projects (Student)

<span class="api-method get">GET</span> `/api/freelance/projects/my`

**UI Components:** `ProjectTable`, `MilestoneTracker`, `StatusBadge`

## Company Freelance Projects

<span class="api-method get">GET</span> `/api/freelance/projects/company`

**UI Components:** `ProjectTable`, `ActiveContractors`
