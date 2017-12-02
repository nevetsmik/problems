/*
Given an array of integers, find the length of the longest sub-sequence such that elements in the
subsequence are consecutive integers, the consecutive numbers can be in any order.
*/

/*
1. Hash all the numbers
2. Iterate through the numbers
3. For an element that does not have a preceding number in the hash, count the number of
consecutive numbers found in the hash
4. Update the max number of consecutive numbers, if necessary
5. Return the max number of consecutive numbers
*/

export const longestConsecutiveSubsequence = nums => {
  let maxLength = 0;
  let maxConsecutiveNumbers;
  let hash = {};

  nums.forEach(num => {
    hash[num] = true;
  });

  nums.forEach(num => {
    let count = 0;
    let consecutiveNumbers = [];
    if (!hash.hasOwnProperty(num - 1)) {
      let startingNum = num;
      while (hash.hasOwnProperty(startingNum)) {
        consecutiveNumbers.push(startingNum);
        startingNum++;
        count++;
      }
    }
    if (count > maxLength) {
      maxLength = count;
      maxConsecutiveNumbers = consecutiveNumbers;
    }
  });
  return [maxLength, maxConsecutiveNumbers];
};
