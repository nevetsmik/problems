/*
Write a function that determines whether a string follows a pattern.
Example: match("redbluebluered", "abba") === true
*/

/*
Sub-problem:
Associate the first letter in the pattern with first i characters of the string.
Recurse on the remaining pattern and the remaining characters in the string (also
pass the hash of {pattern => string}). If the next character of the pattern is
a key in the hash, then check that the hash value equals the first i characters of
the string. If the hash value and the first i characters match, then recurse on the
remaining pattern and the remaining string. If the next character is not in the hash,
then return false (this tells you that the pattern => string won't work and you need
to delete it from the hash upon returning to the calling stack).
*/

export const match = (string, pattern, map = {}) => {
  // Base case
  if (pattern.length === 1) {
    let subPattern = map[pattern[0]];
    if (
      map.hasOwnProperty(pattern[0]) &&
      subPattern === string.substring(0, subPattern.length)
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Base case - delete the pattern => string from the calling stack
  if (
    (string.length === 0 && pattern.length !== 0) ||
    (string.length !== 0 && pattern.length === 0)
  ) {
    return false;
  }

  // Does the next character in the pattern exist in the hash?
  if (map.hasOwnProperty(pattern[0])) {
    let subPattern = map[pattern[0]];
    // If the hash value (i.e., the substring of the string) equals the first (hash value).length
    // characters in the string, then recurse on the remaining string and pattern
    if (subPattern === string.substring(0, subPattern.length)) {
      return match(
        string.substring(subPattern.length),
        pattern.substring(1),
        map
      );
    } else {
      // Delete the pattern => string from the hash upon returning to the calling
      // stack
      return false;
    }
  } else {
    for (let i = 0; i < string.length; i++) {
      // Iterate through the string, associating the first letter of the pattern
      // with i letters from the string
      map[pattern[0]] = string.substring(0, i + 1);
      if (match(string.substring(i + 1), pattern.substring(1), map)) {
        return true;
      } else {
        delete map[pattern[0]];
      }
    }
  }

  return false;
};

/*
console.log(match("bluered", "ab") === true);
console.log(match("blueredredblue", "abba") === true);
console.log(match("blueredred", "aba") === false);
*/
