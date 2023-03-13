var sfxCount = new Audio("assets/sound/Jeopardy-theme-song.mp3");
var sfxWrong = new Audio("assets/sound/insect-buzz-wrong.wav");
var sfxRight = new Audio("assets/sound/hm-whoo-hoo.mp3");
var searchInputVal = '';
var difficulty = '';
var search_term = '';

document.getElementById("startGame").addEventListener("submit", function (event) {
  event.preventDefault();
  localStorage.clear()
  var searchInputVal = document.querySelector("#name").value;
  var difficulty = document.querySelector("#difficulty-select").value;
  var search_term = document.querySelector("#category-select").value;
  localStorage.setItem("search_term", search_term)
  localStorage.setItem("difficulty", difficulty)
  localStorage.setItem("searchInputVal", searchInputVal);

  console.log(localStorage)
  window.location.href = "quiz.html"

});


  
