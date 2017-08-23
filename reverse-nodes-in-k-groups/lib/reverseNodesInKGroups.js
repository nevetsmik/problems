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

export const Node = function(value) {
  let node = {
    value: value,
    next: null,
    printNodes: function() {
      let result = "";
      let itr = node;
      while (itr) {
        result += `${itr.value} `;
        itr = itr.next;
      }
      return result.slice(0, -1);
    }
  };
  return node;
};

export const reverseList = (l, k) => {
  if (l === null) { return []; }
  if (k === 1) { return l; }

  let prev = null;
  let itr = l;
  let count = 0;

  while (count < k && itr) {
    let next = itr.next;
    itr.next = prev;
    prev = itr;
    itr = next;
    count++;
  }

  if (count < k) {
    if (l === prev) {
      // only 1 left over
      // return the head and the tail
      return [l, null];
    } else {
      // reached end of list (i.e., itr is null), but is less than count
      // return the old head and the old tail
      let rereversed = reverseList(prev, count);
      return rereversed; //
    }
  } else {
    return [prev, itr];
  }
  // return count < k ? [l, prev] : [prev, itr];
};

export const reverseNodesInKGroups = (l, k) => {
  if (l === null) { return []; }
  if (k === 1) { return l; }

  let itr = l;
  let prev = null;
  let newHead;

  while (itr) {
    let nodes = reverseList(itr, k);

    let subHead = nodes[0];
    let newTailNext = nodes[1];

    if (prev) {
      prev.next = subHead;
    } else {
      newHead = subHead;
    }

    if (newTailNext) {
      itr.next = newTailNext;
      prev = itr;
      itr = itr.next;
    } else {
      itr = null;
    }
  }

  return newHead;
};
