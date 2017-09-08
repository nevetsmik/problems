class Board {
  constructor() {
    this.grid = Board.makeBoard();
  }

  markBoard(mark, pos) {
    if (!this.isEmpty(pos)) {
      throw "Position is already taken!";
    }

    let [x, y] = pos;

    this.grid[x][y] = mark;
  }

  isEmpty(pos) {
    if (!this.isValidPos(pos)) {
      throw "Not a valid position!";
    }

    let [x, y] = pos;

    return this.grid[x][y] === null;
  }

  isValidPos(pos) {
    let [x, y] = pos;
    return x >= 0 && x < 3 && y >= 0 && y < 3;
  }

  isOver() {
    let over = true;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.grid[row][col] !== null) {
          return false;
        }
      }
    }
    return over;
  }

  isRowWinner(row) {
    let winner = true;
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] !== row[i + 1]) {
        return false;
      }
    }
    return winner;
  }

  isDiagonalWinner() {
    return (this.grid[0][0] === this.grid[1][1] && this.grid[2][2] === this.grid[0][0]) ||
    (this.grid[2][0] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0]);
  }

  isWinner() {
    let winner = false;
    // check for rows
    for (let i = 0; i < 3; i++) {
      if (this.isRowWinner(this.grid[i])) {
        return true;
      }
    }

    // check for cols
    for (let col = 0; col < 3; col++) {
      let colRow = [];
      for (let row = 0; row < 3; row++) {
        colRow.push(this.grid[row][col]);
        if (this.isRowWinner(colRow)) {
          return true;
        }
      }
    }

    // check for diagonals
    if (this.isDiagonalWinner()) {
      return true;
    }

    return winner;
  }

  display() {
    for (let row = 0; row < 3; row++) {
      let rowDisplay = "";
      for (let col = 0; col < 3; col++) {
        if (this.grid[row][col]) {
          rowDisplay += this.grid[row][col];
        } else {
          rowDisplay += "_";
        }
        rowDisplay += " ";
      }
      console.log(rowDisplay);
      console.log('\n');
    }
  }

  static makeBoard() {
    let grid = [];
    for (let row = 0; row < 3; row++) {
      grid.push([]);
      for (let col = 0; col < 3; col++) {
        grid[row].push(null);
      }
    }
    return grid;
  }
}

Board.marks = ['X', 'O'];

module.exports = Board;
