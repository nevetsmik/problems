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
O(n) time complexity and O(1) additional space complexity

Given an array a that contains only numbers in the range from 1 to a.length,
find the first duplicate number for which the second occurrence has the minimal
index. In other words, if there are more than 1 duplicated numbers, return
the number for which the second occurrence has a smaller index than the
second occurrence of the other number does. If there are no such elements,
return -1.

For a = [2, 3, 3, 1, 5, 2], the output should be firstDuplicate(a) = 3.
There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has
a smaller index than than second occurrence of 2 does, so the answer is 3.
*/

const firstDuplicate = (array) => {
    for (let i = 0; i < array.length; i++){
      if (array[Math.abs(array[i]) - 1] < 0) {
        // console.log('array: ', array);
        return Math.abs(array[i]);
      }
      array[Math.abs(array[i]) - 1 ] *= -1;
    }
    return -1;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = firstDuplicate;


// export const firstDuplicate = (array) => {
//   let countingObj = {};
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     countingObj[array[i]] = countingObj[array[i]] || 0;
//     countingObj[array[i]] += 1;
//     if (countingObj[array[i]] > 1) {
//       result[array[i]] = i;
//     }
//   }
//
//   let min;
//   let minIndexOfSecondOccurence;
//   for (let i = 0; i < result.length; i++) {
//     if (min === undefined || result[i] < min) {
//       min = result[i];
//       minIndexOfSecondOccurence = i;
//     }
//   }
//
//   return minIndexOfSecondOccurence;
// };


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firstDuplicate__ = __webpack_require__(0);
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

window.firstDuplicate = __WEBPACK_IMPORTED_MODULE_0__firstDuplicate__["a" /* firstDuplicate */];
window.array = [2, 3, 3, 1, 5, 2];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map