/*
Return all the board configurations for n-queens.
*/

// export const nQueens = (board, row = 0) => {
//   // if numQueens === 0
//   if (row === board.length) {
//     console.log(board);
//     return true;
//   }
//
//   // Iterate through each column of a row
//   for (let col = 0; col < board.length; col++) {
//     // If the current position is safe
//     if (isSafe(board, row, col)) {
//       toggleQueen(board, row, col);
//       if (nQueens(board, row + 1, col)) {
//         return true;
//       }
//       toggleQueen(board, row, col);
//     }
//   }
//   return false;
// };

export const getQueenConfig = board => {
  let result = [];
  board.forEach(row => result.push(row.indexOf(1) + 1));
  return result;
};

export const nQueens = (board, row = 0, result = []) => {
  if (row === board.length) {
    result.push(getQueenConfig(board.map(boardRow => boardRow.slice())));
    // console.log("board: ", board);
  }

  // Iterate through each column of a row
  for (let col = 0; col < board.length; col++) {
    // If the current position is safe
    if (isSafe(board, row, col)) {
      toggleQueen(board, row, col);
      nQueens(board, row + 1, result);
      toggleQueen(board, row, col);
    }
  }
  return result;
};

export const toggleQueen = (board, row, col) => {
  if (board[row][col] === 1) {
    board[row][col] = 0;
  } else {
    board[row][col] = 1;
  }
};

export const makeGrid = size => {
  const grid = [];

  for (let row = 0; row < size; row++) {
    let newRow = [];
    for (let col = 0; col < size; col++) {
      newRow.push(0);
    }
    grid.push(newRow);
  }

  return grid;
};

export const isSafe = (board, row, col) => {
  return isColSafe(board, col) && isDiagSafe(board, row, col);
};

export const isColSafe = (board, col) => {
  for (let row = 0; row < board.length; row++) {
    if (board[row][col] === 1) {
      return false;
    }
  }
  return true;
};

export const isDiagSafe = (board, row, col) => {
  return isLeftDiagSafe(board, row, col) && isRightDiagSafe(board, row, col);
};

export const isLeftDiagSafe = (board, row, col) => {
  for (; row >= 0 && col >= 0; row--, col--) {
    if (board[row][col] === 1) {
      return false;
    }
  }
  return true;
};

export const isRightDiagSafe = (board, row, col) => {
  for (; row >= 0 && col <= board[0].length; row--, col++) {
    if (board[row][col] === 1) {
      return false;
    }
  }
  return true;
};
