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


const Tree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

Tree.prototype.insertLeft = function (value) {
  let newNode = new Tree(value);
  this.left = newNode;
  return newNode;
};

Tree.prototype.insertRight = function (value) {
  let newNode = new Tree(value);
  this.right = newNode;
  return newNode;
};

Tree.prototype.deleteMin = function (node) {
  if (node === null) { return null; }
  if (node.left === null) { return node.right; }

  node.left = this.deleteMin(node.left);
  return node;
};

// Tree.prototype.search = function (node, value) {
//   if (node === null) {
//     return null;
//   }
//
//   if (node.value === value) {
//     return node;
//   }
//
//   if (this.left) {
//     return this.search(node.left, value);
//   }
//
//   if (this.right) {
//     return this.search(node.right, value);
//   }
// };

Tree.prototype.search = function (value) {
  if (this.value === value) {
    return this;
  }

  if (this.left) {
    let left = this.left.search(value);
    if (left) {
      return left;
    }
  }

  if (this.right) {
    let right = this.right.search(value);
    if (right) {
      return right;
    }
  }

  return null;
};

/* harmony default export */ __webpack_exports__["a"] = Tree;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deleteMin__ = __webpack_require__(0);
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

let root = new __WEBPACK_IMPORTED_MODULE_0__deleteMin__["a" /* default */](6);
let branch1 = root.insertLeft(3);
let branch2 = root.insertRight(9);
// let branch3 = branch1.insertLeft(2);
let branch4 = branch1.insertRight(5);
let branch5 = branch2.insertLeft(8);
let branch6 = branch2.insertRight(11);
// let branch7 = branch3.insertLeft(1);
let branch8 = branch4.insertLeft(4);
let branch9 = branch5.insertLeft(7);
let branch10 = branch6.insertLeft(11);

window.root = root;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map