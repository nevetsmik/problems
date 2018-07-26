/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { wordCloud } from './wordCloud';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/
// *
// * *  *
// **** *
// ******
// ******

const sentence1 = "After beating the eggs, Dana read the next step:";
const sentence2 = "Add milk and eggs, then add flour and sugar.";
const sentence3 = "I'm gonna map-min this object.";
const sentence4 = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake.";
const sentence5 = "The bill came to five dollars.";

window.sentence1 = sentence1;
window.sentence2 = sentence2;
window.sentence3 = sentence3;
window.sentence4 = sentence4;
window.sentence5 = sentence5;
window.wordCloud = wordCloud;
