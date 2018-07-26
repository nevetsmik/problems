/*
Write a function to determine whether a binary tree is symmetric.
*/

const Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

Node.prototype.insertLeft = function(value) {
  let newNode = new Node(value);
  this.left = newNode;
  return newNode;
};

Node.prototype.insertRight = function(value) {
  let newNode = new Node(value);
  this.right = newNode;
  return newNode;
};

export const symmetricTree = node => {
  if (node === null) {
    return true;
  }
  let inorder = inorderTreeTraversal(node);
  return inorder === inorder.reverse() && inorder.length % 2 !== 0;
};

export const inorderTreeTraversal = node => {
  let result = [];

  if (node.left) {
    result = result.concat(inorderTreeTraversal(node.left));
  }

  result.push(node.value);

  if (node.right) {
    result = result.concat(inorderTreeTraversal(node.right));
  }

  return result;
};

export default Node;
