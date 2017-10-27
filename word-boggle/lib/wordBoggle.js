export const makeVisited = (rows, cols) => {
  let visited = [];
  for (let row = 0; row < rows; row++) {
    visited.push(new Array(cols).fill(false));
  }
  return visited;
};

export const wordBoggle = (board, words) => {
  let visited = makeVisited(board.length, board[0].length);
  return wordBoggleHelper(board, words, "", visited);
};

export const wordBoggleHelper = (board, words, currentWord, visited) => {
  let foundWords = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      visited[i][j] = true;
      exploreForWords(board, words, currentWord + board[i][j], visited, i, j, foundWords);
      visited[i][j] = false;
    }
  }

  return Object.keys(foundWords).sort();
};

export const exploreForWords = (board, words, currentWord, visited, row, col, foundWords) => {
  if (words.includes(currentWord)) {
    foundWords[currentWord] = true;
  }

  if (isPotentialWord(words, currentWord)) {
    let possiblePositions = getPossiblePositions(board, row, col, visited);
    for (let k = 0; k < possiblePositions.length; k++) {
      let [nextRow, nextCol] = possiblePositions[k];
      visited[row][col] = true;
      exploreForWords(
        board,
        words,
        currentWord + board[nextRow][nextCol],
        visited,
        nextRow,
        nextCol,
        foundWords
      );
      visited[row][col] = false;
    }
  }
};

export const getPossiblePositions = (board, row, col, visited) => {
  let possiblePositions = [];
  let positions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
  for (let pos = 0; pos < positions.length; pos++) {
    let [i, j] = positions[pos];
    let x = row + i;
    let y = col + j;
    if (x >= 0 && x < board.length && y >= 0 && y < board[0].length && visited[x][y] === false) {
      possiblePositions.push([x, y]);
    }
  }
  return possiblePositions;
};

export const isPotentialWord = (words, currentWord) => {
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.substring(0, currentWord.length) === currentWord) {
      return true;
    }
  }

  return false;
};
