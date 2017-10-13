/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { longestConsecutiveSequence } from "./longestConsecutiveSequenceBT";
import Tree from "./longestConsecutiveSequenceBT";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

const root = new Tree(1);
const branch1 = root.addLeft(2);
const branch2 = root.addRight(4);
const branch3 = branch1.addLeft(3);
const branch4 = branch2.addLeft(5);
const branch5 = branch2.addRight(6);
const branch6 = branch5.addLeft(7);

// const root = new Tree(6);
// const branch1 = root.addRight(9);
// const branch2 = branch1.addLeft(7);
// const branch3 = branch1.addRight(10);
// const branch4 = branch3.addRight(11);
// const branch5 = branch4.addRight(12);

window.root = root;
window.longestConsecutiveSequence = longestConsecutiveSequence;
