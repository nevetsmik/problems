/*
Write a function to determine if a linked list contains a cycle.
*/

const LLNode = function(value) {
  this.value = value;
  this.next = null;
};

export const linkedListCycles = function(head) {
  if (head === null) {
    return false;
  }

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

const incrementFast = function(node) {
  for (let i = 0; i < 2; i++) {
    node = node.next;
    if (node === null) {
      return null;
    }
  }
  return node;
};

export default LLNode;
