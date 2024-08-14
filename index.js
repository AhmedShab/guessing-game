function getPlayerGuess() {
    let userGuess;

    while(true) {
        userGuess = prompt('Please guess a random number');
        userGuess = parseInt(userGuess, 10);

        if (isNaN(userGuess)) {
            alert('Invalid input. Please enter a valid number.')
        } else {
            return userGuess;
        }
    }
}
