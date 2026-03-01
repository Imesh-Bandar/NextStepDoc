# User Management APIs

Admin-only endpoints for managing all platform users — activation, locking, archiving, and audit logging.

## Endpoints

| Method | Endpoint | Auth | UI Page |
|---|---|---|---|
| <span class="api-method get">GET</span> | `/api/admin/users` | Admin | User Management |
| <span class="api-method get">GET</span> | `/api/admin/users/:id` | Admin | User Detail View |
| <span class="api-method patch">PATCH</span> | `/api/admin/users/:id/activate` | Admin | User Management |
| <span class="api-method patch">PATCH</span> | `/api/admin/users/:id/lock` | Admin | User Management |
| <span class="api-method patch">PATCH</span> | `/api/admin/users/:id/archive` | Admin | User Management |
| <span class="api-method get">GET</span> | `/api/admin/users/export` | Admin | User Management |

## List All Users

<span class="api-method get">GET</span> `/api/admin/users`

Returns a paginated list of all platform users with role and status filters.

**UI Components:** `UserTable`, `RoleFilter`, `StatusFilter`, `SearchBar`

## Get User Detail

<span class="api-method get">GET</span> `/api/admin/users/:id`

Returns detailed profile and audit timeline for a specific user.

**UI Components:** `UserProfileCard`, `RoleProfileView`, `AuditTimeline`

## Activate User

<span class="api-method patch">PATCH</span> `/api/admin/users/:id/activate`

Activates a deactivated or pending user account.

**UI Components:** `ActivateBtn`, `StatusBadge`, `AlertBanner`

## Lock User

<span class="api-method patch">PATCH</span> `/api/admin/users/:id/lock`

Locks a user account, preventing login. Requires confirmation.

**UI Components:** `LockBtn`, `ConfirmModal`, `StatusBadge`

## Archive User

<span class="api-method patch">PATCH</span> `/api/admin/users/:id/archive`

Archives a user account. Archived users are retained in the system but cannot log in.

**UI Components:** `ArchiveBtn`, `ConfirmModal`

## Export Users

<span class="api-method get">GET</span> `/api/admin/users/export`

Exports all user data as a CSV file.

**UI Components:** `ExportCSV`
