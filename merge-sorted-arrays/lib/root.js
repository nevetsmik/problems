/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { mergeSort, mergeSortedArrays, compare } from './mergeSortedArrays';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/
// *
// * *  *
// **** *
// ******
// ******

const unsortedArray = [45, 23, 78, 23, 12, 99, 6, 10];
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

window.unsortedArray = unsortedArray;
window.mergeSort = mergeSort;
window.compare = compare;
window.myArray = myArray;
window.alicesArray = alicesArray;
window.mergeSortedArrays = mergeSortedArrays;
