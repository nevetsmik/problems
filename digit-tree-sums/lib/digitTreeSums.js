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

export const digitTreeSums = t => {
  if (t === null) {
    return 0;
  }
  let treePath = allPaths(t);
  return treePath.map(Number).reduce((accum, curr) => accum + curr);
};

export const allPaths = (t, currPath = "", paths = []) => {
  currPath = currPath.concat(t.value);

  if (!t.left && !t.right) {
    paths.push(currPath);
  }

  if (t.left) {
    allPaths(t.left, currPath, paths);
    // currPath = currPath.slice(0, -1);
  }

  if (t.right) {
    allPaths(t.right, currPath, paths);
    // currPath = currPath.slice(0, -1);
  }

  return paths;
};

export default Node;
