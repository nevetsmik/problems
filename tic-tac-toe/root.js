/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import board from './scratch';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.board = board;
