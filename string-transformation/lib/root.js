/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { stringTransformation, shift } from './stringTransformation';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.stringTransformation = stringTransformation;
window.shift = shift;
