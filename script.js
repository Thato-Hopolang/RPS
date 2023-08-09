const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("playerChoice");
const resultDisplay = document.getElementById("resultDisplay");

const possibleChoices = document.querySelectorAll("button");

const playerWinsDisplay = document.getElementById("playerWinsDisplay");
const computerWinsDisplay = document.getElementById("computerWinsDisplay");
const roundsPlayedDisplay = document.getElementById("roundsPlayedDisplay");

let playerChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id
    userChoiceDisplay.innerHTML = playerChoice
    getComputerChoice()
    getResult()
}));



function getComputerChoice () {
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
    while (playerScore > 5 && computerScore > 5) {

        if (computerChoice == playerChoice) {
            result = "Draw!";
            roundsPlayed = roundsPlayed +1;
        } 
        if (playerChoice === "Rock" && computerChoice === "Scissors") {
            result = "Player wins"
            playerScore = playerScore +1;
            roundsPlayed = roundsPlayed +1;
        }
        if (playerChoice === "Paper" && computerChoice === "Rock") {
            result = "Player wins"
            playerScore = playerScore +1;
            roundsPlayed = roundsPlayed +1;
        }
        if (playerChoice === "Scissors" && computerChoice === "Paper") {
            result = "Player wins"
            playerScore = playerScore +1;
            roundsPlayed = roundsPlayed +1;
        }
        if (computerChoice === "Rock" && playerChoice === "Scissors") {
            result = "Computer wins"
            computerScore = computerScore +1;
            roundsPlayed = roundsPlayed +1;
        }
        if (computerChoice === "Paper" && playerChoice == "Rock") {
            result = "Computer wins"
            computerScore = computerScore +1;
            roundsPlayed = roundsPlayed +1;
        }
        if (computerChoice === "Scissors" && playerChoice === "Paper") {
            result = "Computer wins"
            computerScore = computerScore +1;
            roundsPlayed = roundsPlayed +1;
        }
    
        resultDisplay.innerHTML = result;
        computerWinsDisplay.innerHTML = computerScore;
        roundsPlayedDisplay.innerHTML = roundsPlayed;
        playerWinsDisplay.innerHTML = playerScore;
};