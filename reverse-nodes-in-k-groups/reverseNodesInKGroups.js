/*
Reverse nodes in groups of k.

Note: Your solution should have O(n) time complexity, where n is the number of
element in l, and O(1) additional space complexity, since this is what you would
be asked to accomplish in an interview.

Given a linked list l, reverse its nodes k at a time and return the modified
list. k is a positive integer that is less than or equal to the length of l. If
the number of nodes in the linked list is not a multiple of k, then the nodes
that are left out at the end should remain as-is.

You may not alter the values in the nodes - only the nodes themselves can be
changed.

Example

For l = [1, 2, 3, 4, 5] and k = 2, the output should be
reverseNodesInKGroups(l, k) = [2, 1, 4, 3, 5];
For l = [1, 2, 3, 4, 5] and k = 1, the output should be
reverseNodesInKGroups(l, k) = [1, 2, 3, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] and k = 3, the output should be
reverseNodesInKGroups(l, k) = [3, 2, 1, 6, 5, 4, 9, 8, 7, 10, 11].

https://codefights.com/interview-practice/task/XP2Wn9pwZW6hvqH67
*/

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
    },
  };
  return node;
};

export const reverseList = (l, k) => {
  if (l === null) {
    return [];
  }
  if (k === 1) {
    return l;
  }

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
  if (l === null) {
    return [];
  }
  if (k === 1) {
    return l;
  }

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
