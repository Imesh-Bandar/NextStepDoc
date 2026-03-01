# User Roles

NextStep uses **Role-Based Access Control (RBAC)** with four primary user classes. Each role has specific permissions and capabilities within the platform.

## Students

Students are the **primary users** of the platform. They are typically undergraduate or postgraduate students seeking internships, part-time jobs, freelance opportunities, or career guidance.

**Capabilities:**
- Browse, search, and apply for job vacancies
- Take screening quizzes and mock examinations
- Browse and apply for freelance projects
- Book appointments with career consultants
- Build and export CVs/Resumes
- Create event fund collection campaigns
- Submit and track complaints
- View published notices

::: info Prerequisites
Students are expected to have basic computer literacy and familiarity with web-based applications. A valid institutional email address is required for registration.
:::

## Companies

Companies are organizations or businesses that register on the platform to post job vacancies, hire freelancers, and conduct assessments.

**Capabilities:**
- Post job vacancies with optional quiz and mock exam attachments
- Review applicant profiles and manage application statuses
- Create screening quizzes and mock examinations
- Post freelance projects with milestones and budgets
- Approve milestone completions and trigger payments
- View exam analytics dashboards

::: warning Verification Required
Company accounts must be **verified by the Campus Administrator** before they can interact with students.
:::

## Career Consultants

Career consultants are professionals or senior members who provide career guidance and mentoring to students.

**Capabilities:**
- Set and manage availability schedules
- Accept or reject appointment requests
- Conduct career guidance sessions
- View ratings and feedback from students

## Campus Administrators

Campus administrators have the **highest level of system access** and are responsible for platform governance.

**Capabilities:**
- Verify or reject company registration requests
- Approve or reject job postings
- Manage all user accounts (activate, deactivate, delete)
- Handle escalated complaints and issue resolutions
- Create, schedule, and publish platform notices
- Access system analytics and reporting dashboards
- Process password reset requests for companies and consultants
- Configure system settings and notification preferences

## Role Token Scopes

| Role | Token Scope | Access Level |
|---|---|---|
| **Public** | No token | Landing, Login, Register, Notice Board, Complaint tracking |
| **Student** | `role=student` | Browse jobs, apply, take quizzes/exams, freelance, appointments, CV, campaigns |
| **Company** | `role=company` | Post jobs, manage applicants, create quizzes/exams, freelance projects |
| **Consultant** | `role=consultant` | Manage appointments, sessions, view ratings |
| **Admin** | `role=admin` | Full access — user management, approvals, audits, reports, system settings |
