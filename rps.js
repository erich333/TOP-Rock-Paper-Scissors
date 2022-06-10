function computerPlay() {
    let num = Math.floor(Math.random()*3);
    switch(num) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + 
        playerSelection.substr(1).toLowerCase();

    if(playerSelection === computerSelection) {
        return "tie";
    } else if(playerSelection === "Rock" && computerSelection === "Paper") {
        return "loss";
    } else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        return "win";
    } else if(playerSelection === "Paper" && computerSelection === "Scissors") {
        return "loss";
    } else if(playerSelection === "Paper" && computerSelection === "Rock") {
        return "win";
    } else if(playerSelection === "Scissors" && computerSelection === "Rock") {
        return "loss";
    } else if(playerSelection === "Scissors" && computerSelection === "Paper") {
        return "win";
    } else {
        console.error("Unexpected game outcome in playRound()!");
    }
    
}


const inputButtons = document.querySelectorAll('.inputButtonContainer button');
const WINNINGSCORE = 5;

inputButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        updateGame(e.target.textContent, computerPlay());
    });
});

function updateGame(playerSelection, computerSelection) {
    let roundResult = playRound(playerSelection, computerSelection);
    let newScore = updateScoreboard(roundResult);
    if(newScore >= WINNINGSCORE && roundResult === 'win') {
        alert('You win!');
        resetGame();
    } else if(newScore >= WINNINGSCORE && roundResult === 'loss') {
        alert('Computer wins!');
        resetGame();
    }
    console.log(`Computer played: ${computerSelection}`);
    console.log(`Player played  : ${playerSelection}`);
    console.log(roundResult);
}

function updateScoreboard(roundResult) {
    if(roundResult === 'win') {
        return incrementScore('#playerScore');
    } else if(roundResult === 'loss') {
        return incrementScore('#computerScore');
    }
}

function incrementScore(workingScoreID) {
    const scoreDisplay = document.querySelector(workingScoreID);
    currentScore = Number(scoreDisplay.textContent);
    scoreDisplay.textContent = currentScore + 1;
    return Number(scoreDisplay.textContent);
}

function resetGame() {
    const scoreDisplays = document.querySelectorAll('.scoreDisplay');
    scoreDisplays.forEach( (display) => display.textContent = 0 );
}