const title = document.getElementById("title");

const stats = document.getElementById("stats");
const livesLeft = document.getElementById("livesLeft");
const currentWins = document.getElementById("currentWins");
const requiredWins = document.getElementById("requiredWins");

const storyTeller = document.getElementById("storyTeller");
const story = document.getElementById("story");

const buttonsHolder = document.getElementById("buttonsHolder");
const intialBtn = document.getElementById("intialBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const gameBtn = document.getElementById("gameBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

//document.getElementById("buttons").hidden = true;

function computersChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "Rock"
    } else if (x == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

//function playerChoice() {};

let playerChoice = "Rock"

function playRound() {
    if (playerChoice == computersChoice) {
        return "It's a draw"
    }
    else {
        if (playerChoice == "Rock") {
            if (computersChoice == "Scissors") {
                return "You Win!"
            }
            else if(computersChoice == "Paper") {
                return "You lose"
            }
        }
        else if (playerChoice == "Paper") {
            if (computersChoice == "Rock") {
                return "You Win!"
            }
            else if(computersChoice == "Scissors") {
                return "You lose"
            }
        }
        else if (playerChoice == "Scissors") {
            if (computersChoice == "Paper") {
                return "You Win!"
            }
            else if(computersChoice == "Scissors") {
                return "You lose"
            }
        }
    }
};

console.log(computersChoice())
console.log(playRound())