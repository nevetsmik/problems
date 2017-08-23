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

export const findUniqueInt = (array) => {
  let idCount = {};
  let unique;
  array.forEach((id) => {
    idCount[id] = idCount[id] || 0;
    idCount[id] += 1;
    if (idCount[id] > 1) {
      delete idCount[id];
    }
  });

  return parseInt(Object.keys(idCount)[0]);
};
