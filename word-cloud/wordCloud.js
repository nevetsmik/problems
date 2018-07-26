/*
You want to build a word cloud, an infographic where the size of a word
corresponds to how often it appears in the body of text. To do this, you'll
need data. Write code that takes a long string and builds its word cloud data
in a hash map ↴ , where the keys are words and the values are the number of
times the words occurred.

Think about capitalized words. For example, look at these sentences:

"After beating the eggs, Dana read the next step:"
"Add milk and eggs, then add flour and sugar."

What do we want to do with "After", "Dana", and "add"? In this example, your
final hash map should include one "Add" or "add" with a value of 22. Make
reasonable (not necessarily perfect) decisions about cases like "After" and
"Dana".

Assume the input will only contain words and standard punctuation.

https://www.interviewcake.com/question/java/word-cloud
*/

export const wordCloud = string => {
  let wordCloudMap = new Map();

  // Punctuation to account for
  const punctuation = ["'", ",", ".", ";", ":", "!", " ", "-", "(", ")"];

  let start = 0;
  // Split the string into a character array
  // Iterate over each character in the array
  string.split("").forEach((char, idx) => {
    // Whenever there is a punctuation
    if (punctuation.includes(char)) {
      // If there is a word, then add to the map
      // Add current word to map, if applicable
      if (
        char === "'" &&
        !punctuation.includes(string[idx - 1]) &&
        !punctuation.includes(string[idx + 1])
      ) {
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
