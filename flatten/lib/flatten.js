/*
Given an array of nested arrays, flatten the array.
*/

export const flattenR = array => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flattenR(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

export const flattenI = array => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (Array.isArray(el)) {
      let stack = [];
      stack[0] = el;
      while (stack.length > 0) {
        let curr = stack.shift();
        if (Array.isArray(curr)) {
          for (let j = curr.length - 1; j >= 0; j--) {
            stack.unshift(curr[j]);
          }
        } else {
          result.push(curr);
        }
      }
    } else {
      result.push(el);
    }
  }
  return result;
};
