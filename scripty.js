function btnClick(e) {
    const playerChoice = e.target.id;
    const computerChoice = computerRandomChoice();
    showManSymbol(playerChoice);
    showComputerSymbol(computerChoice);
    tieCheck(playerChoice,computerChoice);
    resetCheck();
}

function resetCheck() {
    let manpoint = document.getElementById("manpoints");
    let mpoint = manpoint.innerText;
    mpoint = parseInt(mpoint);
    let compoint = document.getElementById("compoints");
    let cpoint = compoint.innerText;
    cpoint = parseInt(cpoint);
    let text = document.querySelector("#text");
    if (mpoint === 5 || cpoint === 5) {
        const box = document.querySelector(".overlay");
        box.style.display = "block"
        if (mpoint > cpoint) {
            text.innerText = "You Won!";
            console.log("you won");
        }
        else {
            text.innerText = "You Lose!";
            console.log("you lose");
        }
    }
}

function tieCheck(playerChoice,computerChoice) {
    if (playerChoice === computerChoice) {
        ctext.innerText = "It's a tie"
        return;
    }
    else {
        const gameres = gameRound(playerChoice,computerChoice);
        scoreUpdate(gameres);
        chooseText(gameres,playerChoice,computerChoice);
    }
}

function gameRound(playerChoice,computerChoice) {
    if (playerChoice === "rock") {
        if (computerChoice === "scissor") {
            return true;
        }
        else if (computerChoice === "paper") {
            return false;
        }
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return true;
        }
        else if (computerChoice  === "scissor") {
            return false;
        }
    }
    else if (playerChoice === "scissor") {
        if (computerChoice === "paper") {
            return true;
        }
        else if (computerChoice === "rock") {
            return false;
        }
    }
}

function scoreUpdate(val) {
    if (val) {
        let manpoint = document.getElementById("manpoints");
        let point = manpoint.innerText;
        point = parseInt(point);
        point += 1
        manpoint.innerText = point;
    }
    else {
        let compoint = document.getElementById("compoints");
        let point = compoint.innerText;
        point = parseInt(point);
        point += 1
        compoint.innerText = point;
    }
}

function showManSymbol(s) {
    const mansym = document.getElementById("mansym");
    mansym.innerText = symbolShow(s);
}

function showComputerSymbol(s) {
    const comsys = document.getElementById("comsym");
    comsys.innerText = symbolShow(s)
}

function symbolShow(sys) {
    switch(sys) {
        case "rock":
            return "✊";
            break;
        case "paper":
            return "✋";
            break;
        case "scissor":
            return "✌";
            break;
        default:
            return;
    }
}

function computerRandomChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    }
    else if (randomNumber == 1) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

const ctext = document.getElementById("choose");
function chooseText(gameres,playerChoice,computerChoice) {
    if (gameres) {
        ctext.innerText = "You won! " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + "."
    }
    else {
        ctext.innerText = "You lost! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + "."
    }
}

function resetGame(e) {
    console.log("reset")
    let manpoint = document.getElementById("manpoints");
    manpoint.innerText = 0;
    let compoint = document.getElementById("compoints");
    compoint.innerText = 0;
    const box = document.querySelector(".overlay");
    ctext.innerText = "Choose"
    box.style.display = "none"
}

const btn = Array.from(document.querySelectorAll(".btn"));
btn.forEach(button => button.addEventListener('click', btnClick));
const rbtn = document.querySelector("#reset-btn");
rbtn.addEventListener('click', resetGame);