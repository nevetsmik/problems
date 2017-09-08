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

export const climbingStairs = (n, k) => {
  let result = [];
  climbingStairsR(n, k, [], result);
  return result;
};

export const climbingStairsR = (n, k, str, result) => {
  if (n === 0) {
    result.push(str);
  } else {
    for (let i = 1; i <= k; i++) {
      if (n - i >= 0) {
        climbingStairsR(n - i, k, str.concat(i), result);
      }
    }
  }
};
