/*
Find the second largest item in a BST.
*/

export const Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

Tree.prototype.insertLeft = function(value) {
  this.left = new Tree(value);
  return this.left;
};

Tree.prototype.insertRight = function(value) {
  this.right = new Tree(value);
  return this.right;
};

Tree.prototype.largestItemInBST = function() {
  if (this.right === null) {
    return this.value;
  }
  return this.right.largestItemInBST();
};

Tree.prototype.secondLargestItemInBST = function() {
  if (this.right && this.right.right === null && this.right.left === null) {
    return this.value;
  }

  if (this.right === null && this.left !== null) {
    return this.left.largestItemInBST();
  }

  return this.right.secondLargestItemInBST();
};
