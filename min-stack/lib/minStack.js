const MinStack = function() {
  this.stack = [];
  this.min = [];
};

MinStack.prototype.push = function(value) {
  this.stack.push(value);
  if (this.min.length === 0 || value < this.min[this.min.length - 1]) {
    this.min.push(value);
  }
};

MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};

MinStack.prototype.pop = function() {
  let popped = this.stack.pop();
  if (popped === this.min[this.min.length - 1]) {
    this.min.pop();
  }
  return popped;
};

MinStack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
};

export default MinStack;
