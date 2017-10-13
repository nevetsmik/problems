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

// Return the kth smallest integer in an unsorted array
export const quickSelect = (array, k) => {
  return quickSelectHelper(array, 0, array.length - 1, k);
};

export const quickSelectHelper = (array, start, end, k) => {
  if (start === end) {
    return array[start];
  }

  let pivot = partition(array, start, end);
  if (pivot + 1 === k) {
    return array[pivot];
  }

  if (k < pivot + 1) {
    return quickSelectHelper(array, start, pivot - 1, k);
  } else if (k > pivot + 1) {
    return quickSelectHelper(array, pivot + 1, end, k);
  }
};

export const partition = (array, start, end) => {
  let randomPivot = Math.floor(Math.random() * (end - start + 1)) + start;
  swap(array, start, randomPivot);

  let pivot = start;
  let divider = start;

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[pivot]) {
      swap(array, i, divider + 1);
      divider += 1;
    }
  }
  swap(array, divider, pivot);

  return divider;
};

export const quickSort = array => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el > pivot);
  return quickSort(left)
    .concat([pivot])
    .concat(quickSort(right));
};

export const quickSortInPlace = array => {
  return quickSortInPlaceHelper(array, 0, array.length - 1);
};

export const quickSortInPlaceHelper = (array, start, end) => {
  if (end - start <= 0) {
    return array[start];
  }

  // Randomly pick pivot index
  let randomPivot = Math.floor(Math.random() * (end - start + 1)) + start;
  // Swap the pivot and first position values
  swap(array, start, randomPivot);

  // Set partition to the first index in the array
  let part = start;
  // Set pivot index to first position
  let pivot = start;
  // Starting at i = 1, iterate through the array
  for (let i = start + 1; i <= end; i++) {
    // If value at current index is less than value at pivot
    if (array[i] < array[pivot]) {
      // Swap values at part + 1 and current index
      swap(array, part + 1, i);
      // Increment part
      part += 1;
    }
  }

  // Swap the values at pivot and parition
  swap(array, pivot, partition);
  // quickSortInPlace on the left array
  quickSortInPlaceHelper(array, start, partition - 1);
  // quickSortInPlace on the right array
  quickSortInPlaceHelper(array, partition + 1, end);

  return array;
};

const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
};

export const subsets = array => {
  /*
  [1,2,3]
  [], [1], [2], [1, 2]
  [3], [1, 3], [2, 3], [1, 2, 3]
  */

  if (array.length === 0) {
    return [[]];
  }

  let last = array[array.length - 1];
  let withoutLast = subsets(array.slice(0, array.length - 1));

  let withLast = withoutLast.map(sub => sub.concat([last]));

  return withoutLast.concat(withLast);
};

export const permutations = array => {
  /*
  [[3]] => [[2, 3], [3, 2]]
  [[2, 3], [3, 2]] => [1, 2, 3], [2, 1, 3], [2, 3, 1] // [1, 3, 2], [3, 1, 2], [3, 2, 1]
  */

  let totalPerms = [];

  if (array.length === 1) {
    return [array];
  }

  let first = array[0];
  let perms = permutations(array.slice(1));

  perms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      let newPerm = perm
        .slice(0, i)
        .concat(first)
        .concat(perm.slice(i));
      totalPerms.push(newPerm);
    }
  });

  return totalPerms;
};
