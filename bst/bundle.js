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

const BST = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BST.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      return this.left.insert(value);
    } else {
      let newNode = new BST(value);
      this.left = newNode;
      return newNode;
    }
  } else {
    if (this.right) {
      return this.right.insert(value);
    } else {
      let newNode = new BST(value);
      this.right = newNode;
      return newNode;
    }
  }
};

BST.prototype.min = function () {
  if (this === null) { return null; }

  if (this.left) {
    return this.left.min();
  } else {
    return this;
  }
};

BST.prototype.max = function () {
  if (this === null) { return null; }

  if (this.right) {
    return this.right.max();
  } else {
    return this;
  }
};

BST.prototype.find = function (value) {
  let found = null;

  if (this.value === value) {
    return this;
  } else if (value < this.value && this.left) {
    found = this.left.find(value);
  } else if (this.right) {
    found = this.right.find(value);
  }

  return found;
};

BST.prototype.height = function () {
  let lHeight, rHeight;
  lHeight = rHeight = 0;

  if (!this.left && !this.right) {
    return 1;
  }

  if (this.left) {
    lHeight = 1 + this.left.height();
  }

  if (this.right) {
    rHeight = 1 + this.right.height();
  }

  return Math.max(lHeight, rHeight);

};

BST.prototype.deleteMin = function () {
  if (!this.left) {
    if (this.right) {
      return this.right;
    } else {
      return null;
    }
  }

  if (this.left){
    this.left = this.left.deleteMin();
  }

  return this;
};

BST.prototype.delete = function (value) {
  if (value === null || value === undefined) { return null; }

  if (value < this.value) {
    this.left = this.left.delete(value);
  } else if (value > this.value) {
    this.right = this.right.delete(value);
  } else if (value === this.value) {
    if (!this.right) {
      return this.left;
    }
    if (!this.left) {
      return this.right;
    }
    let replacement = this.right.min();
    replacement.right = this.right.deleteMin();
    replacement.left = this.left;
    return replacement;
  }
  return this;
};

BST.prototype.secondToLargest = function() {
  if (this === null) { return null; }

  if (this.right) {
    if (!this.right.right && !this.right.left) {
      return this;
    } else if (!this.right.right && this.right.left) {
      return this.right.left.max();
    } else {
      return this.right.secondToLargest();
    }
  } else {
    return this.left;
  }

};

BST.prototype.inOrder = function () {
  let array = [];
  if (this.left) {
    array = array.concat(this.left.inOrder());
  }
  array.push(this.value);
  if (this.right) {
    array = array.concat(this.right.inOrder());
  }
  return array;
};

BST.prototype.postOrder = function () {
  let array = [];

  if (this.left) {
    array = array.concat(this.left.postOrder());
  }

  if (this.right) {
    array = array.concat(this.right.postOrder());
  }

  array.push(this.value);

  return array;
};

BST.prototype.preOrder = function () {
  let array = [];

  array.push(this.value);

  if (this.left) {
    array = array.concat(this.left.preOrder());
  }

  if (this.right) {
    array = array.concat(this.right.preOrder());
  }

  return array;
};

/* harmony default export */ __webpack_exports__["a"] = BST;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bst__ = __webpack_require__(0);
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

let root = new __WEBPACK_IMPORTED_MODULE_0__bst__["a" /* default */](6);
root.insert(3);
root.insert(9);
root.insert(2);
root.insert(5);
root.insert(4);
root.insert(8);
root.insert(7);
root.insert(12);
root.insert(11);
root.insert(13);

window.BST = __WEBPACK_IMPORTED_MODULE_0__bst__["a" /* default */];
window.root = root;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map