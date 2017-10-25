/*
Implement selection sort
*/

export const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIdx = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minIdx = j;
      }
    }
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
  }
  return array;
};
