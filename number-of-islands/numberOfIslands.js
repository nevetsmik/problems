/*
Count the number of contiguous 1s in a 2d array.
*/

export const numberOfIslandsBF = array => {
  let islandCounter = 0;
  // Iterate through each cell of the 2D array
  // Iterate through each row
  for (let row = 0; row < array.length; row++) {
    // Iterate through each column
    for (let col = 0; col < array[0].length; col++) {
      if (array[row][col] === "1") {
        islandCounter += 1;
      }
      // Declare a queue to do BFS
      let queue = [];
      // Set the pos to be the first element in the queue
      queue[0] = [row, col];
      // Iterate through the queue until it is empty
      while (queue.length > 0) {
        // Shift off the queue and set to current
        let [x, y] = queue.shift();
        let current = array[x][y];
        // If current is === to 1, then...
        if (current === "1") {
          // Toggle to 0
          array[x][y] = "0";
          // Find the surrounding cells and push to the back of the queue
          queue = queue.concat(surroundingCells(array, [x, y]));
        }
      }
    }
  }
  return islandCounter;
};

export const numberOfIslandsDF = array => {
  let islandCounter = 0;
  // Iterate through each cell of the 2D array
  // Iterate through each row
  for (let row = 0; row < array.length; row++) {
    // Iterate through each column
    for (let col = 0; col < array[0].length; col++) {
      // if (array[row][col] === 1) {
      //   explore(array, [row, col]);
      //   islandCounter += 1;
      // }
      islandCounter += explore(array, [row, col]);
    }
  }
  return islandCounter;
};

export const explore = (array, pos) => {
  let [x, y] = pos;
  if (array[x][y] === 1) {
    array[x][y] = 0;
    let neighbors = surroundingCells(array, pos);
    neighbors.forEach(cell => {
      explore(array, cell);
    });
    return 1;
  } else {
    return 0;
  }
};

export const surroundingCells = (array, pos) => {
  let rowSize = array.length;
  let colSize = array[0].length;

  let [x, y] = pos;

  let neighbors = [[x - 1, y + 0], [x + 0, y + 1], [x + 1, y - 0]];

  return neighbors.filter(cell => {
    let [row, col] = cell;
    if (row >= 0 && row < rowSize && col >= 0 && col < colSize) {
      return true;
    }
  });
};

export const turnIntoA2DArray = array => {
  let result = [];
  array.forEach(row => {
    result.push(row.split(""));
  });
  return result;
};
