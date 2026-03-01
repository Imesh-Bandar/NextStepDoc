# Password Reset APIs

Admin-managed password reset workflow. Users request password resets which are reviewed and processed by admins. A temporary password is sent to the user's email upon admin approval.

## Endpoints

| Method | Endpoint | Auth | UI Page |
| ------ | -------------------------------- | ------------ | -------------- |
| <span class="api-method post">POST</span> | `/api/auth/password-reset-request` | Authenticated | Forgot Password |
| <span class="api-method get">GET</span> | `/api/admin/password-resets` | Admin | Password Reset Requests |
| <span class="api-method patch">PATCH</span> | `/api/admin/password-resets/:id/approve` | Admin | Password Reset Requests |
| <span class="api-method patch">PATCH</span> | `/api/admin/password-resets/:id/reject` | Admin | Password Reset Requests |

## Request Password Reset

<span class="api-method post">POST</span> `/api/auth/password-reset-request`

Company or Consultant user submits a password reset request.

**UI Components:** `EmailInput`, `RequestResetBtn`, `SuccessBanner`

## List Pending Requests (Admin)

<span class="api-method get">GET</span> `/api/admin/password-resets`

**UI Components:** `RequestTable`, `UserInfoCard`, `StatusBadge`

## Approve Reset (Admin)

<span class="api-method patch">PATCH</span> `/api/admin/password-resets/:id/approve`

Resets the user's password to a system-generated temporary password and sends notification.

**UI Components:** `ApproveResetBtn`, `TempPasswordDisplay`

::: info Post-Approval Flow
After admin approval, the user receives a temporary password via email. On next login, the system forces a password change before granting access to any features.
:::

## Reject Reset (Admin)

<span class="api-method patch">PATCH</span> `/api/admin/password-resets/:id/reject`

**UI Components:** `RejectBtn`, `StatusBadge`
