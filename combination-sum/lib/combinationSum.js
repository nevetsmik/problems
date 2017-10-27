/*
Given an array of integers nums and an integer sum, find all of the unique combinations in nums that
add up to sum.

The same number from a can be used an unlimited number of times in a combination.

Elements in a combination (a1 a2 … ak) must be sorted in non-descending order, while the
combinations themselves must be sorted in ascending order.

If there are no possible combinations that add up to sum, the output should be the string "Empty".

Example

For a = [2, 3, 5, 9] and sum = 9, the output should be
combinationSum(a, sum) = "(2 2 2 3)(2 2 5)(3 3 3)(9)".

https://codefights.com/interview-practice/task/JAhrxhDQDLDDA3NXe

Basically a variation of coins / coinSum / makeChange.
*/

export const combinationSum = (nums, sum) => {
  let combinations = combinationSumHelper(nums, sum, 0, [], {});
  return formatAnswer(combinations);
};

export const combinationSumHelper = (
  nums,
  sum,
  index = 0,
  currentCombo = [],
  uniqueCombos = {}
) => {
  if (nums.length === 0) {
    return "Empty";
  }

  let combinations = {};

  if (sum === 0) {
    if (!combinations.hasOwnProperty(currentCombo.slice().sort())) {
      combinations[currentCombo.slice().sort()] = true;
      return combinations;
    }
  }

  for (let i = index; i < nums.length; i++) {
    if (sum - nums[i] >= 0) {
      combinations = Object.assign(
        combinations,
        combinationSumHelper(nums, sum - nums[i], i, currentCombo.concat(nums[i]))
      );
    }
  }

  return combinations;
};

export const formatAnswer = combinations => {
  let keys = Object.keys(combinations).sort();
  if (Object.keys(keys).length === 0) {
    return "Empty";
  }

  let result = "";
  keys.forEach(combination => {
    result += `(${combination.split(",").join(" ")})`;
  });
  return result;
};
