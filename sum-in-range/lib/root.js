/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { sumInRange, calcPrefixSums } from "./sumInRange";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.array = [3, 0, -2, 6, -3, 2];
window.queries = [[0, 2], [2, 5], [0, 5]];
window.sumInRange = sumInRange;
window.calcPrefixSums = calcPrefixSums;
