# Data Entities

## Core Entities

| Entity | Key Attributes | Relationships |
| ------------ | ----------------------------------------------------------------- | -------- |
| **User** | user_id, name, email, password_hash, role, status, created_at | Has Profile, creates Complaints |
| **Student Profile** | student_id, university, degree, skills, resume_url, GPA | Belongs to User, applies to Jobs |
| **Company Profile** | company_id, name, industry, size, verification_status | Belongs to User, posts Jobs |
| **Job Vacancy** | job_id, title, description, skills, salary, type, status | Posted by Company, has Applications |
| **Application** | app_id, student_id, job_id, status, applied_at | Belongs to Student and Job |
| **Quiz** | quiz_id, job_id, questions, time_limit, passing_score | Belongs to Job, has Attempts |
| **Mock Examination** | mock_exam_id, job_id, question_bank, time_limit, cutoff_score, max_shortlist, start_time, end_time | Linked to Job Vacancy, has Exam Attempts |
| **Exam Attempt** | attempt_id, mock_exam_id, student_id, score, rank, shortlisted, started_at, submitted_at | Belongs to Mock Exam and Student |
| **Freelance Project** | project_id, company_id, title, milestones, budget, status | Posted by Company, has Agreements |
| **Appointment** | appointment_id, student_id, consultant_id, datetime, status | Between Student and Consultant |
| **Payment** | payment_id, project_id, amount, milestone, status, paid_at | Belongs to Freelance Project |
| **Complaint** | complaint_id, user_id, subject, description, status, tracking_id | Submitted by User |
| **Rating** | rating_id, student_id, consultant_id, score, feedback | Given by Student to Consultant |
| **CV/Resume** | cv_id, student_id, template, sections_data, version, created_at | Belongs to Student, attached to Applications |
| **Event Campaign** | campaign_id, organizer_id, title, description, target_amount, deadline, status | Created by Student, approved by Admin |
| **Campaign Contribution** | contribution_id, campaign_id, contributor_id, amount, item_selections, paid_at | Belongs to Event Campaign |
| **Notice** | notice_id, admin_id, title, body, category, priority, target_roles, status, scheduled_at, published_at, expires_at, attachment_url, is_pinned, created_at | Created by Admin, delivered to Users |
| **Notice Read Receipt** | receipt_id, notice_id, user_id, read_at | Belongs to Notice and User |

## Data Retention & Privacy

| Policy | Detail |
| ------------ | ---------------------------------------------------------------------------- |
| **Data Protection** | User data stored in compliance with applicable regulations |
| **Inactive Accounts** | Flagged after 12 months, archived after 24 months |
| **Payment Records** | Retained for minimum 7 years for audit compliance |
| **Data Export** | Users can request data export and account deletion |
| **Notice Records** | Notice records and read receipts retained for minimum 2 years |
