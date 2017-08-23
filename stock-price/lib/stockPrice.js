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

/*********
"Suppose we could come up with the answer in one pass through the input,
by simply updating the 'best answer so far' as we went. What additional
values would we need to keep updated as we looked at each item in our set,
in order to be able to update the 'best answer so far' in constant time?"

The "best answer so far" is, of course, the max profit that we can get
based on the prices we've seen so far.

The "additional value" is the minimum price we've seen so far. If we keep
that updated, we can use it to calculate the new max profit so far in
constant time. The max profit is the larger of:

1. The previous max profit
2. The max profit we can get by selling now (the current price minus the
minimum price seen so far)
**********/



export const stockPrice = stocks => {
  let min = stocks[0];
  let largestDiff = stocks[1] - stocks[0];

  for (let i = 1; i < stocks.length; i++) {
    let currDiff = stocks[i] - min;
    if (currDiff > largestDiff) {
      largestDiff = currDiff;
    }

    if (stocks[i] < min) {
      min = stocks[i];
    }
  }

  return largestDiff;
};
