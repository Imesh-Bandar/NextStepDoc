# Authentication APIs

Covers user registration, login, logout, and password management. These endpoints are used by all roles.

## Endpoints

| Method | Endpoint | Auth | UI Page |
|---|---|---|---|
| <span class="api-method post">POST</span> | `/api/auth/register` | Public | Register |
| <span class="api-method post">POST</span> | `/api/auth/login` | Public | Login |
| <span class="api-method post">POST</span> | `/api/auth/logout` | Bearer Token | Sidebar |
| <span class="api-method post">POST</span> | `/api/auth/forgot-password` | Public | Forgot Password |
| <span class="api-method post">POST</span> | `/api/auth/change-password` | Bearer Token | Change Password |
| <span class="api-method get">GET</span> | `/api/auth/me` | Bearer Token | All Dashboards |

## Register

<span class="api-method post">POST</span> `/api/auth/register`

Creates a new user account with role selection.

**UI Components:** `RolePickerCard`, `EmailInput`, `PasswordInput`, `StepProgressBar`, `SubmitButton`

**Request Body:**

```json
{
  "name": "Ashan Perera",
  "email": "ashan@student.com",
  "password": "Secure@123",
  "role": "student"   // student | company | consultant
}
```

::: tip Role Values
Accepted values for `role`: `student`, `company`, `consultant`
:::

## Login

<span class="api-method post">POST</span> `/api/auth/login`

Authenticates a user and returns a JWT token.

**UI Components:** `EmailInput`, `PasswordInput`, `LoginButton`, `AlertBanner`

**Response:**

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "user_id": 1,
      "name": "Ashan Perera",
      "role": "student",
      "is_default_password": false
    }
  }
}
```

::: warning Default Password Flag
If `is_default_password` is `true`, the client must redirect the user to the Change Password screen before granting access to any other feature (see [FR-AUTH-010](/requirements/functional#auth)).
:::

## Logout

<span class="api-method post">POST</span> `/api/auth/logout`

Invalidates the current session token.

**UI Components:** `LogoutButton`

## Forgot Password

<span class="api-method post">POST</span> `/api/auth/forgot-password`

Sends an OTP to the registered email address for password reset.

**UI Components:** `EmailInput`, `RequestResetBtn`, `SuccessBanner`

## Change Password

<span class="api-method post">POST</span> `/api/auth/change-password`

Changes the authenticated user's password. Required after admin-initiated password reset.

**UI Components:** `OldPasswordInput`, `NewPasswordInput`, `StrengthIndicator`

## Get Current User

<span class="api-method get">GET</span> `/api/auth/me`

Returns the authenticated user's profile and role. Used by all dashboards for session validation and role-based routing.

**UI Components:** `ProfileAvatar`, `RoleRedirect`
