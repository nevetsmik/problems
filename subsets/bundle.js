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

const subsets = (array) => {
  if (array.length === 0) {
    return [[]];
  }

  const first = array[0];
  const withoutFirst = subsets(array.slice(1));
  // remember, we don't want to mutate the subsets without the first element
  // hence, the 'concat'
  const withFirst = withoutFirst.map(sub => [first].concat(sub) );

  return withoutFirst.concat(withFirst);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = subsets;


const bsArray = (array, target) => {
  if (array.length === 0) {
    return null;
  }

  let midpoint = Math.floor(array.length / 2);
  if (array[midpoint] === target) {
    return midpoint;
  }

  if (target < array[midpoint]) {
    return bsArray(array.slice(0, midpoint), target);
  }

  if (target > array[midpoint]) {
    let value = bsArray(array.slice(midpoint + 1), target);
    if (value === null) { return null; }
    return value + midpoint + 1;
  }
};
/* unused harmony export bsArray */


const shuffle = (array) => {
  let m = array.length;

  for (let i = m - 1; i >= 0; i--) {
    let random = Math.floor(Math.random() * i);
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
};
/* unused harmony export shuffle */


const flatten = (array) => {
  let result = [];
  array.forEach((el) => {
    if (Array.isArray(el)) {
      result = result.concat(flatten(el));
    } else {
      result.push(el);
    }
  });
  return result;
};
/* unused harmony export flatten */


const deepDup = (array) => {
  let result = [];
  array.forEach((el) => {
    if (Array.isArray(el)) {
      result.push(deepDup(el));
    } else {
      result.push(el);
    }
  });
  return result;
};
/* unused harmony export deepDup */


// *
// * *  *
// **** *
// ******
// ******

const waterBlocks = (blocks) => {
  let a = 0;
  let b = blocks.length - 1;
  let max = 0;
  let leftMax = 0;
  let rightMax = 0;
  while (a <= b) {
    leftMax = Math.max(leftMax, blocks[a]);
    rightMax = Math.max(rightMax, blocks[b]);
    if (leftMax < rightMax) {
      max += (leftMax - blocks[a++]);
    } else {
      max += (rightMax - blocks[b--]);
    }
  }
  return max;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = waterBlocks;



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
// *
// * *  *
// **** *
// ******
// ******

let array = ["A", "B", "C"];
const blocks = [5, 3, 4, 3, 2, 4];

window.blocks = blocks;
window.waterBlocks = __WEBPACK_IMPORTED_MODULE_0__scratch__["a" /* waterBlocks */];
window.subsets = __WEBPACK_IMPORTED_MODULE_0__scratch__["b" /* subsets */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map