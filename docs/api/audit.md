# Audit Logs & Reports APIs

Full audit trail of all admin actions. Analytics reports covering user growth, application funnels, revenue, and consultant performance. Exportable as CSV or PDF.

## Endpoints

| Method | Endpoint | Auth | UI Page |
|---|---|---|---|
| <span class="api-method get">GET</span> | `/api/admin/audit-logs` | Admin | Audit Logs |
| <span class="api-method get">GET</span> | `/api/admin/reports` | Admin | Reports & Analytics |

## Audit Logs

<span class="api-method get">GET</span> `/api/admin/audit-logs`

Returns a filterable, paginated list of all admin actions across the platform.

**UI Components:** `AuditTable`, `AdminFilter`, `DateRangePicker`, `ExportCSV`

Audit logs capture actions including:
- User account changes (activation, locking, archiving)
- Password resets
- Job posting approvals/rejections
- Company verification decisions
- Complaint resolutions
- Notice management actions
- Campaign approvals

## Reports & Analytics

<span class="api-method get">GET</span> `/api/admin/reports`

Returns aggregated analytics data for platform dashboards.

**UI Components:** `UserGrowthChart`, `ApplicationFunnel`, `RevenueChart`, `ExportPDFBtn`

Report data includes:
- User growth trends over time
- Application funnel metrics (applied → shortlisted → interviewed → hired)
- Revenue from freelance milestone payments
- Consultant performance and rating trends
- Campaign collection statistics
- Notice engagement metrics
