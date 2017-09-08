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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*********
Export an object that contains multiple functions

const scratch = {
  fn1: function(){},
  fn2: function(){}
};

export { scratch };
**********/

/*********
Export multiple functions all at once

const fn1 = function(){};
const fn2 = function(){};

export { fn1, fn2 };
**********/

/*********
Export functions as you write them

export const fn1 = function(){};
export const fn2 = function(){};
**********/

// export const nQueens = (board, row = 0) => {
//   // if numQueens === 0
//   if (row === board.length) {
//     console.log(board);
//     return true;
//   }
//
//   // Iterate through each column of a row
//   for (let col = 0; col < board.length; col++) {
//     // If the current position is safe
//     if (isSafe(board, row, col)) {
//       toggleQueen(board, row, col);
//       if (nQueens(board, row + 1, col)) {
//         return true;
//       }
//       toggleQueen(board, row, col);
//     }
//   }
//   return false;
// };

const getQueenConfig = board => {
  let result = [];
  board.forEach(row => result.push(row.indexOf(1) + 1));
  return result;
};
/* harmony export (immutable) */ __webpack_exports__["h"] = getQueenConfig;


const nQueens = (board, row = 0, result = []) => {
  if (row === board.length) {
    result.push(getQueenConfig(board.map(boardRow => boardRow.slice())));
    // console.log("board: ", board);
  }

  // Iterate through each column of a row
  for (let col = 0; col < board.length; col++) {
    // If the current position is safe
    if (isSafe(board, row, col)) {
      toggleQueen(board, row, col);
      nQueens(board, row + 1, result);
      toggleQueen(board, row, col);
    }
  }
  return result;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = nQueens;


const toggleQueen = (board, row, col) => {
  if (board[row][col] === 1) {
    board[row][col] = 0;
  } else {
    board[row][col] = 1;
  }
};
/* unused harmony export toggleQueen */


const makeGrid = size => {
  const grid = [];

  for (let row = 0; row < size; row++) {
    let newRow = [];
    for (let col = 0; col < size; col++) {
      newRow.push(0);
    }
    grid.push(newRow);
  }

  return grid;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = makeGrid;


const isSafe = (board, row, col) => {
  return isColSafe(board, col) && isDiagSafe(board, row, col);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = isSafe;


const isColSafe = (board, col) => {
  for (let row = 0; row < board.length; row++) {
    if (board[row][col] === 1) {
      return false;
    }
  }
  return true;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = isColSafe;


const isDiagSafe = (board, row, col) => {
  return isLeftDiagSafe(board, row, col) && isRightDiagSafe(board, row, col);
};
/* harmony export (immutable) */ __webpack_exports__["e"] = isDiagSafe;


const isLeftDiagSafe = (board, row, col) => {
  for (; row >= 0 && col >= 0; row--, col--) {
    if (board[row][col] === 1) {
      return false;
    }
  }
  return true;
};
/* harmony export (immutable) */ __webpack_exports__["f"] = isLeftDiagSafe;


const isRightDiagSafe = (board, row, col) => {
  for (; row >= 0 && col <= board[0].length; row--, col++) {
    if (board[row][col] === 1) {
      return false;
    }
  }
  return true;
};
/* harmony export (immutable) */ __webpack_exports__["g"] = isRightDiagSafe;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nQueens__ = __webpack_require__(0);
/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';



const grid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__nQueens__["a" /* makeGrid */])(4);

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.grid = grid;
window.nQueens = __WEBPACK_IMPORTED_MODULE_0__nQueens__["b" /* nQueens */];
window.makeGrid = __WEBPACK_IMPORTED_MODULE_0__nQueens__["a" /* makeGrid */];
window.isSafe = __WEBPACK_IMPORTED_MODULE_0__nQueens__["c" /* isSafe */];
window.isColSafe = __WEBPACK_IMPORTED_MODULE_0__nQueens__["d" /* isColSafe */];
window.isDiagSafe = __WEBPACK_IMPORTED_MODULE_0__nQueens__["e" /* isDiagSafe */];
window.isLeftDiagSafe = __WEBPACK_IMPORTED_MODULE_0__nQueens__["f" /* isLeftDiagSafe */];
window.isRightDiagSafe = __WEBPACK_IMPORTED_MODULE_0__nQueens__["g" /* isRightDiagSafe */];
window.getQueenConfig = __WEBPACK_IMPORTED_MODULE_0__nQueens__["h" /* getQueenConfig */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map