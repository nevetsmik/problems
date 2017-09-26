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
