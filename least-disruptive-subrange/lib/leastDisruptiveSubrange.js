/*
Given two lists of numbers, find where in the first list we could
substitute the second list, integer for integer, that would create the least
amount of change in each integer from the original list.

https://jg.gg/the-unqualified-engineer-episode-01/
*/

export const leastDisruptiveSubrange = (original, replacement) => {
  let sumDifference = 0;
  let minSumDifference = null;
  let minSumDifferenceIndex = null;

  // Iterate through the original array stopping at replacement.length
  for (let i = 0; i <= original.length - replacement.length; i++) {
    // Iterate from the current index for the length of the replacement array
    for (let j = 0; j < replacement.length; j++) {
      // Sum the differences between the replacement value and original value
      sumDifference += Math.abs(replacement[j] - original[i + j]);
    }
    // If the difference summation is less than the existing difference summation
    if (minSumDifference === null || sumDifference < minSumDifference) {
      // then swap
      minSumDifference = sumDifference;
      // update position of beginning index
      minSumDifferenceIndex = i;
    }
    sumDifference = 0;
  }
  // return beginning index
  return minSumDifferenceIndex;
};
