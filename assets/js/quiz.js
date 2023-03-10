var wrongA
var rightA
var shuffled
var rightAnswers = []
var rightGuesses = 0
var wrongGuesses = 0
var questionNum = 1
const container = document.getElementById("container");
const questionTitle = document.getElementById("question-title");


document.getElementById("answer-buttons").addEventListener('click', function (event) {    
  var guess = event.target.textContent;
  if (rightGuesses + wrongGuesses < 9) {
    if (rightAnswers.includes(guess)) {
      console.log('right')
      rightGuesses++
      }
     else {
      console.log ('wrong')
      wrongGuesses++
      }
     displayQuestion()
     questionNum++
     console.log(rightGuesses, wrongGuesses)
    }
  else {
    console.log("game over")
    endQuiz()
    }  
    })    
  

function displayQuestion() {
fetch('https://the-trivia-api.com/api/questions?limit=1')
  .then((response) => response.json())
  .then((data) => {
  for (let i = 0; i < data.length; i++) {;
    let wrongA = data[i].incorrectAnswers
    let rightA = data[i].correctAnswer
    rightAnswers.push(rightA)
    var choices = wrongA.concat(rightA)
    let shuffled = choices.sort((a,b) => 0.5 - Math.random());
    document.getElementById("question-content").innerText = data[i].question;
    document.getElementById("a1").innerText = shuffled[0]
    document.getElementById("a2").innerText = shuffled[1]
    document.getElementById("a3").innerText = shuffled[2]
    document.getElementById("a4").innerText = shuffled[3]
    document.getElementById("question-number").innerText = questionNum
      }
    })
  }

function endQuiz() {
  container.classList.add("hidden");
  questionTitle.classList.add("hidden");
}

  displayQuestion ()  