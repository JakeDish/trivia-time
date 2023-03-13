function displayScore(score) {


  var searchTerm = ""
  if (score > 7) {
    result = "winner"
    searchTerm = "winner"
  } else if (score > 5) {
    result = "almsot had it"
    searchTerm = "almost had it"
  } else {
    result = "loser"
    searchTerm = "loser"
  }
  var apiKey = "vkWBAa2LfhiieA9v1VVSP5pwtU8MRTB4";



  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&rating=pg-13`)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      // display_image(data.message);
      var image_url = result.data[0].images.downsized_medium.url;
      display_image(image_url)
    });
  function display_image(image_url) {
    console.log(image_url)
    document.getElementById("image").src = image_url
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

    if (timeLeft === 0 || gameComplete === true) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

startTimer();
