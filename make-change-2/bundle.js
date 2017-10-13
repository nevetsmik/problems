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

/*
4, [3, 2, 1]
  4, [2, 1]
    4, [1]
  2, [2, 1]
1, [3, 2, 1]
*/

// Counts the number of ways to make change for an amount with coins
const coinSums = (amount, coins, index = 0, memo = {}) => {
  let key = `${amount}-${index}`;
  if (memo.hasOwnProperty(key)) {
    console.log(`Grabbing ${key} and returning ${memo[key]}`);
    return memo[key];
  }

  if (amount === 0) {
    return 1;
  }

  if (index > coins.length - 1) {
    return 0;
  }

  if (amount < 0) {
    return 0;
  }

  // console.log(`Checking ways to make ${amount} with ${coins.slice(index)}`);

  let numPossibilities = 0;

  while (amount >= coins[index]) {
    numPossibilities += coinSums(amount, coins, index + 1, memo);
    amount -= coins[index];
  }

  if (!memo.hasOwnProperty(key)) {
    // console.log(
    //   `Storing ${numPossibilities} ways to make ${amount +
    //     coins[index]} with ${coins.slice(index)}`
    // );
    memo[key] = numPossibilities;
  }

  return numPossibilities;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = coinSums;


/*
(7, [3, 2, 1], [], [])
  (4, [3, 2, 1], [3], [])
    (1, [3, 2, 1], [3, 3], [])
    // 1, [3, 2, 1]; 1, [3, 2, 1]; 1, [3, 2, 1], i.e., will loop three times until until the amount >= denoms[i]
      (0, [1], [3, 3, 1], [])
      (0, [1], [3, 3], [[3, 3, 1]])
    (1, [3, 2, 1], [3], [[3, 3, 1]])
  (4, [3, 2, 1], [3], [[3, 3, 1]])
    (2, [3, 2, 1], [3, 2], [[3, 3, 1]])
      (0, [2, 1], [3, 2, 2], [[3, 3, 1]])
      (0, [2, 1], [3, 2], [[3, 3, 1], [3, 2, 2]])
    (2, [3, 2, 1], [3, 2], [[3, 3, 1], [3, 2, 2]])
      (1, [3, 2, 1], [3, 2, 1], [[3, 3, 1], [3, 2, 2]])
        (0, [3, 2, 1], [3, 2, 1, 1], [[3, 3, 1], [3, 2, 2]])
        (0, [3, 2, 1], [3, 2, 1], [[3, 3, 1], [3, 2, 2], [3, 2, 1, 1]])
      (1, [3, 2, 1], [3, 2], [[3, 3, 1], [3, 2, 2], [3, 2, 1, 1]])
*/

// Find all the coin combinations that equal the amount
const coins = (amount, denoms, currentCombo = [], result = []) => {
  if (amount === 0) {
    result.push(currentCombo.slice());
  }

  for (let i = 0; i < denoms.length; i++) {
    if (amount >= denoms[i]) {
      currentCombo.push(denoms[i]);
      coins(amount - denoms[i], denoms.slice(i), currentCombo, result);
      currentCombo.pop();
    }
  }

  return result;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = coins;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__makeChange__ = __webpack_require__(0);
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

window.coinSums = __WEBPACK_IMPORTED_MODULE_0__makeChange__["a" /* coinSums */];
window.coins = __WEBPACK_IMPORTED_MODULE_0__makeChange__["b" /* coins */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map