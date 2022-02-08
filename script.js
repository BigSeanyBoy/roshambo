let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") 
    ) {
        playerScore++;
    }
    else {
        computerScore++;
    }

    if (playerScore === 5) {
        alert("Player Wins!");
        resetScore();
    }
    else if (computerScore === 5) {
        alert("Computer Wins...");
        resetScore();
    }

    const score = document.querySelector(".score");
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

}

let resetScore = () => {
    playerScore = 0;
    computerScore = 0;
}

function game() {
    const rock = document.querySelector("#rock");
    rock.addEventListener('click', () => {
        playRound("rock", computerPlay());
    });

    const paper = document.querySelector("#paper");
    paper.addEventListener('click', () => {
        playRound("paper", computerPlay());
    });

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener('click', () => {
        playRound("scissors", computerPlay());
    });
}

game();