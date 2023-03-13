var apiKey = "vkWBAa2LfhiieA9v1VVSP5pwtU8MRTB4";
var searchTerm = "goodjob"
var score = 6
var sfxCount = new Audio("assets/sound/Jeopardy-theme-song.mp3");

function showGif() {
fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&rating=pg-13`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) { 
  display_image(data.message);
    console.log(data);
  });
  function display_image(image_url){
    console.log(image_url)
     document.getElementById("image").src = image_url
  }
if (score < 6) {
  result = "Loser";
}
if (score = 7) {
  result = "almost";
}
if (score > 7) {
  result = "YAY";
}
}
// timer and game tracker
var timePara = document.getElementById("timePara");
var timeLeft = 100;
var gameComplete = false;

// timer
function startTimer() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timePara.textContent = timeLeft;
    sfxCount.play();

    if (timeLeft === 0 || gameComplete === true) {
      clearInterval(timeInterval);
      endQuiz()
      return
    }
  }, 1000);
}

//startTimer();
