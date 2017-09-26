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
[1, 3, 6, 13, 18]

subrange(array, l, r) {
if (l === 0) {
return array[r];
}
}
if ()
*/

const findLongestSubArrayBySum = (s, array) => {
  let left = 0;
  let right = 0;

  let pairs = {};

  let prefixSums = calcPrefixSums(array);

  while (left < prefixSums.length) {
    while (calcSubrange(prefixSums, left, right) < s) {
      if (right < prefixSums.length) {
        right++;
      }
    }

    if (calcSubrange(prefixSums, left, right) === s) {
      if (!pairs.hasOwnProperty(right - left + 1)) {
        pairs[right - left + 1] = [left + 1, right + 1];
      }
      right++;
    } else {
      if (right === left) {
        right++;
      } else {
        left++;
      }
    }
  }

  if (Object.keys(pairs).length === 0) {
    return [-1];
  }
  return pairs[Math.max(...Object.keys(pairs))];
};
/* harmony export (immutable) */ __webpack_exports__["a"] = findLongestSubArrayBySum;


const calcSubrange = (array, l, r) => {
  if (l === 0) {
    return array[r];
  } else if (l !== 0) {
    return array[r] - array[l - 1];
  }
};
/* unused harmony export calcSubrange */


const calcPrefixSums = array => {
  let result = [];
  result[0] = array[0];

  for (let i = 1; i < array.length; i++) {
    result[i] = result[i - 1] + array[i];
  }

  return result;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = calcPrefixSums;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findLongestSubArrayBySum__ = __webpack_require__(0);
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

window.target = 0;
window.array = [1, 0, 2];
// window.array = [1, 2, 3, 7, 5];

window.findLongestSubArrayBySum = __WEBPACK_IMPORTED_MODULE_0__findLongestSubArrayBySum__["a" /* findLongestSubArrayBySum */];
window.calcPrefixSums = __WEBPACK_IMPORTED_MODULE_0__findLongestSubArrayBySum__["b" /* calcPrefixSums */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map