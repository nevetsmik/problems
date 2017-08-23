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

const Node = function (value) {
  let node = {
    value: value,
    next: null,
    printNodes: function() {
      let itr = node;
      let result = "";
      while (itr) {
        result += `${itr.value} `;
        itr = itr.next;
      }
      return result.slice(0, -1);
    }
  };

  return node;
};

const rearrangeLastN = function (l, n) {
  if (n === 0) { return l; }

  let ahead = l;
  let behind = l;
  let prev = null;
  let count = 1;

  while (ahead.next) {
    if (count >= n) {
      prev = behind;
      behind = behind.next;
    }
    ahead = ahead.next;
    count += 1;
  }

  // return [l, prev, behind, ahead];
  if (ahead.next === null && count === n) {
    return l;
  } else {
    ahead.next = l;
    prev.next = null;
    return behind;
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = rearrangeLastN;


/* harmony default export */ __webpack_exports__["a"] = Node;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rearrangeLastN__ = __webpack_require__(0);
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

let l1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rearrangeLastN__["a" /* default */])(1);
let l2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rearrangeLastN__["a" /* default */])(2);
let l3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rearrangeLastN__["a" /* default */])(3);
let l4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rearrangeLastN__["a" /* default */])(4);
let l5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rearrangeLastN__["a" /* default */])(5);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;


window.rearrangeLastN = __WEBPACK_IMPORTED_MODULE_0__rearrangeLastN__["b" /* rearrangeLastN */];
window.l1 = l1;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map