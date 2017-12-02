/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all
unique triplets in the array which gives the sum of zero.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, 2, -1]
]
*/

/*
Trivial answer is n^3. 3 nested loops that iterates through each possible combination. In the inner
most loop, sum an answer, check if the sum is equal to 0, create an array of the three values and
add to a resultant array.

Optimal answer is n^2 + n log n.
1. Sort the input array
2. Create 2 arrays:
  All negative numbers
  All numbers >= 0
3. Use 2 nested loops to iterate through the positive and negative numbers.
4. Sum the 2 values from the negative and positive set
5. If the sum > 0, then search for the negative opposite in the negative numbers
6. If the sum <= 0, then search for the positive opposite in the positive numbers
7. If a number is found, then use the 3 numbers as a key in a hash object
8. Iterate through the keys in the hash, split the numbers by ",", and then convert the each string
number to a number and add to an array
9. Add the array to a resultant array
*/

export const threeSum = nums => {
  let sets = {};
  let result = [];

  let numsCopy = nums.sort((a, b) => a - b);
  let negativeNums = numsCopy.filter(num => num < 0);
  let positiveNums = numsCopy.filter(num => num >= 0);

  if (negativeNums.length === 0 || positiveNums.length === 0) {
    return [];
  }

  for (let i = 0; i < negativeNums.length; i++) {
    for (let j = 0; j < positiveNums.length; j++) {
      let sum = negativeNums[i] + positiveNums[j];
      let answer;
      if (sum > 0) {
        answer = bSearch(negativeNums, sum * -1, i);
      } else {
        answer = bSearch(positiveNums, sum * -1, j);
      }
      if (answer) {
        let key = `${negativeNums[i]}, ${positiveNums[j]}, ${answer}`;
        sets[key] = true;
      }
    }
  }

  Object.keys(sets).forEach(set => {
    let array = set.split(",").map(Number);
    result.push(array);
  });

  return result;
};

export const bSearch = (nums, target, index, left, right) => {
  left = left || 0;
  right = right || nums.length - 1;

  while (left <= right) {
    let midpoint = Math.floor((right - left + 1) / 2) + left;

    if (nums[midpoint] === target && midpoint !== index) {
      return nums[midpoint];
    }

    if (target < nums[midpoint]) {
      right = midpoint - 1;
    } else {
      left = midpoint + 1;
    }
  }
  return null;
};
