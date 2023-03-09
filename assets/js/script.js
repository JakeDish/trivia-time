const trivApiRoot = "https://the-trivia-api.com/api/questions?"
    // categories=film_and_tv,general_knowledge,history,music,science&limit=10&region=US&difficulty=medium

    https://the-trivia-api.com/api/questions?categories=film_and_tv,general_knowledge,history,music,science,arts_and_literature,food_and_drink,geography,society_and_culture,sport_and_leisure&limit=10&region=US&difficulty=medium

const film_and_tv="film_and_tv";
const general_knowledge="general_knowledge";
const history="history"
const music="music";
const science="science";
const arts_and_literature="arts_and_literature";
const food_and_drink="food_and_drink";
const geography="geography";
const society_and_culture="society_and_culture";
const sport_and_leisure="sport_and_leisure";

function renderQuizData() {


}

document.getElementById("startGame").addEventListener("submit", function (event) {
  
  
  // start game here...
  renderQuizData()
})