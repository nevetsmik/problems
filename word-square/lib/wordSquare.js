/*********
Export an object that contains multiple functions

const scratch = {
  fn1: function(){},
  fn2: function(){}
};

export { scratch };
**********/

/*********
Export multiple functions all at once

const fn1 = function(){};
const fn2 = function(){};

export { fn1, fn2 };
**********/

/*********
Export functions as you write them

export const fn1 = function(){};
export const fn2 = function(){};
**********/

/*
Check if matrix is word square (check [i][j] === [j][i])
    0  1  2  3  4
0 | 1, 2, 3, 4, 5
1 | 2, 1, 2, 3, 4
2 | 3, 2, 1, 2, 3
3 | 4, 3, 2, 1, 2
4 | 5, 4, 3, 2, 1
*/

export const wordSquare = matrix => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix[row].length; col++) {
      if (matrix[row][col] !== matrix[col][row]) {
        return false;
      }
    }
  }
  return true;
};

// How do you make a function that only calls input function f every 50 milliseconds?
export const timeout = eff => {
  setInterval(eff, 5000);
};

// How do you make a function that takes f and returns a function that calls f on a timeout?

export const curry = eff => {
  return (function() {
    setTimeout(eff, 5000);
  })();
};
