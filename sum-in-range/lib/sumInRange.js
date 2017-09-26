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
  nums = [3, 0, -2, 6, -3, 2]
         [3, 3,  1, 7,  4, 6]
         [3, 3,  1, 7,  4, 6]
  if (l === 0) {return nums[r]}
  if (l !== 0) {return nums[r] - nums[l]}

  (n % (mod + mod)) % (mod)
  ((n % mod) + n)  % n
*/

export const sumInRange = (nums, queries) => {
  let prefixSums = calcPrefixSums(nums);

  let sums = [];

  let sum = 0;
  for (let i = 0; i < queries.length; i++) {
    let [first, last] = queries[i];

    if (first === 0) {
      sum += prefixSums[last];
    } else if (first !== 0) {
      sum += prefixSums[last] - prefixSums[first - 1];
    }
  }

  let mod = Math.pow(10, 9) + 7;

  return (sum % mod + mod) % mod;
};

export const calcPrefixSums = nums => {
  let prefixSums = [];
  prefixSums[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let newNum = prefixSums[i - 1] + nums[i];
    prefixSums.push(newNum);
  }

  return prefixSums;
};
