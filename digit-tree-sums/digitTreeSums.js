/*
Write a function that collects all the paths in a binary tree and sums of the result

Example:

        9
      /   \
    9      9
          / \
         1   3
  [99, 991, 993] = 2083
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

export const digitTreeSums = t => {
  if (t === null) {
    return 0;
  }
  let treePath = allPaths(t);
  console.log(treePath);
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
