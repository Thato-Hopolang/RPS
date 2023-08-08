const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("resultDisplay");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}));



function generateComputerChoice () {
    let x = Math.floor(Math.random() * 3)
    
    if (x === 0) {
        computerChoice = "Rock"
    }
    if (x === 1) {
        computerChoice = "Paper"
    }
    if (x === 2) {
        computerChoice = "Scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice;
};


function getResult() {
    if (computerChoice == userChoice) {
        result = "Draw!"
    } 
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        result = "Player wins"
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
        result = "Player wins"
    }
    if (userChoice === "Scissors" && computerChoice === "Paper") {
        result = "Player wins"
    }
    if (computerChoice === "Rock" && userChoice === "Scissors") {
        result = "Computer wins"
    }
    if (computerChoice === "Paper" && userChoice == "Rock") {
        result = "Computer wins"
    }
    if (computerChoice === "Scissors" && userChoice === "Paper") {
        result = "Computer wins"
    }

    resultDisplay.innerHTML = result;
};