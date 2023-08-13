function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection.toLowerCase()) {
        return "draw";
    }

    switch (playerSelection) {
        case 'rock':
            return computerSelection === 'Scissors' ? 'win' : 'lose';
        case 'paper':
            return computerSelection === 'Rock' ? 'win' : 'lose';
        case 'scissors':
            return computerSelection === 'Paper' ? 'win' : 'lose';
        default:
            return "invalid";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Choose Rock, Paper or Scissors:");
        const computerChoice = getComputerChoice();
        
        const result = playRound(playerChoice, computerChoice);
        
        switch (result) {
            case 'win':
                playerScore++;
                console.log(`You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`);
                break;
            case 'lose':
                computerScore++;
                console.log(`You Lose! ${computerChoice} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`);
                break;
            case 'draw':
                console.log("It's a draw!");
                break;
            default:
                console.log("Invalid choice");
                i--;  // If the player enters something other than rock, paper, or scissors, let them choose again
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! Score: ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game! Score: ${playerScore} to ${computerScore}`);
    } else {
        console.log(`The game is a draw! Score: ${playerScore} to ${computerScore}`);
    }
}

// Start the game
game();