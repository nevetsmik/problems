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

// (change, [25, 10, 5, 1])
// 76, 25, 25, 25, 1

// export const makeChange = (change, coins, result = []) => {
//   if (change === 0) { return result; }
//
//   let remainder = Math.floor(change / coins[0]);
//   if (remainder > 0) {
//     change = change - coins[0];
//     result.push(coins[0]);
//     return makeChange(change, coins, result);
//   } else {
//     return makeChange(change, coins.slice(1), result);
//   }
// };

export const makeChange = (amount, coins) => {
  if (amount === 0) { return []; }

  let result;

  for (let i = 0; i < coins.length; i++) {
    if (amount >= coins[i]) {
      let changeForRest = makeChange(amount - coins[i], coins.slice(i));
      let change = [coins[i]].concat(changeForRest);
      if (result === undefined || change.length < result.length) {
        result = change;
      }
    }
  }

  return result;
};
