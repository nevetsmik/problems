/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { threeSum, bSearch } from './threeSum';

window.threeSum = threeSum;
window.bSearch = bSearch;
window.nums = [-1, 0, 1, 2, -1, -4];
// window.nums = [-4, -4, -1, -1, 0, 1, 2];
