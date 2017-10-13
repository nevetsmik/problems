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

const Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

Tree.prototype.addRight = function(value) {
  this.right = new Tree(value);
  return this.right;
};

Tree.prototype.addLeft = function(value) {
  this.left = new Tree(value);
  return this.left;
};

const longestConsecutiveSequence = node => {
  if (node === null || node === undefined) {
    return 0;
  } else {
    return 1 + longestConsecutiveSequenceHelper(node, node.value);
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = longestConsecutiveSequence;


const longestConsecutiveSequenceHelper = (node, prevValue) => {
  if (node === null) {
    return 0;
  }

  if (node.value === prevValue + 1) {
    return (
      1 +
      Math.max(
        longestConsecutiveSequenceHelper(node.left, node.value),
        longestConsecutiveSequenceHelper(node.right, node.value)
      )
    );
  } else {
    return (
      0 +
      Math.max(
        longestConsecutiveSequenceHelper(node.left, node.value),
        longestConsecutiveSequenceHelper(node.right, node.value)
      )
    );
  }
};

/* harmony default export */ __webpack_exports__["a"] = Tree;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__longestConsecutiveSequenceBT__ = __webpack_require__(0);
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

const root = new __WEBPACK_IMPORTED_MODULE_0__longestConsecutiveSequenceBT__["a" /* default */](1);
const branch1 = root.addLeft(2);
const branch2 = root.addRight(4);
const branch3 = branch1.addLeft(3);
const branch4 = branch2.addLeft(5);
const branch5 = branch2.addRight(6);
const branch6 = branch5.addLeft(7);

// const root = new Tree(6);
// const branch1 = root.addRight(9);
// const branch2 = branch1.addLeft(7);
// const branch3 = branch1.addRight(10);
// const branch4 = branch3.addRight(11);
// const branch5 = branch4.addRight(12);

window.root = root;
window.longestConsecutiveSequence = __WEBPACK_IMPORTED_MODULE_0__longestConsecutiveSequenceBT__["b" /* longestConsecutiveSequence */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map