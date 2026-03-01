# Quiz APIs

Companies create quizzes for job vacancies. Students attempt quizzes after shortlisting. Supports MCQ, True/False, and Short Answer question types with configurable retakes.

## Endpoints

| Method | Endpoint | Auth | UI Page |
| ------ | -------------------------------- | ------------ | -------------- |
| <span class="api-method post">POST</span> | `/api/jobs/:id/quiz` | Company | Quiz Builder |
| <span class="api-method get">GET</span> | `/api/quiz/:id` | Student | Take Quiz |
| <span class="api-method post">POST</span> | `/api/quiz/:id/questions` | Company | Quiz Builder |
| <span class="api-method put">PUT</span> | `/api/quiz/:id/questions/:qid` | Company | Quiz Builder |
| <span class="api-method delete">DELETE</span> | `/api/quiz/:id/questions/:qid` | Company | Quiz Builder |
| <span class="api-method post">POST</span> | `/api/quiz/:id/attempt` | Student | Take Quiz |
| <span class="api-method post">POST</span> | `/api/quiz/:id/submit` | Student | Take Quiz |
| <span class="api-method get">GET</span> | `/api/quiz/:id/attempts` | Student | Take Quiz |

## Create Quiz

<span class="api-method post">POST</span> `/api/jobs/:id/quiz`

Creates a quiz attached to a job vacancy.

**UI Components:** `QuizSettingsForm`, `PublishBtn`

## Get Quiz

<span class="api-method get">GET</span> `/api/quiz/:id`

Returns quiz details with questions for the student to attempt.

**UI Components:** `QuizHeader`, `QuestionCard`, `CountdownTimer`

## Add Question

<span class="api-method post">POST</span> `/api/quiz/:id/questions`

Adds a question to an existing quiz.

**UI Components:** `QuestionBuilder`, `TypeSelector`, `OptionsList`

**Request Body:**

```json
{
  "question_text": "What is the output of console.log(typeof null)?",
  "question_type": "MCQ",
  "options": "[\"object\",\"null\",\"undefined\",\"string\"]",
  "correct_answer": "object",
  "marks": 5
}
```

::: tip Question Types
Accepted values: `MCQ`, `TrueFalse`, `ShortAnswer`
:::

## Update Question

<span class="api-method put">PUT</span> `/api/quiz/:id/questions/:qid`

**UI Components:** `QuestionBuilder`, `CorrectAnswerMark`, `MarksInput`

## Delete Question

<span class="api-method delete">DELETE</span> `/api/quiz/:id/questions/:qid`

**UI Components:** `DeleteQuestionBtn`, `ConfirmModal`

## Start Quiz Attempt

<span class="api-method post">POST</span> `/api/quiz/:id/attempt`

Starts a new quiz attempt for the authenticated student.

**UI Components:** `QuizHeader`, `CountdownTimer`

## Submit Quiz

<span class="api-method post">POST</span> `/api/quiz/:id/submit`

Submits the quiz answers for grading.

**UI Components:** `SubmitModal`, `ResultScreen`

## Get Attempt History

<span class="api-method get">GET</span> `/api/quiz/:id/attempts`

Returns the student's attempt history and scores.

**UI Components:** `ResultScreen`, `AttemptsHistory`
