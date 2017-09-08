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

// Tree.prototype.balancedBinaryTree = function(){
//   // Store the leaf depth for all leaves
//   let leafDepths = [];
//
//   // Traverse tree while counting levels and push the level to leafDepths once a leaf is reached
//   const traverseTreeAndStoreLeafDepth = (node, level) => {
//     // if the node has no children, then...
//     if (!node.left && !node.right) {
//       // push the level to leafDepths
//       leafDepths.push(level);
//     }
//
//     // if the node has a left child, then...
//     if (node.left) {
//       // traverse (this.left, level + 1)
//       traverseTreeAndStoreLeafDepth(node.left, level + 1);
//     }
//
//     // if the node has a right child, then...
//     if (node.right) {
//       // traverse (this.right, level + 1)
//       traverseTreeAndStoreLeafDepth(node.right, level + 1);
//     }
//   };
//
//   traverseTreeAndStoreLeafDepth(this, 1);
//   // Sort the leaf depths
//   leafDepths = leafDepths.sort((a, b) => {
//     return a - b;
//   });
//   // If the difference between the min and the max is greater than 1, then
//   if (leafDepths[leafDepths.length - 1] -  leafDepths[0] > 1) {
//     // return false
//     return false;
//   } else {
//     // return true
//     return true;
//   }
// };

Tree.prototype.balancedBinaryTree = function(treeRoot) {
  // a tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
    return true;
  }

  var depths = []; // we short-circuit as soon as we find more than 2

  // nodes will store pairs of a node and the node's depth
  var nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {
    // pop a node and its depth from the top of our stack
    var nodePair = nodes.pop();
    var node = nodePair[0],
      depth = nodePair[1];

    // case: we found a leaf
    if (!node.left && !node.right) {
      // we only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // two ways we might now have an unbalanced tree:
        //   1) more than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (
          depths.length > 2 ||
          (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }

      // case: this isn't a leaf - keep stepping down
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
};

export default Tree;
