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



const WINNINGSCORE = 5;
const alertDelay = 1000;

const inputButtons = document.querySelectorAll('.inputButtonContainer button');
inputButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        updateGame(e.target.textContent, computerPlay());
    });
});

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetGame);

function updateGame(playerSelection, computerSelection) {
    let roundResult = playRound(playerSelection, computerSelection);
    let newScore = updateScoreboard(roundResult);
    clearButtons();
    lightUpButton(computerSelection);
    checkScore(newScore, roundResult);
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

function lightUpButton(buttonSelected) {
    const buttonID = '#computer' + buttonSelected + 'Button';
    const button = document.querySelector(buttonID);
    button.classList.add('litButton');
}

function clearButtons() {
    const computerButtons = document.querySelectorAll('.computerPlayerContainer button');
    computerButtons.forEach(button => button.classList.remove('litButton'));
}

function resetGame() {
    const scoreDisplays = document.querySelectorAll('.scoreDisplay');
    scoreDisplays.forEach( (display) => display.textContent = 0 );
    const winDisplays = document.querySelectorAll('.winLabel');
    winDisplays.forEach( (display) => display.classList.remove('litWinLabel'));
    clearButtons();
    enableInput();
}

function checkScore(newScore, roundResult) {
    if(newScore >= WINNINGSCORE && roundResult === 'win') {
        const winText = document.querySelector('#playerWinMessage');
        winText.classList.add('litWinLabel');
        disableInput();
    } else if(newScore >= WINNINGSCORE && roundResult === 'loss') {
        const winText = document.querySelector('#computerWinMessage');
        winText.classList.add('litWinLabel');
        disableInput();
    }
}

function disableInput() {
    const inputButtons = document.querySelectorAll('.inputButtonContainer button');
    inputButtons.forEach(button => button.disabled = true);
}

function enableInput() {
    const inputButtons = document.querySelectorAll('.inputButtonContainer button');
    inputButtons.forEach(button => button.disabled = false);
}