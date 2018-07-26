/*
Given a single input string, write a function that produces all possible anagrams
of a string and outputs them as an array. At first, don't worry about
repeated strings.  What time complexity is your solution?

Extra credit: Deduplicate your return array without using uniq()
*/

export const permutations = string => {
  if (string.length <= 1) {
    return [string];
  }

  let allCharsExceptLast = string.slice(0, -1);
  let lastChar = string[string.length - 1];

  let permutationsOfAllCharsExceptLast = permutations(allCharsExceptLast);

  let perms = [];

  permutationsOfAllCharsExceptLast.forEach(function(
    permutationOfAllCharsExceptLast
  ) {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      let permutation =
        permutationOfAllCharsExceptLast.slice(0, position) +
        lastChar +
        permutationOfAllCharsExceptLast.slice(position);
      perms.push(permutation);
    }
  });
  return perms;
};

export const allAnagrams = function(string) {
  var uniqueOutput = {};

  (function anagram(ana, str) {
    if (str === "") {
      uniqueOutput[ana] = 1;
    }

    for (var i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  })("", string);

  return Object.keys(uniqueOutput);
};
