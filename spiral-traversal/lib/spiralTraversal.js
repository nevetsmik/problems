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

export const spiralTraversal = array => {
  let row = 0,
    col = 0;
  let result = [];

  for (col = 0; col <= array[0].length - 1; col++) {
    result.push(array[row][col]);
  }
  col--;
  row++;

  for (row = row; row <= array.length - 1; row++) {
    result.push(array[row][col]);
  }
  col--;
  row--;

  for (col = col; col >= 0; col--) {
    result.push(array[row][col]);
  }
  row--;
  col++;

  for (col = col; col <= row; col++) {
    result.push(array[row][col]);
  }

  return result;
};
