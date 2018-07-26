/*
Find the unique number in an array of numbers.
*/

export const findUniqueInt = array => {
  let idCount = {};
  let unique;
  array.forEach(id => {
    idCount[id] = idCount[id] || 0;
    idCount[id] += 1;
    if (idCount[id] > 1) {
      delete idCount[id];
    }
  });

  return parseInt(Object.keys(idCount)[0]);
};
