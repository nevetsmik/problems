/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { increasingDecreasingSubrangeDifference } from './scratch';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

// let range = [188930, 194123, 201345, 154243, 154243];
let range = [18, 19, 20, 15, 15];
let n = 3;

window.range = range;
window.n = n;
window.increasingDecreasingSubrangeDifference = increasingDecreasingSubrangeDifference;
