/*
Given a string and array of strings, find whether the array contains a string with one character
difference from the given string. Array may contain string of different lengths.

Example:

oneCharacterOff("banana", [bana, apple, banaba, bonanza, banamf]) // return true
oneCharacterOff("banana", [bana, apple, badaba, bonanza, banamf]) // return false
*/
const oneCharacterOff = (string, words) => {
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (Math.abs(word.length - string.length) <= 1) {
      let numDifferences = 0;
      let maxLength = Math.max(string.length, word.length);
      for (let j = 0; j < maxLength; j++) {
         if (string[j] !== word[j]) {
           numDifferences++;
         }
      }
      if (numDifferences === 1) {
        return true;
      }
    }
  }
  return false;
};

/*
Given a start string, end string and a set of strings, find if there exists a path between the
start string and end string via the set of strings. A path exists if we can get from start string
to end string by changing (no addition/removal) only one character at a time. The restriction is
that the new string generated after changing one character has to be in the set.

Example:

start: "cog"
end: "bad"
set: ["bag", "cag", "cat", "fag", "con", "rat", "sat", "fog"]
one of the paths: "cog" -> "fog" -> "fag" -> "bag" -> "bad"

"cog" => "cag", "con", "fog"
"cag" => "con", "fog", "bag"

*/

export const pathToEndWord = (start, end, words) => {
  let queue = [];
  queue[0] = start;
  let visited = {};

  while (queue.length > 0) {
    let currentWord = queue.shift();
    console.log(currentWord);
    if (oneCharacterOff(currentWord, [end])) {
      return true;
    }
    visited[currentWord] = true;
    words.forEach(word => {
      if (oneCharacterOff(currentWord, [word]) && !visited.hasOwnProperty(word)) {
        queue.push(word);
      }
    });
  }
  return false;
};
