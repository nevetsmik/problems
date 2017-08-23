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

const Node = function(value) {
  let node = {
    value: value,
    next: null,
    printNodes: function() {
      let result = "";
      let itr = node;
      while (itr) {
        result += `${itr.value} `;
        itr = itr.next;
      }
      return result.slice(0, -1);
    }
  };
  return node;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Node;


const reverseList = (l, k) => {
  if (l === null) { return []; }
  if (k === 1) { return l; }

  let prev = null;
  let itr = l;
  let count = 0;

  while (count < k && itr) {
    let next = itr.next;
    itr.next = prev;
    prev = itr;
    itr = next;
    count++;
  }

  if (count < k) {
    if (l === prev) {
      // only 1 left over
      // return the head and the tail
      return [l, null];
    } else {
      // reached end of list (i.e., itr is null), but is less than count
      // return the old head and the old tail
      let rereversed = reverseList(prev, count);
      return rereversed; //
    }
  } else {
    return [prev, itr];
  }
  // return count < k ? [l, prev] : [prev, itr];
};
/* harmony export (immutable) */ __webpack_exports__["b"] = reverseList;


const reverseNodesInKGroups = (l, k) => {
  if (l === null) { return []; }
  if (k === 1) { return l; }

  let itr = l;
  let prev = null;
  let newHead;

  while (itr) {
    let nodes = reverseList(itr, k);

    let subHead = nodes[0];
    let newTailNext = nodes[1];

    if (prev) {
      prev.next = subHead;
    } else {
      newHead = subHead;
    }

    if (newTailNext) {
      itr.next = newTailNext;
      prev = itr;
      itr = itr.next;
    } else {
      itr = null;
    }
  }

  return newHead;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = reverseNodesInKGroups;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__ = __webpack_require__(0);
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

// let l1 = Node(24042453);
// let l2 = Node(-540165420);
// let l3 = Node(992040586);
// let l4 = Node(867794712);
// let l5 = Node(262916773);
// let l6 = Node(-508129645);
// let l7 = Node(-503549928);
// let l8 = Node(-526666356);
// let l9 = Node(766910780);
// let l10 = Node(-417669299);

let l1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["a" /* Node */])(1);
let l2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["a" /* Node */])(2);
let l3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["a" /* Node */])(3);
let l4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["a" /* Node */])(4);
let l5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["a" /* Node */])(5);
let l6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["a" /* Node */])(6);
let l7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["a" /* Node */])(7);
let l8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["a" /* Node */])(8);
let l9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["a" /* Node */])(9);
let l10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["a" /* Node */])(10);

// [24042453, -540165420, 992040586, 867794712, 262916773, -508129645, -503549928, -526666356, 766910780, -417669299]
// [-508129645, 262916773, 867794712, 992040586, -540165420, 24042453, -503549928, -417669299]
// [-508129645, 262916773, 867794712, 992040586, -540165420, 24042453, -503549928, -526666356, 766910780, -417669299]

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;
l6.next = l7;
l7.next = l8;
l8.next = l9;
l9.next = l10;

window.reverseList = __WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["b" /* reverseList */];
window.reverseNodesInKGroups = __WEBPACK_IMPORTED_MODULE_0__reverseNodesInKGroups__["c" /* reverseNodesInKGroups */];
window.l1 = l1;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map