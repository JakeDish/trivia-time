var sfxCount = new Audio("assets/sound/Jeopardy-theme-song.mp3");
var sfxWrong = new Audio("assets/sound/insect-buzz-wrong.wav");
var sfxRight = new Audio("assets/sound/hm-whoo-hoo.mp3");


document.getElementById("startGame").addEventListener("submit", function (event) {
  event.preventDefault();
 // pull search items from 
  var nameEl = document.querySelector("#name").value;
  var difficulty=document.querySelector("#difficulty-select").value;
  var search_term = document.querySelector("#category-select").value;
// insert name, difficulty and quiz category to local storage
  window.localStorage.setItem('difficulty', difficulty);
  window.localStorage.setItem('search_term', search_term);
  window.localStorage.setItem('name', nameEl);

  console.log(nameEl);
  console.log(search_term);
  console.log(difficulty);
  
//sfxCount.play()

window.location.href = "./quiz.html"

});


  
