// function that returns 'rock' or 'paper' or 'scissor' randomly. Default return for invalid input is scissor 
function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock"
    }
    else if (randomNumber === 2) {
        return "Paper"
    }
    else {
        return "Scissor"
    }
}

// function that compares selections and returns results of it in a string
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase()
    if (playerSelection === computerSelection) {
        return "It's a Tie!!!"
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

// asks input 5 times shows results of each rounds and at the end also shows your wins, loses and ties
function game() {
    let playerSelection = prompt("Enter rock, paper or scissor (Default is scissor)");
    let computerSelection = computerPlay();        
    text = playRound(playerSelection, computerSelection);
    console.log(text)
}

game();