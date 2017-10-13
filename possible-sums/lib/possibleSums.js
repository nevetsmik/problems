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
