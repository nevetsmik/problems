/*
Given an array of integers nums and an integer k, determine whether there are two
distinct indices i and j in the array where nums[i] = nums[j] and the absolute
difference between i and j is less than or equal to k.

https://codefights.com/interview-practice/task/njfXsvjRthFKmMwLC
*/

export const containsCloseNums = (nums, k) => {
  let duplicates = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    duplicates[value] = duplicates[value] || [];
    duplicates[value].push(i);
    if (duplicates[value].length > 1) {
      for (let j = 0; j < duplicates[value].length - 1; j++) {
        if (Math.abs(i - duplicates[value][j]) <= k) {
          return true;
        }
      }
    }
  }
  return false;
};
