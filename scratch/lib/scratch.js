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

// Definition for singly-linked list:

// const mixEvents = obj => {
//   let events = {};
//
//   obj.on = function(eventName, cb) {
//     events[eventName] = events[eventName] || [];
//     events[eventName].push(cb);
//   };
//
//   obj.trigger = function(event, ...params) {
//     events[event].forEach(cb => cb.apply(null, params));
//   };
//
//   return obj;
// };

export const exists = (tree, value) => {
  if (tree === null) {
    return false;
  }

  if (tree.value === value) {
    return true;
  }

  return exists(tree.left, value) || exists(tree.right, value);
};

export const findPath = (tree, target, path = []) => {
  if (target === tree.value) {
    path.push(tree);
    return path;
  }

  if (tree.left) {
    let result = findPath(tree.left, target, path);
    if (result) {
      path.push(tree);
      return path;
    }
  }

  if (tree.right) {
    let result = findPath(tree.right, target, path);
    if (result) {
      path.push(tree);
      return path;
    }
  }

  return null;
};

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

export default Node;
