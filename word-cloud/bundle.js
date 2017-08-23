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

const wordCloud = (string) => {
  let wordCloudMap = new Map();

  // Punctuation to account for
  const punctuation = ["'", ",", ".", ";", ":", "!", " ", "-", "(", ")"];

  let start = 0;
  // Split the string into a character array
  // Iterate over each character in the array
  string.split('').forEach((char, idx) => {
    // Whenever there is a punctuation
    if (punctuation.includes(char)) {
      // If there is a word, then add to the map
      // Add current word to map, if applicable
      if (char === "'" && !punctuation.includes(string[idx - 1]) && !punctuation.includes(string[idx + 1])) {
      } else {
        if (idx - start > 0) {
          wordCloudMap = addToMap(wordCloudMap, string.slice(start, idx));
        }

        // Add punctuation to map
        wordCloudMap = addToMap(wordCloudMap, char);

        // Reset start indices that track the word
        start = idx + 1;
      }
    }
  });
  return wordCloudMap;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = wordCloud;


const addToMap = (map, word) => {
  if (map.has(word)) {
    map.set(word, map.get(word) + 1);
  } else {
    map.set(word, 1);
  }
  return map;
};
/* unused harmony export addToMap */



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordCloud__ = __webpack_require__(0);
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

const sentence1 = "After beating the eggs, Dana read the next step:";
const sentence2 = "Add milk and eggs, then add flour and sugar.";
const sentence3 = "I'm gonna map-min this object.";
const sentence4 = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake.";
const sentence5 = "The bill came to five dollars.";

window.sentence1 = sentence1;
window.sentence2 = sentence2;
window.sentence3 = sentence3;
window.sentence4 = sentence4;
window.sentence5 = sentence5;
window.wordCloud = __WEBPACK_IMPORTED_MODULE_0__wordCloud__["a" /* wordCloud */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map