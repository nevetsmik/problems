/*
You have two arrays of strings, words and parts. Return an array that contains
the strings from words, modified so that any occurrences of the substrings from
parts are surrounded by square brackets [], following these guidelines:

If several parts substrings occur in one string in words, choose the longest
one. If there is still more than one such part, then choose the one that appears
first in the string.

Example

For words = ["Apple", "Melon", "Orange", "Watermelon"] and
parts = ["a", "mel", "lon", "el", "An"], the output should be
findSubstrings(words, parts) = ["Apple", "Me[lon]", "Or[a]nge", "Water[mel]on"].

While "Watermelon" contains three substrings from the parts array, "a", "mel",
and "lon", "mel" is the longest substring that appears first in the string.

https://codefights.com/interview-practice/task/Ki9zRh5bfRhH6oBau/
*/

export const findSubstrings = (words, parts) => {
  if (words.length === 0) {
    return [];
  }

  if (parts.length === 0) {
    return words;
  }

  let result = [];
  let substringTrie = new SubstringTrie();
  parts.forEach(word => substringTrie.addWord(word));
  words.forEach(word => {
    let found = substringTrie.searchForPartInWord(word);
    result.push(found);
  });
  return result;
};

const SubstringTrie = function() {
  this.root = new TrieNode();
  this.endOfWord = "*";
};

SubstringTrie.prototype.addWord = function(word) {
  let currentNode = this.root;
  word.split("").forEach(ltr => {
    if (!currentNode.hasChild(ltr)) {
      currentNode.addChild(ltr);
    }
    currentNode = currentNode.getChild(ltr);
  });

  if (!currentNode.hasChild(this.endOfWord)) {
    currentNode.addChild(this.endOfWord);
  }
};

// Return the input word with any parts found wrapped in brackets
SubstringTrie.prototype.searchForPartInWord = function(word) {
  // Keep track of the starting point in the word that matches a part and
  // keep track of the max length of a part that matches
  let max = 0;
  let start = 0;

  // Iterate through the letters in the word
  for (let i = 0; i < word.length; i++) {
    let currentNode = this.root;
    let count = 0;
    // Drill down through the trie
    for (let j = i; j < word.length; j++) {
      let ltr = word[j];
      if (!currentNode.hasChild(ltr)) {
        // The word doesn't match the part any more so move to the next letter
        // in the word to check if another part exists in the word starting with the next letter in
        // the word
        break;
      }
      currentNode = currentNode.getChild(ltr);
      count++;

      // Update the max if the current count is greater than max && the end of a
      // part has been reached
      if (count > max && currentNode.hasChild("*")) {
        max = count;
        start = i;
      }
    }
  }

  if (max) {
    return word
      .slice(0, start)
      .concat("[")
      .concat(word.slice(start, start + max))
      .concat("]")
      .concat(word.slice(start + max));
  } else {
    return word;
  }
};

const TrieNode = function() {
  this.node = {};
};

TrieNode.prototype.hasChild = function(value) {
  return this.node.hasOwnProperty(value);
};

TrieNode.prototype.getChild = function(value) {
  return this.node[value];
};

TrieNode.prototype.addChild = function(value) {
  this.node[value] = new TrieNode();
};
