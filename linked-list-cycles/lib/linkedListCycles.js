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

const LLNode = function (value) {
  this.value = value;
  this.next = null;
};

export const linkedListCycles = function (head) {
  if (head === null) { return false; }

  let fast = head;
  let slow = head;

  while (slow) {

    fast = incrementFast(fast);
    slow = slow.next;

    if (slow === null || fast === null) {
      return false;
    }

    if (slow === fast) {
      return true;
    }
  }
};

const incrementFast = function (node) {
  for (let i = 0; i < 2; i++) {
    node = node.next;
    if (node === null) {
      return null;
    }
  }
  return node;
};

export default LLNode;
