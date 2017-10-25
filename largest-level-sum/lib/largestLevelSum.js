/*
Find the level with the largest sum in a binary tree.
*/

export const largestLevelSum = tree => {
  let queue = [];
  queue[0] = [tree, 1];

  let levels = [];

  while (queue.length > 0) {
    let [node, level] = queue.shift();
    levels[level - 1] = levels[level - 1] + node.value || node.value;
    for (let i = 0; i < node.children.length; i++) {
      queue.push([node.children[i], level + 1]);
    }
  }

  let maxLevelSum = Math.max(...levels);
  return levels.indexOf(maxLevelSum) + 1;
  // return maxLevelSum;
};

const Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  let newNode = new Tree(value);
  this.children.push(newNode);
  return newNode;
};

export default Tree;
