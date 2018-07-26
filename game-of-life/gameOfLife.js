/*
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular
automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell
interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules
(taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state.

Follow up:
- Could you solve it in-place? Remember that the board needs to be updated at the same time: You
cannot update some cells first and then use their updated values to update other cells.
- In this question, we represent the board using a 2D array. In principle, the board is infinite,
which would cause problems when the active area encroaches the border of the array. How would you
address these problems?
*/

const gameOfLife = (array) => {
  let nextState = makeNextState(array.length, array[0].length);

  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[0].length; col++) {
      let neighbors = getNeighbors(array, row, col);
      let numAliveNeighbors = countLiveNeighbors(array, neighbors);
      if (array[row][col] === 1) {
        if (numAliveNeighbors < 2) {
          nextState[row][col] = 0;
        } else if (numAliveNeighbors === 2 || numAliveNeighbors === 3) {
          nextState[row][col] = 1;
        } else if (numAliveNeighbors > 3) {
          nextState[row][col] = 0;
        }
      } else {
        if (numAliveNeighbors === 3) {
          nextState[row][col] = 1;
        }
      }
    }
  }
  return nextState;
};

const makeNextState = (row, col) => {
  let result = [];
  for (let i = 0; i < row; i++) {
    let tempRow = [];
    for (let j = 0; j < col; j++) {
      tempRow.push(0);
    }
    result.push(tempRow);
  }
  return result;
};

const getNeighbors = (array, row, col) => {
  let neighbors = [];
  let x = [-1, -1, -1, 0, 1, 1, 1, 0];
  let y = [-1, 0, 1, 1, 1, 0, -1, -1];

  for (let i = 0; i < x.length; i++) {
    let newX = row + x[i];
    let newY = col + y[i];

    if (newX >=0 && newX < array.length && newY >= 0 && newY < array[0].length) {
      neighbors.push([newX, newY]);
    }
  }

  return neighbors;
};

const countLiveNeighbors = (array, neighbors) => (
  neighbors.reduce((accum, neighbor) => {
    if (array[neighbor[0]][neighbor[1]] === 1) {
      accum += 1;
    }
    return accum;
  }, 0)
);
