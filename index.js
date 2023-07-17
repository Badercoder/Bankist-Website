"use strict"
/*==================== Model ====================*/
let chances = 20;
document.querySelector(".score").textContent = chances;

// The Guess number
let number = Math.trunc(Math.random() * 20 ) + 1;
document.querySelector(".hover").textContent = number;

// Highest Score
let highestScore = 0;

/*==================== View ====================*/
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

// Function to randomly position the '.hover' element
function glitch() {
    const hoverElement = document.querySelector(".hover");
    const x = Math.random() * (window.innerWidth - hoverElement.clientWidth);
    const y = Math.random() * (window.innerHeight - hoverElement.clientHeight);

    hoverElement.style.left = x + 'px';
    hoverElement.style.top = y + 'px';
}

// Try Again button
document.querySelector(".again").addEventListener("click", () => {
    chances = 20;
    document.querySelector(".score").textContent = chances;
    number = Math.trunc(Math.random() * 20 ) + 1;
    document.querySelector(".hover").textContent = number;
    document.querySelector("body").style.background = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = ""
    message("🎮 Start guessing...");
    document.querySelector(".highestScore").value = 0;

    glitch();
})

// Rest Button
document.querySelector(".reset").addEventListener("click", () => {
    location.reload();
})

/*==================== Controller ====================*/
// User input
const check = document
             .querySelector(".check")
             .addEventListener("click", () => {
                const input = Number(document.querySelector(".guess").value);

                if(!input) 
                    message("⛔ choose from 1 to 20");
                else if (input === number)  {
                    message("🎉 Correct !");
                    document.querySelector("body").style.background = "#60b347";
                    document.querySelector(".number").style.width = "30rem";
                    document.querySelector(".btn").style.border = "white";
                    document.querySelector(".check").style.border = "white";
                    document.querySelector(".reset").style.border = "rgb(255, 66, 0)";
                    document.querySelector(".number").textContent = number;
                    // highest Score
                    if(chances > highestScore) {
                        highestScore = chances;
                        document.querySelector(".highestScore").textContent =highestScore;
                        console.log(highestScore);
                    }
                }
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
});
