/*
Lucas Numbers

The Lucas series is a sequence of integers that extends infinitely in both
positive and negative directions.

The first two numbers in the Lucas series are 2 and 1. A Lucas number can
be calculated as the sum of the previous two numbers in the sequence.
A Lucas number can also be calculated as the difference between the next
two numbers in the sequence.

All numbers in the Lucas series are indexed. The number 2 is
located at index 0. The number 1 is located at index 1, and the number -1 is
located at index -1. You might find the chart below helpful:

Lucas series: ...-11,  7,  -4,  3,  -1,  2,  1,  3,  4,  7,  11...
Indices:      ... -5, -4,  -3, -2,  -1,  0,  1,  2,  3,  4,  5...

Write a method that takes an input N and returns the number at the Nth index
position of the Lucas series.
*/

export const lucasNumbers = n => {
  if (n === 0) {
    return 2;
  } else if (n === -1) {
    return -1;
  } else if (n === 1) {
    return 1;
  }

  if (n < 0) {
    return -(lucasNumbers(n + 1) - lucasNumbers(n + 2));
  } else if (n > 0) {
    return lucasNumbers(n - 1) + lucasNumbers(n - 2);
  }
};

export const lucasNumbersMemoized = (n, memo = {}) => {
  if (n === 0) {
    return 2;
  } else if (n === -1) {
    return -1;
  } else if (n === 1) {
    return 1;
  }

  if (memo[n]) {
    return memo[n];
  } else if (n < 0) {
    memo[n] = -(lucasNumbersMemoized(n + 1, memo) - lucasNumbersMemoized(n + 2, memo));
  } else if (n > 0) {
    memo[n] = lucasNumbersMemoized(n - 1, memo) + lucasNumbersMemoized(n - 2, memo);
  }

  return memo[n];
};
