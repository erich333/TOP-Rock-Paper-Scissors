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

function roundMessage(roundResult, playerSelection, computerSelection) {
    switch(roundResult) {
        case "tie":
            return "A tie! You both picked " + playerSelection + "!";
        case "win":
            return "You win! " + playerSelection + " beats " 
                + computerSelection + "!";
        case "loss":
            return "You lose! " + computerSelection + " beats " 
                + playerSelection + "!";
        default:
            console.error("Unexpected input to roundMessage");
    }
}

function gameOver(playerWins, computerWins) {
    if(playerWins === computerWins) {
        return "It's a tie! You both won " + 
            playerWins.toString() + " matches!";
    } else if(playerWins > computerWins) {
        return "You won! Score: " + 
            playerWins.toString() + " to " + computerWins.toString(); 
    } else if(playerWins < computerWins) {
        return "You lost! Score: " + 
            computerWins.toString() + " to " + playerWins.toString(); 
    } else {
        console.error("Unexpected result in gameOver()");
    }
}

function isInputValid(playerSelection) {
    if(typeof(playerSelection) != "string") {
        return false;
    }
    
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection) {
        case 'rock':
        case 'paper':
        case 'scissors':
            return true;
        default:
            return false;
    }
}

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

rockButton.addEventListener('click', () => console.log(playRound('Rock', computerPlay())));
paperButton.addEventListener('click', () => console.log(playRound('Paper', computerPlay())));
scissorsButton.addEventListener('click', () => console.log(playRound('Scissors', computerPlay())));