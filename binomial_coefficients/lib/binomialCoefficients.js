/*
Calculate n Choose m for any n and m
AKA: Pascal's Triangle
n Choose m: Choose m things out of n possibilities
n! / (n - k)!(k!)
Ex: 5 choose 4
Choose 4 things out of 5 possibilities


    0  1   2   3    4   5  6
0 | 1
1 | 1, 1
2 | 1, 2,  1
3 | 1, 3,  3,  1
4 | 1, 4,  6,  4,  1
5 | 1, 5, 10, 10,  5,  1
6 | 1, 6, 15, 20,  15, 6, 1

[n][m] = [n - 1][m - 1] + [n - 1][m]
*/

export const binomialCoefficients = (n, m = null) => {
  // Create a 2d array of n + 1 rows
  let bc = [];
  for (let row = 0; row <= n; row++) {
    bc.push([]);
  }

  // Set the first position of each row to 1
  for (let firstPos = 0; firstPos <= n; firstPos++) {
    bc[firstPos][0] = 1;
  }

  // Set the last position of each row to 1
  for (let lastPos = 0; lastPos <= n; lastPos++) {
    bc[lastPos][lastPos] = 1;
  }

  // Iterate through each row starting at 1
  for (let row = 1; row <= n; row++) {
    // Iterate through each column starting at 1...row
    for (let col = 1; col < row; col++) {
      // Set [n][m] = [n - 1][m - 1] + [n - 1][m]
      bc[row][col] = bc[row - 1][col - 1] + bc[row - 1][col];
    }
  }

  // return 2d array
  return bc;
};
