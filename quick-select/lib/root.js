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
  subsets,
  permutations,
  quickSelect,
  quickSort,
  quickSortInPlace,
  partition,
} from "./quickSelect";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.subsets = subsets;
window.permutations = permutations;
window.quickSelect = quickSelect;
window.quickSort = quickSort;
window.quickSortInPlace = quickSortInPlace;
window.partition = partition;
