function btnClick(e) {
    const playerChoice = e.target.id;
    const computerChoice = computerRandomChoice();
    showManSymbol(playerChoice);
    showComputerSymbol(computerChoice);
    tieCheck(playerChoice,computerChoice)
}

function tieCheck(playerChoice,computerChoice) {
    if (playerChoice === computerChoice) {
        return;
    }
    else {
        const gameres = gameRound(playerChoice,computerChoice);
        scoreUpdate(gameres);
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

const btn = Array.from(document.querySelectorAll(".btn"));
btn.forEach(button => button.addEventListener('click', btnClick));