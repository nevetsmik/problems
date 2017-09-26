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

const partition = (array, start, end) => {
  let randomPivot = Math.floor(Math.random() * (end - start + 1)) + start;
  swap(array, start, randomPivot);

  let pivot = start;
  let divider = start;

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[pivot]) {
      swap(array, i, divider + 1);
      divider += 1;
    }
  }
  swap(array, divider, pivot);

  return divider;
};
/* harmony export (immutable) */ __webpack_exports__["f"] = partition;


const quickSelect = (array, k) => {
  return quickSelectHelper(array, 0, array.length - 1, k);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = quickSelect;


const quickSelectHelper = (array, start, end, k) => {
  if (start === end) {
    return array[start];
  }
  let pivot = partition(array, start, end);
  if (pivot + 1 === k) {
    return array[pivot];
  }

  if (k < pivot + 1) {
    return quickSelectHelper(array, start, pivot - 1, k);
  } else if (k > pivot + 1) {
    return quickSelectHelper(array, pivot + 1, end, k);
  }
};
/* unused harmony export quickSelectHelper */


const quickSort = array => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el > pivot);
  return quickSort(left).concat([pivot]).concat(quickSort(right));
};
/* harmony export (immutable) */ __webpack_exports__["d"] = quickSort;


const quickSortInPlace = array => {
  return quickSortInPlaceHelper(array, 0, array.length - 1);
};
/* harmony export (immutable) */ __webpack_exports__["e"] = quickSortInPlace;


const quickSortInPlaceHelper = (array, start, end) => {
  if (end - start <= 0) {
    return array[start];
  }

  // Randomly pick pivot index
  let randomPivot = Math.floor(Math.random() * (end - start + 1)) + start;
  // Swap the pivot and first position values
  swap(array, start, randomPivot);

  // Set partition to the first index in the array
  let partition = start;
  // Set pivot index to first position
  let pivot = start;
  // Starting at i = 1, iterate through the array
  for (let i = start + 1; i <= end; i++) {
    // If value at current index is less than value at pivot
    if (array[i] < array[pivot]) {
      // Swap values at partition + 1 and current index
      swap(array, partition + 1, i);
      // Increment partition
      partition += 1;
    }
  }

  // Swap the values at pivot and parition
  swap(array, pivot, partition);
  // quickSortInPlace on the left array
  quickSortInPlaceHelper(array, start, partition - 1);
  // quickSortInPlace on the right array
  quickSortInPlaceHelper(array, partition + 1, end);

  return array;
};
/* unused harmony export quickSortInPlaceHelper */


const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
};

const subsets = array => {
  /*
  [1,2,3]
  [], [1], [2], [1, 2]
  [3], [1, 3], [2, 3], [1, 2, 3]
  */

  if (array.length === 0) {
    return [[]];
  }

  let last = array[array.length - 1];
  let withoutLast = subsets(array.slice(0, array.length - 1));

  let withLast = withoutLast.map(sub => sub.concat([last]));

  return withoutLast.concat(withLast);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = subsets;


const permutations = array => {
  /*
  [[3]] => [[2, 3], [3, 2]]
  [[2, 3], [3, 2]] => [1, 2, 3], [2, 1, 3], [2, 3, 1] // [1, 3, 2], [3, 1, 2], [3, 2, 1]
  */

  let totalPerms = [];

  if (array.length === 1) {
    return [array];
  }

  let first = array[0];
  let perms = permutations(array.slice(1));

  perms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      let newPerm = perm.slice(0, i).concat(first).concat(perm.slice(i));
      totalPerms.push(newPerm);
    }
  });

  return totalPerms;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = permutations;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quickSelect__ = __webpack_require__(0);
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

window.subsets = __WEBPACK_IMPORTED_MODULE_0__quickSelect__["a" /* subsets */];
window.permutations = __WEBPACK_IMPORTED_MODULE_0__quickSelect__["b" /* permutations */];
window.quickSelect = __WEBPACK_IMPORTED_MODULE_0__quickSelect__["c" /* quickSelect */];
window.quickSort = __WEBPACK_IMPORTED_MODULE_0__quickSelect__["d" /* quickSort */];
window.quickSortInPlace = __WEBPACK_IMPORTED_MODULE_0__quickSelect__["e" /* quickSortInPlace */];
window.partition = __WEBPACK_IMPORTED_MODULE_0__quickSelect__["f" /* partition */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map