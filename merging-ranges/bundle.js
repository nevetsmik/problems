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

// export const mergingRanges = (array) => {
//   let result = [];
//   let slots = {};
//   slots[array[0].startTime] = array[0].endTime;
//
//   for (let i = 1; i < array.length; i++) {
//     let [startTime, endTime] = [array[i].startTime, array[i].endTime];
//     let foundASlot = false;
//     Object.keys(slots).forEach((key) => {
//       if ((startTime >= parseInt(key) && startTime <= parseInt(slots[key])) || endTime >= parseInt(key) && endTime <= parseInt(slots[key])) {
//         foundASlot = true;
//         if (startTime >= parseInt(key) && startTime <= parseInt(slots[key])) {
//           if (endTime > parseInt(slots[key])) {
//             slots[key] = endTime;
//           }
//         } else if (endTime >= parseInt(key) && endTime <= parseInt(slots[key])) {
//           foundASlot = true;
//           let savedEndTime = slots[key];
//           delete slots[key];
//           slots[startTime] = savedEndTime;
//         }
//       }
//     });
//     if (!foundASlot) {
//       slots[startTime] = endTime;
//     }
//   }
//   Object.keys(slots).forEach((key) => {
//     result.push({'startTime': parseInt(key), 'endTime': parseInt(slots[key])});
//   });
//   return JSON.stringify(result);
// };

/*
2 cases to consider when updated endTime for a range:
1. When the preceding endTime is greater than the current startTime
2. When the preceding endTime is greater than the current endTime
*/
const mergingRanges = ranges => {
  let sortedTimes = ranges.sort((a, b) => a.startTime > b.startTime);

  let mergedTimes = [];
  mergedTimes[0] = sortedTimes[0];

  for (let i = 0; i < sortedTimes.length; i++) {
    let currentRange = sortedTimes[i];
    let lastMergedTime = mergedTimes[mergedTimes.length - 1];

    // Update the endTime for the last merged range if the endTime for the last
    // merged range is greater than the startTime for the currentRange
    if (lastMergedTime.endTime > currentRange.startTime) {
      // Update the endTime for the last merged range to the greater of the currentRange
      // and the last merged time
      lastMergedTime.endTime = Math.max(
        lastMergedTime.endTime,
        currentRange.endTime
      );
    } else {
      mergedTimes.push(currentRange);
    }
  }

  return mergedTimes;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = mergingRanges;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mergingRanges__ = __webpack_require__(0);
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

// window.hiCal = [
//   { startTime: 1, endTime: 10 },
//   { startTime: 2, endTime: 6 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 7, endTime: 9 },
// // ];
window.hiCal = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];
// window.hiCal = [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }];
window.mergingRanges = __WEBPACK_IMPORTED_MODULE_0__mergingRanges__["a" /* mergingRanges */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map