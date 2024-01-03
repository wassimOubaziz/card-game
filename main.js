const grid = document.querySelector(".grid");

const arrCards = [
  {
    name: "elephant",
    src: "allCards/01.jpg",
  },
  {
    name: "elephant",
    src: "allCards/01.jpg",
  },
  {
    name: "jaguar",
    src: "allCards/02.jpg",
  },
  {
    name: "jaguar",
    src: "allCards/02.jpg",
  },
  {
    name: "raccoon",
    src: "allCards/03.jpeg",
  },
  {
    name: "raccoon",
    src: "allCards/03.jpeg",
  },
  {
    name: "monkey",
    src: "allCards/04.jpeg",
  },
  {
    name: "monkey",
    src: "allCards/04.jpeg",
  },
  {
    name: "lion",
    src: "allCards/05.jpeg",
  },
  {
    name: "lion",
    src: "allCards/05.jpeg",
  },
];

arrCards.sort(() => 0.5 - Math.random());

for (let i = 0; i < arrCards.length; i++) {
  const card = document.createElement("img");
  card.setAttribute("src", "backCard.jpg");
  card.setAttribute("data-set", i);
  grid.appendChild(card);
  card.addEventListener("click", flipCard);
}

let cardChosen = [];
let cardChosenId = [];
let cardWon = [];
const score = document.querySelector(".score");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const finalScore1 = document.querySelector(".finalScore1");
const finalScore2 = document.querySelector(".finalScore2");
let players = [0, 0];
let j = 0;
let k = 1;
function checkFunction() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardChosenId[0];
  const optionTwoId = cardChosenId[1];

  if (cardChosen[0] === cardChosen[1]) {
    alert(`Nice one player ${j + 1} you got 5 points!!`);
    players[j] += 5;
    cardWon.push(cardChosen);
    finalScore1.textContent = players[0];
    finalScore2.textContent = players[1];
  } else {
    j += Math.pow(-1, ++k);
    cards[optionOneId].setAttribute("src", "backCard.jpg");
    cards[optionTwoId].setAttribute("src", "backCard.jpg");
    alert(`better luck next time it player ${j + 1} tern you got 0 points!!`);
    if (j) {
      player1.style.color = "black";
      player2.style.color = "red";
    } else {
      player1.style.color = "red";
      player2.style.color = "black";
    }
  }
  cardChosen = [];
  cardChosenId = [];
  score.textContent = cardWon.length;
  if (cardWon.length == arrCards.length / 2) {
    if (players[0] > players[1]) {
      score.textContent = "Player 1 wins";
      setTimeout(reload, 4000);
    } else {
      score.textContent = "Player 2 wins";
      setTimeout(reload, 4000);
    }
  }
}

function reload() {
  location.reload();
}

function flipCard() {
  const getData = this.getAttribute("data-set");
  let counter = 0;
  for (let i = 0; i < cardChosenId.length; i++) {
    if (cardChosenId[i] === getData) {
      counter++;
    }
  }
  if (!cardChosenId) {
    cardChosen.push(arrCards[getData].name);
    cardChosenId.push(getData);
  }
  if (counter === 0) {
    cardChosen.push(arrCards[getData].name);
    cardChosenId.push(getData);
  }
  this.setAttribute("src", arrCards[getData].src);
  if (cardChosen.length == 2) {
    setTimeout(checkFunction, 500);
  }
}
