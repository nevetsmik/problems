/*
Find a value in a sorted list.
*/

export const findInOrderedSetRecursive = (array, target) => {
  let midpoint = Math.floor(array.length / 2);

  if (array[midpoint] === target) {
    return midpoint;
  }

  if (target < array[midpoint]) {
    return findInOrderedSetRecursive(array.slice(0, midpoint), target);
  }

  if (target > array[midpoint]) {
    let result = findInOrderedSetRecursive(array.slice(midpoint + 1), target);
    if (result !== null) {
      return result + midpoint + 1;
    } else {
      return null;
    }
  }
};

export const findInOrderedSetIterative = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let midpoint = Math.floor((right - left + 1) / 2) + left;

    if (target === array[midpoint]) {
      return midpoint;
    }

    if (target < array[midpoint]) {
      right = midpoint - 1;
    } else {
      left = midpoint + 1;
    }
  }

  // if (target === array[left]) { return left; }

  return null;
};
