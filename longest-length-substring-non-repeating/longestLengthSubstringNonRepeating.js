/*
Find the length of the longest non-repeating substring in a string
*/

export const longestLengthSubstringNonRepeating = string => {
  let max = 0;
  let count = 0;
  let left = 0;
  let right = 0;
  let unique = {};

  while (right < string.length) {
    if (!unique.hasOwnProperty(string[right])) {
      unique[string[right]] = right;
      count++;
      max = Math.max(max, count);
      right++;
    } else {
      delete unique[string[left]];
      count--;
      left++;
    }
  }

  return max;
};
