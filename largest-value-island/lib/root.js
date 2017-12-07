import { getLargestValueIsland } from "./largestValueIsland";

window.getLargestValueIsland = getLargestValueIsland;

window.array1 = [
  [2, 1, 1],
  [0, 0, 0],
  [0, 1, 1]
]; // 4

window.array2 = [
  [2, 1, 1, 0],
  [0, 0, 0, 2],
  [0, 1, 1, 4]
]; // 8

window.array3 = [
  [2, 1, 1, 0],
  [0, 0, 0, 0],
  [0, -100, 1, 4]
]; // 4
