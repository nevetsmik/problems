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

import { flattenR, flattenI } from './scratch';

window.flattenR = flattenR;
window.flattenI = flattenI;
window.arrays = [1, [2,3], [[[4], 5, 6]]];

// [[1, 10], [2, 6], [3, 5], [7, 9]];
