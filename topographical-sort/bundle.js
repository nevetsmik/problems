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
  Topological Sort:
  Sort vertices (nodes) in direct acyclic graph (DAG) in linear order such that
  for every directed edge uv from vertex u to vertex v, u comes before v in the
  ordering.

  Example:
  A    B
   \ / |
    C  E
   /  /
  D  /
   \/
   F
   |
   G

  B E F G C D A is one example answer (DF)
  A C D F G B E is another (DF)
  A B C D E F G is another (BF)
*/

const Node = function(value) {
  this.value = value;
  this.children = [];
  this.inBound = 0;
};

Node.prototype.addChildren = function(...values) {
  this.children = this.children.concat(values);
};

const topologicalSortBF = graph => {
  // 1. Count the incoming nodes for each node
  for (let i = 0; i < graph.length; i++) {
    let vertex = graph[i];
    // Iterate thru the edges of each node and increment inDegree for each edge
    for (let j = 0; j < vertex.children; j++) {
      let childNode = vertex.children[i];
      childNode.inBound += 1;
    }
  }

  // 2. Add nodes with inDegree === 0 to the inDegree queue
  let inDegree = [];
  for (let i = 0; i < graph.length; i++) {
    let vertex = graph[i];
    if (vertex.inBound === 0) {
      inDegree.push(vertex);
    }
  }

  // 3. Iterate through inDegree...
  let sorted = [];
  while (inDegree.length > 0) {
    let node = inDegree.shift();
    sorted.push(node);
    for (let i = 0; i < node.children.length; i++) {
      node.inDegree -= 1;
      if (node.inDegree === 0) {
        inDegree.push(node);
      }
    }
  }

  if (graph.length !== sorted.length) {
    return [];
  } else {
    return printStack(sorted).reverse();
  }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = topologicalSortBF;


const topologicalSortDF = graph => {
  // Create a stack to put all the nodes in sorted order
  // Create an object to remember all nodes that have already been visited
  let stack = [];
  let visited = {};

  // Iterate through the the nodes in the graph
  for (let i = 0; i < graph.length; i++) {
    // Skip over the ones that have already been visited
    let node = graph[i];
    if (visited.hasOwnProperty(node.value)) {
      continue;
    }

    // Call the topologicalSortHelper on each node
    topologicalSortHelperDF(node, visited, stack);
  }

  // Pop off elements off the stack in reverse order to get sorted nodes
  let answer = printStack(stack);
  console.log(answer);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = topologicalSortDF;


const topologicalSortHelperDF = (node, visited, stack) => {
  // Add the visited node to visited
  visited[node.value] = true;

  // Iterate through each of the nodes children
  for (let i = 0; i < node.children.length; i++) {
    // Skip over the ones that have been visited
    let childNode = node.children[i];
    if (visited[childNode.value]) {
      continue;
    }

    // Recurse on the child node
    topologicalSortHelperDF(childNode, visited, stack);
  }

  // If there are no children or after all the children have been visited, then
  // push the node to the stack
  stack.push(node);
};

const printStack = stack => {
  let result = [];
  for (let i = stack.length - 1; i >= 0; i--) {
    let node = stack[i];
    result.push(node.value);
  }
  return result;
};

/* harmony default export */ __webpack_exports__["a"] = Node;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topologicalSort__ = __webpack_require__(0);
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

const a = new __WEBPACK_IMPORTED_MODULE_0__topologicalSort__["a" /* default */]("A");
const c = new __WEBPACK_IMPORTED_MODULE_0__topologicalSort__["a" /* default */]("C");
const d = new __WEBPACK_IMPORTED_MODULE_0__topologicalSort__["a" /* default */]("D");
const f = new __WEBPACK_IMPORTED_MODULE_0__topologicalSort__["a" /* default */]("F");
const g = new __WEBPACK_IMPORTED_MODULE_0__topologicalSort__["a" /* default */]("G");
const b = new __WEBPACK_IMPORTED_MODULE_0__topologicalSort__["a" /* default */]("B");
const e = new __WEBPACK_IMPORTED_MODULE_0__topologicalSort__["a" /* default */]("E");
a.addChildren(c);
c.addChildren(d);
d.addChildren(f);
f.addChildren(g);
b.addChildren(c, e);
e.addChildren(f);

window.Node = __WEBPACK_IMPORTED_MODULE_0__topologicalSort__["a" /* default */];
window.graph = [a, b, c, d, e, f, g];
window.topologicalSortDF = __WEBPACK_IMPORTED_MODULE_0__topologicalSort__["b" /* topologicalSortDF */];
window.topologicalSortBF = __WEBPACK_IMPORTED_MODULE_0__topologicalSort__["c" /* topologicalSortBF */];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map