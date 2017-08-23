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

Tree.prototype.insertRight = function(value) {
  let newNode = new Tree (value);
  this.right = newNode;
  return newNode;
};

Tree.prototype.insertLeft = function(value) {
  let newNode = new Tree (value);
  this.left = newNode;
  return newNode;
};

// Tree.prototype.balancedBinaryTree = function(){
//   // Store the leaf depth for all leaves
//   let leafDepths = [];
//
//   // Traverse tree while counting levels and push the level to leafDepths once a leaf is reached
//   const traverseTreeAndStoreLeafDepth = (node, level) => {
//     // if the node has no children, then...
//     if (!node.left && !node.right) {
//       // push the level to leafDepths
//       leafDepths.push(level);
//     }
//
//     // if the node has a left child, then...
//     if (node.left) {
//       // traverse (this.left, level + 1)
//       traverseTreeAndStoreLeafDepth(node.left, level + 1);
//     }
//
//     // if the node has a right child, then...
//     if (node.right) {
//       // traverse (this.right, level + 1)
//       traverseTreeAndStoreLeafDepth(node.right, level + 1);
//     }
//   };
//
//   traverseTreeAndStoreLeafDepth(this, 1);
//   // Sort the leaf depths
//   leafDepths = leafDepths.sort((a, b) => {
//     return a - b;
//   });
//   // If the difference between the min and the max is greater than 1, then
//   if (leafDepths[leafDepths.length - 1] -  leafDepths[0] > 1) {
//     // return false
//     return false;
//   } else {
//     // return true
//     return true;
//   }
// };

Tree.prototype.balancedBinaryTree = function(treeRoot) {
  // a tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
      return true;
  }

  var depths = []; // we short-circuit as soon as we find more than 2

  // nodes will store pairs of a node and the node's depth
  var nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {

      // pop a node and its depth from the top of our stack
      var nodePair = nodes.pop();
      var node  = nodePair[0],
          depth = nodePair[1];

      // case: we found a leaf
      if (!node.left && !node.right) {

          // we only care if it's a new depth
          if (depths.indexOf(depth) < 0) {
              depths.push(depth);

              // two ways we might now have an unbalanced tree:
              //   1) more than 2 different leaf depths
              //   2) 2 leaf depths that are more than 1 apart
              if ((depths.length > 2) ||
                      (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
                  return false;
              }
          }

      // case: this isn't a leaf - keep stepping down
      } else {
          if (node.left) {
              nodes.push([node.left, depth + 1]);
          }
          if (node.right) {
              nodes.push([node.right, depth + 1]);
          }
      }
  }

  return true;

};

/* harmony default export */ __webpack_exports__["a"] = Tree;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__balancedBinaryTree__ = __webpack_require__(0);
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

let root = new __WEBPACK_IMPORTED_MODULE_0__balancedBinaryTree__["a" /* default */](6);
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

window.root = root;
window.Tree = __WEBPACK_IMPORTED_MODULE_0__balancedBinaryTree__["a" /* default */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map