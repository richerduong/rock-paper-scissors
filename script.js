function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);  // random number between 0, 1, or 2
    return choices[randomIndex];
}

console.log(getComputerChoice());