import {
  numberOfIslandsBF,
  numberOfIslandsDF,
  surroundingCells,
  turnIntoA2DArray,
} from "./numberOfIslands";

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
