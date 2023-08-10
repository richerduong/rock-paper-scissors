function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);  // random number between 0, 1, or 2
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Make the playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a draw!";
    }

    switch (playerSelection) {
        case 'rock':
            return computerSelection === 'Scissors' ? 'You Win! Rock beats Scissors' : 'You Lose! Paper beats Rock';
        case 'paper':
            return computerSelection === 'Rock' ? 'You Win! Paper beats Rock' : 'You Lose! Scissors beats Paper';
        case 'scissors':
            return computerSelection === 'Paper' ? 'You Win! Scissors beats Paper' : 'You Lose! Rock beats Scissors';
        default:
            return "Invalid choice";  // If the player enters something other than rock, paper, or scissors
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));