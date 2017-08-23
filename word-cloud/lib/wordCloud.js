/*********
Export an object that contains multiple functions

const scratch = {
  fn1: function(){},
  fn2: function(){}
};

export { scratch };
**********/


/*********
Export multiple functions all at once

const fn1 = function(){};
const fn2 = function(){};

export { fn1, fn2 };
**********/


/*********
Export functions as you write them

export const fn1 = function(){};
export const fn2 = function(){};
**********/

export const wordCloud = (string) => {
  let wordCloudMap = new Map();

  // Punctuation to account for
  const punctuation = ["'", ",", ".", ";", ":", "!", " ", "-", "(", ")"];

  let start = 0;
  // Split the string into a character array
  // Iterate over each character in the array
  string.split('').forEach((char, idx) => {
    // Whenever there is a punctuation
    if (punctuation.includes(char)) {
      // If there is a word, then add to the map
      // Add current word to map, if applicable
      if (char === "'" && !punctuation.includes(string[idx - 1]) && !punctuation.includes(string[idx + 1])) {
      } else {
        if (idx - start > 0) {
          wordCloudMap = addToMap(wordCloudMap, string.slice(start, idx));
        }

        // Add punctuation to map
        wordCloudMap = addToMap(wordCloudMap, char);

        // Reset start indices that track the word
        start = idx + 1;
      }
    }
  });
  return wordCloudMap;
};

export const addToMap = (map, word) => {
  if (map.has(word)) {
    map.set(word, map.get(word) + 1);
  } else {
    map.set(word, 1);
  }
  return map;
};
