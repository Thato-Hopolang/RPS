const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("playerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const ruleDisplay = document.getElementById("ruleDisplay");
const grandFinaleDisplay = document.getElementById("grandFinaleDisplay");

const possibleChoices = document.querySelectorAll("button");

const playerWinsDisplay = document.getElementById("playerWinsDisplay");
const computerWinsDisplay = document.getElementById("computerWinsDisplay");
const roundsPlayedDisplay = document.getElementById("roundsPlayedDisplay");

let law;
let playerChoice;
let computerChoice;
let result;
let final;
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id
    userChoiceDisplay.innerHTML = playerChoice
    getComputerChoice()
    getResult()
}));


//At Start
document.getElementById("grandFinaleDisplay").hidden = true;
document.getElementById("optionYes").hidden = true;
document.getElementById("optionNo").hidden = true;


function theEnd() {
    document.getElementById("grandFinaleDisplay").hidden = false;
    document.getElementById("optionYes").hidden = false;
    document.getElementById("optionNo").hidden = false;
}

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
        if (computerScore === 5) {
            final = "Computer has won the tournament."
            law = "Would like to play again?"
            finale()
            theEnd()
        } else if (playerScore === 5) {
            final = "Player has won the tournament."
            law = "Would like to play again?"
            finale()
            theEnd()
        }
    
        resultDisplay.innerHTML = result;
        computerWinsDisplay.innerHTML = computerScore;
        roundsPlayedDisplay.innerHTML = roundsPlayed;
        playerWinsDisplay.innerHTML = playerScore;
        grandFinaleDisplay.innerHTML = final;
        ruleDisplay.innerHTML = law;
};

function finale() {
    document.getElementById("computerChoice").hidden = true;
    document.getElementById("playerChoice").hidden = true;
    document.getElementById("computerWinsDisplay").hidden = true;
    document.getElementById("roundsPlayedDisplay").hidden = true;
    document.getElementById("playerWinsDisplay").hidden = true;
    document.getElementById("Rock").hidden = true;
    document.getElementById("Paper").hidden = true;
    document.getElementById("Scissors").hidden = true;
    document.getElementById("playerInfo").hidden = true;
    document.getElementById("playerOptions").hidden = true;
    document.getElementById("computerInfo").hidden = true;
    document.getElementById("computerOptions").hidden = true;
    document.getElementById("roundInfo").hidden = true;
    document.getElementById("resultDisplay").hidden = true;


};


function yes() {};

function no() {};