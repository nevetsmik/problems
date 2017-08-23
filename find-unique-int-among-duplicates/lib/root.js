/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { findUniqueInt } from './findUniqueInt';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8];
window.findUniqueInt = findUniqueInt;
