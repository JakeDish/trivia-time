// timer and game tracker
var timePara = document.getElementById("timePara");
var timeLeft = 100;
var gameComplete = false;

// timer
function startTimer() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timePara.textContent = timeLeft;

    if (timeLeft === 0 || gameComplete === true) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

startTimer();
