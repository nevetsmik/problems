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

/*
You have two strings, s and t. The string t contains only unique elements.
Find and return the minimum consecutive substring of s that contains all of the elements from t.

It's guaranteed that the answer exists. If there are several answers, return
the one which starts from the smallest index.

For s = "adobecodebanc" and t = "abc", the output should be
minSubstringWithAllChars(s, t) = "banc".
*/

/*
Strategy: Iterate the right pointer to find a substring that contains all the letters
in t. Once a substring is found, iterate the left pointer until all the letters in t are
not found. Then, repeat with the right pointer to find another substring that contains
all the letters.

Implementation:
Use two pointers to scan the string, s
Iterate right until a substring contains all the letters in t
Iterate left checking if the minimized substring still contains all the letters in t
  Break if the minimized substring no longer contains all the letters in t
  Update the minSubstring if the current substring is less than minSubstring
*/
export const minSubstringWithAllChars = (s, t) => {
  if (s === "") {
    return "";
  }

  let left = 0;
  let right = 0;

  let chars = [];
  let minSubstring;

  while (contains(t, chars) || right < s.length) {
    while (right < s.length) {
      chars.push(s[right]);
      right++;
      if (contains(t, chars)) {
        break;
      }
    }

    while (left <= s.length - t.length) {
      if (!contains(t, chars)) {
        break;
      } else if (
        minSubstring === undefined ||
        chars.join("").length < minSubstring.length
      ) {
        minSubstring = chars.join("");
      }
      left++;
      chars.shift();
    }
  }

  return minSubstring;
};

// Every letter in uniqueStr is present in str
const contains = (uniqueStr, chars) => {
  for (let i = 0; i < uniqueStr.length; i++) {
    if (chars.indexOf(uniqueStr[i]) === -1) {
      return false;
    }
  }
  return true;
};
