# Functional Requirements

## 1. User Registration and Authentication {#auth}

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-AUTH-001 | Users can register with email, selecting a role (Student, Company, Consultant) | High |
| FR-AUTH-002 | Email verification link sent upon registration | High |
| FR-AUTH-003 | Firebase Authentication with JWT token-based session management | High |
| FR-AUTH-004 | Password reset via OTP sent to registered email | High |
| FR-AUTH-005 | Role-based access control (RBAC) for all features | High |
| FR-AUTH-006 | Account lock after 5 failed login attempts for 30 minutes | Medium |
| FR-AUTH-007 | Company accounts pending until verified by Campus Administrator | High |
| FR-AUTH-008 | Company/Consultant password reset via admin request | High |
| FR-AUTH-009 | Admin resets password to system-generated default and notifies user | High |
| FR-AUTH-010 | Forced password change on first login after admin reset | High |
| FR-AUTH-011 | Audit log of all admin-initiated password resets | Medium |

## 2. Job Vacancy Management {#jobs}

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-JOB-001 | Companies create job postings with role, skills, qualifications, salary, location, and type | High |
| FR-JOB-002 | Job postings require admin approval before visibility | High |
| FR-JOB-003 | Students can browse, search, and filter vacancies | High |
| FR-JOB-004 | Students can apply and track application status | High |
| FR-JOB-005 | Companies can view applicant profiles, shortlist, and update statuses | High |
| FR-JOB-006 | Optional screening quiz attachment to job postings | Medium |
| FR-JOB-007 | Notifications on application status changes | Medium |

## 3. Quiz and Examination System {#quiz}

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-EXAM-001 | Create quizzes with MCQ, true/false, and short-answer questions | High |
| FR-EXAM-002 | Time limits on quiz attempts | High |
| FR-EXAM-003 | Auto-grade objective questions with pass/fail calculation | High |
| FR-EXAM-004 | Auto-assign passing students to interview stage | High |
| FR-EXAM-005 | Scores visible to both student and company | Medium |
| FR-EXAM-006 | Prevent multiple attempts unless explicitly allowed | Medium |

## 4. Candidate Shortlisting Through Mock Examination {#mock-exam}

After collecting CVs, the system conducts an online mock examination. Candidates with the highest marks or marks above a company-defined cutoff are automatically shortlisted for the interview stage.

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-MOCK-001 | Create mock exams linked to specific vacancies after CV collection | High |
| FR-MOCK-002 | Configure question bank, count, time limit, cutoff score, max shortlist | High |
| FR-MOCK-003 | Support MCQ, true/false, short-answer, and coding questions | High |
| FR-MOCK-004 | Auto-invite all applicants who submitted CVs | High |
| FR-MOCK-005 | Single exam window with defined start/end time and per-candidate limit | High |
| FR-MOCK-006 | Anti-cheating: tab-switch detection, randomized questions/options | Medium |
| FR-MOCK-007 | Auto-grade objective questions immediately on submission | High |
| FR-MOCK-008 | Manual grading interface for subjective/coding questions | Medium |
| FR-MOCK-009 | Rank all candidates by total score (descending) | High |
| FR-MOCK-010 | Auto-shortlist by top N candidates or cutoff percentage | High |
| FR-MOCK-011 | Shortlisted candidates moved to interview stage with notifications | High |
| FR-MOCK-012 | Non-shortlisted candidates notified with score summary | Medium |
| FR-MOCK-013 | Exam analytics dashboard (score distribution, avg, pass rate) | Medium |
| FR-MOCK-014 | Downloadable shortlist report (PDF/CSV) | Medium |
| FR-MOCK-015 | Students view own results with section-wise breakdown | High |
| FR-MOCK-016 | Complete audit log of exam activities | High |

## 5. Freelance Hiring and Payment System {#freelance}

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-FREE-001 | Companies post freelance projects with milestones, deadlines, and budgets | High |
| FR-FREE-002 | Students browse and apply for freelance projects | High |
| FR-FREE-003 | Digital work agreements between companies and freelancers | High |
| FR-FREE-004 | Track milestones and deadlines with status indicators | High |
| FR-FREE-005 | Payments released on milestone completion and company approval | High |
| FR-FREE-006 | Payment confirmation notifications and work history records | Medium |
| FR-FREE-007 | Freelancer performance tracking and rating system | Medium |
| FR-FREE-008 | Third-party payment gateway integration | High |

## 6. Career Guidance and Appointment System {#career}

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-CAREER-001 | Browse available career consultants and experts | High |
| FR-CAREER-002 | Consultants set and manage availability schedules | High |
| FR-CAREER-003 | Students book, reschedule, or cancel appointments | High |
| FR-CAREER-004 | Consultants accept or reject appointment requests | High |
| FR-CAREER-005 | Complete appointment history for students and consultants | Medium |
| FR-CAREER-006 | Rate and provide feedback after each session | High |
| FR-CAREER-007 | Public consultant ratings and reviews | Medium |
| FR-CAREER-008 | Notifications for confirmations, reminders, and changes | Medium |

