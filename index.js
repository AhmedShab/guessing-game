/**
 * Generates a random number between 1 and 100.
 *
 * @returns {number} A random integer between 1 and 100.
 */
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

/**
 * Compares the player's guess with the correct number and returns a result message.
 *
 * @param {number} playerGuess - The number guessed by the player.
 * @param {number} correctNumber - The correct number to be guessed.
 * @returns {string} A message indicating whether the guess is correct, too high, or too low.
 */
function checkGuess(playerGuess, correctNumber) {
  if (playerGuess === correctNumber) {
    return "You guessed the number!";
  } else if (playerGuess > correctNumber) {
    return "Your number is too high(";
  } else {
    return "Your number is too low((";
  }
}

function quitGame() {
  // function that quits game (with confirmation from user)
  const playAgain = confirm("Do you really wanna quit??");
  if (!playAgain) return false;
  alert("Thank you for your game!");
  return true;
}

/**
 * Prompts the user to guess a number and ensures that the input is a valid number.
 *
 * @returns {number} The validated number guessed by the player.
 */
function getPlayerGuess(finalScore) {
  // added finalScore as a parametr because Branko said that it's good user experience to show every time score to user
  let userGuess;

  while (true) {
    userGuess = prompt(
      `Please guess a random number (Your current score: ${finalScore} points)`
    );

    if (userGuess === null) {
      return userGuess; // if user press cancel userGuess will take value null if it's true -> we just return this value, if not -> continue our code in this function
    }
    userGuess = parseInt(userGuess, 10);

    if (isNaN(userGuess)) {
      alert("Invalid input. Please enter a valid number.");
    } else {
      return userGuess;
    }
  }
}

/**
 * Executes the number guessing game where the player has up to 10 attempts to guess the correct number.
 *
 * - The game generates a random number between 1 and 100.
 * - The player has a maximum of 10 attempts to guess the number.
 * - The score starts at 100 and decreases by 10 points for each incorrect guess.
 * - An alert is shown after each guess indicating whether the guess was correct, too high, or too low.
 * - The final score is shown if the player wins, otherwise a message indicating the use of all attempts is displayed.
 */
function game() {
  const correctAnswer = "You guessed the number!";
  const correctNumber = generateRandomNumber();
  let counter = 0;
  const maxAttempts = 10;
  let playerWon = false;
  let finalScore = 100;

  while (counter < maxAttempts) {
    let playerGuess = getPlayerGuess(finalScore);

    while (playerGuess === null) {
      // i add this loop because if user isn't confident and click one time cancel it's okay but when he clicks this cancel button second time without break game continues and say "Your number is too low". It's not behavior that we expect
      const exit = quitGame();
      if (exit) return;
      else {
        playerGuess = getPlayerGuess(finalScore);
      }
    }
    counter++;

    let checkPlayerGuess = checkGuess(playerGuess, correctNumber);
    alert(checkPlayerGuess);

    if (checkPlayerGuess === correctAnswer) {
      playerWon = true;
      break;
    } else {
      finalScore -= 10;
      alert(`You get -10 points... Your score is ${finalScore}`);
    }
  }

  if (playerWon) {
    alert(
      `Awesome, You won :D with only ${counter} attempts. You get ${finalScore} points`
    );
  } else {
    alert(`Sorry :( you used all your ${counter} attempts. Try again`);
  }
}

// start the game
game();
