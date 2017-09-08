//

// Gameplay
  // Per Turn
    // Ask player for row, col input
    // Mark position
      // Check if position is within bounds, i.e., valid input
      // Check if position is empty
        // Set mark on board
    // Check if the game is over
      // All spaces are filled
      // If there is a winner
    // Switch turn

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let player1 = new Player("Steve");
// let player2 = new Player("Mary");
// let game = new Game(player1, player2);
// game.play(reader);

//
// Game
//
// Constructor
  // Create a new board
  // currentPlayer = player1;

// play
// askForMove
// makeMove
// isOver
// winner
// switchTurn
// display

//
// Board
//
// Constructor
  // Create a 2d array

// isValidPos
// markBoard
// isEmpty
// isOver
// isWinner
// display

const Board = require('./board');

let board = new Board();

export default board;
