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

// Definition for singly-linked list:
const ListNode = function(x) {
  this.value = x;
  this.next = null;
};

export const removeKFromList = function (l, k) {
  if (l === null) { return []; }
  let prev = null;
  let itr = l;

  while (itr !== null) {
    if (itr.value === k) {
      if (itr.next) {
        itr.value = itr.next.value;
        itr.next = itr.next.next;
      } else {
        if (prev) {
          prev.next = null;
        }
        itr = itr.next;
      }
    } else {
      prev = itr;
      itr = itr.next;
    }
  }

  if (l.value === k) { return null; }
  return l;
};

export const isListPalindrome = function(l) {
    if (l === null) { return false; }
    let count = 0;
    let itr = l;
    while (itr !== null) {
        count += 1;
        itr = itr.next;
    }

    if (count === 1) { return true; }

    let midpoint;
    if (count % 2 === 0) {
        midpoint = count / 2;
    } else {
        midpoint = Math.floor(count / 2) + 1;
    }

    let secondHalf = l;
    count = 0;
    while (count < midpoint) {
        secondHalf = secondHalf.next;
        count++;
    }

    let first = l;
    let last = reverse(secondHalf);

    while (first !== null && last !== null) {
      if (first.value !== last.value) {
        return false;
      }
      first = first.next;
      last = last.next;
    }

    return true;
};

export const reverse = function (node) {
  if (node === null) { return null; }
  let prev = null;
  let current = node;
  let next = current;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};


export default ListNode;
