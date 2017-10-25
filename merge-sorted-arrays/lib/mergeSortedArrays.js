/*
Merge two sorted arrays.
*/

export const compare = (val1, val2) => {
  if (val1 < val2) {
    return -1;
  } else if (val1 === val2) {
    return 0;
  } else if (val2 < val1) {
    return 1;
  }
};

export const mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return mergeSortedArrays(left, right);
};

export const mergeSortedArrays = (left, right) => {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    switch (compare(left[0], right[0])) {
      case -1:
        result.push(left.shift());
        break;
      case 0:
        result.push(left.shift());
        break;
      case 1:
        result.push(right.shift());
        break;
    }
  }

  return result.concat(left).concat(right);
};
