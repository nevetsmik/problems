/*
Delete the minimum value from a BST.
*/

const Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

Tree.prototype.insertLeft = function(value) {
  let newNode = new Tree(value);
  this.left = newNode;
  return newNode;
};

Tree.prototype.insertRight = function(value) {
  let newNode = new Tree(value);
  this.right = newNode;
  return newNode;
};

Tree.prototype.deleteMin = function(node) {
  if (node === null) {
    return null;
  }
  if (node.left === null) {
    return node.right;
  }

  node.left = this.deleteMin(node.left);
  return node;
};

// Tree.prototype.search = function (node, value) {
//   if (node === null) {
//     return null;
//   }
//
//   if (node.value === value) {
//     return node;
//   }
//
//   if (this.left) {
//     return this.search(node.left, value);
//   }
//
//   if (this.right) {
//     return this.search(node.right, value);
//   }
// };

Tree.prototype.search = function(value) {
  if (this.value === value) {
    return this;
  }

  if (this.left) {
    let left = this.left.search(value);
    if (left) {
      return left;
    }
  }

  if (this.right) {
    let right = this.right.search(value);
    if (right) {
      return right;
    }
  }

  return null;
};

export default Tree;
