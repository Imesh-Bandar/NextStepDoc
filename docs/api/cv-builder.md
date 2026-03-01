# CV Builder APIs

Students can create multiple CVs with different templates. Only one CV can be set as active at a time. CVs are versioned and can be attached to job applications.

## Endpoints

| Method | Endpoint | Auth | UI Page |
| ------ | -------------------------------- | ------------ | -------------- |
| <span class="api-method get">GET</span> | `/api/cv` | Student | CV Builder |
| <span class="api-method post">POST</span> | `/api/cv` | Student | CV Builder |
| <span class="api-method put">PUT</span> | `/api/cv/:id` | Student | CV Builder |
| <span class="api-method delete">DELETE</span> | `/api/cv/:id` | Student | CV Builder |
| <span class="api-method patch">PATCH</span> | `/api/cv/:id/set-active` | Student | CV Builder |
| <span class="api-method get">GET</span> | `/api/cv/:id/download` | Student | CV Builder |

## List CVs

<span class="api-method get">GET</span> `/api/cv`

Returns all CVs for the authenticated student.

**UI Components:** `TemplateSelector`, `CVList`

## Create CV

<span class="api-method post">POST</span> `/api/cv`

Creates a new CV with a selected template and structured section data.

**UI Components:** `TemplateSelector`, `SectionEditor`, `LivePreviewPanel`

**Request Body:**

```json
{
  "title": "Software Engineering CV",
  "template": "Modern",
  "sections_data": {
    "personal_info": {
      "name": "Ashan Perera",
      "email": "ashan@student.com",
      "phone": "+94 71 234 5678"
    },
    "education": [
      {
        "university": "UOM",
        "degree": "BSc CS",
        "gpa": 3.8
      }
    ],
    "experience": [
      {
        "company": "ABC Tech",
        "role": "Intern",
        "duration": "6 months"
      }
    ],
    "skills": ["React", "Node.js", "MySQL", "Docker"],
    "projects": [
      {
        "title": "NextStep",
        "description": "Job portal management system"
      }
    ]
  }
}
```

::: tip Templates
Available templates: `Modern`, `Classic`, `Minimal`, `Creative`
:::

## Update CV

<span class="api-method put">PUT</span> `/api/cv/:id`

**UI Components:** `SectionEditor`, `DragDropSections`, `SaveButton`

## Delete CV

<span class="api-method delete">DELETE</span> `/api/cv/:id`

**UI Components:** `DeleteCVBtn`, `ConfirmModal`

## Set Active CV

<span class="api-method patch">PATCH</span> `/api/cv/:id/set-active`

Sets this CV as the active/default CV for applications.

**UI Components:** `SetActiveBtn`, `VersionBadge`

## Download CV as PDF

<span class="api-method get">GET</span> `/api/cv/:id/download`

Generates and returns the CV as a downloadable PDF document.

**UI Components:** `DownloadPDFBtn`
