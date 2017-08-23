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

const BinaryHeap = function() {
  this.heap = [];
  this.compare = function (i, j) {
    return (this.heap[i] < this.heap[j]);
  };
};

BinaryHeap.prototype.insert = function (value) {
  // insert at the end of the array
  this.heap.push(value);
  // bubble up the inserted value while currentIndex is less than parentIndex
  let currentIndex = this.heap.length - 1;
  let parentIndex = this.getParent(currentIndex);
  while (this.compare(currentIndex, parentIndex)) {
    // swap parentIndex and currentIndex values
    [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
    // update parentIndex and currentIndex
    currentIndex = parentIndex;
    parentIndex = this.getParent(currentIndex);
  }
};

BinaryHeap.prototype.remove = function () {
  [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
  let removedItem = this.heap.pop();
  // Set parentIndex to the first position in the heap array
  let parentIndex = 0;
  // Get the children indices
  let childrenIndices = this.getChildrenIndices(parentIndex);
  // Bubble down the parentIndex while parentIndex is less than both children
  while (this.compare(childrenIndices[0], parentIndex) ||
  this.compare(childrenIndices[1], parentIndex)) {
    // Get the minimum of the two children
    // let minimumChild = this.compare(childrenIndices[0], childrenIndices[1]) ? childrenIndices[0] : childrenIndices[1];
    let minimumChild = this.getSmallestChildIndex(parentIndex);
    // Swap the values between the smallest child and the parentIndex
    [this.heap[parentIndex], this.heap[minimumChild]] = [this.heap[minimumChild], this.heap[parentIndex]];
    // Update the parentIndex
    parentIndex = minimumChild;
    // Update the childrenIndices
    childrenIndices = this.getChildrenIndices(parentIndex);
  }
  return removedItem;
};

BinaryHeap.prototype.getSmallestChildIndex = function (parentIndex) {
  let children = this.getChildrenIndices(parentIndex).filter((index) => {
    return index < this.heap.length;
  }, this);

  if (children.length === 1) {
    return children[0];
  } else {
    return this.compare(children[0], children[1]) ? children[0] : children[1];
  }

};

BinaryHeap.prototype.getParent = function (childIndex) {
  return Math.floor( (childIndex - 1) / 2 );
};

BinaryHeap.prototype.getChildrenIndices = function (parentIndex) {
  return [parentIndex * 2 + 1, parentIndex * 2 + 2];
};

const heapSort = function (array) {
  // Create a returning array
  let result = [];

  // Create a new heap object
  let newHeap = new BinaryHeap();
  // Iterate through the input array
  array.forEach((el) => {
    // Insert each value into the heap
    newHeap.insert(el);
  });

  // Iterate through the heap
  while (newHeap.heap.length > 0) {
    // Remove from the heap into an array
    result.push(newHeap.remove());
  }

  // Return the created array
  return result;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = heapSort;


/* harmony default export */ __webpack_exports__["a"] = BinaryHeap;

// let bheap = new BinaryHeap();
// bheap.insert(33);
// bheap.insert(54);
// bheap.insert(38);
// bheap.insert(29);
// bheap.insert(76);
// bheap.insert(23);
// bheap.insert(44);
// bheap.insert(2);
// bheap.insert(71);
//
// console.log(bheap.heap);
//
// let sortedArray = heapSort(bheap.heap);
// console.log(sortedArray);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heap__ = __webpack_require__(0);
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

window.BinaryHeap = __WEBPACK_IMPORTED_MODULE_0__heap__["a" /* default */];
window.heapSort = __WEBPACK_IMPORTED_MODULE_0__heap__["b" /* heapSort */];

let bheap = new __WEBPACK_IMPORTED_MODULE_0__heap__["a" /* default */]();
bheap.insert(33);
bheap.insert(54);
bheap.insert(38);
bheap.insert(29);
bheap.insert(76);
bheap.insert(23);
bheap.insert(44);
bheap.insert(2);
bheap.insert(71);

window.bheap = bheap;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map