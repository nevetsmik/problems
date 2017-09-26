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
n Choose m: Choose m things out of n possibilities
n! / (n - k)!(k!)
Ex: 5 choose 4
Choose 4 things out of 5 possibilities


    0  1   2   3    4   5  6
0 | 1
1 | 1, 1
2 | 1, 2,  1
3 | 1, 3,  3,  1
4 | 1, 4,  6,  4,  1
5 | 1, 5, 10, 10,  5,  1
6 | 1, 6, 15, 20,  15, 6, 1

[n][m] = [n - 1][m - 1] + [n - 1][m]
*/

const binomialCoefficients = (n, m = null) => {
  // Create a 2d array of n + 1 rows
  let bc = [];
  for (let row = 0; row <= n; row++) {
    bc.push([]);
  }

  // Set the first position of each row to 1
  for (let firstPos = 0; firstPos <= n; firstPos++) {
    bc[firstPos][0] = 1;
  }

  // Set the last position of each row to 1
  for (let lastPos = 0; lastPos <= n; lastPos++) {
    bc[lastPos][lastPos] = 1;
  }

  // Iterate through each row starting at 1
  for (let row = 1; row <= n; row++) {
    // Iterate through each column starting at 1...row
    for (let col = 1; col < row; col++) {
      // Set [n][m] = [n - 1][m - 1] + [n - 1][m]
      bc[row][col] = bc[row - 1][col - 1] + bc[row - 1][col];
    }
  }

  // return 2d array
  return bc;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = binomialCoefficients;


/*
1, 2, 3, 4, 5
2, 1, 2, 3, 4
3, 2, 1, 2, 3
4, 3, 2, 1, 2
5, 4, 3, 2, 1
*/


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binomialCoefficients__ = __webpack_require__(0);
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

window.binomialCoefficients = __WEBPACK_IMPORTED_MODULE_0__binomialCoefficients__["a" /* binomialCoefficients */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map