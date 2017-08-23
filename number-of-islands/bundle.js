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

const numberOfIslandsBF = (array) => {
  let islandCounter = 0;
  // Iterate through each cell of the 2D array
  // Iterate through each row
  for (let row = 0; row < array.length; row++) {
    // Iterate through each column
    for (let col = 0; col < array[0].length; col++) {
      if (array[row][col] === '1') { islandCounter += 1; }
      // Declare a queue to do BFS
      let queue = [];
      // Set the pos to be the first element in the queue
      queue[0] = [row, col];
      // Iterate through the queue until it is empty
      while (queue.length > 0) {
        // Shift off the queue and set to current
        let [x, y] = queue.shift();
        let current = array[x][y];
        // If current is === to 1, then...
        if (current === '1') {
            // Toggle to 0
            array[x][y] = '0';
            // Find the surrounding cells and push to the back of the queue
            queue = queue.concat(surroundingCells(array, [x, y]));
        }
      }
    }
  }
  return islandCounter;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = numberOfIslandsBF;


const numberOfIslandsDF = (array) => {
  let islandCounter = 0;
  // Iterate through each cell of the 2D array
  // Iterate through each row
  for (let row = 0; row < array.length; row++) {
    // Iterate through each column
    for (let col = 0; col < array[0].length; col++) {
      if (array[row][col] === 1) {
        explore(array, [row, col]);
        islandCounter += 1;
      }
    }
  }
  return islandCounter;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = numberOfIslandsDF;


const explore = (array, pos) => {
  let [x, y] = pos;
  if (array[x][y] === 1) {
    array[x][y] = 0;
    let neighbors = surroundingCells(array, pos);
    neighbors.forEach((cell) => {
      explore(array, cell);
    });
  }
};
/* unused harmony export explore */


const surroundingCells = (array, pos) => {
  let rowSize = array.length;
  let colSize = array[0].length;

  let [x, y] = pos;

  let neighbors = [
    [x - 1, y + 0],
    [x + 0, y + 1],
    [x + 1, y - 0]
  ];

  return neighbors.filter((cell) => {
    let [row, col] = cell;
    if (row >= 0 && row < rowSize && col >= 0 && col < colSize) {
      return true;
    }
  });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = surroundingCells;


const turnIntoA2DArray = (array) => {
  let result = [];
  array.forEach((row) => {
    result.push(row.split(''));
  });
  return result;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = turnIntoA2DArray;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numberOfIslands__ = __webpack_require__(0);
/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn0, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';



/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.grid = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,1,1]
];

window.turnIntoA2DArray = __WEBPACK_IMPORTED_MODULE_0__numberOfIslands__["a" /* turnIntoA2DArray */];
window.arrStrings = ["11110","11010","11000","00000"];
window.surroundingCells = __WEBPACK_IMPORTED_MODULE_0__numberOfIslands__["b" /* surroundingCells */];
window.numberOfIslandsBF = __WEBPACK_IMPORTED_MODULE_0__numberOfIslands__["c" /* numberOfIslandsBF */];
window.numberOfIslandsDF = __WEBPACK_IMPORTED_MODULE_0__numberOfIslands__["d" /* numberOfIslandsDF */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map