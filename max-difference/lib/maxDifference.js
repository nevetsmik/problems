/*
Find the maximum difference between any two numbers in an array.
*/

export const maxDifference = array => {
  let maxDiff = -1;
  let maxValue = [array.length - 1];

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] < maxValue) {
      if (maxValue - array[i] > maxDiff) {
        maxDiff = maxValue - array[i];
      }
    }
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxDiff;
};
