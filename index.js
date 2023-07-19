"use strict";

// Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); // faster
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")

/*----------------- Model -----------------*/
let socres, currentScore, activePlayer, playing;

function initialise() {

    // Starting Conditions
    diceEl.classList.add("hidden");
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    socres = [0, 0];
    currentScore = 0; // defined globally in order to have it persistent
    activePlayer = 0;
    playing = true;

    player0.classList.remove("player--winner")
    player1.classList.remove("player--winner")
    player0.classList.add("player--active")
    player1.classList.remove("player--active")
    scrollToElement();
}

initialise();

// Rolling Dice Functionality
btnRoll.addEventListener("click", () => {
    if (playing) {
        // 1. Generate a random number
        const dice = Math.trunc(Math.random() * 6 + 1);
    
        // 2. Display the Dice
        diceEl.classList.remove("hidden");
        diceEl.src = `images/dice-${dice}.png`
    
        // 3. Check if rolled = 1
        if(dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
        //  switch to the next player
            switchPlayer();
            scrollToElement(`player--${activePlayer}`);
        }
    }
})

btnHold.addEventListener("click", () => {
    if (playing) {
        // 1. add current score to the Active Player's Score
        socres[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = socres[activePlayer];
        // 2. Check if the Active Player's Score is >= 100
        if(socres[activePlayer] >= 20) {
            // Finish the Game
            playing = false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        } else {
            // 3. Switch to the Next Player
            switchPlayer();
            scrollToElement(`player--${activePlayer}`);
        }
    }
})

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = (activePlayer === 0) ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}

btnNew.addEventListener("click", initialise);

// Scroll to a specific element on the page
function scrollToElement(elementclass) {
    const bodyElement = document.querySelector("body");
    const player1El = document.querySelector(".player--1")

    if(elementclass === "player--1")
        player1El.scrollIntoView();
    else bodyElement.scrollIntoView();
}