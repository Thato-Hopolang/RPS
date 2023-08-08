const computerSlectionDisplay = document.getElementById("computerSlectionDisplay");
const userSelectionDisplay = document.getElementById("userSelectionDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const availableChoices = document.querySelectorAll("button");

let playerChoice = availableChoices;
let playerScore;
let computerScore;

console.log(userSelectionDisplay )

availableChoices.forEach(availableChoice => availableChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    userSelectionDisplay.innerHTML = playerChoice;
    playRound()
    computerChoice()
    concludeGame()
}));

function playRound() {
    if (computerChoice == playerChoice) {
        return "Draw!" // computerScore + 1, playerScore + 1,
    } 
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        playerScore + 1;
    }
    if (playerChoice === "Paper" && computerChoice === "Rock") {
        playerScore + 1;
    }
    if (playerChoice === "Scissors" && computerChoice === "Paper") {
        playerScore + 1;
    }
    if (computerChoice === "Rock" && playerChoice === "Scissors") {
        computerScore + 1;
    }
    if (computerChoice === "Paper" && playerChoice == "Rock") {
        computerScore + 1;
    }
    if (computerChoice === "Scissors" && playerChoice === "Paper") {
        computerScore + 1;
    }
};

function computerChoice () {
    let x = Math.floor(Math.random() * 3)
    if (x == 0) {
        return "Rock"
    }
    if (x == 1) {
        return "Paper"
    }
    if (x = 2) {
        return "Scissors"
    }
};

function concludeGame() {
    if (playerScore == 5) {
        return "You've won the game!"
    } else if (computerScore == 5) {
        return "You've lost the game!"
    }

    if (computerScore > 5 && playerScore > 5) {
        playRound()
    }
};
