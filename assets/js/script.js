var sfxCount = new Audio("assets/sound/Jeopardy-theme-song.mp3");
var sfxWrong = new Audio("assets/sound/insect-buzz-wrong.wav");
var sfxRight = new Audio("assets/sound/hm-whoo-hoo.mp3");

document.getElementById("startGame").addEventListener("submit", function (event) {
  event.preventDefault();
  var searchInputVal = document.querySelector("#name").value;


  var difficulty=document.querySelector("#difficulty-select").value;
  var search_term = document.querySelector("#category-select").value;

  console.log(searchInputVal);
  console.log(search_term);
  console.log(difficulty);
  
//sfxCount.play()


});


  
