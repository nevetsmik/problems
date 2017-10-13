/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { spiralTraversal } from "./spiralTraversal";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.array = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
window.spiralTraversal = spiralTraversal;
