/*
Your task today is simple: given an array of strings words and a string text, return, for each word
w in words, how many occurrences of w are in text.

Example:

For text = "aaaa" and words = ["a", "aa", "aaa", "aaaa"],
the output should be

countingOccurrences(text, words) = [4, 3, 2, 1].

There are 4 occurrences of "a" in "aaaa", 3 occurrences of "aa" in "aaaa", 2 occurrences of "aaa"
in "aaaa" and 1 occurrence of "aaaa" in "aaaa".
*/

// Uses regular expressions
export const countingOccurrences = (text, words) => {
  let result = [];
  words.forEach(word => {
    let count = 0;
    let pattern = new RegExp(word, "g");
    let match = pattern.exec(text);

    while (match) {
      count++;
      pattern.lastIndex = match.index + 1;
      match = pattern.exec(text);
    }

    result.push(count);
  });
  return result;
};

// Uses indexOf
// export const countingOccurrences = (text, words) => {
//     let result = [];
//     words.forEach(w => {
//         let count = 0;
//         let copyText = text;
//         while (copyText.length > 0) {
//             let foundPos = copyText.indexOf(w);
//             if (foundPos > -1) {
//                 count++;
//                 copyText = copyText.substring(foundPos + 1);
//             } else {
//                 copyText = "";
//             }
//         }
//         result.push(count);
//     });
//     return result;
// }
