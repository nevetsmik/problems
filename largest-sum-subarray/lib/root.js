/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { largestSumSubarray } from "./largestSumSubarray";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

// window.array = [-2, -1, -3, 4, -1, -2, -1, -5, -4];
window.array = [-9, -8, -7, -6, -5, -4, -3, -2, -1];
window.largestSumSubarray = largestSumSubarray;
