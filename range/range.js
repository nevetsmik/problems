/*
Return an array of values between (inclusive) start and end.
*/

export const range = (start, end) => {
  let result = [];

  if (start >= end) {
    return [start];
  } else {
    result.push(start);
    result = result.concat(range(start + 1, end));
  }
  return result;
};
