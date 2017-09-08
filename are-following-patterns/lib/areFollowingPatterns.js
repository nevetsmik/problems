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
