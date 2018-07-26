/*
You want to build a house on an empty land which reaches all buildings in the shortest amount of
distance. You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2,
where:

Each 0 marks an empty land which you can pass by freely.
Each 1 marks a building which you cannot pass through.
Each 2 marks an obstacle which you cannot pass through.
For example, given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2):

[
  [1, 0, 2, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
]

The point (1,2) is an ideal empty land to build a house, as the total travel distance of 3+3+1=7
is minimal. So return 7.

Note:
There will be at least one building. If it is not possible to build such house according to the
above rules, return -1.
*/

export const shortestDistanceFromAllBuildings = grid => {
  let shortestDistance = Infinity;
  let idealX;
  let idealY;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let distance = explore(grid, row, col);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        idealX = row;
        idealY = col;
      }
    }
  }
  if (shortestDistance === Infinity) {
    return -1;
  } else {
    return [[idealX, idealY], shortestDistance];
  }
};

export const explore = (grid, row, col) => {
  if (grid[row][col] === 2) {
    return Infinity;
  }

  let distance = 0;
  let visited = makeVisitedGrid(grid.length, grid[0].length);
  let queue = [];
  queue[0] = [[row, col], 0];

  while (queue.length > 0) {
    let current = queue.shift();
    let [x, y] = current[0];
    let level = current[1];
    if (visited[x][y] === false) {
      visited[x][y] = true;
      if (grid[x][y] === 1) {
        distance += level;
      }
      let neighbors = getValidNeighbors(grid, x, y, visited, level);
      queue = queue.concat(neighbors);
    }
  }
  return distance;
};

export const makeVisitedGrid = (numRows, numCols) => {
  let visited = [];
  for (let row = 0; row < numRows; row++) {
    visited.push([]);
    for (let col = 0; col < numCols; col++) {
      visited[row][col] = false;
    }
  }
  return visited;
};

export const getValidNeighbors = (grid, x, y, visited, level) => {
  let neighbors = [];
  let possiblePos = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  possiblePos.forEach(pos => {
    let newX = x + pos[0];
    let newY = y + pos[1];
    if (
      inBounds(grid.length, grid[0].length, newX, newY) &&
      visited[newX][newY] !== true &&
      grid[newX][newY] !== 2
    ) {
      neighbors.push([[newX, newY], level + 1]);
    }
  });

  return neighbors;
};

export const inBounds = (rows, cols, x, y) => {
  return x >= 0 && x < rows && y >= 0 && y < cols;
};
