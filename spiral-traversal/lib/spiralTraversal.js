/*
Print a 2d array in spiral fashion
[
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
]

1, 2, 3, 6, 9, 8, 7, 4, 5
*/

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
