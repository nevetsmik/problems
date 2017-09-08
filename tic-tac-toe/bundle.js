/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

const Board = __webpack_require__(1);

let board = new Board();

/* harmony default export */ __webpack_exports__["a"] = board;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Board {
  constructor() {
    this.grid = Board.makeBoard();
  }

  markBoard(mark, pos) {
    if (!this.isEmpty(pos)) {
      throw "Position is already taken!";
    }

    let [x, y] = pos;

    this.grid[x][y] = mark;
  }

  isEmpty(pos) {
    if (!this.isValidPos(pos)) {
      throw "Not a valid position!";
    }

    let [x, y] = pos;

    return this.grid[x][y] === null;
  }

  isValidPos(pos) {
    let [x, y] = pos;
    return x >= 0 && x < 3 && y >= 0 && y < 3;
  }

  isOver() {
    let over = true;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.grid[row][col] !== null) {
          return false;
        }
      }
    }
    return over;
  }

  isRowWinner(row) {
    let winner = true;
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] !== row[i + 1]) {
        return false;
      }
    }
    return winner;
  }

  isDiagonalWinner() {
    return (this.grid[0][0] === this.grid[1][1] && this.grid[2][2] === this.grid[0][0]) ||
    (this.grid[2][0] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0]);
  }

  isWinner() {
    let winner = false;
    // check for rows
    for (let i = 0; i < 3; i++) {
      if (this.isRowWinner(this.grid[i])) {
        return true;
      }
    }

    // check for cols
    for (let col = 0; col < 3; col++) {
      let colRow = [];
      for (let row = 0; row < 3; row++) {
        colRow.push(this.grid[row][col]);
        if (this.isRowWinner(colRow)) {
          return true;
        }
      }
    }

    // check for diagonals
    if (this.isDiagonalWinner()) {
      return true;
    }

    return winner;
  }

  display() {
    for (let row = 0; row < 3; row++) {
      let rowDisplay = "";
      for (let col = 0; col < 3; col++) {
        if (this.grid[row][col]) {
          rowDisplay += this.grid[row][col];
        } else {
          rowDisplay += "_";
        }
        rowDisplay += " ";
      }
      console.log(rowDisplay);
      console.log('\n');
    }
  }

  static makeBoard() {
    let grid = [];
    for (let row = 0; row < 3; row++) {
      grid.push([]);
      for (let col = 0; col < 3; col++) {
        grid[row].push(null);
      }
    }
    return grid;
  }
}

Board.marks = ['X', 'O'];

module.exports = Board;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scratch__ = __webpack_require__(0);
/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';



/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.board = __WEBPACK_IMPORTED_MODULE_0__scratch__["a" /* default */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map