"use strict"

let chances = 4;
document.querySelector(".score").textContent = chances;

// The Guess number
const number = Math.trunc(Math.random() * 20 ) + 1;
document.querySelector(".number").textContent = number;


// User input
const check = document
             .querySelector(".check")
             .addEventListener("click", () => {
                const input = Number(document.querySelector(".guess").value);

                if(!input) 
                    message("⛔ choose from 1 to 20");
                else if (input === number) 
                    message("🎉 Correct !");
                else if (chances === 1) {
                    message("💥 You Lost the Game");
                    renderScore(0);
                }
                else if (input > number) {
                    message("📉 Try lower");
                    chances--;
                    renderScore(chances);
                }
                else if (input < number) {
                    message("📈 Try higer");
                    chances--;
                    renderScore(chances);
                }
})

// Render Message
function message(text) {
    const message = document.querySelector(".message");
    let messageContent = message.textContent = text;

    return messageContent;
}

// Render Score
function renderScore(chances) {
    const score = document.querySelector(".score");
    let scoreUpdated = score.textContent = chances;

    return scoreUpdated;
}
