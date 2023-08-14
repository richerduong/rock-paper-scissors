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

function game(playerChoice) {
    let playerScore = 0;
    let computerScore = 0;

    //for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        const resultDiv = document.getElementById('result');
        const scoreDiv = document.getElementById('score');
        
        switch (result) {
            case 'win':
                playerScore++;
                resultDiv.textContent = `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`;
                break;
            case 'lose':
                computerScore++;
                resultDiv.textContent = `You Lose! ${computerChoice} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
                break;
            case 'draw':
                resultDiv.textContent = "It's a draw!";
                break;
            default:
                resultDiv.textContent = "Invalid choice";
                //i--;  // If the player enters something other than rock, paper, or scissors, let them choose again
        }
    //}

    if (playerScore > computerScore) {
        scoreDiv.textContent = `You win the game! Score: ${playerScore} to ${computerScore}`;
    } else if (playerScore < computerScore) {
        scoreDiv.textContent = `You lose the game! Score: ${playerScore} to ${computerScore}`;
    } else {
        scoreDiv.textContent = `The game is a draw! Score: ${playerScore} to ${computerScore}`;
    }
}

// Event listeners for each button
document.getElementById('rock').addEventListener('click', function() {
    game('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    game('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    game('scissors');
});