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

window.grid = grid;
window.nQueens = nQueens;
window.makeGrid = makeGrid;
window.isSafe = isSafe;
window.isColSafe = isColSafe;
window.isDiagSafe = isDiagSafe;
window.isLeftDiagSafe = isLeftDiagSafe;
window.isRightDiagSafe = isRightDiagSafe;
window.getQueenConfig = getQueenConfig;
