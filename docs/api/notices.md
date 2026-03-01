# Notice Board APIs

Admins create, schedule, and manage notices. Notices are role-targeted (Student, Company, Consultant, or All). Read receipts are tracked. Pinned and high-priority notices appear at the top.

## Endpoints

| Method | Endpoint | Auth | UI Page |
| ------ | -------------------------------- | ------------ | -------------- |
| <span class="api-method get">GET</span> | `/api/notices` | Authenticated | Notice Board |
| <span class="api-method get">GET</span> | `/api/notices/:id` | Authenticated | Notice Board |
| <span class="api-method post">POST</span> | `/api/admin/notices` | Admin | Create Notice |
| <span class="api-method put">PUT</span> | `/api/admin/notices/:id` | Admin | Create Notice (Edit) |
| <span class="api-method patch">PATCH</span> | `/api/admin/notices/:id/publish` | Admin | Notice Management |
| <span class="api-method patch">PATCH</span> | `/api/admin/notices/:id/archive` | Admin | Notice Management |
| <span class="api-method delete">DELETE</span> | `/api/admin/notices/:id` | Admin | Notice Management |
| <span class="api-method get">GET</span> | `/api/admin/notices/:id/stats` | Admin | Notice Management |
| <span class="api-method post">POST</span> | `/api/notices/:id/read` | Authenticated | Notice Board |

## List Notices

<span class="api-method get">GET</span> `/api/notices`

Returns active notices targeted to the authenticated user's role. Pinned notices appear first.

**UI Components:** `NoticeList`, `PinnedBadge`, `CategoryFilter`, `SearchBar`

## Get Notice Detail

<span class="api-method get">GET</span> `/api/notices/:id`

**UI Components:** `NoticeCard`, `AttachmentLink`, `ReadReceipt`

## Create Notice

<span class="api-method post">POST</span> `/api/admin/notices`

**UI Components:** `RichTextEditor`, `CategorySelect`, `PrioritySelect`, `PublishBtn`

::: tip Notice Categories
`General`, `Urgent`, `Event`, `System`, `Academic`
:::

::: tip Priority Levels
`Normal`, `Important`, `Urgent` — Urgent notices display with a visual alert indicator.
:::

## Edit Notice

<span class="api-method put">PUT</span> `/api/admin/notices/:id`

**UI Components:** `RichTextEditor`, `SaveDraftBtn`

::: warning Editing Restrictions
Published notices only allow editing of non-critical fields (expiry date, attachments).
:::

## Publish Notice

<span class="api-method patch">PATCH</span> `/api/admin/notices/:id/publish`

**UI Components:** `PublishBtn`, `StatusBadge`

## Archive Notice

<span class="api-method patch">PATCH</span> `/api/admin/notices/:id/archive`

**UI Components:** `ArchiveBtn`, `ConfirmModal`

## Delete Notice

<span class="api-method delete">DELETE</span> `/api/admin/notices/:id`

Soft-deletes the notice. Retained in system audit log.

**UI Components:** `DeleteBtn`, `ConfirmModal`

## Notice Stats

<span class="api-method get">GET</span> `/api/admin/notices/:id/stats`

Returns read receipt analytics: total recipients, total reads, read rate, per-user timestamps.

**UI Components:** `ReadStats`

## Mark as Read

<span class="api-method post">POST</span> `/api/notices/:id/read`

Marks the notice as read for the authenticated user.

**UI Components:** `ReadReceipt`
