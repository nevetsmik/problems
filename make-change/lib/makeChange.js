/*
Find the combination of coins with the fewest number of coins to equal a given
value.
*/

// (change, [25, 10, 5, 1])
// 76, 25, 25, 25, 1
export const makeChange = (change, coins, result = []) => {
  if (change === 0) {
    return result;
  }

  let remainder = Math.floor(change / coins[0]);
  if (remainder > 0) {
    change = change - coins[0];
    result.push(coins[0]);
    return makeChange(change, coins, result);
  } else {
    return makeChange(change, coins.slice(1), result);
  }
};

export const makeBestChange = (amount, coins) => {
  if (amount === 0) {
    return [];
  }

  let result;

  for (let i = 0; i < coins.length; i++) {
    if (amount >= coins[i]) {
      let changeForRest = makeBestChange(amount - coins[i], coins.slice(i));
      let change = [coins[i]].concat(changeForRest);
      if (result === undefined || change.length < result.length) {
        result = change;
      }
    }
  }
  return result;
};

/*
Count the number of ways to make change for an amount with a given set of coins.
*/
export const coinSums = (amount, coins, index = 0, memo = {}) => {
  let key = `${amount}-${index}`;
  if (memo.hasOwnProperty(key)) {
    console.log(`Grabbing ${memo[key]}`);
    return memo[key];
  }

  if (amount === 0) {
    return 1;
  }

  let count = 0;
  for (let i = index; i < coins.length; i++) {
    if (amount >= coins[i]) {
      count += coinSums(amount - coins[i], coins, i, memo);
    }
  }

  memo[key] = count;

  return count;
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

/*
Find all the coin combinations that equal the amount
*/

export const coins = (
  amount,
  denoms,
  index = 0,
  currentCombo = [],
  result = []
) => {
  if (amount === 0) {
    result.push(currentCombo.slice());
  }

  for (let i = index; i < denoms.length; i++) {
    if (amount >= denoms[i]) {
      currentCombo.push(denoms[i]);
      coins(amount - denoms[i], denoms, i, currentCombo, result);
      currentCombo.pop();
    }
  }

  return result;
};
