/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { bracketValidator } from './bracketValidator';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/
// *
// * *  *
// **** *
// ******
// ******

let brackets1 = '{ [ ] ( ) }';
let brackets2 = '{ [ ( ] ) }';
let brackets3 = '{[}';

window.bracketValidator = bracketValidator;
window.bracket1 = brackets1;
window.bracket2 = brackets2;
window.bracket3 = brackets3;
