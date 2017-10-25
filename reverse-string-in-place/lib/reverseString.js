/*
Reverse a string;
*/

export const reverseString = string => {
  // Convert string to array of charaters
  let chars = string.split("");
  // Length of the chars array
  let charsLength = chars.length;

  // Midpoint of the array, even or odd
  let midpoint = Math.floor(chars.length / 2);

  // Iterate through the half the array
  for (let i = 0; i < midpoint; i++) {
    // Swap the values in the array
    [chars[i], chars[charsLength - i - 1]] = [
      chars[charsLength - i - 1],
      chars[i],
    ];
  }

  // Join char array before returning the reversed string
  return chars.join("");
};
