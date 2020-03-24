let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    let randomNumber = Math.floor(Math.random() * 10)
    return randomNumber;
}

function compareGuesses(userGuess, computerGuess, numberToBeGuessed) {
    let scoreDeterminant1 = Math.abs(userGuess - numberToBeGuessed);
    let scoreDeterminant2 = Math.abs(computerGuess - numberToBeGuessed);
    if (scoreDeterminant1 < scoreDeterminant2 || scoreDeterminant1 === scoreDeterminant2)
    return true;
    return false;
}

function updateScore(name) {
    if (name === "human")
    humanScore++;
    else computerScore++;
}

function advanceRound() {
    currentRoundNumber++;
}




