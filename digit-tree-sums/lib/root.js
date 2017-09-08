/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { digitTreeSums, allPaths } from "./digitTreeSums";
import Node from "./digitTreeSums";

let root = new Node(9);
// let branch1 = root.insertLeft(9);
// let branch2 = root.insertRight(9);
// let branch3 = branch2.insertLeft(1);
// let branch4 = branch2.insertRight(3);

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.digitTreeSums = digitTreeSums;
window.allPaths = allPaths;
window.root = root;
