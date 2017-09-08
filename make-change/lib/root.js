/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { makeChange } from "./makeChange";
import { makeBestChange } from "./makeChange";
import { coinSums } from "./makeChange";
import { coins } from "./makeChange";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.makeChange = makeChange;
window.makeBestChange = makeBestChange;
window.coinSums = coinSums;
window.coins = coins;
