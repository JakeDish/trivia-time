var wrongA
var rightA
var shuffled
var quizOver = false


function displayQuestion() {
  if (quizOver = false) {
fetch('https://the-trivia-api.com/api/questions?limit=10')
  .then((response) => response.json())
  .then((data) => {
  console.log(data)
  for (let i = 0; i < data.length; i++) {;
    let wrongA = data[i].incorrectAnswers
    let rightA = data[i].correctAnswer
    var choices = wrongA.concat(rightA)
    let shuffled = choices.sort((a,b) => 0.5 - Math.random());
    console.log(data[i].question, shuffled, i)
    document.getElementById("question-content").innerText = data[i].question;
    document.getElementById("question-number").innerText = [i];
    document.getElementById("a1").innerText = shuffled[0]
    document.getElementById("a2").innerText = shuffled[1]
    document.getElementById("a3").innerText = shuffled[2]
    document.getElementById("a4").innerText = shuffled[3]
    const checkAnswer = (event) => {
      if (event.target.value)
    }
    document.getElementById("question-number").innerText = ''
  
      }
    })
  }
  else {
    endQuiz ()
  }
}
  displayQuestion ()