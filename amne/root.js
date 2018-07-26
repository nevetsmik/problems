/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { increasingDecreasingSubrangeDifference } from './amne';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

// let range = [188930, 194123, 173455, 154243, 154243];
// let range = [154240, 154243, 188930, 194123, 194125, 201345];
// let range = [154240, 194123, 154243, 188930, 194125, 201345, 188930, 194123, 201345, 194125];
// let n = 3;
// let n = 4;
// let n = 6;

let range = [7, 10, 9, 9, 10];
let n = 2;

window.range = range;
window.n = n;
window.increasingDecreasingSubrangeDifference = increasingDecreasingSubrangeDifference;
