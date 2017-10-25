/*
Given a tree, find the path to a target value.
*/

const Node = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
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

// export const pathToTargetSum = (node, target) => {
//   target -= node.value;
//   if (!node.left && !node.right) {
//     if (target === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//
//   let pathLeft, pathRight;
//   if (node.left) {
//     pathLeft = pathToTargetSum(node.left, target);
//     if (pathLeft) {
//       return true;
//     }
//   }
//   if (node.right) {
//     pathRight = pathToTargetSum(node.right, target);
//     if (pathRight) {
//       return true;
//     }
//   }
//
//   if (!pathLeft && !pathRight) {
//     return false;
//   } else {
//     return true;
//   }
// };

export const pathToTargetSum = (node, target) => {
  if (!node) {
    return target === 0;
  }

  target -= node.value;

  return (
    pathToTargetSum(node.left, target) || pathToTargetSum(node.right, target)
  );
};

export default Node;
