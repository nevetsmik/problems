/*
You have an unsorted array arr of non-negative integers and a number s. Find a
longest contiguous subarray in arr that has a sum equal to s. Return two
integers that represent its inclusive bounds. If there are several possible
answers, return the one with the smallest left bound. If there are no answers,
return [-1].

Your answer should be 1-based, meaning that the first position of the array is 1
instead of 0.

https://codefights.com/interview-practice/task/izLStwkDr5sMS9CEm

Prefix Sum: https://www.hackerrank.com/topics/prefix-sum
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
