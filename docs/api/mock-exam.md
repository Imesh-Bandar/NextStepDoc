# Mock Examination APIs

Full-featured competitive examinations with proctoring (tab-switch detection), randomization, scoring, ranking, and auto-shortlisting based on cutoff score and `max_shortlist` quota.

## Endpoints

| Method | Endpoint | Auth | UI Page |
|---|---|---|---|
| <span class="api-method post">POST</span> | `/api/jobs/:id/mock-exam` | Company | Mock Exam Builder |
| <span class="api-method get">GET</span> | `/api/exam/:id` | Student | Take Mock Exam |
| <span class="api-method post">POST</span> | `/api/exam/:id/questions` | Company | Mock Exam Builder |
| <span class="api-method post">POST</span> | `/api/exam/:id/attempt/start` | Student | Take Mock Exam |
| <span class="api-method post">POST</span> | `/api/exam/:id/attempt/tab-switch` | Student | Take Mock Exam |
| <span class="api-method post">POST</span> | `/api/exam/:id/attempt/submit` | Student | Take Mock Exam |
| <span class="api-method get">GET</span> | `/api/exam/:id/results` | Company | Exam Results View |
| <span class="api-method patch">PATCH</span> | `/api/exam/:id/attempt/:aid/shortlist` | Company | Exam Results View |

## Create Mock Exam

<span class="api-method post">POST</span> `/api/jobs/:id/mock-exam`

Creates a mock examination linked to a specific job vacancy.

**UI Components:** `ExamSettingsForm`, `SchedulePicker`, `PublishBtn`

**Request Body:**

```json
{
  "title": "Backend Engineering Assessment",
  "total_questions": 40,
  "time_limit": 90,
  "cutoff_score": 65.0,
  "max_shortlist": 10,
  "start_time": "2026-03-15T09:00:00Z",
  "end_time": "2026-03-15T11:30:00Z",
  "randomize_questions": true,
  "randomize_options": true,
  "tab_switch_detection": true
}
```

## Get Exam

<span class="api-method get">GET</span> `/api/exam/:id`

Returns exam details, sections, and questions.

**UI Components:** `ExamHeader`, `SectionTabs`, `ExamTimer`

## Add Questions

<span class="api-method post">POST</span> `/api/exam/:id/questions`

Adds questions to the mock exam question bank.

**UI Components:** `QuestionBankEditor`, `CodingQuestionEditor`, `SectionBuilder`

## Start Attempt

<span class="api-method post">POST</span> `/api/exam/:id/attempt/start`

Begins a timed exam attempt for the student.

**UI Components:** `ExamHeader`, `ExamTimer`, `QuestionNavigator`

## Report Tab Switch

<span class="api-method post">POST</span> `/api/exam/:id/attempt/tab-switch`

Reports a tab-switch event for anti-cheating tracking.

**UI Components:** `TabSwitchWarning`

::: warning Anti-Cheating
Tab-switch events are logged in the exam audit trail. Excessive tab-switching may flag the attempt for review.
:::

## Submit Exam

<span class="api-method post">POST</span> `/api/exam/:id/attempt/submit`

Submits the completed exam for grading and ranking.

**UI Components:** `SubmitConfirmModal`, `RankResultCard`

## View Results

<span class="api-method get">GET</span> `/api/exam/:id/results`

Returns leaderboard with scores, rankings, and shortlist status. Company access.

**UI Components:** `ResultsLeaderboard`, `ShortlistToggle`, `ExportCSV`

## Manual Shortlist Toggle

<span class="api-method patch">PATCH</span> `/api/exam/:id/attempt/:aid/shortlist`

Manually toggle shortlist status for a specific candidate.

**UI Components:** `ShortlistToggle`, `StatusBadge`
