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

const findPairSums = (start, end, targetSum) => {
  let nums = {};
  let array = createArray(start, end);
  let pairs = [];

  for (let i = 0; i < array.length; i++) {
    nums[array[i]] = array[i];
  }

  for (let i = 0; i <= Math.floor(array.length / 2); i++) {
    pairs.push([array[i], nums[targetSum - array[i]]]);
  }

  return pairs;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = findPairSums;


// export const findPairSums = (start, end, targetSum) => {
//   let pairs = [];
//   let nums = createArray(start, end);
//
//   nums.forEach((num, idx) => {
//     if (idx < Math.floor((end - start) / 2) + 1) {
//       let bIdx = bSearch(nums, targetSum - num);
//       if (bIdx !== null) {
//         pairs.push([num, nums[bIdx]].sort());
//       }
//     }
//   });
//
//   return pairs;
// };

const createArray = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

const bSearch = (array, target, start, end) => {
  start = start || 0;
  end = end || array.length - 1;

  while (start <= end) {
    let midpoint = Math.floor((end - start + 1) / 2) + start;

    if (array[midpoint] === target) {
      return midpoint;
    }

    if (target < array[midpoint]) {
      end = midpoint - 1;
    }

    if (target > array[midpoint]) {
      start = midpoint + 1;
    }
  }
  return null;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = bSearch;


const bSearchR = (array, target) => {
  if (array.length < 1) {
    return null;
  }

  let midpoint = Math.floor(array.length / 2);

  if (array[midpoint] === target) {
    return midpoint;
  }

  if (target < array[midpoint]) {
    return bSearchR(array.slice(0, midpoint), target);
  } else {
    let result = bSearchR(array.slice(midpoint + 1), target);
    return result !== null ? result + midpoint + 1 : null;
  }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = bSearchR;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findPairSums__ = __webpack_require__(0);
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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

window.array = array;

window.findPairSums = __WEBPACK_IMPORTED_MODULE_0__findPairSums__["a" /* findPairSums */];
window.bSearch = __WEBPACK_IMPORTED_MODULE_0__findPairSums__["b" /* bSearch */];
window.bSearchR = __WEBPACK_IMPORTED_MODULE_0__findPairSums__["c" /* bSearchR */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map