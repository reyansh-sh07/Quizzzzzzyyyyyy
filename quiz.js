  const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },

  {
    question: "Which language is primarily used to add interactivity to web pages?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    correctAnswer: "JavaScript"
  },

  {
    question: "Which CSS property is used to change the text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "foreground"
    ],
    correctAnswer: "color"
  },

  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: [
      "var",
      "let",
      "const",
      "constant"
    ],
    correctAnswer: "const"
  },

  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "add()"
    ],
    correctAnswer: "push()"
  },

  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Integration",
      "Application Process Interface",
      "Automated Programming Interface"
    ],
    correctAnswer: "Application Programming Interface"
  },

  {
    question: "Which HTTP method is commonly used to retrieve data from a server?",
    options: [
      "POST",
      "GET",
      "PUT",
      "DELETE"
    ],
    correctAnswer: "GET"
  },

  {
    question: "Which symbol is used for strict equality in JavaScript?",
    options: [
      "=",
      "==",
      "===",
      "!="
    ],
    correctAnswer: "==="
  },

  {
    question: "Which data structure follows the LIFO principle?",
    options: [
      "Queue",
      "Stack",
      "Array",
      "Linked List"
    ],
    correctAnswer: "Stack"
  },

  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: [
      "String",
      "Boolean",
      "Integer",
      "Undefined"
    ],
    correctAnswer: "Integer"
  }
];
let answers = new Array(questions.length).fill(null);

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const question = document.querySelector(".question");
const optionsContainer = document.querySelector(".optionsContainer");
const nextBtn = document.querySelector(".nextBtn");
const quizContainer = document.querySelector(".quizContainer");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prevBtn");

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  question.textContent = currentQuestion.question;
  prevBtn.disabled = currentQuestionIndex === 0;
  optionsContainer.innerHTML = "";
  progress.textContent = "Question " + (currentQuestionIndex + 1) + " of " + questions.length;
  selectedAnswer = answers[currentQuestionIndex];

  currentQuestion.options.forEach((option, index) => {
  const label = document.createElement("label");
  label.classList.add("optionItem");

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "answer";
  radio.value = option;

  radio.checked = (answers[currentQuestionIndex] === option);

  radio.addEventListener("change", () => {
    selectedAnswer = option;
  });

  const text = document.createElement("span");
  text.textContent = option;

  label.appendChild(radio);
  label.appendChild(text);
  
  optionsContainer.appendChild(label);
});
}

nextBtn.addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert("Select an option first!");
    return;
  }

  answers[currentQuestionIndex] = selectedAnswer;

  currentQuestionIndex++;
  selectedAnswer = null;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {

    score = answers.reduce((total, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        return total + 1;
      }

      return total;
    }, 0);

    quizContainer.innerHTML = `
      <h2>Quiz Completed 🎉</h2>
      <p>Your Score: ${score} / ${questions.length}</p>
      <p>Thanks for playing!</p>
    `;
  }
});
prevBtn.addEventListener("click", () => {

  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }

});

displayQuestion();
