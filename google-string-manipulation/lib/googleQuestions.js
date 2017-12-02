export const urlMaker = string => {
  let result = "";

  let pattern = /\b(g\/[A-Za-z0-9]*)/g;
  let match = pattern.exec(string);
  let start = 0;

  while (match) {
    result += string.substring(start, match.index);
    result += makeATag(match[1]);
    start = match.index + match[1].length;
    match = pattern.exec(string);
  }

  result += string.substring(start);
  return result;
};

const makeATag = string => {
  let resource = string.substring(2);
  let aTag = `<a href="www.google.com/${resource}">${resource}</a>`;
  return aTag;
};
