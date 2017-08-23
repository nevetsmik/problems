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

const HashMap = function (limit) {
  // Create instance variable array for storage
  this.storage = [];
  this.limit = limit;
  // Create instance variable for counting number of elements
  this.size = 0;
  // Create upper limit ratio
  this.upperLimit = .75;
  // Create lower limit ratio
  this.lowerLimit = .25;
};

HashMap.prototype.insert = function (key, value) {
  // Get bucket using hashing function
  let bucket = this.hashing(key.toString());
  // Get the array or initialize the bucket to an array
  this.storage[bucket] = this.storage[bucket] || [];
  // Push the key value pair to the bucket
  let found = false;
  for (let i = 0; i < this.storage[bucket].length; i++) {
    if (this.storage[bucket][i][0] === key) {
      this.storage[bucket][i][1] = value;
      found = true;
    }
  }
  if (!found) {
    this.storage[bucket].push([key, value]);
    // Increment size counter
    this.size += 1;
  }
  // if the size is greater than the upper limit ratio
  if (this.size > this.limit * this.upperLimit) {
    // resize('up')
    this.resize('up');
  }
};

HashMap.prototype.remove = function (key) {
  // Get the bucket
  let bucket = this.hashing(key.toString());
  let value;
  // If the bucket is null
  if (this.storage[bucket] === undefined) {
    // return null
    return null;
  } else {
    // Iterate through the array
    for (let i = 0; i < this.storage[bucket].length; i++) {
      // Compare the key in the tuple to the input key
      if (key === this.storage[bucket][i][0]) {
        // save the value
        value = this.storage[bucket][i][1];
        // remove the key
        this.storage[bucket].splice(i, 1);
        this.size -= 1;
      }
    }
  }

  // if the size is less than the lower limit ration
  if (this.size < this.lowerLimit * this.limit) {
    // resize('down')
    this.resize('down');
  }

  // return null
  if (value) {
    return value;
  } else {
    return null;
  }
};

HashMap.prototype.retrieve = function (key) {
  // Get the bucket
  let bucket = this.hashing(key.toString());
  // If the bucket is null
  if (this.storage[bucket] === undefined) {
    // return null
    return null;
  } else {
    // Iterate through the array
    for (let i = 0; i < this.storage[bucket].length; i++) {
      // Compare the key in the tuple to the input key
      if (this.storage[bucket][i][0] === key) {
        // return the value
        return this.storage[bucket][i][1];
      }
    }
    // return null
    return null;
  }
};

HashMap.prototype.resize = function (direction) {
  // Save the old storage
  let oldStorage = this.storage.slice();
  // Create a new storage
  this.storage = [];
  if (direction === 'up') {
    // Reset the limit to double the size
    this.limit = this.limit * 2;
    this.size = 0;
  } else {
    // Reset the limit to half the size
    this.limit = Math.floor(this.limit / 2);
    this.size = 0;
  }

  // Iterate through the old storage array
  for (let i = 0; i < oldStorage.length; i++) {
    // Iterate through each bucket
    if (Array.isArray(oldStorage[i])) {
      for (let j = 0; j < oldStorage[i].length; j++) {
        // Insert into the this
        this.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
      }
    }
  }
};

HashMap.prototype.hashing = function (str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % this.limit;
};

/* harmony default export */ __webpack_exports__["a"] = HashMap;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hashMap__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hashTableResizing__ = __webpack_require__(2);
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

// let hash = new HashMap(5);
// hash.insert(1, 'steve');
// hash.insert(2, 'kim');
// hash.insert(3, 'mary');
// hash.insert(4, 'hauser');
window.HashMap = __WEBPACK_IMPORTED_MODULE_0__hashMap__["a" /* default */];
window.makeHashTable = __WEBPACK_IMPORTED_MODULE_1__hashTableResizing__["a" /* makeHashTable */];

let hash = new __WEBPACK_IMPORTED_MODULE_1__hashTableResizing__["a" /* makeHashTable */](5);
hash.insert(1, 'steve');
hash.insert(2, 'kim');
hash.insert(3, 'mary');
// hash.insert(4, 'hauser');
window.hash = hash;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

const makeHashTable = function(limit) {
  let maxSize = limit;
  let size = 0;
  let storage = [];

  const resize = function (direction) {
    if (direction === 'up') {
      maxSize = maxSize * 2;
    } else {
      maxSize = Math.floor(maxSize / 2);
    }

    let oldStorage = storage.slice();
    storage = [];
    size = 0;
    for (let i = 0; i < oldStorage.length; i++) {
      if (oldStorage[i] === undefined) { continue; }
      for (let j = 0; j < oldStorage[i].length; j++) {
        hash.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
        size += 1;
      }
    }
    return hash;
  };

  let hash = {
    insert: function (key, value) {
      let bucket = getIndexBelowMaxForKey(key, maxSize);
      storage[bucket] = storage[bucket] || [];
      let found = false;
      for (let i = 0; i < storage[bucket].length; i++) {
        if (storage[bucket][i][0] === key) {
          found = true;
          storage[bucket][i][1] = value;
        }
      }
      if (!found) {
        storage[bucket].push([key, value]);
        size += 1;
      }

      if (size > 0.75 * maxSize) {
        resize('up');
      }
    },

    retrieve: function (key) {
      let bucket = getIndexBelowMaxForKey(key, maxSize);
      if (storage[bucket] === undefined) {
        return null;
      }
      let list = storage[bucket];
      for (let i = 0; i < list.length; i++) {
        if (list[i][0] === key) {
          return list[i][1];
        }
      }
      return null;
    },

    remove: function (key) {
      let bucket = getIndexBelowMaxForKey(key, maxSize);
      if (storage[bucket] === undefined) {
        return null;
      }

      let value;
      let list = storage[bucket];
      for (let i = 0; i < list.length; i++) {
        if (list[i][0] === key) {
          value = list[i][1];
          list.splice(i, 1);
          size -= 1;
        }
      }

      if (size < 0.25 * maxSize) {
        resize('down');
      }

      if (value) {
        return value;
      } else {
        return null;
      }
    }
  };

  return hash;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = makeHashTable;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map