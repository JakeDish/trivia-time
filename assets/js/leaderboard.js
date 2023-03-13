// get local storage
playerStatsUpdated = JSON.parse(localStorage.getItem("players"));

// sort by score
playerStatsUpdated.sort(function (a, b) {
  return parseFloat(b.score) - parseFloat(a.score);
});

var leaderContainer = document.getElementById("leader-container");

// Loop to create a card for each Player
for (var i = 0; i < playerStatsUpdated.length; i++) {
  var cardEl = document.createElement("div");
  cardEl.innerHTML = `
    <div>
      <div class="uk-card uk-card-default uk-card-body ">
        <h2 class="uk-card-title uk-margin-bottom">${playerStatsUpdated[i].name}</h2>
        <h3 class="uk-card-title uk-text-success uk-text-bolder">${playerStatsUpdated[i].score}/10</h3>
      </div>
    </div>
  `;
  leaderContainer.append(cardEl);
}
