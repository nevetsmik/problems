/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { topScores } from './topScores';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/
// *
// * *  *
// **** *
// ******
// ******

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

window.unsortedScores = unsortedScores;
window.HIGHEST_POSSIBLE_SCORE = HIGHEST_POSSIBLE_SCORE;
window.topScores = topScores;
