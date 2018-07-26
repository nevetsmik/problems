/*
Given an array strings, determine whether it follows the sequence given in the
patterns array. In other words, there should be no i and j for which
strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which
strings[i] ≠ strings[j] and patterns[i] = patterns[j].

https://codefights.com/interview-practice/task/3PcnSKuRkqzp8F6BN
*/

export const areFollowingPatterns = (strings, patterns) => {
  let stringsToPatterns = {};
  let patternsToStrings = {};

  strings.forEach((string, idx) => (stringsToPatterns[string] = patterns[idx]));

  let mappedStringsToPatterns = [];
  strings.forEach((string, idx) =>
    mappedStringsToPatterns.push(stringsToPatterns[string])
  );

  patterns.forEach(
    (pattern, idx) => (patternsToStrings[pattern] = strings[idx])
  );

  let mappedPatternsToStrings = [];
  patterns.forEach((pattern, idx) =>
    mappedPatternsToStrings.push(patternsToStrings[pattern])
  );

  console.log(mappedStringsToPatterns);
  console.log(mappedPatternsToStrings);

  return (
    JSON.stringify(mappedStringsToPatterns) === JSON.stringify(patterns) &&
    JSON.stringify(strings) === JSON.stringify(mappedPatternsToStrings)
  );
};
