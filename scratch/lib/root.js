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

// import { BFT } from "./scratch";
// import Tree from "./scratch";

let BFT = require("./scratch.js").BFT;
let Tree = require("./scratch.js").Tree;
let curryMe = require("./scratch.js").curryMe;

const root = new Tree(1);
const branch1 = root.addChild(2);
const branch2 = root.addChild(3);
const branch3 = branch1.addChild(4);
const branch4 = branch1.addChild(5);
const branch5 = branch2.addChild(6);
const branch6 = branch2.addChild(7);

BFT(root);

window.root = root;
window.BFT = BFT;
window.curryMe = curryMe;
