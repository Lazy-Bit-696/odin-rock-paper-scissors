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