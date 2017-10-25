/*
Implement a queue with 2 stacks.
*/

const Stack = function() {
  this.stack = [];
};

Stack.prototype.push = function(value) {
  this.stack.push(value);
};

Stack.prototype.pop = function() {
  let poppedValue = this.stack.pop();
  return poppedValue;
};

const Queue = function() {
  this.enqueueStack = new Stack();
  this.dequeueStack = new Stack();
};

Queue.prototype.enqueue = function(value) {
  this.enqueueStack.push(value);
};

Queue.prototype.dequeue = function() {
  if (!this.enqueueStack.stack.length && !this.dequeueStack.stack.length) {
    return null;
  }

  if (this.dequeueStack.stack.length === 0) {
    while (this.enqueueStack.stack.length > 0) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
  }

  return this.dequeueStack.pop();
};

export default Queue;
