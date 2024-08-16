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


function game() {
    const correctAnswer = 'You guessed the number!';
    const correctNumber = generateRandomNumber();
    let counter = 0;
    const maxAttempts = 10;
    let playerWon = false;

    while(counter < maxAttempts) {
        let playerGuess = getPlayerGuess();
        counter++;

        let checkPlayerGuess = checkGuess(playerGuess, correctNumber);
        console.log(checkPlayerGuess);

        if (checkPlayerGuess === correctAnswer) {
            playerWon = true;
            break;
        }
    }

    if (playerWon) {
        console.log(`Awesome, You won :D with only ${counter} attempts`);
    } else {
        console.log(`Sorry :( you used all your ${counter} attempts. Try again`);
    }
}

// start the game
game();