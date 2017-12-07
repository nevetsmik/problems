export const getLargestValueIsland = array => {
  let visited = makeVisited(array.length, array[0].length);

  let maxSum;

  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[0].length; col++) {
      let currentSum = explore(array, row, col, visited);
      if (maxSum === undefined || currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
};

const explore = (array, row, col, visited) => {
  let sum = 0;

  if (array[row][col] !== 0 && visited[row][col] !== 1) {
    sum += array[row][col];
    visited[row][col] = 1;
    let neighbors = getNeighbors(array, row, col);
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      sum += explore(array, neighbor[0], neighbor[1], visited);
    }
  } else {
    visited[row][col] = 1;
  }

  return sum;
};

const getNeighbors = (array, row, col) => {
  let x = [0, -1, 0, 1];
  let y = [-1, 0, 1, 0];

  let neighbors = [];

  for (let i = 0; i < x.length; i++) {
    let newX = row + x[i];
    let newY = col + y[i];
    if (newX >= 0 && newX < array.length && newY >= 0 && newY < array[0].length) {
      neighbors.push([newX, newY]);
    }
  }
  return neighbors;
};

const makeVisited = (row, col) => {
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
