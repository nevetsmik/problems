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
  this.right = null;
  this.left = null;
};

Tree.prototype.insertRight = function(value) {
  let newNode = new Tree(value);
  this.right = newNode;
  return newNode;
};

Tree.prototype.insertLeft = function(value) {
  let newNode = new Tree(value);
  this.left = newNode;
  return newNode;
};

Tree.prototype.commonAncestor = function(node1, node2) {
  if (!this.exists(node1) || !this.exists(node2)) {
    return null;
  }

  const findAncestor = function(root) {
    if (root === null || root === node1 || root === node2) {
      return root;
    }

    let node1IsOnLeft = root.left.exists(node1);
    let node2IsOnLeft = root.left.exists(node2);

    if (node1IsOnLeft !== node2IsOnLeft) {
      return root;
    }

    let pickASide = node1IsOnLeft ? root.left : root.right;
    return findAncestor(pickASide);
  };

  return findAncestor(this);
};

// Tree.prototype.commonAncestor = function (node1, node2) {
//   // Get ancestor path for node1 - ancestor1
//   let ancestor1 = this.getAncestorPath(node1);
//   // Get ancestor path for node2 - ancestor2
//   let ancestor2 = this.getAncestorPath(node2);
//   // Iterate thru ancestor1 and do indexOf on the other array
//   for (let i = 0; i < ancestor1.length; i++) {
//     let ancestor = ancestor1[i];
//     let found = ancestor2.indexOf(ancestor);
//     if (found) {
//       return ancestor;
//     }
//   }
//   return null;
// };

// Tree.prototype.getAncestorPath = function (node) {
//   let ancestorPath = [];
//
//   const traverseTreeDF = (tree) => {
//     // Traverse tree until this === node, return found = true, ancestorPath
//     // Base case:
//     // if this === node, then...
//     if (tree === node) {
//       // return true
//       return true;
//     }
//
//     // if node has a left child, then...
//     if (tree.left) {
//       // found = this.left.getAncestorPath(node)
//       let found = traverseTreeDF(tree.left);
//       // if found, then...
//       if (found) {
//         // ancestorPath.push(this);
//         ancestorPath.push(tree);
//         return true;
//       }
//     }
//
//     // if node has a right child, then...
//     if (tree.right) {
//       // found = this.right.getAncestorPath(node)
//       let found = traverseTreeDF(tree.right);
//       // if found, then...
//       if (found) {
//         // ancestorPath.push(this)
//         ancestorPath.push(tree);
//         return true;
//       }
//     }
//
//     return false;
//   };
//
//   traverseTreeDF(this);
//   return ancestorPath;
// };

Tree.prototype.getAncestorPath = function(node, ancestorPath = []) {
  // Traverse tree until this === node, return found = true, ancestorPath
  // Base case:
  // if this === node, then...
  if (this === node) {
    return ancestorPath;
  }

  if (this.left) {
    let found = this.left.getAncestorPath(node, ancestorPath);
    // if found, then...
    if (found) {
      // ancestorPath.push(this);
      ancestorPath.push(this);
      return ancestorPath;
    }
  }

  // if node has a right child, then...
  if (this.right) {
    // found = this.right.getAncestorPath(node)
    let found = this.right.getAncestorPath(node, ancestorPath);
    // if found, then...
    if (found) {
      // ancestorPath.push(this)
      ancestorPath.push(this);
      return ancestorPath;
    }
  }
  return null;
};

Tree.prototype.exists = function(target) {
  // let right, left;
  // if (this === target) {
  //   return true;
  // }
  //
  // if (this.left) {
  //   left = this.left.exists(target);
  // }
  //
  // if (this.right) {
  //   right = this.right.exists(target);
  // }
  //
  // if (left || right) {
  //   return true;
  // }
  //
  // return false;
};

// Tree.prototype.exists = function (node, target) {
//   if (node === target) {
//     return true;
//   }
//
//   if (node === null) {
//     return false;
//   }
//
//   return this.exists(node.left, target) || this.exists(node.right, target);
// };

export const covers = (root, target) => {
  if (root === target) {
    return true;
  }

  if (root === null) {
    return false;
  }

  return covers(root.left, target) || covers(root.right, target);
};

Tree.prototype.DFSearch = function(value) {
  if (this.value === value) {
    return true;
  }

  if (this.left) {
    let left = this.left.DFSearch(value);
    if (left) {
      return true;
    }
  }

  if (this.right) {
    let right = this.right.DFSearch(value);
    if (right) {
      return true;
    }
  }

  return false;
};

Tree.prototype.BFSearch = function(value) {
  let queue = [];
  queue[0] = this;

  while (queue.length > 0) {
    let current = queue.shift();
    if (current.value === value) {
      return true;
    } else {
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  return false;
};

export default Tree;
