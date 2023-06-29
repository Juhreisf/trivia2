document.getElementsByClassName('container')[0].style.display = "block";

const startQuizButton = document.getElementById("startQuizButton");
const quizContainer = document.getElementById("quizContainer");

let secondsLeft = 15;
const timer = document.getElementById("timer");
let countdownTimer;
let isAnswerSelected = false;

function countdown() {
  if (!isAnswerSelected) {
    timer.textContent = "Você tem: " + secondsLeft + " segundos";
    secondsLeft--;
  }

  if (secondsLeft === 0) {
    clearInterval(countdownTimer);
    timer.textContent = "Tempo esgotado!";
    showResult();
  }
}

function showResult() {
  const score = result();
  const resultado = "Você fez: " + score + " pontos";

  resultText.textContent = resultado;
  modal.style.display = "block";
}

function next(id) {
  clearInterval(countdownTimer);
  secondsLeft = 15;
  countdownTimer = setInterval(countdown, 1000);
  isAnswerSelected = false;

  document.getElementsByClassName('container')[id - 1].style.display = "none";
  document.getElementsByClassName('container')[id].style.display = "block";
}

function result() {
  let score = 0;

  if (document.querySelector('input[name="question1"]:checked')) {
    if (document.getElementById('correct1').checked) {
      score++;
    }
  } else {
    score = 0;
  }

  if (document.querySelector('input[name="question2"]:checked')) {
    if (document.getElementById('correct2').checked) {
      score++;
    }
  } else {
    score = 0;
  }

  if (document.querySelector('input[name="question3"]:checked')) {
    if (document.getElementById('correct3').checked) {
      score++;
    }
  } else {
    score = 0;
  }

  return score;
}

const modal = document.getElementById("resultado");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const resultText = document.getElementById("resultText");

btn.onclick = function () {
  const score = result();
  const resultado = "Você fez: " + score + " pontos";

  resultText.textContent = resultado;
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

countdownTimer = setInterval(countdown, 1000);

const restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener("click", restartQuiz);

function restartQuiz() {
  clearInterval(countdownTimer);
  secondsLeft = 15;
  countdownTimer = setInterval(countdown, 1000);
  isAnswerSelected = false;

  const firstContainer = document.getElementsByClassName('container')[0];
  const currentContainer = document.querySelector('.container[style*="display: block"]');

  currentContainer.style.display = "none";
  firstContainer.style.display = "block";
}

const answerOptions = document.querySelectorAll('input[type="radio"]');
answerOptions.forEach(function (option) {
  option.addEventListener("change", function () {
    isAnswerSelected = true;
  });
});

const lastQuestionOptions = document.querySelectorAll('input[name="question3"]');
lastQuestionOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    isAnswerSelected = true;
  });
});

