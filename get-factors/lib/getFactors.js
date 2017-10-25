/*
Write a function that takes an integer n and return all possible combinations of its
factors.
Note: You may assume that n is always positive. Factors should be greater than 1
and less than n.

Example: getFactors(20) => [2, 2, 5], [2, 10], [4, 5]
*/

// Similar to makeChange
export const getFactors = (n, start = 2, currentCombo = [], result = []) => {
  if (n <= 1) {
    if (currentCombo.length > 1) {
      result.push(currentCombo.slice());
    }
  }

  for (let i = start; i <= n; i++) {
    if (n % i === 0) {
      // currentCombo.push(i);
      // getFactors(n / i, i, currentCombo.push(i), result);
      // currentCombo.pop();
      getFactors(n / i, i, currentCombo.concat(i), result);
    }
  }

  return result;
};
