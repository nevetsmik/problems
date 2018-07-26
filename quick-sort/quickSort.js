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
  start = start || 0;
  end = end || array.length - 1;

  if (end - start <= 0) {
    return array[start];
  }

  let pivot = partition(array, start, end);

  quickSortInPlace(array, start, pivot - 1);
  quickSortInPlace(array, pivot + 1, end);
  return array;
};

const swap = (array, tit, tat) => {
  [array[tit], array[tat]] = [array[tat], array[tit]];
};

const partition = (array, start, end) => {
  let randomPivot = Math.floor(Math.random() * (end - start + 1)) + start;
  swap(array, start, randomPivot);
  let pivot = start, partition = start;

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[pivot]) {
      swap(array, partition + 1, i);
      partition += 1;
    }
  }
  swap(array, pivot, partition);
  return partition;
}
