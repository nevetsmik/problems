/*
Find the length of the longest increasing subsequence in a string. For example, the length of the
the longest increasing subsequence in "sugaldemo" is 5. The longest subsequence is "ademo".
*/

/*
Subproblem: For each letter in the string, is there a previous letter that is less than the current
letter that would increase the length of the current longest subsequence?

Implementation: For each letter, iterate through the previous letters (chars[j]) and set the
current length of the longest subsequence (sequenceNums[i]) to the previous max
length (sequenceNums[j]) + 1 if the previous letter (chars[j]) is less than the current
letter (chars[i]).

               0 1 2 3 4 5 6 7 8
FINAL          -----------------
chars          s u g a l d e m o
sequenceNums   1 2 1 1 2 2 3 4 5

Before first   0 1 2 3 4 5 6 7 8
iteration      -----------------
chars          s u g a l d e m o
sequenceNums   1 1 1 1 1 1 1 1 1

After sixth    0 1 2 3 4 5 6 7 8
iteration      -----------------
chars          s u g a l d e m o
sequenceNums   1 2 1 1 2 2 1 1 1
*/

export const longestIncreasingSubsequence = string => {
  let chars = string.split("");

  let sequenceNums = new Array(chars.length).fill(1);

  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < i; j++) {
      if (chars[i] > chars[j] && sequenceNums[j] + 1 > sequenceNums[i]) {
        sequenceNums[i] = sequenceNums[j] + 1;
      }
    }
  }

  // return Math.max(...sequenceNums); // get the length
  console.log(sequenceNums);
  return getSequence(chars, sequenceNums); // get the actual sequence
};

export const getSequence = (chars, sequenceNums) => {
  let sequence = "";
  let maxSequenceLength = Math.max(...sequenceNums);

  for (let i = sequenceNums.length - 1; i >= 0; i--) {
    if (sequenceNums[i] === maxSequenceLength) {
      sequence = chars[i].concat(sequence);
      maxSequenceLength--;
    }
  }
  return sequence;
};
