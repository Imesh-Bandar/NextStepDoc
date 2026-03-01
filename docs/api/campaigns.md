# Event Campaign APIs

Students organize events and collect contributions via shareable links. Admin approval is required before a campaign goes live. Campaigns support item selection (e.g., per-item pricing for T-shirts, meals).

## Endpoints

| Method | Endpoint | Auth | UI Page |
|---|---|---|---|
| <span class="api-method get">GET</span> | `/api/campaigns` | Authenticated | Event Campaigns |
| <span class="api-method get">GET</span> | `/api/campaigns/:link` | Public | Event Campaigns |
| <span class="api-method post">POST</span> | `/api/campaigns` | Student | Create Campaign |
| <span class="api-method post">POST</span> | `/api/campaigns/:id/contribute` | Authenticated | Event Campaigns |
| <span class="api-method get">GET</span> | `/api/admin/campaigns/pending` | Admin | Campaign Approval |
| <span class="api-method patch">PATCH</span> | `/api/admin/campaigns/:id/approve` | Admin | Campaign Approval |
| <span class="api-method patch">PATCH</span> | `/api/admin/campaigns/:id/reject` | Admin | Campaign Approval |
| <span class="api-method patch">PATCH</span> | `/api/admin/campaigns/:id/cancel` | Admin | Campaign Monitor |

## List Campaigns

<span class="api-method get">GET</span> `/api/campaigns`

**UI Components:** `CampaignCard`, `ProgressBar`, `DeadlineCountdown`

## Get Campaign by Link

<span class="api-method get">GET</span> `/api/campaigns/:link`

Public access via unique shareable link.

**UI Components:** `CampaignCard`, `ProgressBar`, `ContributeBtn`

## Create Campaign

<span class="api-method post">POST</span> `/api/campaigns`

**UI Components:** `TitleInput`, `TargetAmountInput`, `SubmitForApproval`

## Contribute to Campaign

<span class="api-method post">POST</span> `/api/campaigns/:id/contribute`

**UI Components:** `ContributeBtn`, `ItemSelector`, `PaymentFlow`

## Admin: Pending Campaigns

<span class="api-method get">GET</span> `/api/admin/campaigns/pending`

**UI Components:** `PendingCampaignTable`, `CampaignPreview`

## Admin: Approve / Reject / Cancel

<span class="api-method patch">PATCH</span> `/api/admin/campaigns/:id/approve`

**UI Components:** `ApproveBtn`, `StatusBadge`

<span class="api-method patch">PATCH</span> `/api/admin/campaigns/:id/reject`

**UI Components:** `RejectBtn`, `ReasonInput`

<span class="api-method patch">PATCH</span> `/api/admin/campaigns/:id/cancel`

Force-closes a campaign with optional refund trigger.

**UI Components:** `ForceCloseBtn`, `RefundTrigger`
