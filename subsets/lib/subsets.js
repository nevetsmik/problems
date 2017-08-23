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

export const subsets = (array) => {
  // array = [1, 2, 3]
  // 2^3 = 8 number of set subsets for the array
  // Assume you have already have subsets of [1, 2], so
  // [], [1], [2], [1, 2]. Now add [3] and concat the existing subsets of
  // [1, 2] with the new subsets.
  // New subsets: [3], [1, 3], [2, 3], [1, 2, 3]
  // Old subsets: [], [1], [2], [1, 2]

  if (array.length === 0) {
    return [[]];
  }

  const first = array[0];
  const withoutFirst = subsets(array.slice(1));
  // remember, we don't want to mutate the subsets without the first element
  // hence, the 'concat'
  const withFirst = withoutFirst.map(sub => [first].concat(sub) );

  return withoutFirst.concat(withFirst);
};
