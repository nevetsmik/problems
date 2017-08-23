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
//
// export const fn1 = function(){};
// export const fn2 = function(){};
// **********/
//
// export const localMin = (array) => {
//   let left = 0;
//   let right = array.length - 1;
//
//   while (left <= right) {
//     let midpoint = Math.floor((right - left + 1) / 2) + left;
//
//     if ((midpoint === 0 && array[midpoint] < array[midpoint + 1]) ||
//         (midpoint === array.length - 1 && array[midpoint] < array[midpoint - 1]) ||
//         (array[midpoint] < array[midpoint - 1] && array[midpoint] < array[midpoint + 1])
//     ) {
//       return midpoint;
//     }
//
//     if (array[midpoint] > array[midpoint + 1]) {
//       // search right
//       left = midpoint + 1;
//     } else if (array[midpoint] > array[midpoint - 1]) {
//       // search left
//       right = midpoint - 1;
//     }
//   }
//   return null;
// };

const localMin = (array, left, right) => {
  left = left === undefined ? 0 : left;
  right = right === undefined ? array.length - 1 : right;

  let midpoint = Math.floor((right - left + 1) / 2) + left;

  if (midpoint === left && array[midpoint] < array[midpoint + 1] ||
    midpoint === right && array[midpoint] < array[midpoint - 1] ||
    array[midpoint] < array[midpoint + 1] && array[midpoint] < array[midpoint - 1]) {
    return midpoint;
  }

  if (array[midpoint] > array[midpoint - 1]) {
    return localMin(array, left, midpoint - 1);
  }

  if (array[midpoint] > array[midpoint + 1]) {
    return localMin(array, midpoint + 1, right);
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = localMin;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localMin__ = __webpack_require__(0);
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

window.array = [7, 8, 10, 12, 26, 1];
window.localMin = __WEBPACK_IMPORTED_MODULE_0__localMin__["a" /* localMin */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map