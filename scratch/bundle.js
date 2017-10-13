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
/***/ (function(module, exports) {

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

// const mixEvents = obj => {
//   let events = {};
//
//   obj.on = function(eventName, cb) {
//     events[eventName] = events[eventName] || [];
//     events[eventName].push(cb);
//   };
//
//   obj.trigger = function(event, ...params) {
//     events[event].forEach(cb => cb.apply(null, params));
//   };
//
//   return obj;
// };

// const fs = require("fs");
//
// const readNumsFromFile = (filepath, callback) => {
//   fs.readFile(filepath, (err, lines) => {
//     if (err) {
//       console.log("file not found");
//     }
//     callback(lines);
//   });
// };
//
// readNumsFromFile("./queries.sql", lines => {
//   lines = lines.toString();
//   console.log(
//     lines
//       .split("\n")
//       .map(Number)
//       .reduce((a, b) => a + b)
//   );
// });

const Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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

// import { BFT } from "./scratch";
// import Tree from "./scratch";

let BFT = __webpack_require__(0).BFT;
let Tree = __webpack_require__(0).Tree;
let curryMe = __webpack_require__(0).curryMe;

const root = new Tree(1);
const branch1 = root.addChild(2);
const branch2 = root.addChild(3);
const branch3 = branch1.addChild(4);
const branch4 = branch1.addChild(5);
const branch5 = branch2.addChild(6);
const branch6 = branch2.addChild(7);

BFT(root);

window.root = root;
window.BFT = BFT;
window.curryMe = curryMe;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map