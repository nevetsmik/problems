/*
Compress a string such that a number follows every letter in a string to
represent the number of consecutive times the string immediately follows.

Example: aaaddddefgg: a3d4e1f1g2
*/

export const stringCompressor = string => {
  let count = 1;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      result += string[i];
      result += count;
      count = 1;
    } else {
      count += 1;
    }
  }
  return result;
};
