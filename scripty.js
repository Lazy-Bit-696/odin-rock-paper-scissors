// function that returns 'rock' or 'paper' or 'scissor' randomly
function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(randomNumber)
    if (randomNumber === 1) {
        // console.log("Rock")
        return "Rock"
    }
    else if (randomNumber === 2) {
        // console.log("Paper")
        return "Paper"
    }
    else {
        // console.log("SCISSOR")
        return "Scissor"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase()
    console.log("P: ", playerSelection)
    console.log("C: ",computerSelection)
    if (playerSelection === computerSelection) {
        return "It's a tie!!!"
    }
    else {
        if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                return "You Lose! Paper beats Rock"
            }
            else {
                return "You win! Rock beats Scissor"
            }
        }
        else if (playerSelection === "Paper") {
            if (computerSelection === "Scissor") {
                return "You Lose! Scissor beats Paper"
            }
            else {
                return "You win! Paper beats Rock"
            }
        }
        else {
            if (computerSelection === "Rock") {
                return "You Lose! Rock beats Scissor"
            }
            else {
                return "You win! Scissor beats Paper"
            }
        }
    }
}

const playerSelection = "PAPER";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));