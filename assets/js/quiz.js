var wrongA;
var rightA;
var shuffled;
var rightAnswers = [];
var rightGuesses = 0;
var wrongGuesses = 0;
var questionNum = 1;
const container = document.getElementById("container");
const questionTitle = document.getElementById("question-title");

// Get the name passed into url
var url = window.location.href.split("?")[1];

// Set array for playerStats and set existing data from localStorage
var playerStats = [];
var player = {
  name: "",
  score: "",
};

// get fresh content from localstorage
playerStatsUpdated = JSON.parse(localStorage.getItem("players"));

document
  .getElementById("answer-buttons")
  .addEventListener("click", function (event) {
    var guess = event.target.textContent;
    if (rightGuesses + wrongGuesses < 9) {
      if (rightAnswers.includes(guess)) {
        // console.log("right");
        rightGuesses++;
      } else {
        // console.log("wrong");
        wrongGuesses++;
      }
      displayQuestion();
      questionNum++;
      // console.log(rightGuesses, wrongGuesses);
    } else {
      // console.log("game over");
      endQuiz();
    }
  });

function displayQuestion() {
  fetch("https://the-trivia-api.com/api/questions?limit=1")
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
  container.classList.add("hidden");
  questionTitle.classList.add("hidden");
  player.name = url;
  player.score = rightGuesses;
  // If array from localstorage is emtpy push to origina array, otherwise push to updated arr
  if (playerStatsUpdated === null) {
    playerStats.push(player);
    localStorage.setItem("players", JSON.stringify(playerStats));
  } else {
    playerStatsUpdated.push(player);
    localStorage.setItem("players", JSON.stringify(playerStatsUpdated));
  }
}

displayQuestion();
