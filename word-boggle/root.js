import {
  makeVisited,
  wordBoggle,
  wordBoggleHelper,
  getPossiblePositions,
  isPotentialWord,
} from "./wordBoggle";

window.makeVisited = makeVisited;
window.wordBoggle = wordBoggle;
window.wordBoggleHelper = wordBoggleHelper;
window.getPossiblePositions = getPossiblePositions;
window.isPotentialWord = isPotentialWord;
// window.board = [["R", "L", "D"], ["U", "O", "E"], ["C", "S", "O"]];
// window.words = ["CODE", "SOLO", "RULES", "COOL"];
// window.board = [["G", "T"], ["O", "A"]];
// window.words = ["TOGGLE", "GOAT", "TOO", "GO"];
// window.board = [
//   ["A", "Q", "A", "H"],
//   ["A", "X", "V", "W"],
//   ["A", "L", "T", "I"],
//   ["T", "T", "J", "I"],
// ];
// window.words = ["AXOLOTL", "TAXA", "ABA", "VITA", "VITTA", "GO", "AXAL", "LATTE", "TALA"];
// window.board = [["A", "B"], ["C", "D"]];
// window.words = [];
window.board = [["S", "A"], ["M", "O"], ["W", "E"], ["H", "R"]];
window.words = ["SOME", "DRONE", "WHERE", "SOMEWHERE", "WORD", "WE", "MORE"];
