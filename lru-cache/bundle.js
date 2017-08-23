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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkedList__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(3);
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

// Strategy:
/*
1. Use the storage hash to lookup a node, which stores the value associated with the key.
This allows for constant lookup time.
2. For #get(key):
  - Access the value using the storage hash to get the node which stores the value
  - Update the doubly linked list to move the most recently used item to the head of the list
  - The least recently used item will be at the tail of the list
3. For #set(key, value):
  - If the size of the list is === limit, then delete the tail node
  - Create a new node using the key's value
  - Insert the key / node pair into the storage hash
  - Insert the node at the head of the linked list
*/




class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.storage = {};
    this.list = new __WEBPACK_IMPORTED_MODULE_0__linkedList__["a" /* default */]();
    this.size = 0;
  }

  get(key) {
    if (this.size === 0) {
      return null;
    }

    let node = this.storage[key];

    if (node === this.list.head) {
      return node.value;
    }

    let prev = node.prev;
    prev.next = node.next;

    if (node === this.list.tail) {
      this.list.tail = prev;
    } else {
      node.next.prev = prev;
    }

    this.list.setHead(node);
    return node.value;
  }

  set(key, value) {
    if (this.size === this.limit) {
      let removedTail = this.list.removeTail();
      delete this.storage[removedTail.value[0]];
      this.size -= 1;
    }
    let newNode = new __WEBPACK_IMPORTED_MODULE_1__node__["a" /* default */](key, value);
    this.storage[key] = newNode;
    this.list.setHead(newNode);
    this.size += 1;

    return newNode.value;
  }

  show() {
    let list = this.list.printList();
    console.log(list);
    console.log(this.storage);
  }
}

/* harmony default export */ __webpack_exports__["a"] = LRUCache;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lruCache__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkedList__ = __webpack_require__(4);
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

let lru = new __WEBPACK_IMPORTED_MODULE_0__lruCache__["a" /* default */](4);
lru.set('first', 'Steve');
lru.set('second', 'Kim');
lru.set('third', 'Mary');
lru.set('fourth', 'Hauser');

window.lru = lru;
window.LinkedList = __WEBPACK_IMPORTED_MODULE_1__linkedList__["a" /* default */];
window.LRUCache = __WEBPACK_IMPORTED_MODULE_0__lruCache__["a" /* default */];


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Node = function (key, value) {
  this.value = [key, value];
  this.prev = null;
  this.next = null;
};

/* harmony default export */ __webpack_exports__["a"] = Node;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(3);


class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  setHead(newNode) {

    if (this.head !== null) {
      newNode.next = this.head;
      this.head.prev = newNode;
    }

    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }

    return this.head;
  }

  removeTail() {
    if (this.tail === null) {
      return null;
    }

    let removedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return removedTail;
  }

  printList() {
    let list = '';
    let itr = this.head;
    while (itr) {
      list += `[${itr.value[0]}, ${itr.value[1]}], `;
      itr = itr.next;
    }
    return list;
  }
}

/* harmony default export */ __webpack_exports__["a"] = LinkedList;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map