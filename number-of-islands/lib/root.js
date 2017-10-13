/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn0, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import {
  numberOfIslandsBF,
  numberOfIslandsDF,
  surroundingCells,
  turnIntoA2DArray,
} from "./numberOfIslands";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.grid = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1],
];

window.turnIntoA2DArray = turnIntoA2DArray;
window.arrStrings = ["11110", "11010", "11000", "00000"];
window.surroundingCells = surroundingCells;
window.numberOfIslandsBF = numberOfIslandsBF;
window.numberOfIslandsDF = numberOfIslandsDF;
