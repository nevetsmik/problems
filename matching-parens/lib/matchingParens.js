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

export const matchingParens = (string, pos) => {
  // Use an array as a stack with push/pop
  const stack = [];

  // Iterate through the string
  for (let i = 0; i < string.length; i++) {
    const ltr = string[i];
    // If there is an open paren
    if (ltr === "(") {
      // Create a tuple of position number and open paren
      const tuple = [i, "("];
      // Push tuple onto a stack
      stack.push(tuple);
    }
    // If there is a closed paren
    if (ltr === ")") {
      // Pop the stack
      let poppedFromStack = stack.pop();
      // If the pos in the tuple equals the pos argument
      if (poppedFromStack[0] === pos) {
        // Return the pos in the loop
        return i;
      }
    }
  }
  // Return null
  return null;
};
