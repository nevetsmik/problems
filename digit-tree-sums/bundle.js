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
  this.value = value;
  this.left = null;
  this.right = null;
};

Node.prototype.insertLeft = function(value) {
  let newNode = new Node(value);
  this.left = newNode;
  return newNode;
};

Node.prototype.insertRight = function(value) {
  let newNode = new Node(value);
  this.right = newNode;
  return newNode;
};

const digitTreeSums = t => {
  if (t === null) {
    return 0;
  }
  let treePath = allPaths(t);
  return treePath.map(Number).reduce((accum, curr) => accum + curr);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = digitTreeSums;


const allPaths = (t, currPath = "", paths = []) => {
  currPath = currPath.concat(t.value);

  if (!t.left && !t.right) {
    paths.push(currPath);
  }

  if (t.left) {
    allPaths(t.left, currPath, paths);
    // currPath = currPath.slice(0, -1);
  }

  if (t.right) {
    allPaths(t.right, currPath, paths);
    // currPath = currPath.slice(0, -1);
  }

  return paths;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = allPaths;


/* harmony default export */ __webpack_exports__["a"] = Node;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__digitTreeSums__ = __webpack_require__(0);
/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';




let root = new __WEBPACK_IMPORTED_MODULE_0__digitTreeSums__["a" /* default */](9);
// let branch1 = root.insertLeft(9);
// let branch2 = root.insertRight(9);
// let branch3 = branch2.insertLeft(1);
// let branch4 = branch2.insertRight(3);

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.digitTreeSums = __WEBPACK_IMPORTED_MODULE_0__digitTreeSums__["b" /* digitTreeSums */];
window.allPaths = __WEBPACK_IMPORTED_MODULE_0__digitTreeSums__["c" /* allPaths */];
window.root = root;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map