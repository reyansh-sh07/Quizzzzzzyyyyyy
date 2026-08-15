# Quizzzzzzyyyyyy 🎯

> A simple interactive quiz application built with HTML, CSS, and JavaScript.

Quizzzzzzyyyyyy is a browser-based quiz application where users can answer a series of multiple-choice questions, navigate between questions, change their answers, and receive their final score at the end of the quiz.

The project focuses on practicing JavaScript fundamentals, DOM manipulation, event handling, arrays, and application state management.

---

## Features

- 📝 Multiple-choice questions
- 🔢 Question progress indicator
- ◀️ Previous question navigation
- ▶️ Next question navigation
- 🔄 Ability to change previously selected answers
- ✅ Automatic score calculation
- ⚠️ Prevents moving forward without selecting an answer
- 🎉 Final score display
- 📱 Responsive interface
- 🌐 Runs directly in the browser

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)

No frameworks or external libraries are used.

---

## How It Works

The quiz stores its questions and answers in a JavaScript array.

Each question contains:

- The question text
- A list of possible options
- The correct answer

Example:

```javascript
{
  question: "What does API stand for?",
  options: [
    "Application Programming Interface",
    "Advanced Programming Integration",
    "Application Process Interface",
    "Automated Programming Interface"
  ],
  correctAnswer: "Application Programming Interface"
}
```

The application keeps track of the user's selected answers and the current question.

### Quiz Flow

```text
User
  │
  ▼
Start Quiz
  │
  ▼
Display Question
  │
  ▼
Select Answer
  │
  ▼
Store Answer
  │
  ▼
Next / Previous
  │
  ▼
Repeat Until Quiz Ends
  │
  ▼
Compare Answers
  │
  ▼
Calculate Score
  │
  ▼
Display Result
```

---

## Project Structure

```text
Quizzzzzzyyyyyy/
│
├── index.html
├── quiz.css
├── quiz.js
└── README.md
```

### `index.html`

Contains the structure of the quiz interface, including:

- Question display
- Progress indicator
- Answer options
- Previous button
- Next button

### `quiz.css`

Contains the styling and layout of the quiz interface.

### `quiz.js`

Contains the quiz logic, including:

- Question data
- Current question tracking
- Answer selection
- Previous/Next navigation
- Answer storage
- Score calculation
- Quiz completion

---

## JavaScript Concepts Practiced

This project was built to practice core JavaScript concepts such as:

- Arrays
- Objects
- Variables and state
- Functions
- Loops
- Conditional statements
- Event listeners
- DOM manipulation
- Creating HTML elements dynamically
- Updating the DOM
- Managing user input
- Array methods
- Template literals

---

## Answer & Score Management

The quiz maintains an array containing the user's selected answers:

```javascript
let answers = new Array(questions.length).fill(null);
```

This allows the application to remember previous selections when the user navigates between questions.

At the end of the quiz, the selected answers are compared with the correct answers to calculate the final score.

---

## Current Limitations

The current version is intentionally simple.

- Questions are stored directly inside the JavaScript file.
- Quiz results are not persisted.
- There is no backend or database.
- There is no user authentication.
- Questions are not loaded from an external API.
- Each quiz session starts from the beginning after refreshing the page.

---

