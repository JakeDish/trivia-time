var sfxCount = new Audio("assets/sound/Jeopardy-theme-song.mp3");
var sfxWrong = new Audio("assets/sound/insect-buzz-wrong.wav");
var sfxRight = new Audio("assets/sound/hm-whoo-hoo.mp3");

// Set array for playerStats and set existing data from localStorage
// var playerStats = [];
// playerStats = JSON.parse(localStorage.getItem("players"));
// console.log(playerStats);

document
  .getElementById("startGame")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var searchInputVal = document.querySelector("#name").value;
    var difficulty = document.querySelector("#difficulty-select").value;
    var search_term = document.querySelector("#category-select").value;

    if (searchInputVal != "") {
      // playerStats.push(searchInputVal);
      // localStorage.setItem("players", JSON.stringify(playerStats));
      // append name value so we can use it in quiz.js
      window.location.href = `quiz.html?${searchInputVal}`;
    }
  });
