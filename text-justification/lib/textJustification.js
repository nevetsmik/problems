/*
Given an array of words and a length l, format the text such that each line has exactly l characters
and is fully justified on both the left and the right. Words should be packed in a greedy approach;
that is, pack as many words as possible in each line. Add extra spaces when necessary so that each
line has exactly l characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on
a line does not divide evenly between words, the empty slots on the left will be assigned more
spaces than the slots on the right. For the last line of text and lines with one word only, the
words should be left justified with no extra space inserted between them.

Example:

For words = ["This", "is", "an", "example", "of", "text", "justification."]
and l = 16, the output should be

textJustification(words, l) = ["This    is    an", => 4, 1, 2, 1, 2
                               "example  of text",
                               "justification.  "]
*/

export const textJustification = (words, l) => {
  let result = [];
  let lines = [];
  let line = "";
  words.forEach((word, idx) => {
    if (line.concat(word).concat(' ').length <= l) {
      line = line.concat(word).concat(' ');
    } else {
      lines.push(line);
      line = word.concat(' ');
    }
    if (idx === words.length - 1) {
      lines.push(line);
    }
  });

  lines.forEach(current => {
    current = current.trim();
    let wordsInLine = current.split(' ');
    let breaksInLine = wordsInLine.length - 2;
    let numChars = wordsInLine.reduce((accum, curr) => accum + curr.length, 0);
    let numCharsToDistribute = l - numChars - 1;
    let spaces = [];
    let i = 0;
    while (numCharsToDistribute + 1 > 0) {
      spaces[i] = spaces[i] || "";
      spaces[i] = spaces[i].concat(" ");
      if (i === breaksInLine) {
        i = 0;
      } else {
        i++;
      }
      numCharsToDistribute--;
    }
    let justifiedLine = "";
    if (wordsInLine.length <= 1) {
      justifiedLine = wordsInLine[0].concat(spaces[0].concat(' '));
    } else {
      wordsInLine.forEach((word, idx) => {
        justifiedLine = justifiedLine.concat(word);
        if (idx <= breaksInLine) {
          justifiedLine = justifiedLine.concat(spaces[idx]);
        }
      });
    }
    result.push(justifiedLine);
  });

  return result;
};
