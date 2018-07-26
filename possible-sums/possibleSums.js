/*
You have a collection of coins, and you know the values of the coins and the
quantity of each type of coin in it. You want to know how many distinct sums
you can make from non-empty groupings of these coins.

Example

For coins = [10, 50, 100] and quantity = [1, 2, 1], the output should be
possibleSums(coins, quantity) = 9.

Here are all the possible sums:
50 = 50;
10 + 50 = 60;
50 + 100 = 150;
10 + 50 + 100 = 160;
50 + 50 = 100;
10 + 50 + 50 = 110;
50 + 50 + 100 = 200;
10 + 50 + 50 + 100 = 210;
10 = 10;
100 = 100;
10 + 100 = 110.

As you can see, there are 9 distinct sums that can be created from non-empty
groupings of your coins.

https://codefights.com/interview-practice/task/rMe9ypPJkXgk3MHhZ
*/

export const possibleSums = (coins, quantity) => {
  let sums = {};
  sums[0] = true;
  for (let i = 0; i < coins.length; i++) {
    Object.keys(sums).forEach(sum => {
      for (let q = quantity[i]; q > 0; q--) {
        sums[q * coins[i] + parseInt(sum)] = true;
      }
    });
  }
  return Object.keys(sums).length - 1;

  // let sums = new Set([0]);
  // for (let i = 0; i < coins.length; i++) {
  //   for (let sum of [...sums]) {
  //     for (let q = quantity[i]; q > 0; q--) {
  //       sums.add(q * coins[i] + sum);
  //     }
  //   }
  // }
  // return sums.size - 1;
};
