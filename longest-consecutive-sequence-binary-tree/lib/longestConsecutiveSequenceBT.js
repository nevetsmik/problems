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

const Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

Tree.prototype.addRight = function(value) {
  this.right = new Tree(value);
  return this.right;
};

Tree.prototype.addLeft = function(value) {
  this.left = new Tree(value);
  return this.left;
};

export const longestConsecutiveSequence = node => {
  if (node === null || node === undefined) {
    return 0;
  } else {
    return 1 + longestConsecutiveSequenceHelper(node, node.value);
  }
};

const longestConsecutiveSequenceHelper = (node, prevValue) => {
  if (node === null) {
    return 0;
  }

  if (node.value === prevValue + 1) {
    return (
      1 +
      Math.max(
        longestConsecutiveSequenceHelper(node.left, node.value),
        longestConsecutiveSequenceHelper(node.right, node.value)
      )
    );
  } else {
    return (
      0 +
      Math.max(
        longestConsecutiveSequenceHelper(node.left, node.value),
        longestConsecutiveSequenceHelper(node.right, node.value)
      )
    );
  }
};

export default Tree;
