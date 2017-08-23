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

const Tree = function (value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

Tree.prototype.insertRight = function (value) {
  let newNode = new Tree(value);
  this.right = newNode;
  return newNode;
};

Tree.prototype.insertLeft = function (value) {
  let newNode = new Tree(value);
  this.left = newNode;
  return newNode;
};

Tree.prototype.commonAncestor = function (node1, node2) {
  if (!this.exists(node1) || !this.exists(node2)) {
    return null;
  }

  const findAncestor = function (root) {
    if (root === null || root === node1 || root === node2) {
      return root;
    }

    let node1IsOnLeft = root.left.exists(node1);
    let node2IsOnLeft = root.left.exists(node2);

    if (node1IsOnLeft !== node2IsOnLeft) {
      return root;
    }

    let pickASide = node1IsOnLeft ? root.left : root.right;
    return findAncestor(pickASide);
  };

  return findAncestor(this);
};

// Tree.prototype.commonAncestor = function (node1, node2) {
//   // Get ancestor path for node1 - ancestor1
//   let ancestor1 = this.getAncestorPath(node1);
//   // Get ancestor path for node2 - ancestor2
//   let ancestor2 = this.getAncestorPath(node2);
//   // Iterate thru ancestor1 and do indexOf on the other array
//   for (let i = 0; i < ancestor1.length; i++) {
//     let ancestor = ancestor1[i];
//     let found = ancestor2.indexOf(ancestor);
//     if (found) {
//       return ancestor;
//     }
//   }
//   return null;
// };

// Tree.prototype.getAncestorPath = function (node) {
//   let ancestorPath = [];
//
//   const traverseTreeDF = (tree) => {
//     // Traverse tree until this === node, return found = true, ancestorPath
//     // Base case:
//     // if this === node, then...
//     if (tree === node) {
//       // return true
//       return true;
//     }
//
//     // if node has a left child, then...
//     if (tree.left) {
//       // found = this.left.getAncestorPath(node)
//       let found = traverseTreeDF(tree.left);
//       // if found, then...
//       if (found) {
//         // ancestorPath.push(this);
//         ancestorPath.push(tree);
//         return true;
//       }
//     }
//
//     // if node has a right child, then...
//     if (tree.right) {
//       // found = this.right.getAncestorPath(node)
//       let found = traverseTreeDF(tree.right);
//       // if found, then...
//       if (found) {
//         // ancestorPath.push(this)
//         ancestorPath.push(tree);
//         return true;
//       }
//     }
//
//     return false;
//   };
//
//   traverseTreeDF(this);
//   return ancestorPath;
// };

Tree.prototype.getAncestorPath = function (node, ancestorPath = []) {
    // Traverse tree until this === node, return found = true, ancestorPath
    // Base case:
    // if this === node, then...
    if (this === node) {
      return ancestorPath;
    }

    if (this.left) {
      let found = this.left.getAncestorPath(node, ancestorPath);
      // if found, then...
      if (found) {
        // ancestorPath.push(this);
        ancestorPath.push(this);
        return ancestorPath;
      }
    }

    // if node has a right child, then...
    if (this.right) {
      // found = this.right.getAncestorPath(node)
      let found = this.right.getAncestorPath(node, ancestorPath);
      // if found, then...
      if (found) {
        // ancestorPath.push(this)
        ancestorPath.push(this);
        return ancestorPath;
      }
    }
  return null;
};

Tree.prototype.exists = function (target) {
  let right, left;
  if (this === target) {
    return true;
  }

  if (this.left) {
    left = this.left.exists(target);
  }

  if (this.right) {
    right = this.right.exists(target);
  }

  if (left || right) {
    return true;
  }

  return false;
};

// Tree.prototype.exists = function (node, target) {
//   if (node === target) {
//     return true;
//   }
//
//   if (node === null) {
//     return false;
//   }
//
//   return this.exists(node.left, target) || this.exists(node.right, target);
// };

const covers = (root, target) => {
  if (root === target) {
    return true;
  }

  if (root === null) {
    return false;
  }

  return covers(root.left, target) || covers(root.right, target);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = covers;


Tree.prototype.DFSearch = function (value) {
  if (this.value === value) {
    return true;
  }

  if (this.left) {
    let left = this.left.DFSearch(value);
    if (left) { return true; }
  }

  if (this.right) {
    let right = this.right.DFSearch(value);
    if (right) { return true; }
  }

  return false;
};

Tree.prototype.BFSearch = function (value) {
  let queue = [];
  queue[0] = this;

  while (queue.length > 0) {
    let current = queue.shift();
    if (current.value === value) {
      return true;
    } else {
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  return false;
};

/* harmony default export */ __webpack_exports__["a"] = Tree;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commonAncestor__ = __webpack_require__(0);
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

let root = new __WEBPACK_IMPORTED_MODULE_0__commonAncestor__["a" /* default */](6);
let branch1 = root.insertLeft(3);
let branch2 = root.insertRight(9);
let branch3 = branch1.insertLeft(2);
let branch4 = branch1.insertRight(5);
let branch5 = branch2.insertLeft(8);
let branch6 = branch2.insertRight(10);
let branch7 = branch3.insertLeft(1);
let branch8 = branch4.insertLeft(4);
let branch9 = branch5.insertLeft(7);
let branch10 = branch6.insertLeft(11);
let branch11 = new __WEBPACK_IMPORTED_MODULE_0__commonAncestor__["a" /* default */](12);

window.root = root;
window.branch1 = branch1;
window.branch2 = branch2;
window.branch3 = branch3;
window.branch4 = branch4;
window.branch5 = branch5;
window.branch6 = branch6;
window.branch7 = branch7;
window.branch8 = branch8;
window.branch9 = branch9;
window.branch10 = branch10;
window.branch11 = branch11;
window.Tree = __WEBPACK_IMPORTED_MODULE_0__commonAncestor__["a" /* default */];
window.covers = __WEBPACK_IMPORTED_MODULE_0__commonAncestor__["b" /* covers */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map