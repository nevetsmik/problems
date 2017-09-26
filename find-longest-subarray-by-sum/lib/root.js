/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import {
  findLongestSubArrayBySum,
  calcPrefixSums,
} from "./findLongestSubArrayBySum";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.target = 0;
window.array = [1, 0, 2];
// window.array = [1, 2, 3, 7, 5];

window.findLongestSubArrayBySum = findLongestSubArrayBySum;
window.calcPrefixSums = calcPrefixSums;
