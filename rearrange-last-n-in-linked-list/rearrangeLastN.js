/*
Note: Try to solve this task in O(list size) time using O(1) additional space,
since this is what you'll be asked during an interview.

Given a singly linked list of integers l and a non-negative integer n, move the
last n list nodes to the beginning of the linked list.

Example

For l = [1, 2, 3, 4, 5] and n = 3, the output should be
rearrangeLastN(l, n) = [3, 4, 5, 1, 2];
For l = [1, 2, 3, 4, 5, 6, 7] and n = 1, the output should be
rearrangeLastN(l, n) = [7, 1, 2, 3, 4, 5, 6].

https://codefights.com/interview-practice/task/5vcioHMkhGqkaQQYt
*/

const Node = function(value) {
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
    },
  };

  return node;
};

export const rearrangeLastN = function(l, n) {
  if (n === 0) {
    return l;
  }

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