## 7. Campus Administration {#admin}

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-ADMIN-001 | Verify or reject company registration requests | High |
| FR-ADMIN-002 | Approve or reject job postings | High |
| FR-ADMIN-003 | Manage all user accounts (activate, deactivate, delete) | High |
| FR-ADMIN-004 | Dashboard with system analytics and reports | Medium |
| FR-ADMIN-005 | Handle escalated complaints and issue resolutions | High |
| FR-ADMIN-006 | Configure system settings and notification preferences | Low |
| FR-ADMIN-007 | Process password reset requests and notify affected users | High |

## 8. Complaint and Issue Tracking {#complaints}

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-COMP-001 | All users can submit complaints or report issues | High |
| FR-COMP-002 | Unique tracking ID and status (Open, In Progress, Resolved, Closed) | High |
| FR-COMP-003 | Track progress of submitted complaints | Medium |
| FR-COMP-004 | Admin notifications and assignment for resolution | Medium |
| FR-COMP-005 | Full audit trail for each complaint | Medium |

## 9. CV / Resume Builder {#cv}

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-CV-001 | Built-in CV/Resume builder on student dashboard | High |
| FR-CV-002 | Multiple professional templates (Modern, Classic, Minimal, Creative) | High |
| FR-CV-003 | Structured input for personal details, education, experience, skills, etc. | High |
| FR-CV-004 | Real-time preview during editing | High |
| FR-CV-005 | PDF download of completed CV | High |
| FR-CV-006 | Save multiple CV versions | Medium |
| FR-CV-007 | Attach CV directly when applying for jobs | High |
| FR-CV-008 | Auto-populate fields from student profile | Medium |
| FR-CV-009 | Required field validation before download/submission | Medium |
| FR-CV-010 | Drag-and-drop section reordering | Low |

## 10. Event Fund Collection and Management {#events}

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-EVENT-001 | Create fund collection campaigns (replacing Google Forms) | High |
| FR-EVENT-002 | Campaign fields: name, description, target amount, per-person amount, deadline, organizer | High |
| FR-EVENT-003 | Unique shareable link per campaign | High |
| FR-EVENT-004 | Payment via integrated gateways (card, bank transfer, digital wallets) | High |
| FR-EVENT-005 | Real-time progress tracking (total collected, contributors, remaining) | High |
| FR-EVENT-006 | Detailed contributor list with payment status | High |
| FR-EVENT-007 | Automated payment receipts via email and in-app | Medium |
| FR-EVENT-008 | Item-based collections (e.g., T-shirt size, meal preference) | High |
| FR-EVENT-009 | Export contributor data and payment reports (CSV/PDF) | Medium |
| FR-EVENT-010 | Admin approval before campaign goes live | High |
| FR-EVENT-011 | Refund processing for cancelled events | Medium |
| FR-EVENT-012 | Auto-close on deadline or target met | Medium |
| FR-EVENT-013 | Complete audit trail of all transactions | High |

## 11. Notice Management {#notices}

| Req ID | Requirement | Priority |
| ------------- | ----------------------------------------------------------------------------- | -------- |
| FR-NOTICE-001 | Admin Notice Management dashboard (create, edit, publish, schedule, archive) | High |
| FR-NOTICE-002 | Notice fields: title, rich text body, category, target audience, publish date/time, expiry | High |
| FR-NOTICE-003 | Target to specific roles: All Users, Students, Companies, Consultants, or combinations | High |
| FR-NOTICE-004 | Schedule notices for future publication | High |
| FR-NOTICE-005 | Priority levels: Normal, Important, Urgent (with visual alert) | High |
| FR-NOTICE-006 | Dedicated Notices section on role-based dashboards | High |
| FR-NOTICE-007 | Email and in-app push notifications on publication | High |
| FR-NOTICE-008 | Mark notices as read with read/unread tracking | Medium |
| FR-NOTICE-009 | Read receipt log for administrators | Medium |
| FR-NOTICE-010 | File attachments (PDF, DOCX, images up to 10MB) | Medium |
| FR-NOTICE-011 | Auto-expire and archive on expiry date | High |
| FR-NOTICE-012 | Pin up to 3 notices at the top | Medium |
| FR-NOTICE-013 | Edit unpublished notices; limited editing for published | Medium |
| FR-NOTICE-014 | Unpublish/delete (soft-delete with audit log) | High |
| FR-NOTICE-015 | Analytics: total recipients, reads, read rate, first read timestamp | Medium |
| FR-NOTICE-016 | Admin search/filter by category, status, audience, date, keyword | Medium |
| FR-NOTICE-017 | User search/filter by category and date range | Low |
| FR-NOTICE-018 | Complete audit log of all notice actions | High |
| FR-NOTICE-019 | Exportable notice summary report (PDF/CSV) | Low |
| FR-NOTICE-020 | Max 5,000 chars body / 200 chars title with real-time counter | Low |
