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

export const shuffle = (array) => {
  let m = array.length - 1;
  for (let i = m; i >= 0; i--) {
    let random = Math.floor(Math.random() * i);
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
};
