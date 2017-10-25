/*
Use stacks to find keep track of the largest element.
*/

const Stack = function() {
  this.items = [];
};

Stack.prototype.push = function(value) {
  this.items.unshift(value);
};

Stack.prototype.pop = function() {
  if (this.items.length > 0) {
    return this.items.shift();
  } else {
    return null;
  }
};

Stack.prototype.peek = function() {
  if (!this.items.length) {
    return null;
  }
  return this.items[0];
};

const MaxStack = function() {
  this.items = new Stack();
  this.largestElement = new Stack();
};

MaxStack.prototype.getMax = function() {
  return this.largestElement.peek();
};

MaxStack.prototype.push = function(value) {
  this.items.push(value);
  if (value >= this.largestElement.peek()) {
    this.largestElement.push(value);
  } else {
    let temp = new Stack();
    while (value < this.largestElement.peek()) {
      temp.push(this.largestElement.pop());
    }
    this.largestElement(value);
    while (temp.peek()) {
      this.largestElement.push(temp.pop());
    }
  }
};

MaxStack.prototype.pop = function() {
  let popped = this.items.pop();
  if (this.largestElement.peek() === popped) {
    this.largestElement.pop();
  }
  return popped;
};

export default MaxStack;
