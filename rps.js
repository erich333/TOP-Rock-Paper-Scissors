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
    if(typeof(playerSelection) != "string") {
        console.error("Invalid player selection in playRound");
    }

    playerSelection = playerSelection[0].toUpperCase() + 
        playerSelection.substr(1).toLowerCase();

    if(playerSelection === computerSelection) {
        return "Tie! You both chose " + playerSelection + "!";
    } else if(playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock!";
    } else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors!";
    } else if(playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper!";
    } else if(playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock!";
    }  else if(playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors!";
    }  else if(playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper!";
    } else {
        console.error("Unexpected game outcome in playRound!");
    }
    
}