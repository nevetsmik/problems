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

// Definition for singly-linked list:
const ListNode = function(x) {
  this.value = x;
  this.next = null;
};

const removeKFromList = function (l, k) {
  if (l === null) { return []; }
  let prev = null;
  let itr = l;

  while (itr !== null) {
    if (itr.value === k) {
      if (itr.next) {
        itr.value = itr.next.value;
        itr.next = itr.next.next;
      } else {
        if (prev) {
          prev.next = null;
        }
        itr = itr.next;
      }
    } else {
      prev = itr;
      itr = itr.next;
    }
  }

  if (l.value === k) { return null; }
  return l;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = removeKFromList;


const isListPalindrome = function(l) {
    if (l === null) { return false; }
    let count = 0;
    let itr = l;
    while (itr !== null) {
        count += 1;
        itr = itr.next;
    }

    if (count === 1) { return true; }

    let midpoint;
    if (count % 2 === 0) {
        midpoint = count / 2;
    } else {
        midpoint = Math.floor(count / 2) + 1;
    }

    let secondHalf = l;
    count = 0;
    while (count < midpoint) {
        secondHalf = secondHalf.next;
        count++;
    }

    let first = l;
    let last = reverse(secondHalf);

    while (first !== null && last !== null) {
      if (first.value !== last.value) {
        return false;
      }
      first = first.next;
      last = last.next;
    }

    return true;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = isListPalindrome;


const reverse = function (node) {
  if (node === null) { return null; }
  let prev = null;
  let current = node;
  let next = current;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
/* unused harmony export reverse */



/* harmony default export */ __webpack_exports__["a"] = ListNode;


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




// [1,2,3,3,2,1]
//[1, 1000000000, -1000000000, -1000000000, 1000000000, 1]

let l = new __WEBPACK_IMPORTED_MODULE_0__scratch__["a" /* default */](1);
let l2 = new __WEBPACK_IMPORTED_MODULE_0__scratch__["a" /* default */](2);
let l3 = new __WEBPACK_IMPORTED_MODULE_0__scratch__["a" /* default */](3);
let l4 = new __WEBPACK_IMPORTED_MODULE_0__scratch__["a" /* default */](3);
let l5 = new __WEBPACK_IMPORTED_MODULE_0__scratch__["a" /* default */](2);
let l6 = new __WEBPACK_IMPORTED_MODULE_0__scratch__["a" /* default */](1);
l.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;

window.l = l;
window.isListPalindrome = __WEBPACK_IMPORTED_MODULE_0__scratch__["b" /* isListPalindrome */];
window.removeKFromList = __WEBPACK_IMPORTED_MODULE_0__scratch__["c" /* removeKFromList */];

// let root = Node(6);
// let branch1 = root.insertLeft(3);
// let branch2 = root.insertRight(9);
// let branch3 = branch1.insertLeft(2);
// let branch4 = branch1.insertRight(5);
// let branch5 = branch2.insertLeft(8);
// let branch6 = branch2.insertRight(11);
// let branch7 = branch3.insertLeft(1);
// let branch8 = branch4.insertLeft(4);
// let branch9 = branch5.insertLeft(7);
// let branch10 = branch6.insertLeft(10);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map