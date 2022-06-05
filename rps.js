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

function game() {
    let keepGoing = true;
    let gameCount = 0;
    let playerWins = 0;
    let computerWins = 0;

    while(keepGoing) {
        let playerSelection = prompt("Rock Paper or Scissors?");
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        
        if(roundResult === "win") {
            playerWins += 1;
        } else if(roundResult === "loss") {
            computerWins += 1;
        }

        gameCount += 1;
        if(gameCount >= 5) {
            keepGoing = false;
        }
    }
}