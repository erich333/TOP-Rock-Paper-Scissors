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
    if( typeof(playerSelection) != 'string' ) {
        console.error("Invalid player selection in playRound");
    }

    playerSelection = playerSelection[0].toUpperCase() + 
        playerSelection.substr(1).toLowerCase();
    
    console.log(playerSelection);
    
    
    
}