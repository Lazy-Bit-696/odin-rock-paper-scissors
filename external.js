let getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissor"
    }
};

let round = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("Its a Draw");
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        console.log("You Win! Rock beats Scissor");
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You Lose! Paper beats Rock");
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You Win! Paper beats Rock");
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        console.log("You Lose! Scissor beats Paper");
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){
        console.log("You Win! Scissor beats Paper");
    }
    else if (playerSelection === "scissor" && computerSelection === "rock"){
        console.log("You Lose! Rock beats Scissor");
    }

};

let playerSelection;
let computerSelection;

for (let i=1 ; i <= 5 ; i++) {
    playerSelection = prompt("Choose: rock or paper or scissor-")
    computerSelection = getComputerChoice();
    console.log(`Round ${i}`)
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    round(playerSelection, computerSelection);
}

