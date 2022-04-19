document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "cow",
      img: "images/cow.png",
    },
    {
      name: "goose",
      img: "images/goose.png",
    },
    {
      name: "koala",
      img: "images/koala.png",
    },
    {
      name: "monkey",
      img: "images/koala.png",
    },
    {
      name: "snake",
      img: "images/snake.png",
    },
    {
      name: "turtle",
      img: "images/turtle.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChoseId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChoseId[0];
    const optionTwoId = cardsChoseId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match!");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, try again...");
    }
    cardsChosen = [];
    cardsChoseId = [];
    resultDisplay.textContent = cardsWon.lenght;
    if (cardsWon.lenght === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChoseId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
});
