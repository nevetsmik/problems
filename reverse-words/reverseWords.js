/*
Reverse words in a string.
*/

export const reverseWords = string => {
  // Save the string into an array of words
  let words = string.split(" ");
  // Save the length of the array
  let wordsLength = words.length;

  // Find the midpoint of the array
  let midpoint = Math.floor(wordsLength / 2);
  // Even: "let the dog eat" --> 'dog' is the midpoint
  // Odd: "i love you" --> 'you' is the midpoint

  // Iterate through the array [0...midpoint]
  for (let i = 0; i < midpoint; i++) {
    // Swap values in the array at the current index and length - index - 1
    [words[i], words[wordsLength - i - 1]] = [
      words[wordsLength - i - 1],
      words[i],
    ];
  }

  // Return the array joined by ' '
  return words.join(" ");
};
