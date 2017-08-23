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

const Stack = function () {
  this.stack = [];
};

Stack.prototype.push = function (value) {
  this.stack.push(value);
};

Stack.prototype.pop = function () {
  let poppedValue = this.stack.pop();
  return poppedValue;
};

const Queue = function () {
  this.enqueueStack = new Stack();
  this.dequeueStack = new Stack();
};

Queue.prototype.enqueue = function (value) {
  this.enqueueStack.push(value);
};

Queue.prototype.dequeue = function () {
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
