# Website link

The project can be viewed on this link: https://ahmedshab.github.io/number-guessing-game/

# Number Guessing Game

This is a simple command-line number guessing game implemented in JavaScript. The game generates a random number between 1 and 100, and the player is tasked with guessing the number. The game provides feedback after each guess and tracks the number of attempts. A scoring system rewards the player based on how quickly they guess the correct number.

## Features

- Random number generation between 1 and 100.
- User-friendly input validation and feedback.
- A maximum of 10 attempts to guess the correct number.
- A scoring system that rewards quicker guesses.
- Simple and interactive command-line interface.

## How to Play

1. The game generates a random number between 1 and 100.
2. The player is prompted to enter their guess.
3. The game provides feedback on whether the guess is too low, too high, or correct.
4. The player has up to 10 attempts to guess the correct number.
5. The game ends when the player guesses the number correctly or runs out of attempts.
6. The player’s score is based on the number of attempts they took to guess the correct number.

## Functions

- **`generateRandomNumber()`**: 
  - Generates a random integer between 1 and 100. This number is the target that the player has to guess.

- **`getPlayerGuess()`**:
  - Prompts the player to enter a guess and returns the player's input as an integer. The function ensures that the input is a valid number, and reprompts the user if the input is invalid.

- **`checkGuess(playerGuess, correctNumber)`**:
  - Takes the player's guess and the correct number as parameters. It returns a string indicating whether the player's guess is too low, too high, or correct!.

- **`game()`**:
  - Implements the main game logic. It generates the random number, initializes a counter for the number of attempts, and uses a loop to repeatedly prompt the player for guesses. The game ends when the player guesses the correct number or uses up all 10 attempts.

## Installation

To set up and run this game on your local machine, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AhmedShab/guessing-game.git

2. **Navigate to the project directory**:

   ```bash
   cd number-guessing-game

3. **Open the index.html file in your browser**:

    You can open the file directly by double-clicking it or by dragging it into a web browser.

## Example
  ```bash
    Please guess a random number:
    > 50
    Your number is too low!
    Please guess a random number:
    > 75
    Your number is too high!
    Please guess a random number:
    > 63
    You guessed the number!
    Awesome, You won :D with only 3 attempts. You get 70 points.
