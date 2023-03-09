var quizQ


function displayQuestion() {
fetch('https://the-trivia-api.com/api/questions?limit=10')
  .then((response) => response.json())
  .then((data) => {
console.log(data)
  for (let i = 0; i < data.length; i++) {;
    var choices = data[i].incorrectAnswers.concat(data[i].correctAnswer)
    var shuffled = choices.sort((a,b) => 0.5 - Math.random());
    console.log(data[i].question, shuffled)
    document.getElementById("question-number").innerText + [i+1];
  }})
}
  displayQuestion ()