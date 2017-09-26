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
[1, 3, 6, 13, 18]

subrange(array, l, r) {
if (l === 0) {
return array[r];
}
}
if ()
*/

export const findLongestSubArrayBySum = (s, array) => {
  let left = 0;
  let right = 0;

  let pairs = {};

  let prefixSums = calcPrefixSums(array);

  while (left < prefixSums.length) {
    while (calcSubrange(prefixSums, left, right) < s) {
      if (right < prefixSums.length) {
        right++;
      }
    }

    if (calcSubrange(prefixSums, left, right) === s) {
      if (!pairs.hasOwnProperty(right - left + 1)) {
        pairs[right - left + 1] = [left + 1, right + 1];
      }
      right++;
    } else {
      if (right === left) {
        right++;
      } else {
        left++;
      }
    }
  }

  if (Object.keys(pairs).length === 0) {
    return [-1];
  }
  return pairs[Math.max(...Object.keys(pairs))];
};

export const calcSubrange = (array, l, r) => {
  if (l === 0) {
    return array[r];
  } else if (l !== 0) {
    return array[r] - array[l - 1];
  }
};

export const calcPrefixSums = array => {
  let result = [];
  result[0] = array[0];

  for (let i = 1; i < array.length; i++) {
    result[i] = result[i - 1] + array[i];
  }

  return result;
};
