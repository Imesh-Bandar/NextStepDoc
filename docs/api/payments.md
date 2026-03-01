# Payment APIs

Payments are triggered by milestone approvals. Gateway webhook callbacks update payment status. Admins can monitor all transactions and initiate refunds.

## Payment Flow

```
Company approves milestone
  → POST /api/payments/initiate
  → Gateway redirect (PayHere / Stripe)
  → POST /api/payments/webhook (callback)
  → PAYMENT status = Completed
  → MILESTONE status = Paid
  → Student receives notification
```

## Endpoints

| Method | Endpoint | Auth | UI Page |
|---|---|---|---|
| <span class="api-method post">POST</span> | `/api/payments/initiate` | Company | Milestone Review |
| <span class="api-method post">POST</span> | `/api/payments/webhook` | Gateway | — |
| <span class="api-method get">GET</span> | `/api/payments/student` | Student | Payment History |
| <span class="api-method get">GET</span> | `/api/admin/payments` | Admin | Payment Overview |
| <span class="api-method post">POST</span> | `/api/admin/payments/:id/refund` | Admin | Payment Overview |

## Initiate Payment

<span class="api-method post">POST</span> `/api/payments/initiate`

Initiates payment processing via the third-party gateway.

**UI Components:** `PaymentFlow`, `GatewayRedirect`

## Payment Webhook

<span class="api-method post">POST</span> `/api/payments/webhook`

Callback endpoint for the payment gateway to update transaction status.

::: warning Gateway Only
This endpoint is called by the payment gateway, not by users directly.
:::

## Student Payment History

<span class="api-method get">GET</span> `/api/payments/student`

**UI Components:** `PaymentTable`, `AmountDisplay`, `ReceiptDownload`

## Admin Payment Overview

<span class="api-method get">GET</span> `/api/admin/payments`

**UI Components:** `PaymentTable`, `DateRangePicker`, `ExportCSV`

## Admin Refund

<span class="api-method post">POST</span> `/api/admin/payments/:id/refund`

**UI Components:** `RefundBtn`, `ConfirmModal`
