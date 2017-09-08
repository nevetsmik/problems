/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import {
  nQueens,
  makeGrid,
  isSafe,
  isColSafe,
  isDiagSafe,
  isLeftDiagSafe,
  isRightDiagSafe,
  getQueenConfig,
} from "./nQueens";

const grid = makeGrid(4);

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.grid = grid;
window.nQueens = nQueens;
window.makeGrid = makeGrid;
window.isSafe = isSafe;
window.isColSafe = isColSafe;
window.isDiagSafe = isDiagSafe;
window.isLeftDiagSafe = isLeftDiagSafe;
window.isRightDiagSafe = isRightDiagSafe;
window.getQueenConfig = getQueenConfig;
