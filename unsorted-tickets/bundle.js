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
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LinkedList__ = __webpack_require__(1);
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

/*
Given these unsorted tickets, sort them and figure out the origin and the
final destination and sort the tickets

tickets =
[
  ['charlotte', 'durham'],
  ['san francisco', 'denver'],
  ['nashville', 'charlotte'],
  ['st. louis', 'nashville'],
  ['los angeles', 'san francisco'],
  ['denver', 'st. louis'],
]

destination = {
  durham:         ['charlotte', 'durham']
  denver:         ['san francisco', 'denver']
  xcharlotte:      ['nashville', 'charlotte']
  xnashville       ['st. louis', 'nashville']
  san francisco   ['los angeles', 'san francisco']
  xst. louis       ['denver', 'st. louis']
}

arrival = {
  charlotte:        ['charlotte', 'durham']
  san francisco:    ['san francisco', 'denver']
  nashville:      ['nashville', 'charlotte']
  st louis:         ['st. louis', 'nashville']
  los angeles:      ['los angeles', 'san francisco']
  denver:           ['denver', 'st. louis']
}

*/



const unsortedTickets = (tickets) => {
  let destinations = {};
  let arrivals = {};

  // Iterate through the tickets
  tickets.forEach((ticket) => {
    // Object destructure arrival and destination
    let [arrival, destination] = ticket;
    // Insert array into arrival and destination objects with the arrival/destination as the key
    destinations[destination] = ticket;
    arrivals[arrival] = ticket;
  });

  // Create a new list with the first item in the array as the head of the list
  let sortedTickets = new __WEBPACK_IMPORTED_MODULE_0__LinkedList__["a" /* default */]();
  sortedTickets.insertHead(tickets[0]);
  // while (there is a key in destinations that matches head[0] ||
  //        there is a key in the arrivals that matches tail[1])
  let matchingDestinationForArrival = destinations[sortedTickets.getHead()[0]];
  let matchingArrivalForDesitination = arrivals[sortedTickets.getTail()[1]];
  while (matchingDestinationForArrival || matchingArrivalForDesitination) {
    // get the head and tail from the list
    // find the matching key in arrivals/destinations using the head and tail
    // if there is a matching destination with arrival
    if (matchingDestinationForArrival) {
      // then add to head of list
      sortedTickets.insertHead(matchingDestinationForArrival);
      // delete the key from the destinations obj
      delete destinations[matchingDestinationForArrival[1]];
    }
    // if there is a matching arrival with destination
    if (matchingArrivalForDesitination) {
      // then add to tail of list
      sortedTickets.insertTail(matchingArrivalForDesitination);
      // delete the key from the arrivals obj
      delete arrivals[matchingArrivalForDesitination[0]];
    }
    matchingDestinationForArrival = destinations[sortedTickets.getHead()[0]];
    matchingArrivalForDesitination = arrivals[sortedTickets.getTail()[1]];
  }
  return sortedTickets.printList();
};
/* harmony export (immutable) */ __webpack_exports__["a"] = unsortedTickets;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Node = function (value) {
  this.value = value;
  this.next = null;
};

const LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.insertHead = function (value) {
  let node = new Node(value);
  if (this.head === null) {
    // Empty list
    this.head = node;
    this.tail = node;
  } else { // has at least one node in the list
    // Set the new node's next
    node.next = this.head;
    // Set the head to point to the new node
    this.head = node;
  }
};

LinkedList.prototype.getHead = function () {
  return this.head.value;
};

LinkedList.prototype.insertTail = function (value) {
  if (this.tail === null) {
    this.insertHead(value);
  } else {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.getTail = function (value) {
  return this.tail.value;
};

LinkedList.prototype.printList = function () {
  let iter = this.head;
  let tickets = '';
  while (iter) {
    tickets += JSON.stringify(iter.value);
    iter = iter.next;
  }
  return tickets;
};

/* harmony default export */ __webpack_exports__["a"] = LinkedList;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unsortedTickets__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LinkedList__ = __webpack_require__(1);
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

window.LinkedList = __WEBPACK_IMPORTED_MODULE_1__LinkedList__["a" /* default */];
window.unsortedTickets = __WEBPACK_IMPORTED_MODULE_0__unsortedTickets__["a" /* unsortedTickets */];
window.tickets = [
  ['charlotte', 'durham'],
  ['san francisco', 'denver'],
  ['nashville', 'charlotte'],
  ['st. louis', 'nashville'],
  ['los angeles', 'san francisco'],
  ['denver', 'st. louis'],
];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map