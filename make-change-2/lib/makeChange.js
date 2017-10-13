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

/*
4, [3, 2, 1]
  4, [2, 1]
    4, [1]
  2, [2, 1]
1, [3, 2, 1]
*/

// Counts the number of ways to make change for an amount with coins
export const coinSums = (amount, coins, index = 0, memo = {}) => {
  let key = `${amount}-${index}`;
  if (memo.hasOwnProperty(key)) {
    console.log(`Grabbing ${key} and returning ${memo[key]}`);
    return memo[key];
  }

  if (amount === 0) {
    return 1;
  }

  if (index > coins.length - 1) {
    return 0;
  }

  if (amount < 0) {
    return 0;
  }

  // console.log(`Checking ways to make ${amount} with ${coins.slice(index)}`);

  let numPossibilities = 0;

  while (amount >= coins[index]) {
    numPossibilities += coinSums(amount, coins, index + 1, memo);
    amount -= coins[index];
  }

  if (!memo.hasOwnProperty(key)) {
    // console.log(
    //   `Storing ${numPossibilities} ways to make ${amount +
    //     coins[index]} with ${coins.slice(index)}`
    // );
    memo[key] = numPossibilities;
  }

  return numPossibilities;
};

/*
(7, [3, 2, 1], [], [])
  (4, [3, 2, 1], [3], [])
    (1, [3, 2, 1], [3, 3], [])
    // 1, [3, 2, 1]; 1, [3, 2, 1]; 1, [3, 2, 1], i.e., will loop three times until until the amount >= denoms[i]
      (0, [1], [3, 3, 1], [])
      (0, [1], [3, 3], [[3, 3, 1]])
    (1, [3, 2, 1], [3], [[3, 3, 1]])
  (4, [3, 2, 1], [3], [[3, 3, 1]])
    (2, [3, 2, 1], [3, 2], [[3, 3, 1]])
      (0, [2, 1], [3, 2, 2], [[3, 3, 1]])
      (0, [2, 1], [3, 2], [[3, 3, 1], [3, 2, 2]])
    (2, [3, 2, 1], [3, 2], [[3, 3, 1], [3, 2, 2]])
      (1, [3, 2, 1], [3, 2, 1], [[3, 3, 1], [3, 2, 2]])
        (0, [3, 2, 1], [3, 2, 1, 1], [[3, 3, 1], [3, 2, 2]])
        (0, [3, 2, 1], [3, 2, 1], [[3, 3, 1], [3, 2, 2], [3, 2, 1, 1]])
      (1, [3, 2, 1], [3, 2], [[3, 3, 1], [3, 2, 2], [3, 2, 1, 1]])
*/

// Find all the coin combinations that equal the amount
export const coins = (amount, denoms, currentCombo = [], result = []) => {
  if (amount === 0) {
    result.push(currentCombo.slice());
  }

  for (let i = 0; i < denoms.length; i++) {
    if (amount >= denoms[i]) {
      currentCombo.push(denoms[i]);
      coins(amount - denoms[i], denoms.slice(i), currentCombo, result);
      currentCombo.pop();
    }
  }

  return result;
};
