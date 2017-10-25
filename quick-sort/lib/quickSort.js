/*
Implement quick sort.
*/

export const quickSort = array => {
  if (array.length <= 1) {
    return array;
  }
  let pivot = [array[0]];
  let left = array.slice(1).filter(el => {
    return el <= pivot[0];
  });
  let right = array.slice(1).filter(el => {
    return el > pivot[0];
  });
  return quickSort(left)
    .concat(pivot)
    .concat(quickSort(right));
};

export const quickSortInPlace = (array, start, end) => {
  if (end - start <= 0) {
    return array[start];
  }

  let randomPivot = Math.floor(Math.random() * (end - start + 1)) + start;
  swap(array, start, randomPivot);
  let pivot = start,
    partition = start;

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[pivot]) {
      swap(array, partition + 1, i);
      partition += 1;
    }
  }
  swap(array, pivot, partition);
  quickSortInPlace(array, start, partition - 1);
  quickSortInPlace(array, partition + 1, end);
  return array;
};

const swap = (array, tit, tat) => {
  [array[tit], array[tat]] = [array[tat], array[tit]];
};
