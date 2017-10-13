/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { possibleSums } from "./possibleSums";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.coins = [1, 2];
window.quantity = [50000, 2];
window.possibleSums = possibleSums;
