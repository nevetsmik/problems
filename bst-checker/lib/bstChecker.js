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

Tree.prototype.traverseDF = function(node, result = []) {
  if (node === null) {
    return result;
  }

  if (node.left) {
    result.concat(node.traverseDF(node.left, result));
  }

  result.push(node.value);

  if (node.right) {
    result.concat(node.traverseDF(node.right, result));
  }

  return result;
};

// Tree.prototype.bstChecker = function () {
//   // Traverse tree in-order DF adding node values to result array
//   let bstArray = this.traverseDF(this);
//   // Iterate thru the array to check if array values are in ascending order
//   for (let i = 0; i < bstArray.length - 1; i++) {
//     if (bstArray[i] > bstArray[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };

Tree.prototype.bstChecker = function(node, min, max) {
  if (node === null) {
    return true;
  }

  if (
    (min !== undefined && node.value < min) ||
    (max !== undefined && node.value > max)
  ) {
    return false;
  } else {
    return (
      this.bstChecker(node.left, min, node.value) &&
      this.bstChecker(node.right, node.value, max)
    );
  }

  // let left, right;
  // if (this.left) {
  //   left = this.left.bstChecker(this.min, this.value);
  // }
  //
  // if (this.right) {
  //   right = this.right.bstChecker(this.value, this.max);
  // }
  //
  // if ((left !== undefined && !left) || (right !== undefined && !right)) {
  //   // return this.left.bstChecker(this.min, this.value) && return this.right.bstChecker(this.value, this.max)
  //   return false;
  // }
  //
  // return true;
};

export default Tree;
