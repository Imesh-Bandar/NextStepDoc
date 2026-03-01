# Non-Functional Requirements

## Performance

| Req ID | Requirement | Priority |
|---|---|---|
| NFR-PERF-001 | Page load within **3 seconds** under normal network conditions | High |
| NFR-PERF-002 | Support **500 concurrent users** without degradation | High |
| NFR-PERF-003 | API response time ≤ **2 seconds** for 95% of requests | High |
| NFR-PERF-004 | Database queries execute within **500ms** | Medium |

## Security

| Req ID | Requirement | Priority |
|---|---|---|
| NFR-SEC-001 | All data transmission encrypted using **TLS 1.2+** | High |
| NFR-SEC-002 | Passwords hashed using **bcrypt** with minimum cost factor 12 | High |
| NFR-SEC-003 | **CSRF protection** on all state-changing operations | High |
| NFR-SEC-004 | Input validation and sanitization against **SQL injection** and **XSS** | High |
| NFR-SEC-005 | Session tokens expire after **30 minutes** of inactivity | Medium |
| NFR-SEC-006 | Payment data compliant with **PCI-DSS** via third-party gateway | High |

## Usability

| Req ID | Requirement | Priority |
|---|---|---|
| NFR-USE-001 | UI follows defined design standards (Royal Blue primary, Poppins/Roboto headings, Inter body) | High |
| NFR-USE-002 | Fully responsive across desktop, tablet, and mobile | High |
| NFR-USE-003 | Registration completable within **5 minutes** without assistance | Medium |
| NFR-USE-004 | Compliant with **WCAG 2.1 Level AA** accessibility standards | Medium |

## Reliability & Availability

| Req ID | Requirement | Priority |
|---|---|---|
| NFR-REL-001 | **99.5% uptime** availability | High |
| NFR-REL-002 | Automatic **daily backups** of all data | High |
| NFR-REL-003 | Recovery from failure within **4 hours** (RTO) | Medium |
| NFR-REL-004 | Maximum data loss of **1 hour** (RPO) | Medium |

## Scalability

| Req ID | Requirement | Priority |
|---|---|---|
| NFR-SCA-001 | Support **horizontal scaling** of application servers | Medium |
| NFR-SCA-002 | Database supports **partitioning and read replicas** | Medium |
| NFR-SCA-003 | Accommodate growth to **10,000 registered users** without architectural changes | Medium |
