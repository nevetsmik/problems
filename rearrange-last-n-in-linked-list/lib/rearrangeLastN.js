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

const Node = function (value) {
  let node = {
    value: value,
    next: null,
    printNodes: function() {
      let itr = node;
      let result = "";
      while (itr) {
        result += `${itr.value} `;
        itr = itr.next;
      }
      return result.slice(0, -1);
    }
  };

  return node;
};

export const rearrangeLastN = function (l, n) {
  if (n === 0) { return l; }

  let ahead = l;
  let behind = l;
  let prev = null;
  let count = 1;

  while (ahead.next) {
    if (count >= n) {
      prev = behind;
      behind = behind.next;
    }
    ahead = ahead.next;
    count += 1;
  }

  // return [l, prev, behind, ahead];
  if (ahead.next === null && count === n) {
    return l;
  } else {
    ahead.next = l;
    prev.next = null;
    return behind;
  }
};

export default Node;
