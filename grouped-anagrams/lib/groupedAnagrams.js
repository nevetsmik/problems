/*
Given an array of words, group the words that are anagrams of each other.
*/

export const groupedAnagrams = words => {
  let result = [];
  let anagramGroups = {};
  // Iterate through words
  words.forEach(word => {
    // Sort the word
    let sortedWord = sortWord(word);
    // Use the sorted word as a key in an object
    // Add words that match the key as a value
    if (!anagramGroups.hasOwnProperty(sortedWord)) {
      anagramGroups[sortedWord] = [];
    }
    anagramGroups[sortedWord].push(word);
  });

  // Iterate through the keys
  Object.keys(anagramGroups).forEach(key => {
    // Push the values to an array
    result = result.concat(anagramGroups[key]);
  });

  // Return the array
  return result;
};

const sortWord = word => {
  return word
    .split("")
    .sort()
    .join("");
};
