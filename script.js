const dict = {
    "rock": 1,
    "paper": 2,
    "scissors": 3,
    1: "rock",
    2: "paper",
    3: "scissors"
};

function computerPlay () {
    return Math.floor(Math.random() * 3) + 1;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = dict[playerSelection.toLowerCase()];
    if (playerSelection === computerSelection) {
        return 0;
    }
    else if (
        (playerSelection === 1 && computerSelection === 3)
        || (playerSelection === 2 && computerSelection === 1)
        || (playerSelection === 3 && computerSelection === 2) 
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
        const playerSelection = prompt("Rock, Paper, or Scissors? >>> ");
        const computerSelection = computerPlay();
        roundWinner = playRound(playerSelection, computerSelection);
        if (roundWinner === 1) {
            console.log("You win! " + playerSelection.toLowerCase() + " beats " + dict[computerSelection] + ".");
        }
        else if (roundWinner === -1) {
            console.log("You lose... " + dict[computerSelection] + " beats " + playerSelection.toLowerCase() + ".");
        }
        else {
            console.log("Tie, you both chose " + dict[computerSelection]);
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