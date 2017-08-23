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

// Find the current trend, i.e., the difference between array[i + 1] and array[i]
// if the current trend is negative, increment decreasing
// if the current trend is positive, increment increasing

const increasingDecreasingSubrangeDifference = (array, windowSize) => {
  let result = [];

  for (let i = 0; i <= array.length - windowSize; i++) {
    let prevTrend = null;
    let increasing = 0;
    let decreasing = 0;
    for (let j = 0; j < windowSize - 1; j++) {
      let currTrendDifference = array[i + j + 1] - array[i + j];
      if (currTrendDifference > 0) { increasing += 1; }
      if (currTrendDifference < 0) { decreasing += 1; }
      if (currTrendDifference > 0 && prevTrend === "increasing") {
        increasing += 1;
      }
      if (currTrendDifference < 0 && prevTrend === "decreasing") {
        decreasing += 1;
      }
      if (currTrendDifference > 0) { prevTrend = "increasing"; }
      if (currTrendDifference < 0) { prevTrend = "decreasing"; }
    }
    result.push(increasing - decreasing);
  }
  return result;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = increasingDecreasingSubrangeDifference;


// let range = [188930, 194123, 201345, 154243, 154243];
// let n = 3;
//
// let answer = increasingDecreasingSubrangeDifference(range, n);
// console.log(answer);


/***/ }),
/* 1 */
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

// let range = [188930, 194123, 201345, 154243, 154243];
let range = [18, 19, 20, 15, 15];
let n = 3;

window.range = range;
window.n = n;
window.increasingDecreasingSubrangeDifference = __WEBPACK_IMPORTED_MODULE_0__scratch__["a" /* increasingDecreasingSubrangeDifference */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map