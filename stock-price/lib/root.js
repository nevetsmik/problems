/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { stockPrice } from './stockPrice';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

const stockPricesYesterday = [12, 7, 5, 3, 2, 1];

window.stockPrice = stockPrice;
window.stockPricesYesterday = stockPricesYesterday;
