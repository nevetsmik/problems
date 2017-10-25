/*
Encrpt a string by shifting each letter over equal to the number of times the
letter previously appeared in the string. 
*/

export const shift = (char, numPlaces) => {
  let aCharCode = "a".charCodeAt(0);
  let zCharCode = "z".charCodeAt(0);
  let newLtrCharCode =
    (char.charCodeAt(0) - aCharCode + numPlaces) % 26 + aCharCode;
  return String.fromCharCode(newLtrCharCode);
};

export const stringTransformation = str => {
  let result = [];
  // Counting object to count freq of letters
  let ltrCount = {};
  // Iterate through the array of letters
  str.split("").forEach(ltr => {
    // Set count of characters
    // Get count of characters
    ltrCount[ltr] = ltrCount[ltr] || 0;
    // Get shifted letter
    let ltrAfterShift = shift(ltr, ltrCount[ltr]);
    // Add shifted letter to result
    result.push(ltrAfterShift);
    // Increment count of character
    ltrCount[ltr] += 1;
  });
  return result.join("");
};
