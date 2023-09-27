
let player = {
    name: "Nil",
    chips: 999
}

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name  + ":" + " $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;

    if (randomCard === 1) {
        console.log(randomCard);
        return 11;
    } else if (randomCard === 11 || randomCard === 12 || randomCard === 13) {
        console.log(randomCard);
        return 10;
    } else {
        console.log(randomCard);
        return randomCard;
    }
}
// console.log(getRandomCard());

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "You have got Blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.innerText = message;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from deck!");
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

}