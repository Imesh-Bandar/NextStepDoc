# ER Diagram

The Entity-Relationship diagram below shows the complete data model for the NextStep platform, including all tables, fields, and relationships.

## Full ER Diagram

![NextStep ER Diagram](/er-diagram.jpg)

::: tip
Click the image to view it in full resolution. The diagram includes all entities from User and Profile tables through to Notices, Campaigns, and Audit Logs.
:::

## Key Relationships

- **User** → has one **Student Profile** / **Company Profile** / **Consultant Profile** / **Admin Profile**
- **Company** → posts **Job Vacancies** → have **Applications**, **Quizzes**, **Mock Exams**
- **Student** → submits **Applications** → can take **Quizzes** and **Mock Exams**
- **Company** → posts **Freelance Projects** → have **Milestones** → trigger **Payments**
- **Student** ↔ **Consultant** via **Appointments** → generate **Ratings**
- **Student** → creates **CVs** → attached to **Applications**
- **Student** → creates **Event Campaigns** → receive **Contributions**
- **Admin** → creates **Notices** → tracked by **Notice Read Receipts**
- **User** → submits **Complaints** → managed with **Audit Trail**

## Use Case Diagram

![NextStep Use Case Diagram](/usecase-diagram.png)
