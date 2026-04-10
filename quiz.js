const questions = [
  { question: "What is 5 + 3?", options: ["6","7","8","9"], correctAnswer: "8" },
  { question: "What is 10 - 4?", options: ["5","6","7","8"], correctAnswer: "6" },
  { question: "What is 6 × 2?", options: ["10","11","12","13"], correctAnswer: "12" },
  { question: "What is 15 ÷ 3?", options: ["3","4","5","6"], correctAnswer: "5" },
  { question: "What is 9 + 7?", options: ["15","16","17","18"], correctAnswer: "16" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth","Mars","Jupiter","Venus"], correctAnswer: "Mars" },
  { question: "What gas do plants absorb?", options: ["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"], correctAnswer: "Carbon Dioxide" },
  { question: "What is the boiling point of water?", options: ["90°C","100°C","110°C","120°C"], correctAnswer: "100°C" },
  { question: "Which organ pumps blood?", options: ["Brain","Lungs","Heart","Kidney"], correctAnswer: "Heart" },
  { question: "What is 7 × 8?", options: ["54","56","58","60"], correctAnswer: "56" }
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
  nextBtn.disabled = currentQuestionIndex === questions.length - 1;
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

  if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  selectedAnswer = null;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
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