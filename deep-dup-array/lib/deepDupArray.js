/*
Write a function to that makes a brand new deep copy of a given array. Assume
the array only contains nested array and no objects.
*/

export const deepDupArray = array => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(deepDupArray(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};
