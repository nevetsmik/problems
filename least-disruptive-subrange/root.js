/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { leastDisruptiveSubrange } from './leastDisruptiveSubrange';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.original = [2,5,9,1,-3,10,-3,39];
window.replacement = [10,-3,39];
window.leastDisruptiveSubrange = leastDisruptiveSubrange;
