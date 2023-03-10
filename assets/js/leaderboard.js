//****** temporary hardcoding user data. This will be replaced with items from localStorage ********/
var playerData1 = {
  name: "Player 1",
  correct: 6,
  incorrect: 4,
};

var playerData2 = {
  name: "Player 2",
  correct: 10,
  incorrect: 0,
};

var playerData3 = {
  name: "Player 3",
  correct: 2,
  incorrect: 8,
};

var allPlayers = [playerData1, playerData2, playerData3];
//******  END of hard code ********/

// Sort by highest score
allPlayers.sort(function (a, b) {
  return parseFloat(b.correct) - parseFloat(a.correct);
});

var leaderContainer = document.getElementById("leader-container");

// Loop to create a card for each Player
for (var i = 0; i < allPlayers.length; i++) {
  var cardEl = document.createElement("div");
  cardEl.innerHTML = `
    <div>
      <div class="uk-card uk-card-default uk-card-body ">
        <h2 class="uk-card-title uk-margin-bottom">${allPlayers[i].name}</h2>
        <h3 class="uk-card-title uk-text-success uk-text-bolder">${allPlayers[i].correct}/10</h3>
      </div>
    </div>
  `;
  leaderContainer.append(cardEl);
}
