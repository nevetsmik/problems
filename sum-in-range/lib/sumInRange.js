/*
You have an array of integers nums and an array queries, where queries[i] is a
pair of indices (0-based). Find the sum of the elements in nums from the
indices at queries[i][0] to queries[i][1] (inclusive) for each query, then add
all of the sums for all the queries together. Return that number modulo 109 + 7.

Example

For nums = [3, 0, -2, 6, -3, 2] and queries = [[0, 2], [2, 5], [0, 5]], the output should be
sumInRange(nums, queries) = 10.

The array of results for queries is [1, 3, 6], so the answer is 1 + 3 + 6 = 10

https://codefights.com/interview-practice/task/4MoqQLaw22nrzXbgs
*/

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
