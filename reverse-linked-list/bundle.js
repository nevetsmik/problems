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

const LinkedListNode = function(value) {
  this.value = value;
  this.next = null;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = LinkedListNode;


// ***************************
// In-place
// ***************************

// export const reverseLinkList = head => {
//   // Create an itr and initialize to head
//   let itr = head;
//   // Create a previous node and initialize to null
//   let prev = null;
//   // Create a temp node to save the node's original next reference and initialize to null
//   let savedNext = null;
//   // Iterate thru list until itr is null
//   while (itr) {
//     // Save the itr's original next reference
//     savedNext = itr.next;
//     // Set the itr's next to the previous node
//     itr.next = prev;
//     // Update the previous node to itr
//     prev = itr;
//     // update the itr to the saved next reference
//     itr = savedNext;
//   }
//   return prev;
// };

// ***************************
// Out-of-place
// ***************************

const reverseLinkList = head => {
  // Create an itr and initialize to head
  let itr = head;
  // Create a previous node and initialize to null
  let prev = null;
  // Create a temp node to save the node's original next reference and initialize to null
  let savedNext = null;
  // Iterate thru list until itr is null
  while (itr) {
    // Create a new node with the itr node's value
    const newNode = new LinkedListNode(itr.value);
    // Save the itr's next
    savedNext = itr.next;
    // Set new node's next to prev
    newNode.next = prev;
    // Set prev to the new node
    prev = newNode;
    // Set itr to savedNext
    itr = savedNext;
  }
  return prev;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = reverseLinkList;



const printLinkedList = (node) => {
  let itr = node;
  while (itr !== null) {
    console.log(`Node value is: ${itr.value}`);
    itr = itr.next;
  }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = printLinkedList;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reverseLinkList__ = __webpack_require__(0);
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

let nodeA = new __WEBPACK_IMPORTED_MODULE_0__reverseLinkList__["a" /* LinkedListNode */]("A");
let nodeB = new __WEBPACK_IMPORTED_MODULE_0__reverseLinkList__["a" /* LinkedListNode */]("B");
let nodeC = new __WEBPACK_IMPORTED_MODULE_0__reverseLinkList__["a" /* LinkedListNode */]("C");
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = null;

window.LinkedListNode = __WEBPACK_IMPORTED_MODULE_0__reverseLinkList__["a" /* LinkedListNode */];
window.reverseLinkList = __WEBPACK_IMPORTED_MODULE_0__reverseLinkList__["b" /* reverseLinkList */];
window.printLinkedList = __WEBPACK_IMPORTED_MODULE_0__reverseLinkList__["c" /* printLinkedList */];
window.nodeA = nodeA;
window.nodeB = nodeB;
window.nodeC = nodeC;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map