/*
Write binary search iteratively and recursively.
*/

export const binarySearch = (array, target) => {
  // return binarySearchIter(array, target, 0, array.length - 1);
  return binarySearchRec(array, target);
};

const binarySearchIter = (array, target, start, end) => {
  while (start <= end) {
    let midpoint = Math.floor((end - start + 1) / 2) + start;

    if (target === array[midpoint]) {
      return midpoint;
    }

    if (target < array[midpoint]) {
      end = midpoint - 1;
    }

    if (target > array[midpoint]) {
      start = midpoint + 1;
    }
  }

  return null;
};

const binarySearchRec = (array, target) => {
  if (array.length < 1) {
    return null;
  }

  let midpoint = Math.floor(array.length / 2);

  if (target === array[midpoint]) {
    return midpoint;
  }

  if (target < array[midpoint]) {
    return binarySearchRec(array.slice(0, midpoint), target);
  }

  if (target > array[midpoint]) {
    let result = binarySearchRec(array.slice(midpoint + 1), target);
    if (result) {
      return result + midpoint + 1;
    } else {
      return null;
    }
  }
};
