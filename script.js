document.getElementById("open-button").addEventListener("click", function(event) {
  event.preventDefault();
  const set = document.getElementById("set-select").value;
  const url = "https://api.magicthegathering.io/v1/sets/" + set + "/booster";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let cardlist = "";
      for (let i = 0; i < json.cards.length; i++) {
        cardlist += "<div class=\"card--content ";
        cardlist += json.cards[i].rarity;
        cardlist += "\"><img src=";
        cardlist += json.cards[i].imageUrl;
        cardlist += "></div>";
      }
      document.getElementById("cardList").innerHTML = cardlist;
      document.getElementById("cardList").style.visibility = "visible";
    });
});