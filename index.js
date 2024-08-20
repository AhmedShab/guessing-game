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
    return "🎉 Bingo! You nailed it! 🎯";
  } else if (playerGuess > correctNumber) {
    return "🚀 Whoa! That's a bit too high! Try aiming lower!";
  } else {
    return "🎈 So close, but a bit too low! Aim higher!";
  }
}

function quitGame() {
  // function that quits game (with confirmation from user)
  const playAgain = confirm("🚪 Uh-oh! Are you sure you want to leave the adventure so soon? The treasure is just around the corner! 🏴‍☠️");

  if (!playAgain) {
    alert("🎉 Yay! Glad you're sticking around for more fun! Let's keep going! 🚀");
    return false
  }
  alert("🌟 Thanks for playing, brave adventurer! Until next time, may your path be filled with gold and glory! ✨");
  return true;
}

/**
 * Prompts the user to guess a number and ensures that the input is a valid number.
 * @param {number} finalScore - The current score of the player.
 * @returns {number|null} The validated number guessed by the player, or null if the user cancels.
 */
function getPlayerGuess(finalScore) {
  // added finalScore as a parametr because Branko said that it's good user experience to show every time score to user
  let userGuess;

  while (true) {
    userGuess =  prompt(`🌟 You've got ${finalScore} points left in your magic bag! ✨ Choose a number between 1 and 100 to unlock the next level... or click 'Cancel' to retreat!`);
    
    if (userGuess === null) {
      return userGuess; // if user press cancel userGuess will take value null if it's true -> we just return this value, if not -> continue our code in this function
    }

    userGuess = parseInt(userGuess, 10);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("🤔 Hmm, that doesn't look like a number between 1 and 100. Give it another shot!");
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
  const correctAnswer = "🎉 Bingo! You nailed it! 🎯";
  const correctNumber = generateRandomNumber();
  let counter = 0;
  const maxAttempts = 10;
  let playerWon = false;
  let finalScore = 100;

  alert("🎉 Welcome to the Number Guessing Game! 🔢 Think you can outsmart the machine? ");

  while (counter < maxAttempts) {
    let playerGuess = getPlayerGuess(finalScore);

    if (playerGuess === null) {
      const exit = quitGame();
      if (exit) return;

      // ask the user to guess again
      continue;
    }
    counter++;

    let checkPlayerGuess = checkGuess(playerGuess, correctNumber);
    alert(checkPlayerGuess);

    if (checkPlayerGuess === correctAnswer) {
      playerWon = true;
      break;
    } else {
      finalScore -= 10;
      alert(`💥 Ouch! That's -10 points... Your current score is ${finalScore}. Keep going!`);
    }
  }  

  if (playerWon) {
    alert(
      `🎉 Woohoo! You did it in just ${counter} attempts! Your final score is ${finalScore} points. You're a Number Guessing Pro! 🏆`
    );
  } else {
    alert(`😢 Oh no! You've used all ${counter} attempts. Better luck next time!`);
  }
}

// start the game
game();
