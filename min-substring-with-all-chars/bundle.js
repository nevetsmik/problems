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

/*
You have two strings, s and t. The string t contains only unique elements.
Find and return the minimum consecutive substring of s that contains all of the elements from t.

It's guaranteed that the answer exists. If there are several answers, return
the one which starts from the smallest index.

For s = "adobecodebanc" and t = "abc", the output should be
minSubstringWithAllChars(s, t) = "banc".
*/

/*
Strategy: Iterate the right pointer to find a substring that contains all the letters
in t. Once a substring is found, iterate the left pointer until all the letters in t are
not found. Then, repeat with the right pointer to find another substring that contains
all the letters.

Implementation:
Use two pointers to scan the string, s
Iterate right until a substring contains all the letters in t
Iterate left checking if the minimized substring still contains all the letters in t
  Break if the minimized substring no longer contains all the letters in t
  Update the minSubstring if the current substring is less than minSubstring
*/
const minSubstringWithAllChars = (s, t) => {
  if (s === "") {
    return "";
  }

  let left = 0;
  let right = 0;

  let chars = [];
  let minSubstring;

  while (contains(t, chars) || right < s.length) {
    while (right < s.length) {
      chars.push(s[right]);
      right++;
      if (contains(t, chars)) {
        break;
      }
    }

    while (left <= s.length - t.length) {
      if (!contains(t, chars)) {
        break;
      } else if (
        minSubstring === undefined ||
        chars.join("").length < minSubstring.length
      ) {
        minSubstring = chars.join("");
      }
      left++;
      chars.shift();
    }
  }

  return minSubstring;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = minSubstringWithAllChars;


// Every letter in uniqueStr is present in str
const contains = (uniqueStr, chars) => {
  for (let i = 0; i < uniqueStr.length; i++) {
    if (chars.indexOf(uniqueStr[i]) === -1) {
      return false;
    }
  }
  return true;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__minSubstringWithAllChars__ = __webpack_require__(0);
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

window.s =
  "udphrojoebzjmzncvnuotwrtqhupaopurxqnhckbvdchauolsywxcklualquqpyexmwxucwdzbfkvrjhjkxvlgcxdogfbibcjjbn";
window.t = "abcdefghijklmnopqrstuvwxyz";
window.minSubstringWithAllChars = __WEBPACK_IMPORTED_MODULE_0__minSubstringWithAllChars__["a" /* minSubstringWithAllChars */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map