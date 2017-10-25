/*
Perform a uniform random shuffle - Fisher-Yates shuffle
*/

export const shuffle = array => {
  let m = array.length - 1;
  for (let i = m; i >= 0; i--) {
    let random = Math.floor(Math.random() * i);
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
};
