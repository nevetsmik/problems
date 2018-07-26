import MinStack from "./minStack";

const minStack = new MinStack();
minStack.push(-2); // stack = [-2]; min = [-2]
minStack.push(0); // stack = [-2, 0]; min = [-2]
minStack.push(-3); // stack = [-2, 0, -3]; min = [-2, -3]
console.log(minStack.getMin()); //--> Returns -3
console.log(minStack.pop()); //--> Returns -3; stack = [-2, 0]; min = [-2]
console.log(minStack.peek()); //--> Returns 0
console.log(minStack.getMin()); //--> Returns -2

window.minStack = minStack;
