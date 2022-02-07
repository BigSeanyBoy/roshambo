function computerPlay () {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 0;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "rock") 
    ) {
        return 1;
    }
    else {
        return -1;
    }
}

function game() {
    gameWinner = 0;
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1) + ":");
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = computerPlay();
        roundWinner = playRound(playerSelection, computerSelection);
        if (roundWinner === 1) {
            console.log("You win! " + playerSelection.toLowerCase() + " beats " + computerSelection + ".");
        }
        else if (roundWinner === -1) {
            console.log("You lose... " + computerSelection + " beats " + playerSelection.toLowerCase() + ".");
        }
        else {
            console.log("Tie, you both chose " + computerSelection);
        }
        gameWinner += roundWinner;
    }
    if (gameWinner > 0) {
        console.log("You win!");
    }
    else if (gameWinner < 0) {
        console.log("You lose...");
    }
    else {
        console.log("Tie");
    }
}

game();