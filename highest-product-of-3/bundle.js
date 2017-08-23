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
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__highestProductOfThree__ = __webpack_require__(2);
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

window.array = [-10, -10, 1, 3, 2];
window.highestProductOfThree = __WEBPACK_IMPORTED_MODULE_0__highestProductOfThree__["a" /* highestProductOfThree */];
window.subsets = __WEBPACK_IMPORTED_MODULE_0__highestProductOfThree__["subsets"];


/***/ }),
/* 2 */
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

const highestProductOfThree = array => {
  if (array.length < 3) { return null; }

  let highest3 = array[0] * array[1] * array[2];
  let highest2 = array[0] * array[1];
  let highest = array[0];
  let lowest = array[1];

  for (let i = 2; i < array.length; i++) {
    let current = array[i];
    let current3 = highest2 * current;

    if (current3 > highest3) {
      highest3 = current3;
    }

    let current2 = Math.max(highest * current, lowest * current);

    if (current2 > highest2) {
      highest2 = current2;
    }

    if (current > highest) {
      highest = current;
    }

    if (current < lowest) {
      lowest = current;
    }
  }

  return highest3;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = highestProductOfThree;


//
// O(n log n)
//
// export const highestProductOfThree = (array) => {
//   // [ 2, 3, 5, 6, 8, 9]
//   // [ -99, -44, 5, 6, 8, 9]
//
//   let sortedArray = sortArray(array);
//
//   const secondToLast = sortedArray.length - 2;
//   const thirdToLast = sortedArray.length - 3;
//
//   return (sortedArray.slice(-1) * Math.max(sortedArray[0] * sortedArray[1], sortedArray[secondToLast] * sortedArray[thirdToLast]));
// };
//
// const sortArray = (array) => {
//   let copy = array.slice();
//   return copy.sort((a, b) => {
//     return a - b;
//   });
// };

//
// O(2^n + n + n * n) - brute force
//
// export const highestProductOfThree = array => {
//   const subsetsOfThree = subsets(array).filter((subsets) => {
//     return subsets.length === 3;
//   });
//
//   let hightestProduct = 1;
//   subsetsOfThree.forEach((subset) => {
//     const product = subset.reduce((accum, curr) => {
//       return accum * curr;
//     }, 1);
//     hightestProduct = Math.max(hightestProduct, product);
//   });
//   return hightestProduct;
// };
//
// export const subsets = (array) => {
//   // [1, 2, 3] = [], [1], [2], [3], [1, 3], [1, 2], [2, 3], [1, 2, 3]
//   // [1, 2] => [], [1], [2], [1, 2]
//   // [1, 2] + [3] => [3], [1, 3], [2, 3], [1, 2, 3]
//
//   if (array.length === 0) { return [[]]; }
//
//   let last = array[array.length - 1];
//   let withoutLast = subsets(array.slice(0, -1));
//
//   let withLast = withoutLast.map((sub) => {
//     return sub.concat([last]  );
//   });
//
//   return withoutLast.concat(withLast);
// };


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map