/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { Tree } from './secondLargestItemInBST';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

let root = new Tree(6);
let branch2 = root.insertLeft(3);
let branch3 = root.insertRight(9);
let branch4 = branch2.insertLeft(2);
let branch5 = branch2.insertRight(5);
let branch6 = branch3.insertLeft(8);
let branch7 = branch3.insertRight(12);
let branch8 = branch4.insertLeft(1);
let branch9 = branch5.insertLeft(4);
let branch10 = branch6.insertLeft(7);
let branch11 = branch7.insertLeft(10);
let branch12 = branch11.insertRight(11);

window.root = root;
window.Tree = Tree;
