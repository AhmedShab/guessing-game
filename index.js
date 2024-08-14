function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess(playerGuess, correctNumber) {
  if (playerGuess === correctNumber) {
    return "You guessed the number!";
  } else if (playerGuess > correctNumber) {
    return "Your number is too high(";
  } else {
    return "Your number is too low((";
  }
}

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
