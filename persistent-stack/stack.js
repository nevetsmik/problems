import Node from './node';

const Stack = function() {
  this.stack = null;
};

Stack.prototype.isEmpty = function() {
  return this.stack === null;
};

Stack.prototype.push = function(el) {
  let newNode = new Node(el, this.stack);
  this.stack = newNode;
};

Stack.prototype.pop = function() {
  let el = this.stack.el;
  this.stack = this.stack.next;
  return el;
};
