
document.getElementById("startGame").addEventListener("submit", function (event) {
  event.preventDefault();
  var searchInputVal = document.querySelector("#name").value;
  var difficulty=document.querySelector("#difficulty-select").value;
  var search_term = document.querySelector("#category-select").value;

  console.log(searchInputVal);
  console.log(search_term);
  console.log(difficulty);
});


  
