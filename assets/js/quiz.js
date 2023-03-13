var wrongA;
var rightA;
var shuffled;
var rightAnswers = [];
var rightGuesses = 0;
var wrongGuesses = 0;
var questionNum = 1;
const container = document.getElementById("container");
const questionTitle = document.getElementById("question-title");
const timeTitle = document.getElementById("time-title");
var sfxWrong = new Audio("assets/sound/insect-buzz-wrong.wav");
var sfxRight = new Audio("assets/sound/hm-whoo-hoo.mp3");
var timePara = document.getElementById("timePara");
var timeLeft = 100;
var gameComplete = false;
var searchInputVal = localStorage.getItem("searchInputVal");
var difficulty = localStorage.getItem("difficulty");
var search_term = localStorage.getItem("search_term");

document
  .getElementById("answer-buttons")
  .addEventListener("click", function (event) {
    var guess = event.target.textContent;
    if (rightAnswers.includes(guess)) {
      sfxRight.play();
      rightGuesses++;
    } else {
      sfxWrong.play();
      wrongGuesses++;
    }
    questionNum++;
    if (questionNum < 11) {
      displayQuestion();
    } else {
      endQuiz();
    }
  });

function displayQuestion() {
  fetch(
    `https://the-trivia-api.com/api/questions?categories=${search_term}&limit=1&difficulty=${difficulty}`
  )
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let wrongA = data[i].incorrectAnswers;
        let rightA = data[i].correctAnswer;
        rightAnswers.push(rightA);
        var choices = wrongA.concat(rightA);
        let shuffled = choices.sort((a, b) => 0.5 - Math.random());
        document.getElementById("question-content").innerText =
          data[i].question;
        document.getElementById("a1").innerText = shuffled[0];
        document.getElementById("a2").innerText = shuffled[1];
        document.getElementById("a3").innerText = shuffled[2];
        document.getElementById("a4").innerText = shuffled[3];
        document.getElementById("question-number").innerText = questionNum;
      }
    });
}

function endQuiz() {
  gameComplete === true;
  container.classList.add("hidden");
  questionTitle.classList.add("hidden");
  timeTitle.classList.add("hidden");
  let score = rightGuesses;
  document.getElementById("image").classList.remove("hidden");
  console.log(score);
  showGif();
}

function startTimer() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timePara.textContent = timeLeft;

    if (timeLeft === 0 || gameComplete === true) {
      clearInterval(timeInterval);
      endQuiz();
      return;
    }
  }, 1000);
}

startTimer();
displayQuestion();
